import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_SERVICE_KEY } from "./config";

export const client = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);