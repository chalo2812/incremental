import React, { useState } from "react";
import Login from "./src/components/Login/Login";
import Dashboard from "./src/pages/Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  function handleLogin(username: string) {
    setCurrentUser(username);
  }

  function handleLogout() {
    setCurrentUser(null);
  }

  return currentUser ? (
    <Dashboard username={currentUser} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export default App
