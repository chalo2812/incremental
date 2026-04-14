import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import { fetchXlsAsJson } from "../utils/excel";
import "../styles/global.css";

type TemplateData = {
  title: string;
  description: string;
  status: string;
  highlights: string[];
};

type SheetData = {
  name: string;
  rows: Record<string, unknown>[];
};

type ExcelData = {
  sheetNames: string[];
  sheets: SheetData[];
};

const defaultExcelUrl = "https://example.com/represa-datos.xlsx";

const projectTemplates: Record<string, Record<string, TemplateData>> = {
  "Represa Alto Verde": {
    overview: {
      title: "Resumen de Obra - Alto Verde",
      description: "Control del avance en excavaciones, hormigonado y preparación de taludes para la represa.",
      status: "Fase de terraplén",
      highlights: [
        "Revisión de volumetría de la presa",
        "Control de calidad del hormigón",
        "Coordinación con el equipo de geotecnia"
      ]
    },
    tasks: {
      title: "Tareas de Obra - Alto Verde",
      description: "Checklist de tareas de construcción, seguridad y provisión de materiales para la represa.",
      status: "4 tareas críticas",
      highlights: [
        "Garantizar suministro de áridos y cemento",
        "Instalar drenajes de coronamiento",
        "Supervisar montaje de encofrados"
      ]
    },
    members: {
      title: "Equipo de Obra - Alto Verde",
      description: "Roles clave en ingeniería civil, medio ambiente y construcción de la represa.",
      status: "7 profesionales activos",
      highlights: [
        "Jefe de Obra: Carlos",
        "Ingeniero Civil: Sofía",
        "Responsable HSE: Martín"
      ]
    },
    files: {
      title: "Documentación - Alto Verde",
      description: "Planos estructurales, memoria de cálculo y permisos ambientales de la represa.",
      status: "18 documentos vigentes",
      highlights: [
        "Informe geotécnico",
        "Plan de gestión ambiental",
        "Planos de alzado y secciones"
      ]
    },
    timeline: {
      title: "Cronograma - Alto Verde",
      description: "Fechas clave de desviación de cauce, armado de túneles y pruebas de compuertas.",
      status: "2 hitos esta quincena",
      highlights: [
        "Desvío de río: 10 de mayo",
        "Hormigonado cúpula: 18 de mayo",
        "Prueba de hermeticidad: 30 de mayo"
      ]
    },
    settings: {
      title: "Ajustes de Obra - Alto Verde",
      description: "Configuración de permisos, seguridad en obra y controles de gestión para la represa.",
      status: "Revisión de protocolos",
      highlights: [
        "Inspección HSE programada",
        "Actualización de seguros",
        "Control de accesos de contratistas"
      ]
    }
  },
  "Represa Laguna Azul": {
    overview: {
      title: "Resumen de Obra - Laguna Azul",
      description: "Seguimiento del avance de pilotes, estructuras de contención y cámaras de servicio.",
      status: "Etapa de pilotes",
      highlights: [
        "Monitoreo de asentamientos",
        "Control de calidad en pilotes",
        "Revisión de obras provisionales"
      ]
    },
    tasks: {
      title: "Tareas de Obra - Laguna Azul",
      description: "Asignación de actividades para hormigonado, tendido de tuberías y geotecnia.",
      status: "6 tareas abiertas",
      highlights: [
        "Finalizar pilotes de fundación",
        "Instalar cámaras de drenaje",
        "Revisar plan de desvío temporal"
      ]
    },
    members: {
      title: "Equipo de Obra - Laguna Azul",
      description: "Integrantes responsables de ejecución, topografía y coordinación de contratistas.",
      status: "8 integrantes activos",
      highlights: [
        "Topógrafo: Elena",
        "Jefe de hydraulica: Pedro",
        "Coordinador de contratistas: Juana"
      ]
    },
    files: {
      title: "Documentación - Laguna Azul",
      description: "Registros de ensayos, certificados de materiales y autorizaciones de cuenca.",
      status: "14 archivos críticos",
      highlights: [
        "Certificados de hormigón",
        "Memoria de cálculo hidráulico",
        "Permiso de uso de agua"
      ]
    },
    timeline: {
      title: "Cronograma - Laguna Azul",
      description: "Avances planificados para obras de desvío, pilotes y montaje de estructuras.",
      status: "Entregas semanales",
      highlights: [
        "Final de pilotes: 22 de mayo",
        "Montaje de compuertas: 5 de junio",
        "Inspección ambiental: 12 de junio"
      ]
    },
    settings: {
      title: "Ajustes de Obra - Laguna Azul",
      description: "Configuración de acceso a obra, seguridad y protocolos de control de calidad.",
      status: "Protocolos activos",
      highlights: [
        "Checklists de seguridad actualizados",
        "Autorización de pruebas de carga",
        "Plan de contingencia hídrica"
      ]
    }
  },
  "Represa Boca del Río": {
    overview: {
      title: "Resumen de Obra - Boca del Río",
      description: "Evaluación de progreso en excavaciones, muros de contención y estructuras hidráulicas.",
      status: "Fase de muros",
      highlights: [
        "Monitoreo de estabilidad de taludes",
        "Revisión de calidad de material compactado",
        "Control de flujo en el canal de desvío"
      ]
    },
    tasks: {
      title: "Tareas de Obra - Boca del Río",
      description: "Puntos de acción para el avance de estructuras, control ambiental y seguridad.",
      status: "5 tareas prioritarias",
      highlights: [
        "Ejecutar sellado de juntas",
        "Verificar anclajes de muros",
        "Actualizar bitácora de obra"
      ]
    },
    members: {
      title: "Equipo de Obra - Boca del Río",
      description: "Responsables de obra, ingeniera estructural y supervisión de seguridad.",
      status: "6 profesionales en obra",
      highlights: [
        "Jefa de Obra: Lucía",
        "Ingeniero Estructural: Javier",
        "Supervisor de Seguridad: Andrés"
      ]
    },
    files: {
      title: "Documentación - Boca del Río",
      description: "Informes de avance, planos ejecutivos y permisos de impacto ambiental.",
      status: "20 documentos activos",
      highlights: [
        "Plan de gestión de taludes",
        "Informe de ensayos de suelo",
        "Permiso de vertido controlado"
      ]
    },
    timeline: {
      title: "Cronograma - Boca del Río",
      description: "Fechas clave para finalizar estructuras y comenzar las pruebas hidráulicas.",
      status: "3 hitos en el próximo mes",
      highlights: [
        "Cierre de compuertas: 8 de junio",
        "Prueba de estanqueidad: 15 de junio",
        "Evaluación final: 24 de junio"
      ]
    },
    settings: {
      title: "Ajustes de Obra - Boca del Río",
      description: "Configuración de permisos, controles y seguridad asociados a la represa.",
      status: "Inspección en curso",
      highlights: [
        "Actualización de protocolos de seguridad",
        "Revisión de permisos de explotación",
        "Coordinación de logística de materiales"
      ]
    }
  }
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [project, setProject] = useState("Represa Alto Verde");
  const [excelUrl, setExcelUrl] = useState(defaultExcelUrl);
  const [excelData, setExcelData] = useState<ExcelData | null>(null);
  const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);
  const [loadingExcel, setLoadingExcel] = useState(false);
  const [excelError, setExcelError] = useState("");
  const [showExcelControls, setShowExcelControls] = useState(false);
  const activeTemplate = projectTemplates[project][activeSection];

  async function handleLoadExcel() {
    setLoadingExcel(true);
    setExcelError("");

    try {
      const data = await fetchXlsAsJson(excelUrl);
      setExcelData(data);
      setSelectedSheetIndex(0);
    } catch (error: unknown) {
      setExcelError(error instanceof Error ? error.message : "Error cargando Excel");
      setExcelData(null);
    } finally {
      setLoadingExcel(false);
    }
  }

  return (
    <div className="dashboard-root">
      <Topbar project={project} onProjectChange={setProject} />
      <div className="dashboard-wrapper">
        <Sidebar onSectionChange={setActiveSection} activeSection={activeSection} />
        <main className="main-panel">
          <div className={`excel-panel ${showExcelControls ? "expanded" : "collapsed"}`}>
            <div className="excel-panel-header">
              <div className="excel-title">Excel remoto</div>
              <button
                type="button"
                className="excel-toggle"
                onClick={() => setShowExcelControls((prev) => !prev)}
              >
                {showExcelControls ? "Cerrar" : "Cargar XLS"}
              </button>
            </div>

            {showExcelControls && (
              <>
                <div className="excel-controls">
                  <input
                    value={excelUrl}
                    onChange={(e) => setExcelUrl(e.target.value)}
                    placeholder="URL del archivo XLS/XLSX"
                  />
                  <button type="button" onClick={handleLoadExcel} disabled={loadingExcel}>
                    {loadingExcel ? "Cargando..." : "Cargar Excel remoto"}
                  </button>
                </div>

                <div className="excel-summary">
                  <p>Url de origen: <strong>{excelUrl}</strong></p>
                  {excelError && <p className="excel-error">{excelError}</p>}
                  {excelData && (
                    <div className="excel-sheet-selector">
                      <span>Hoja:</span>
                      <select
                        className="project-selector"
                        value={selectedSheetIndex}
                        onChange={(e) => setSelectedSheetIndex(Number(e.target.value))}
                      >
                        {excelData.sheetNames.map((name, index) => (
                          <option key={name} value={index}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {excelData && excelData.sheets[selectedSheetIndex] && (
                  <div className="excel-table-wrap">
                    <table className="excel-table">
                      <thead>
                        <tr>
                          {Object.keys(excelData.sheets[selectedSheetIndex].rows[0] || {}).map((header) => (
                            <th key={header}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {excelData.sheets[selectedSheetIndex].rows.slice(0, 6).map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {Object.keys(row).map((header) => (
                              <td key={`${rowIndex}-${header}`}>{String(row[header] ?? "")}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="excel-note">Vista previa de los primeros 6 registros.</p>
                  </div>
                )}
              </>
            )}
          </div>

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
