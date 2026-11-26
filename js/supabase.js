// Supabase connection for Craftwear by Nina.
// The publishable key is intended for browser use. Never put a secret key here.
(() => {
  const SUPABASE_URL = "https://rdumxdqrfdnofmqhomkx.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3WURXx4nwtmph0UMTxIAbg_THXwWHdG";

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.error("Supabase library did not load.");
    return;
  }

  window.ninaSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
})();
