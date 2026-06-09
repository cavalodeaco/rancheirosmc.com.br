import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://loddxriznoxdexdgyozs.supabase.co";
const supabaseKey = "sb_publishable_14hoAqVDcJi167I1J6xOGg_U-_aMAUS";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);