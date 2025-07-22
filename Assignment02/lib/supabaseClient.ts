import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htuvbpvzvnetuawptylu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0dXZicHZ6dm5ldHVhd3B0eWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTQ1MTAsImV4cCI6MjA2ODY3MDUxMH0.KWoGHLPr2adq7fnWYjGFu6iqwxNoH91wJDEQCxywCgM';
export const supabase = createClient(supabaseUrl, supabaseKey);
