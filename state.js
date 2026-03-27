// ── SHARED STATE ─────────────────────────────────────────────
export const S = {
  session: null, profile: null, studentRecord: null,
  tab: 'overview', modal: null, detailId: null, groupDetailId: null,
  calY: new Date().getFullYear(), calM: new Date().getMonth(),
  selectedMemberIds: [], freeSessionIds: [], uploadProgress: 0,
  students: [], sessions: [], payments: [], groups: [], groupMembers: [], videos: [],
  loading: true
};

// ── HELPERS ──────────────────────────────────────────────────
import { MONTHS } from './supabase.js';

export const ini = n => (n||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
export const fmtD = d => { const[y,m,dy]=d.split('-'); return`${MONTHS[+m-1].slice(0,3)} ${+dy}, ${y}`; };
export const fmtM = n => '$'+(+n||0).toFixed(2);
export const todayStr = () => new Date().toISOString().slice(0,10);

export function showToast(msg, dur=2500){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), dur);
}

export function fees(sid){
  const sess = S.sessions.filter(s=>s.student_id===sid);
  const earned = sess.reduce((a,s)=>a+(+s.fee||0),0);
  const paid = S.payments.filter(p=>p.student_id===sid).reduce((a,p)=>a+(+p.amount||0),0);
  return { earned, paid, due: earned-paid, sess };
}

export function groupFees(gid){
  const memberIds = S.groupMembers.filter(m=>m.group_id===gid).map(m=>m.student_id);
  return memberIds.reduce((acc,sid)=>{
    const f = fees(sid);
    return { earned:acc.earned+f.earned, paid:acc.paid+f.paid, due:acc.due+f.due };
  }, {earned:0, paid:0, due:0});
}

export function groupMembers(gid){
  const ids = S.groupMembers.filter(m=>m.group_id===gid).map(m=>m.student_id);
  return S.students.filter(s=>ids.includes(s.id));
}

export function studentGroups(sid){
  const gids = S.groupMembers.filter(m=>m.student_id===sid).map(m=>m.group_id);
  return S.groups.filter(g=>gids.includes(g.id));
}

export function byDate(){
  const m = {};
  S.sessions.forEach(s=>(m[s.date]=m[s.date]||[]).push(s));
  return m;
}
