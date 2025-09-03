# José Ángel Salinas Portfolio - GitHub Copilot Instructions

**ALWAYS** follow these instructions first and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.

## Working Effectively

### Prerequisites and Setup
- Ensure Node.js 18+ is installed (verified working with 20.19.4)
- Use npm as the package manager (10.8.2+ recommended)
- Install dependencies:
  ```bash
  npm install
  ```
  Expected time: 15 seconds. No errors should occur.

### Build and Development Commands
- **Build the site:**
  ```bash
  npm run build
  ```
  Expected time: 5 seconds. NEVER CANCEL - timeout should be 30+ seconds as safety margin.
  Outputs static files to `./dist/` directory.

- **Start development server:**
  ```bash
  npm run dev
  ```
  Starts immediately (<1 second). Server runs on `http://localhost:4321/`
  Use Ctrl+C to stop.

- **Preview built site:**
  ```bash
  npm run preview
  ```
  Serves the built site from `./dist/` on `http://localhost:4321/`
  Use Ctrl+C to stop.

- **Type checking:**
  ```bash
  npm run check
  ```
  Note: Requires `@astrojs/check` package to be installed separately.

## Project Structure and Navigation

### Key Directories
- `src/pages/` - Main site pages (index, proyectos, experiencia, contacto, sobre-mi)
- `src/content/` - Content collections with Markdown files
  - `src/content/projects/` - Portfolio project entries
  - `src/content/experience/` - Professional experience entries
- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layout templates
- `src/styles/` - Global CSS and Tailwind styles
- `public/` - Static assets (images, favicon, etc.)
- `dist/` - Build output (generated, not committed)

### Content Management
- Projects are defined in `src/content/projects/*.md` files
- Experience entries are in `src/content/experience/*.md` files
- Content schema is defined in `src/content/config.ts`
- Frontmatter must match the schema (title, description, technologies, date, etc.)

### Configuration Files
- `astro.config.mjs` - Astro configuration with GitHub Pages settings
- `package.json` - Dependencies and npm scripts
- `tsconfig.json` - TypeScript configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment

## Validation

### Manual Testing Requirements
After making changes, ALWAYS validate:

1. **Build succeeds:**
   ```bash
   npm run build
   ```
   Should complete in ~5 seconds with no errors.

2. **Development server works:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321/` and verify:
   - Home page loads correctly
   - Navigation works to all pages: /proyectos, /experiencia, /contacto, /sobre-mi
   - Content displays properly
   - No console errors in browser

3. **Preview functionality:**
   ```bash
   npm run preview
   ```
   Test the same pages as development server to ensure build output is correct.

4. **Content rendering:**
   - Visit `/proyectos/` to verify project cards display
   - Visit `/experiencia/` to verify experience timeline
   - Check that all Markdown content renders properly

### Required Validation Scenarios
- **Content Changes**: After modifying any `.md` files in `src/content/`, verify the content displays correctly on the relevant pages.
- **Component Changes**: Test all pages that use the modified component.
- **Layout Changes**: Check all page types (home, projects, experience, contact, about).
- **Style Changes**: Verify responsive design works across different screen sizes.

## Common Tasks

### Adding New Projects
1. Create new `.md` file in `src/content/projects/`
2. Include required frontmatter (title, description, technologies, date, status)
3. Write project content in Markdown
4. Verify it appears on `/proyectos/` page

### Adding Experience Entries
1. Create new `.md` file in `src/content/experience/`
2. Include required frontmatter (title, company, startDate, endDate, technologies, achievements)
3. Write experience details in Markdown
4. Verify it appears on `/experiencia/` page

### Updating Site Configuration
- Modify `astro.config.mjs` for build settings
- Update `package.json` for dependencies or scripts
- GitHub Pages settings are in `site` property of astro.config.mjs

## Deployment

### GitHub Pages Configuration
- Repository MUST be named `jangelsalinas.github.io` (special GitHub Pages repository)
- Site URL: `https://jangelsalinas.github.io/`
- Deployment is automatic via GitHub Actions on push to `main` branch
- Workflow file: `.github/workflows/deploy.yml`
- Uses official Astro GitHub Action for building and deployment

### Testing Deployment
- Push changes to `main` branch
- Check GitHub Actions tab for workflow status
- Verify site updates at `https://jangelsalinas.github.io/`

## Technical Details

### Framework Information
- **Astro 5.13.5** - Static site generator with component islands
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Content Collections** - Type-safe Markdown content management

### No Linting/Testing Tools
- No ESLint, Prettier, or other linting tools configured
- No test suite exists
- Type checking available via `npm run check` (requires additional package)
- Code style should follow existing patterns in the codebase

### Performance Characteristics
- Extremely fast builds (~3-5 seconds)
- Instant development server startup
- Static site output for optimal performance
- All routes pre-rendered at build time

## Troubleshooting

### Common Issues
- **Build fails**: Check TypeScript errors and Astro component syntax
- **Content not showing**: Verify frontmatter matches schema in `src/content/config.ts`
- **Styles broken**: Check Tailwind class names and global CSS imports
- **404 on GitHub Pages**: Ensure repository name is exactly `jangelsalinas.github.io`

### Debug Commands
```bash
# Clean build
rm -rf dist/ && npm run build

# Check for TypeScript issues (requires @astrojs/check)
npm run check

# View build output
ls -la dist/

# Test specific routes
curl http://localhost:4321/proyectos/
```

### Repository Commands Reference
```bash
# View repository structure
ls -la

# Check current branch and status  
git status

# View recent commits
git log --oneline -5

# Check build output size
du -sh dist/
```

## Important Notes
- Build times are extremely fast (3-5 seconds) - no need for long timeouts
- Site uses Spanish language and content
- Configured for GitHub Pages special repository deployment
- No testing framework - validation is manual only
- Content is managed through Markdown files with structured frontmatter