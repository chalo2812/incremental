import React from "react";
import {
  FiCheckSquare, FiUsers, FiFileText, FiClock, FiSettings,
} from "react-icons/fi";
import type { TemplateData } from "../data/projectTemplates";

type SectionPageProps = {
  section: string;
  template: TemplateData;
};

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  tasks: FiCheckSquare,
  members: FiUsers,
  files: FiFileText,
  timeline: FiClock,
  settings: FiSettings,
};

const sectionLabels: Record<string, string> = {
  tasks: "Tareas",
  members: "Miembros",
  files: "Archivos",
  timeline: "Cronograma",
  settings: "Configuración",
};

export default function SectionPage({ section, template }: SectionPageProps) {
  const Icon = sectionIcons[section] || FiSettings;
  const label = sectionLabels[section] || section;

  return (
    <div className="section-page">
      <div className="section-page-header">
        <div className="section-page-title-row">
          <Icon className="section-page-icon" />
          <div>
            <h2>{template.title}</h2>
            <p className="section-page-desc">{template.description}</p>
          </div>
        </div>
        <span className="status-badge">{template.status}</span>
      </div>

      <div className="section-card">
        <div className="section-card-header">
          <FiCheckSquare className="section-card-icon" />
          <h3>Detalles de {label}</h3>
        </div>
        <ul className="section-highlights">
          {template.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
