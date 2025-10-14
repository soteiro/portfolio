---
title: 'Temply: Monitoreo de Temperatura y Humedad (en desarrollo)'
description: 'Un proyecto full-stack para la recolección, procesamiento y visualización de datos de sensores IoT en tiempo real, desde el firmware en un ESP32 hasta un dashboard web serverless.'
pubDate: 'Oct 13 2025'
tags: ["ESP32", "IoT", "Cloudflare", "Hono", "Astro", "React", "TypeScript", "PostgreSQL", "Prisma", "PlatformIO"]
repoUrl: 'https://github.com/soteiro/iot-temp-2'
demoUrl: 'https://temply4432.netlify.app'
heroImage: '/temply.svg'
---

## 🔗 Enlaces


## El Proyecto
<ul>
	<li>
		<a href="https://temply4432.netlify.app" target="_blank" rel="noopener noreferrer">🚀 <strong>Demo en Vivo</strong></a> - Prueba la aplicación
	</li>
	<li>
		<a href="https://github.com/soteiro/iot-temp-2" target="_blank" rel="noopener noreferrer">💻 <strong>Repositorio en GitHub</strong></a> - Código fuente completo
	</li>
</ul>

**Temply** es una solución completa de monitoreo de sensores que captura datos de temperatura y humedad del mundo físico y los presenta en un dashboard web interactivo. El objetivo era construir un sistema robusto, escalable y de bajo costo, cubriendo todo el ciclo de vida de los datos: desde su origen en un microcontrolador hasta su análisis en una interfaz de usuario final.

## Mi Rol

Como único desarrollador, diseñé y construí la solución completa, abarcando las tres áreas clave del proyecto:

1.  **Ingeniería de Firmware:** Programación del microcontrolador ESP32 para una recolección de datos fiable y una comunicación segura.
2.  **Desarrollo Backend:** Creación de una API serverless para la ingesta, autenticación y almacenamiento de datos.
3.  **Desarrollo Frontend:** Diseño y construcción de una aplicación web para la visualización y gestión de los datos por parte del usuario.

## Decisiones Clave de Arquitectura y Tecnología

La elección del stack tecnológico fue fundamental para cumplir los objetivos de escalabilidad y bajo costo del proyecto.

-   **Firmware (ESP32 con PlatformIO):** Se eligió el ESP32 por su excelente relación costo-beneficio, su conectividad WiFi integrada y su amplio soporte por parte de la comunidad. PlatformIO facilitó un entorno de desarrollo profesional para el hardware.

-   **Backend (Hono en Cloudflare Workers):** Opté por una arquitectura serverless para eliminar la necesidad de gestionar servidores, permitiendo una escalabilidad automática y un modelo de pago por uso. Hono se seleccionó por ser un framework ultraligero y de alto rendimiento, ideal para el entorno de Cloudflare Workers. **Prisma** garantizó un acceso a la base de datos PostgreSQL seguro y tipado.

-   **Frontend (Astro con React):** Astro fue la elección principal para el frontend por su enfoque en el rendimiento, generando un sitio mayormente estático que carga extremadamente rápido. Los componentes que requieren alta interactividad, como los gráficos en tiempo real, se implementaron como "islas" de **React**, combinando lo mejor de ambos mundos.

## Características Destacadas

-   **Monitoreo en Tiempo Real:** Visualización de las lecturas de los sensores a medida que llegan.
-   **Gestión de Múltiples Dispositivos:** Registro y administración de varios dispositivos IoT desde una sola cuenta.
-   **Autenticación Segura:** Sistema de autenticación basado en JWT para usuarios y API Keys para dispositivos.
-   **Dashboard Analítico:** Gráficos detallados para analizar las tendencias de temperatura y humedad a lo largo del tiempo.
-   **Arquitectura Escalable y Eficiente:** Basado en tecnologías serverless para soportar un crecimiento con costos controlados.

<!-- ## Desafíos y Aprendizajes

*(Esta sección es un marcador de posición para que la completes. Es una de las partes más importantes de un portafolio. Aquí tienes algunas ideas sobre qué escribir):*

*   **Ejemplo 1 (Técnico):** "Uno de los principales desafíos fue asegurar la comunicación entre el ESP32 y el backend en Cloudflare. Implementé un sistema de autenticación con API Key y Secret, y tuve que manejar cuidadosamente los reintentos de conexión en el firmware para evitar la pérdida de datos cuando la red WiFi era inestable. Esto me enseñó sobre la importancia de la resiliencia en sistemas distribuidos."

*   **Ejemplo 2 (Aprendizaje):** "Este proyecto fue mi primera inmersión profunda en arquitecturas serverless. Aprender a gestionar el estado y las conexiones a la base de datos desde un entorno como Cloudflare Workers fue un reto gratificante. Comprendí las ventajas y las limitaciones del cómputo en el borde (edge computing)." -->
