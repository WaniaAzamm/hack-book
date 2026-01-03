# Quickstart Guide: AI-Robot Brain Module Development

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Text editor or IDE
- Basic understanding of Markdown syntax
- Familiarity with NVIDIA Isaac ecosystem (optional but helpful)

## Setup Environment

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Navigate to the website directory**:
   ```bash
   cd website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

## Create the Module Files

1. **Create the module directory**:
   ```bash
   mkdir -p docs/module-3
   ```

2. **Create the three chapter files**:
   ```bash
   touch docs/module-3/isaac-sim-data.md
   touch docs/module-3/isaac-vslam.md
   touch docs/module-3/nav2-planning.md
   ```

## Development Workflow

1. **Start the Docusaurus development server**:
   ```bash
   npm run start
   # or
   yarn start
   ```

2. **Edit the Markdown files** in `docs/module-3/` directory following the content requirements:
   - Each chapter should be approximately 500 words
   - Include academic citations (minimum 5 per chapter)
   - Add hands-on exercises
   - Ensure content meets academic standards

3. **Preview your changes** in the browser at `http://localhost:3000`

## Content Guidelines

### Academic Standards
- Write at Flesch-Kincaid grade level 10-12
- Include proper citations in APA format
- Ensure 0% plagiarism
- Reference peer-reviewed sources

### Chapter Structure
Each chapter should include:
- Learning objectives
- Theoretical concepts
- Practical examples
- Hands-on exercises
- Academic references section

## Register in Sidebar

1. **Update the sidebar configuration** in `website/sidebars.js`:
   ```javascript
   module.exports = {
     // ... existing sidebar configuration
     tutorialSidebar: [
       // ... existing modules
       {
         type: 'category',
         label: 'Module 3: AI-Robot Brain (NVIDIA Isaac)',
         items: [
           'module-3/isaac-sim-data',
           'module-3/isaac-vslam',
           'module-3/nav2-planning',
         ],
         collapsed: false,
       },
       // ... additional modules
     ],
   };
   ```

## Build and Test

1. **Build the static site**:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Serve the built site locally**:
   ```bash
   npm run serve
   # or
   yarn serve
   ```

## Academic Review Process

1. **Fact-check all technical claims** against peer-reviewed sources
2. **Verify all citations** are properly formatted in APA style
3. **Check word count** for each chapter (target: ~500 words per chapter)
4. **Validate hands-on exercises** work as described
5. **Ensure content meets academic standards** per constitution