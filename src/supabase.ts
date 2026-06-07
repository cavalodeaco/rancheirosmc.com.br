import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://loddxriznoxdexdgyozs.supabase.co";
const supabaseKey = "https://loddxriznoxdexdgyozs.supabase.co";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);