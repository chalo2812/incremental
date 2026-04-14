import React from "react";
import { FiLayers, FiUser } from "react-icons/fi";
import "./Topbar.css";

type TopbarProps = {
  project: string;
  onProjectChange: (project: string) => void;
};

const projects = ["Proyecto X", "Proyecto Aurora", "Proyecto Beta"];

export default function Topbar({ project, onProjectChange }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <FiLayers className="topbar-icon" />
        <div>
          <div className="topbar-title">Dashboard</div>
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
          <FiUser className="user-icon" /> Usuario
        </div>
      </div>
    </header>
  );
}
