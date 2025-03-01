import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mlsijgefpqjqankmdfsq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sc2lqZ2VmcHFqcWFua21kZnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2OTYzMTYsImV4cCI6MjA1NjI3MjMxNn0.HmkGx3b-UC7CH50wKrE_0GwB2c4zH_vBmv9bzPnhyZM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// const supabaseUrl = "https://mlsijgefpqjqankmdfsq.supabase.co";
