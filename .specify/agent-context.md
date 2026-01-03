# Physical AI & Humanoid Robotics Textbook Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-12-19

## Active Technologies

- Docusaurus 3.x
- Node.js (LTS)
- JavaScript/React
- Markdown/MDX
- npm/yarn package managers

## Project Structure

```text
website/
├── docs/
│   ├── module-1/
│   │   ├── chapter-1.md
│   │   ├── chapter-2.md
│   │   └── chapter-3.md
│   └── intro.md
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
├── static/
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md

specs/docusaurus-init/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── api.yaml
└── tasks.md
```

## Commands

# Initialize Docusaurus project
npm init docusaurus@latest website classic

# Start development server
cd website && npm start

# Build static site
cd website && npm run build

# Deploy to GitHub Pages
cd website && GIT_USER=<your-github-username> npm run deploy

## Code Style

- Use Markdown for content (not MDX unless interactive elements needed)
- Follow APA citation format for all academic sources
- Maintain Flesch-Kincaid grade level 10-12 for accessibility
- Target 5,000-7,000 words per major section
- Include minimum 15 academic sources per major section with 50% peer-reviewed

## Recent Changes

- Docusaurus project initialization with academic content structure
- Module-based organization for textbook content
- Academic standards compliance framework

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->