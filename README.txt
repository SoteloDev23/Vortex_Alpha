# README - Vórtice en el Vacío 🌌

Un efecto visual hipnótico creado con HTML5 Canvas que simula un vórtice de partículas alfanuméricas pulsantes.

Este archivo fue pensado para usarse con Lively Wallpaper.

## Características ✨
- Efecto de vórtice 2D con pulsación rítmica
- Partículas alfanuméricas (letras) en lugar de puntos
- Colores en tonos azules y púrpuras
- Diseño responsive que se adapta a cualquier pantalla
- Animación suave con requestAnimationFrame

## Configuraciones Personalizables ⚙️

Puedes modificar estos parámetros en el archivo `vortex.js`:

### Configuración Básica del Vórtice
```javascript
const vortex = {
    baseRadius: 1,           // Radio base del vórtice
    pulseRange: 500,         // Rango de expansión/contracción
    pulseSpeed: 0.05,        // Velocidad de pulsación (recomendado 0.01-0.1)
    rotationSpeed: 0.5,      // Velocidad base de rotación
    // ... otros parámetros
};
```

### Configuración de Partículas
```javascript
// En el bucle de inicialización de partículas:
{
    size: 6 + Math.random() * 8,         // Tamaño de fuente (px)
    speed: (0.015 + Math.random() * 0.025), // Velocidad de rotación
    hue: 100 + Math.random() * 40,       // Rango de color (HSLA)
    // ... otros parámetros
}
```

### Personalización Avanzada
1. **Cambiar caracteres**: Modifica `numChars` para usar diferentes símbolos
   ```javascript
   const numChars = '01☯✵✺❂'; // Ejemplo con símbolos
   ```

2. **Efecto de color**:
   ```javascript
   // Para un vórtice rojo/anaranjado:
   hue: 10 + Math.random() * 30
   ```

3. **Cantidad de partículas**: Cambia el valor en el bucle `for` (actualmente 150)

4. **Estilo de fuente**:
   ```javascript
   ctx.font = `${size}px 'Courier New', monospace`; // Puedes cambiar la fuente
   ```

## Cómo Usar 🚀
1. Clona el repositorio o descarga los archivos.
2. Crea un nuevo fondo de pantalla en Lively Wallpaper.
3. Abre `index.html`.
## Requisitos 📋
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- No se requieren dependencias

## Ejemplos de Configuraciones 🌈

### Vórtice Cálido (rojos/amarillos)
```javascript
hue: 30 + Math.random() * 40,  // Rango amarillo-rojo
numChars = '✦✧♡♥♦♣♠★☀';        // Símbolos especiales
pulseSpeed: 0.08               // Pulsación más rápida
```

### Vórtice Minimalista
```javascript
particlesCount: 50,            // Menos partículas
size: 4 + Math.random() * 4,   // Tamaño más pequeño
pulseRange: 200                // Menos expansión
```

## Contribuciones 🤝
¡Las contribuciones son bienvenidas! Algunas ideas:
- [ ] Añadir controles interactivos
- [ ] Implementar modo oscuro/claro
- [ ] Crear patrones de pulsación más complejos

---

✨ **Tip**: Prueba cambiar `pulseSpeed` y `rotationSpeed` para crear diferentes efectos hipnóticos. Los valores más bajos crean un efecto más relajante, mientras que los altos son más energéticos.