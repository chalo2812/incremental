import React from "react";
import { FiBarChart2, FiCheckSquare, FiUsers, FiFileText, FiClock, FiSettings } from "react-icons/fi";
import "./Sidebar.css";

type SidebarProps = {
  onSectionChange: (section: string) => void;
  activeSection: string;
};

const sections = [
  { key: "overview", label: "Resumen", icon: FiBarChart2 },
  { key: "tasks", label: "Tareas", icon: FiCheckSquare },
  { key: "members", label: "Miembros", icon: FiUsers },
  { key: "files", label: "Archivos", icon: FiFileText },
  { key: "timeline", label: "Timeline", icon: FiClock },
  { key: "settings", label: "Configuración", icon: FiSettings },
];

export default function Sidebar({ onSectionChange, activeSection }: SidebarProps) {
  return (
    <nav className="sidebar">
      <h2>Gestión de Obra</h2>
      <ul>
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <li
              key={sec.key}
              className={activeSection === sec.key ? "active" : ""}
              onClick={() => onSectionChange(sec.key)}
            >
              <Icon className="sidebar-icon" />
              {sec.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
