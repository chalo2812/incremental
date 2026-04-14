import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import "../styles/global.css";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="dashboard-root">
      <Topbar />
      <div className="dashboard-wrapper">
        <Sidebar onSectionChange={setActiveSection} activeSection={activeSection} />
        <main className="main-panel">
          {activeSection === "overview" && <section><h2>Resumen</h2><p>Bienvenido al dashboard del proyecto. Aquí verás estadísticas y resumen del progreso.</p></section>}
          {activeSection === "tasks" && <section><h2>Tareas</h2><p>Gestión y asignación de tareas del proyecto.</p></section>}
          {activeSection === "members" && <section><h2>Miembros</h2><p>Miembros del equipo de trabajo.</p></section>}
          {activeSection === "files" && <section><h2>Archivos</h2><p>Archivos adjuntos y recursos del proyecto.</p></section>}
          {activeSection === "timeline" && <section><h2>Timeline</h2><p>Línea de tiempo y actividad reciente.</p></section>}
          {activeSection === "settings" && <section><h2>Configuración</h2><p>Preferencias y ajustes del proyecto.</p></section>}
        </main>
      </div>
    </div>
  );
}
