import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const sb = createClient(
  'https://uszproephgsmnvipkhcn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzenByb2VwaGdzbW52aXBraGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MzM2NjcsImV4cCI6MjA4OTIwOTY2N30.03GDU49oL4sqSpxHT0wmmMPgHgQqapwJamrstXI3VFM'
);

export const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const DAYS_SH = ['S','M','T','W','T','F','S'];
export const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const AV_COLORS = ['av-tan','av-sage','av-rose','av-gold','av-slate'];
export const GI_COLORS = ['gi-tan','gi-sage','gi-rose','gi-gold','gi-slate'];
export const PIP_C = {'av-tan':'#C4956A','av-sage':'#8E9B7A','av-rose':'#D4B8AE','av-gold':'#B08040','av-slate':'#7A8AAA'};
