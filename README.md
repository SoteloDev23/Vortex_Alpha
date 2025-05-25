# 🌌 Vórtice en el Vacío

Un efecto visual **hipnótico** creado con **HTML5 Canvas**, simulando un vórtice de partículas alfanuméricas pulsantes.  
Ideal para usar como fondo animado en **Lively Wallpaper**.

---

## ✨ Características

- 🌪️ Efecto de vórtice 2D con pulsación rítmica  
- 🔠 Partículas alfanuméricas (letras y símbolos)  
- 🎨 Colores vibrantes en tonos azules y púrpuras  
- 📱 Diseño responsive adaptable a cualquier pantalla  
- 🚀 Animación fluida con `requestAnimationFrame`

---

## ⚙️ Configuraciones Personalizables

Puedes modificar los siguientes parámetros en el archivo `vortex.js` para adaptar el vórtice a tu estilo:

### 🎯 Configuración Básica del Vórtice

```javascript
const vortex = {
    baseRadius: 1,             // Radio base del vórtice
    pulseRange: 500,           // Amplitud de expansión/contracción
    pulseSpeed: 0.05,          // Velocidad de pulsación (0.01 - 0.1 recomendado)
    rotationSpeed: 0.5,        // Velocidad de rotación
    // ...otros parámetros
};
```

### ✴️ Configuración de Partículas

```javascript
{
    size: 6 + Math.random() * 8,           // Tamaño de fuente (px)
    speed: 0.015 + Math.random() * 0.025,  // Velocidad individual de rotación
    hue: 100 + Math.random() * 40,         // Tono de color en HSLA
    // ...otros parámetros
}
```

### 🧪 Personalización Avanzada

1. **Cambiar caracteres**  
   Usá símbolos personalizados para un look único:

   ```javascript
   const numChars = '01☯✵✺❂';
   ```

2. **Efecto de color alternativo**

   ```javascript
   // Para un vórtice cálido (rojo/anaranjado):
   hue: 10 + Math.random() * 30
   ```

3. **Cantidad de partículas**  
   Ajustá el valor en el bucle `for` (ej: `for (let i = 0; i < 150; i++)`)

4. **Estilo tipográfico**

   ```javascript
   ctx.font = `${size}px 'Courier New', monospace`; // Podés cambiar la fuente
   ```

---

## 🚀 Cómo Usarlo

1. Cloná este repositorio o descargá los archivos.
2. Abrí **Lively Wallpaper** y seleccioná "Nuevo fondo".
3. Elegí `index.html` como archivo principal.

---

## 📋 Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- No requiere dependencias externas

---

## 🌈 Ejemplos de Configuración

### 🔥 Vórtice Cálido (rojos/amarillos)

```javascript
hue: 30 + Math.random() * 40,
numChars = '✦✧♡♥♦♣♠★☀',
pulseSpeed: 0.08
```

### 🧘 Vórtice Minimalista

```javascript
particlesCount: 50,
size: 4 + Math.random() * 4,
pulseRange: 200
```

---

## 🤝 Contribuciones

¡Las contribuciones son más que bienvenidas! Algunas ideas interesantes:

- [ ] Añadir controles interactivos  
- [ ] Implementar modo oscuro / claro  
- [ ] Crear patrones de pulsación más complejos  
- [ ] Opciones para cambiar personajes y paletas en vivo  

---

## ✨ Tip Final

> Jugá con los valores de `pulseSpeed` y `rotationSpeed` para crear diferentes **atmósferas visuales**.  
> Velocidades bajas = efecto relajante 🌙  
> Velocidades altas = vórtice energético ⚡

---

💙 Hecho para los que miran al abismo... y ven arte.