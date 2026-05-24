import React, { useState } from "react";

type LoginProps = {
  onLogin: (username: string) => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username.trim() || !password.trim()) return;
    onLogin(username.trim());
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <span>🏗️</span>
          <div>
            <h1>Obra Represas</h1>
            <p>Acceso seguro al dashboard de gestión.</p>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Usuario
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
