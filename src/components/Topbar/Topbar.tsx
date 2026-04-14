import React from "react";
import { FiLayers, FiUser } from "react-icons/fi";
import "./Topbar.css";

type TopbarProps = {
  project: string;
  onProjectChange: (project: string) => void;
  username: string;
  onLogout: () => void;
};

const projects = ["Represa Alto Verde", "Represa Laguna Azul", "Represa Boca del Río"];

export default function Topbar({ project, onProjectChange, username, onLogout }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <FiLayers className="topbar-icon" />
        <div>
          <div className="topbar-title">Gestión de Represas</div>
          <strong>{project}</strong>
        </div>
      </div>
      <div className="topbar-right">
        <select
          className="project-selector"
          value={project}
          onChange={(event) => onProjectChange(event.target.value)}
        >
          {projects.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="user-info">
          <FiUser className="user-icon" /> {username}
        </div>
        <button type="button" className="logout-button" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
