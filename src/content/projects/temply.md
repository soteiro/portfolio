---
title: "Temply"
description: "Sistema IoT fullstack para monitoreo ambiental en tiempo real con dashboard interactivo, APIs RESTful y arquitectura edge-computing desplegada en Cloudflare Workers."
pubDate: "Sep 10 2025"
heroImage: "/post_img.webp"
tags: ["hono", "react", "typescript", "tailwindcss", "neon", "astro", "prisma", "postgresql", "cloudflare workers"]
---

## Resumen del Proyecto

**Temply** es una solución IoT completa que combina hardware y software para crear un sistema de monitoreo ambiental escalable. El proyecto integra sensores ESP32 con una plataforma web moderna, demostrando competencias en desarrollo fullstack, arquitectura de microservicios y edge computing.

### Características Principales

- **Monitoreo en tiempo real** de temperatura y humedad ambiental
- **Dashboard interactivo** con visualización de datos históricos y alertas
- **API RESTful** optimizada para alta disponibilidad y baja latencia
- **Arquitectura serverless** desplegada en Cloudflare Workers
- **Base de datos distribuida** con Neon PostgreSQL para escalabilidad global

## Tecnologías Utilizadas

- **Frontend**: React, TypeScript, TailwindCSS, Astro, daisyUI
- **Backend**: Hono, TypeScript
- **Base de Datos**: PostgreSQL, Neon, Prisma
- **Microcontrolador**: ESP32, Sensor DHT22

## Arquitectura del Proyecto

### Stack Tecnológico

El proyecto implementa una arquitectura moderna distribuida con las siguientes capas:

#### **Frontend (Client-Side)**

- **React + TypeScript**: Interfaz de usuario tipada y reactiva
- **TailwindCSS + DaisyUI**: Sistema de diseño consistente y responsive
- **Astro**: Generación estática para optimización de rendimiento

#### **Backend (Edge Computing)**

- **Hono**: Framework ligero para APIs de alta performance
- **Cloudflare Workers**: Ejecución serverless en edge locations globales
- **TypeScript**: Desarrollo backend type-safe

#### **Base de Datos**

- **Neon PostgreSQL**: Base de datos serverless con branching
- **Prisma ORM**: Modelado de datos y migraciones automatizadas

#### **Hardware IoT**

- **ESP32**: Microcontrolador con conectividad WiFi integrada
- **Sensor DHT22**: Medición precisa de temperatura y humedad
- **Protocolo HTTP/HTTPS**: Comunicación segura con el backend

### Flujo de Datos

1. **Captura**: Los sensores DHT22 recolectan datos ambientales cada 30 segundos
2. **Transmisión**: ESP32 envía datos via HTTPS a la API en Cloudflare Workers
3. **Procesamiento**: Hono procesa y valida los datos recibidos
4. **Almacenamiento**: Prisma persiste los datos en Neon PostgreSQL
5. **Visualización**: React consume la API y presenta dashboards en tiempo real

### Beneficios de la Arquitectura

- **Latencia ultra-baja**: Edge computing reduce tiempos de respuesta
- **Escalabilidad automática**: Serverless handle picos de tráfico
- **Disponibilidad global**: Distribución en múltiples regiones
- **Costo-efectivo**: Pay-per-use sin infraestructura fija

## Seguridad y Confiabilidad

### Medidas de Seguridad Implementadas

- **Autenticación de dispositivos**: Tokens JWT únicos por dispositivo ESP32
- **Cifrado end-to-end**: Comunicación HTTPS/TLS 1.3 entre hardware y API
- **Validación de datos**: Schemas de validación con Zod en el backend
- **Rate limiting**: Protección contra ataques DDoS y spam de datos
- **Sanitización de inputs**: Prevención de inyecciones SQL y XSS

### Estrategias de Confiabilidad

- **Circuit breaker pattern**: Manejo graceful de fallos de conectividad
- **Retry automático**: Reintento exponencial para transmisiones fallidas
- **Health checks**: Monitoreo continuo del estado de servicios
- **Backup y recuperación**: Copias de seguridad automáticas en Neon
- **Logs estructurados**: Trazabilidad completa para debugging

## Métricas y Monitoreo

### KPIs del Sistema

- **Disponibilidad**: >99.9% uptime medido en los últimos 3 meses
- **Latencia API**: <150ms P95 para requests globales
- **Throughput**: Soporte para >1000 dispositivos concurrentes
- **Precisión de datos**: ±0.5°C temperatura, ±3% humedad relativa

### Herramientas de Observabilidad

- **Cloudflare Analytics**: Monitoreo de performance y tráfico
- **Neon Metrics**: Análisis de queries y performance de base de datos
- **Custom dashboards**: Métricas de negocio en tiempo real
- **Alertas automáticas**: Notificaciones para anomalías y threshold breaches

## Escalabilidad y Performance

### Optimizaciones Implementadas

- **Edge caching**: CDN integrado con KV 
- **Database indexing**: Índices optimizados para queries frecuentes
- **Connection pooling**: Gestión eficiente de conexiones a PostgreSQL
- **Lazy loading**: Carga progresiva de componentes React

### Casos de Uso Escalables

- **Hogares inteligentes**: Monitoreo multi-habitación
- **Oficinas corporativas**: Control ambiental por zonas
- **Invernaderos**: Agricultura de precisión
- **Centros de datos**: Monitoreo crítico de temperatura

## Proceso de Desarrollo

### Metodología y Best Practices

- **Git Flow**: Branching strategy con feature branches y code review
- **TDD**: Desarrollo guiado por tests 
- **CI/CD Pipeline**: GitHub Actions con deployment automático
- **Code quality**: ESLint, Prettier, y TypeScript strict mode
- **Documentation**: JSDoc para APIs y README técnico detallado



## Próximos Pasos

### Roadmap Técnico



### Oportunidades de Mejora

- **GraphQL API**: Queries flexibles para diferentes clientes
- **Microservices**: Separación de concerns por dominio
- **Event sourcing**: Historial completo de eventos del sistema
- **Edge computing**: Processing de datos directamente en dispositivos IoT
