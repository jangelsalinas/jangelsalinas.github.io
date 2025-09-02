# Portfolio Personal - José Ángel Salinas

Un portfolio moderno y responsive desarrollado con **Astro**, **TypeScript** y **Tailwind CSS**, desplegado en GitHub Pages como repositorio especial.

## 🌟 Características

- ⚡ **Ultra rápido** - Generación de sitio estático con Astro
- 🎨 **Diseño moderno** - Interfaz limpia y profesional con Tailwind CSS
- � **Responsive** - Optimizado para todos los dispositivos
- 🌙 **Modo oscuro** - Toggle automático basado en preferencias del sistema
- 📝 **Gestión de contenido** - Proyectos y experiencia gestionados con archivos Markdown
- � **SEO optimizado** - Meta tags, OpenGraph y Twitter Cards
- 🚀 **Deploy automático** - CI/CD con GitHub Actions para GitHub Pages
- ♿ **Accesible** - Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework para sitios estáticos
- [TypeScript](https://www.typescriptlang.org/) - JavaScript con tipos
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utility-first
- [GitHub Pages](https://pages.github.com/) - Hosting gratuito
- [GitHub Actions](https://github.com/features/actions) - CI/CD automatizado

## 🌐 URL del Sitio

**Producción:** `https://joseangelsalinas.github.io/`

> Este proyecto está configurado para usar un **repositorio especial** de GitHub Pages, lo que permite que el sitio esté disponible directamente en la raíz del dominio sin subdirectorios.

## 📁 Estructura del Proyecto

```
/
├── public/                 # Archivos estáticos
│   ├── favicon.svg
│   └── images/            # Imágenes de proyectos
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/          # Contenido en Markdown
│   │   ├── projects/     # Proyectos
│   │   ├── experience/   # Experiencia laboral
│   │   └── config.ts     # Configuración de colecciones
│   ├── layouts/
│   │   └── Layout.astro  # Layout principal
│   ├── pages/           # Páginas del sitio
│   │   ├── index.astro  # Página de inicio
│   │   ├── proyectos.astro
│   │   └── contacto.astro
│   └── styles/
│       └── global.css   # Estilos globales
├── .github/workflows/
│   └── deploy.yml       # GitHub Actions para deploy
├── astro.config.mjs     # Configuración de Astro
└── package.json
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, o pnpm

### Instalación

1. **Instala las dependencias**
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

3. **Abre tu navegador**
   
   Visita `http://localhost:4321` para ver el sitio en desarrollo.

### Comandos Disponibles

| Comando                   | Acción                                      |
| :------------------------ | :------------------------------------------ |
| `npm install`             | Instala las dependencias                   |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio de producción en `./dist/` |
| `npm run preview`         | Previsualiza la build localmente antes del deploy |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro (`astro add`, `astro check`) |

## 📝 Gestión de Contenido

### Añadir un Nuevo Proyecto

1. Crea un nuevo archivo `.md` en `src/content/projects/`
2. Usa el siguiente frontmatter como plantilla:

```markdown
---
title: "Nombre del Proyecto"
description: "Descripción breve del proyecto"
technologies: ["React", "Node.js", "MongoDB"]
github: "https://github.com/usuario/proyecto"
demo: "https://proyecto-demo.com"
image: "/images/proyecto.jpg"
featured: true
date: 2025-09-01
status: "completed" # completed | in-progress | planned
---

# Descripción Detallada

Aquí puedes escribir una descripción completa del proyecto en Markdown...
```

### Añadir Experiencia Laboral

1. Crea un nuevo archivo `.md` en `src/content/experience/`
2. Usa el siguiente frontmatter:

```markdown
---
title: "Título del Puesto"
company: "Nombre de la Empresa"
location: "Ciudad, País"
startDate: 2024-01-15
endDate: 2025-08-30
current: false
technologies: ["React", "Node.js", "AWS"]
achievements: [
  "Logro importante 1",
  "Logro importante 2"
]
---

Descripción detallada de la experiencia...
```

## 🌐 Deploy en GitHub Pages

### Configuración para Repositorio Especial

Este proyecto está configurado para usar un **repositorio especial** de GitHub Pages. Para desplegarlo correctamente:

#### 1. **Crear el Repositorio Especial**
   ```bash
   # Crear un nuevo repositorio en GitHub llamado: joseangelsalinas.github.io
   # (reemplaza "joseangelsalinas" por tu nombre de usuario de GitHub)
   ```

#### 2. **Subir el Código**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/joseangelsalinas/joseangelsalinas.github.io.git
   git push -u origin main
   ```

#### 3. **Configurar GitHub Pages**
   - Ve a tu repositorio `joseangelsalinas.github.io` en GitHub
   - Settings → Pages
   - Source: **GitHub Actions** (no "Deploy from a branch")

#### 4. **Acceder al Sitio**
   Tu portfolio estará disponible en: `https://joseangelsalinas.github.io/`

### ⚠️ Importante
- El repositorio **DEBE** llamarse `joseangelsalinas.github.io` (tu-usuario.github.io)
- GitHub detectará automáticamente que es un repositorio especial
- El sitio estará en la raíz del dominio (sin subdirectorios)

## 🎨 Personalización

Para personalizar el portfolio:

1. **Información personal**: Edita los archivos en `src/content/`
2. **Colores**: Modifica las clases de Tailwind CSS
3. **Componentes**: Personaliza `Header.astro`, `Footer.astro`, etc.

## 📧 Contacto

José Ángel Salinas - [jose@example.com](mailto:jose@example.com)

---

⭐ ¡No olvides dar una estrella al repo si te ha sido útil!
