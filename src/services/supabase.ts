import "react-native-url-polyfill/auto"

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "https://pviluakerhwcaxnvufvw.supabase.co"
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2aWx1YWtlcmh3Y2F4bnZ1ZnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NjU2MDQsImV4cCI6MjAyNTM0MTYwNH0.DpIkUhMJq7LpdewYam2nawhzTVkJ5-NVndLfSyfstro"


export const supabase = createClient(supabaseUrl, supabaseKey)