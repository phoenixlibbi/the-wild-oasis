import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ccmtoivtsnrqaawmxmzf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjbXRvaXZ0c25ycWFhd214bXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxOTk1NzksImV4cCI6MjAyODc3NTU3OX0.n-mWLuUIfn3VL_6gIjlLgnR23d5dsU4YJDmegVui7-E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
