const canvas = document.getElementById('vortexCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuración del vórtice
const vortex = {
    center: { x: canvas.width/2, y: canvas.height/2 },
    baseRadius: 1,
    pulseRange: 500,
    pulseSpeed: 0.05,
    rotationSpeed: 0.5,
    currentPulsePhase: 0,
    particles: [1000]
};

// Caracteres numéricos
const numChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Inicializar partículas (150 números)
for (let i = 0; i < 150; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * (vortex.baseRadius + vortex.pulseRange) * 0.7;
    
    vortex.particles.push({
        angle: angle,
        baseDistance: distance,
        char: numChars[Math.floor(Math.random() * numChars.length)],
        size: 6 + Math.random() * 8,
        speed: (0.015 + Math.random() * 0.025) * (1 - distance/(vortex.baseRadius + vortex.pulseRange)),
        hue: 100 + Math.random() * 40 // Azules a púrpuras
    });
}

function animate() {
    // Fondo negro sólido (sin transparencia)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    
    // Actualizar fase de pulsación
    vortex.currentPulsePhase += vortex.pulseSpeed;
    const currentRadius = vortex.baseRadius + Math.sin(vortex.currentPulsePhase) * vortex.pulseRange;
    
    // Dibujar partículas
    vortex.particles.forEach(p => {
        p.angle += p.speed;
        
        // Pulsación radial individualizada
        const pulseFactor = 0.6 + 0.4 * Math.sin(vortex.currentPulsePhase * 1.5 + p.baseDistance * 0.2);
        const x = vortex.center.x + Math.cos(p.angle) * p.baseDistance * pulseFactor;
        const y = vortex.center.y + Math.sin(p.angle) * p.baseDistance * pulseFactor;
        
        // Tamaño y opacidad dinámicos
        const size = p.size * (0.7 + 0.3 * pulseFactor);
        const opacity = 0.7 + 0.3 * Math.sin(Date.now() * 0.003 + p.baseDistance);
        
        // Dibujar número
        ctx.font = `${size}px 'Courier New', monospace`;
        ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${opacity})`;
        ctx.fillText(p.char, x, y);
    });
    
    requestAnimationFrame(animate);
}

// Iniciar animación
animate();

// Redimensionamiento responsive
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    vortex.center.x = canvas.width / 2;
    vortex.center.y = canvas.height / 2;
});