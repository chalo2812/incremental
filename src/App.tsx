import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

type User = string | null;

function App() {
  const [currentUser, setCurrentUser] = useState<User>(null);

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

export default App;
