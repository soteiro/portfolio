# AGENTS.md - Guía para Agentes AI en este Proyecto

Este archivo sirve como referencia y guía para cualquier agente de IA que trabaje en este repositorio.

## 1. Descripción del Proyecto

Este es el portafolio personal de Diego Ignacio Soto, un Desarrollador Full Stack & IoT Specialist. El sitio está diseñado para ser visualmente atractivo, moderno y rápido.

## 2. Tech Stack Principal

- **Framework Web**: Astro (v5+)
- **Estilos**: Tailwind CSS (v4, configurado vía Vite plugin) + DaisyUI
- **Lenguaje**: TypeScript / JavaScript (ESModules)
- **Despliegue**: Netlify
- **Gestor de Paquetes**: pnpm (OBLIGATORIO)

## 3. Estructura del Proyecto

- `src/pages/`: Rutas de la aplicación (e.g., `index.astro`, `projects.astro`, `contact.astro`).
- `src/layouts/`: Plantillas base (`BaseLayout.astro` es la principal).
- `src/components/`: Componentes reutilizables de UI (Nav, Footer, Cards).
- `public/`: Assets estáticos (imágenes, fuentes, etc).
- `astro.config.mjs`: Configuración de Astro.

## 4. Guías de Estilo y Diseño

- **Estética**: Priorizar un diseño "Dark Mode" elegante con gradientes sutiles y efectos de "glassmorphism" (bg-opacity, blur).
- **Animaciones**: Usar transiciones suaves y animaciones de entrada (e.g., `animate-fade-in-up`).
- **Responsive**: Mobile-first. Asegurar que todo se vea bien en pantallas pequeñas y grandes.
- **Tailwind**: Usar clases utilitarias de Tailwind siempre que sea posible. Evitar CSS global innecesario.
- **Astro Components**: Mantener la lógica (Script) separada del template (HTML) dentro de los archivos `.astro`.

## 5. Reglas de Codificación para Agentes

1. **Analizar Primero**: Antes de crear un archivo nuevo, revisa si ya existe uno similar o si se puede reutilizar código.
2. **Nombres Descriptivos**: Usa nombres claros para componentes y variables (e.g., `ProjectCard.astro` en lugar de `Card.astro` si es específico).
3. **Manejo de Errores**: Implementa validaciones básicas donde corresponda.
4. **No romper la Build**: Verifica que los cambios no generen errores de compilación antes de finalizar.
5. **Respetar Configuraciones**: No modificar `astro.config.mjs` o `tailwind.config.mjs` a menos que sea explícitamente necesario para la tarea.

## 6. Comandos Comunes

- `pnpm dev`: Iniciar servidor de desarrollo.
- `pnpm build`: Construir para producción.
- `pnpm preview`: Ver la build de producción localmente.

---

