---
title: "Task Manager API"
description: "API REST para gestión de tareas con autenticación, filtros avanzados y documentación Swagger"
technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"]
github: "https://github.com/joseangelsalinas/task-manager-api"
image: "/images/api-preview.jpg"
featured: false
date: 2025-05-20
status: "completed"
---

# Task Manager API

Una API REST robusta para gestión de tareas con funcionalidades avanzadas de organización y colaboración.

## Características

- **Arquitectura**: API REST con patrones MVC
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Autenticación**: JWT con refresh tokens
- **Documentación**: Swagger/OpenAPI automática
- **Testing**: Jest con cobertura del 95%

## Endpoints Principales

### Autenticación
- `POST /auth/register` - Registro de usuarios
- `POST /auth/login` - Inicio de sesión
- `POST /auth/refresh` - Renovar tokens

### Tareas
- `GET /tasks` - Listar tareas con filtros
- `POST /tasks` - Crear nueva tarea
- `PUT /tasks/:id` - Actualizar tarea
- `DELETE /tasks/:id` - Eliminar tarea

### Proyectos
- `GET /projects` - Listar proyectos
- `POST /projects` - Crear proyecto
- `POST /projects/:id/members` - Añadir miembros

## Funcionalidades Avanzadas

- Filtros por fecha, prioridad, estado y proyecto
- Sistema de notificaciones en tiempo real
- Asignación de tareas a múltiples usuarios
- Comentarios y adjuntos en tareas
- Reportes y estadísticas de productividad

## Seguridad

- Validación de datos con Joi
- Rate limiting para prevenir spam
- Sanitización de inputs
- CORS configurado correctamente
- Logs de auditoría para acciones críticas
