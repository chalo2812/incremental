import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import "../styles/global.css";

type TemplateData = {
  title: string;
  description: string;
  status: string;
  highlights: string[];
};

const projectTemplates: Record<string, Record<string, TemplateData>> = {
  "Proyecto X": {
    overview: {
      title: "Resumen de Proyecto X",
      description: "Análisis general del estado actual con métricas de avance y objetivos prioritarios.",
      status: "En marcha",
      highlights: [
        "Revisión semanal de entregables",
        "Asegurar comunicación con el equipo",
        "Priorizar hitos críticos"
      ]
    },
    tasks: {
      title: "Tareas de Proyecto X",
      description: "Lista de acciones pendientes para el sprint actual y la planificación de entregas.",
      status: "3 tareas urgentes",
      highlights: [
        "Finalizar presentación de la fase 1",
        "Verificar recursos de diseño",
        "Asignar responsable para cada entrega"
      ]
    },
    members: {
      title: "Miembros del equipo X",
      description: "Equipo principal asignado a Proyecto X con roles y estado de disponibilidad.",
      status: "5 colaboradores",
      highlights: [
        "Líder de proyecto: Ana",
        "Desarrollador principal: Marco",
        "Diseñadora UX: Laura"
      ]
    },
    files: {
      title: "Archivos asociados a Proyecto X",
      description: "Documentos clave, prototipos y recursos compartidos para el equipo.",
      status: "12 archivos activos",
      highlights: [
        "Resumen ejecutivo",
        "Plan de trabajo",
        "Galería de prototipos"
      ]
    },
    timeline: {
      title: "Timeline de Proyecto X",
      description: "Hitos próximos y fechas críticas para el seguimiento del avance.",
      status: "2 checkpoints esta semana",
      highlights: [
        "Demo interna: Miércoles",
        "Entrega parcial: Viernes",
        "Revisión final: Próximo martes"
      ]
    },
    settings: {
      title: "Configuración de Proyecto X",
      description: "Ajustes del proyecto, permisos y opciones de personalización.",
      status: "Ajustes disponibles",
      highlights: [
        "Control de accesos",
        "Notificaciones activadas",
        "Plantillas de reporte"
      ]
    }
  },
  "Proyecto Aurora": {
    overview: {
      title: "Resumen de Proyecto Aurora",
      description: "Estado del proyecto orientado a innovación y diseño de experiencias.",
      status: "Preparación",
      highlights: [
        "Reunión de kick-off completada",
        "Propuesta de alcance validada",
        "Definir roadmap de diseño"
      ]
    },
    tasks: {
      title: "Tareas de Proyecto Aurora",
      description: "Acciones clave para la fase de descubrimiento y validación.",
      status: "5 tareas abiertas",
      highlights: [
        "Investigar usuarios",
        "Prototipar flujo principal",
        "Revisar feedback con stakeholders"
      ]
    },
    members: {
      title: "Miembros del equipo Aurora",
      description: "Participantes activos en la etapa de diseño y pruebas.",
      status: "Equipo multidisciplinario",
      highlights: [
        "Investigadora: Marta",
        "Product Owner: Leo",
        "Frontend: Carla"
      ]
    },
    files: {
      title: "Archivos de Proyecto Aurora",
      description: "Recursos y entregables de diseño que guían el proyecto.",
      status: "6 documentos clave",
      highlights: [
        "Mapa de experiencia",
        "Wireframes iniciales",
        "Reporte de hallazgos"
      ]
    },
    timeline: {
      title: "Timeline de Proyecto Aurora",
      description: "Etapas previstas para validar el producto y preparar la versión piloto.",
      status: "En planificación",
      highlights: [
        "Validación de prototipo: jueves",
        "Ajustes de UX: próxima semana",
        "Presentación interna: 20 de abril"
      ]
    },
    settings: {
      title: "Configuración de Proyecto Aurora",
      description: "Preferencias específicas para el seguimiento de este proyecto.",
      status: "Opciones listas",
      highlights: [
        "Definir responsables",
        "Ajustar notificaciones",
        "Sincronizar con calendario"
      ]
    }
  },
  "Proyecto Beta": {
    overview: {
      title: "Resumen de Proyecto Beta",
      description: "Visión rápida del plan de lanzamiento y pruebas de la versión Beta.",
      status: "En revisión",
      highlights: [
        "Fase de QA en curso",
        "Recolección de feedback",
        "Ajustes de última hora"
      ]
    },
    tasks: {
      title: "Tareas de Proyecto Beta",
      description: "Actividades pendientes relacionadas con pruebas y documentación.",
      status: "7 tareas en cola",
      highlights: [
        "Corregir bugs críticos",
        "Actualizar documentación",
        "Realizar pruebas de usuario"
      ]
    },
    members: {
      title: "Miembros de Proyecto Beta",
      description: "Equipo de implementación y control de calidad.",
      status: "4 miembros activos",
      highlights: [
        "QA Lead: Diego",
        "Backend: Isabel",
        "Frontend: Paula"
      ]
    },
    files: {
      title: "Archivos de Proyecto Beta",
      description: "Versiones de prueba, reportes y guías internas.",
      status: "8 archivos actualizados",
      highlights: [
        "Checklist de pruebas",
        "Reporte de errores",
        "Guía de despliegue"
      ]
    },
    timeline: {
      title: "Timeline de Proyecto Beta",
      description: "Calendario de pruebas y fechas de revisión para la fase Beta.",
      status: "Semanal",
      highlights: [
        "Sesión de prueba: lunes",
        "Análisis de resultados: jueves",
        "Ajustes finales: viernes"
      ]
    },
    settings: {
      title: "Configuración de Proyecto Beta",
      description: "Ajustes de seguimiento, permisos y estado de pruebas.",
      status: "Requiere revisión",
      highlights: [
        "Permisos de acceso",
        "Alertas configuradas",
        "Sincronización de tareas"
      ]
    }
  }
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [project, setProject] = useState("Proyecto X");
  const activeTemplate = projectTemplates[project][activeSection];

  return (
    <div className="dashboard-root">
      <Topbar project={project} onProjectChange={setProject} />
      <div className="dashboard-wrapper">
        <Sidebar onSectionChange={setActiveSection} activeSection={activeSection} />
        <main className="main-panel">
          <div className="section-card">
            <div className="section-header">
              <h2>{activeTemplate.title}</h2>
              <span className="status-badge">{activeTemplate.status}</span>
            </div>
            <p>{activeTemplate.description}</p>
            <ul className="section-highlights">
              {activeTemplate.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
