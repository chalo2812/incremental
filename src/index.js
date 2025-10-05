import './index.css';

// Función principal de inicialización
function init() {
    const app = document.getElementById('app') || document.body;
    
    // Crear contenido dinámico
    const welcomeMessage = document.createElement('div');
    welcomeMessage.innerHTML = `
        <div style="divIndex">
            <h2>🚀 Proyecto por Vercel Evolutivo Activo</h2>
            <p>Webpack configurado correctamente con pnpm</p>
            <p><small>Listo para desarrollo evolutivo en Vercel</small></p>
        </div>
    `;
    
    app.appendChild(welcomeMessage);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Hot Module Replacement para desarrollo
if (module.hot) {
    module.hot.accept();
}