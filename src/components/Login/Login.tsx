import React, { useState } from "react";
import "./Login.css";

type LoginProps = {
  onLogin: (username: string) => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [recoveryMode, setRecoveryMode] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Ingresa usuario y contraseña para continuar.");
      setMessage("");
      return;
    }

    setError("");
    setMessage("");
    onLogin(username.trim());
  }

  function handleRecovery(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!recoveryEmail.trim()) {
      setError("Ingresá tu email para recuperar la contraseña.");
      setMessage("");
      return;
    }

    setError("");
    setMessage(`Si el correo ${recoveryEmail.trim()} existe en el sistema, recibirás un enlace de recuperación.`);
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

        {!recoveryMode ? (
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
            {error && <div className="login-error">{error}</div>}
            {message && <div className="login-message">{message}</div>}
            <button type="submit">Entrar</button>
            <button
              type="button"
              className="login-link"
              onClick={() => {
                setRecoveryMode(true);
                setError("");
                setMessage("");
              }}
            >
              Recuperar contraseña
            </button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleRecovery}>
            <label>
              Email de recuperación
              <input
                type="email"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                placeholder="tu@empresa.com"
              />
            </label>
            {error && <div className="login-error">{error}</div>}
            {message && <div className="login-message">{message}</div>}
            <button type="submit">Enviar enlace</button>
            <button
              type="button"
              className="login-link"
              onClick={() => {
                setRecoveryMode(false);
                setError("");
                setMessage("");
              }}
            >
              Volver al login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
