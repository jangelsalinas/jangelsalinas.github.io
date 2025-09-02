# 🚀 Instrucciones de Despliegue - Repositorio Especial

## ✅ Configuración Completada

Tu portfolio ya está configurado para funcionar con un **repositorio especial** de GitHub Pages:

- ✅ **Configuración de Astro**: Sin base path (URLs limpias)
- ✅ **GitHub Actions**: Workflow configurado para deploy automático
- ✅ **Build verificado**: Funciona correctamente
- ✅ **URLs**: Directamente en la raíz del dominio

## 📋 Pasos para Desplegar

### 1. Crear el Repositorio Especial en GitHub

1. Ve a [GitHub](https://github.com/new)
2. **Nombre del repositorio**: `joseangelsalinas.github.io`
3. **Visibilidad**: Público (requerido para GitHub Pages gratuito)
4. **NO** inicialices con README, .gitignore o licencia
5. Haz clic en "Create repository"

### 2. Subir tu Código

```bash
# Desde tu carpeta Portfolio
cd /Users/joseangelsalinas/Proyectos/Portfolio

# Inicializar Git (si no está ya)
git init

# Agregar todos los archivos
git add .

# Hacer el commit inicial
git commit -m "🎉 Portfolio inicial - Repositorio especial"

# Cambiar a rama main
git branch -M main

# Conectar con el repositorio remoto
git remote add origin https://github.com/joseangelsalinas/joseangelsalinas.github.io.git

# Subir al repositorio
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Ve a tu repositorio: `https://github.com/joseangelsalinas/joseangelsalinas.github.io`
2. Click en **Settings** (pestaña)
3. En el menú lateral, click en **Pages**
4. En "Source", selecciona: **GitHub Actions**
5. ¡Listo! No necesitas configurar nada más

### 4. Verificar el Deploy

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Cuando termine (marca verde ✅), tu sitio estará listo

### 5. Acceder a tu Portfolio

Tu sitio estará disponible en: **https://joseangelsalinas.github.io/**

## 🔄 Actualizaciones Futuras

Para hacer cambios en tu portfolio:

```bash
# Hacer cambios en tu código
# Luego:
git add .
git commit -m "Descripción de los cambios"
git push
```

GitHub Pages se actualizará automáticamente después de cada push a la rama `main`.

## 🎯 URLs del Sitio

- **Inicio**: https://joseangelsalinas.github.io/
- **Sobre mí**: https://joseangelsalinas.github.io/sobre-mi/
- **Proyectos**: https://joseangelsalinas.github.io/proyectos/
- **Experiencia**: https://joseangelsalinas.github.io/experiencia/
- **Contacto**: https://joseangelsalinas.github.io/contacto/

## ⚠️ Importante

- El repositorio **DEBE** llamarse exactamente `joseangelsalinas.github.io`
- Debe ser **público** para usar GitHub Pages gratuito
- GitHub detectará automáticamente que es un repositorio especial
- El sitio estará en la raíz del dominio (sin `/Portfolio/`)

## 🏆 Ventajas del Repositorio Especial

- ✅ URL más profesional y corta
- ✅ Mejor para SEO
- ✅ Más fácil de recordar y compartir
- ✅ Configuración más simple
- ✅ Compatible con dominios personalizados futuros

¡Tu portfolio está listo para brillar! 🌟
