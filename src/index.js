import './index.css';

function init() {
    const app = document.getElementById('app') || document.body;
    const welcomeMessage = document.createElement('div');
    welcomeMessage.innerHTML = `
        <div style="divIndex"><h1 style="color: blue; text-align:center;">🚀 Proyecto por Vercel Evolutivo Activo</h1><p>Webpack configurado correctamente con pnpm</p>
        <p><small>Listo para desarrollo evolutivo en Vercel</small></p>
        </div>`;    
    app.appendChild(welcomeMessage);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

if (module.hot) {
    module.hot.accept();
}