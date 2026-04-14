import React from "react";
import "./Sidebar.css";

export default function Sidebar({ onSectionChange, activeSection }) {
  const sections = [
    { key: "overview", label: "Resumen" },
    { key: "tasks", label: "Tareas" },
    { key: "members", label: "Miembros" },
    { key: "files", label: "Archivos" },
    { key: "timeline", label: "Timeline" },
    { key: "settings", label: "Configuración" },
  ];
  return (
    <nav className="sidebar">
      <h2>Proyecto X</h2>
      <ul>
        {sections.map(sec => (
          <li
            key={sec.key}
            className={activeSection === sec.key ? "active" : ""}
            onClick={() => onSectionChange(sec.key)}
          >
            {sec.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
