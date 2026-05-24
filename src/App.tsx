import React, { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null);
    });
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (!user) {
    return <Login onLogin={() => window.location.reload()} />;
  }

  return <Dashboard />;
}

export default App;
