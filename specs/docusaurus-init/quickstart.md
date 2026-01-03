# Quickstart: Docusaurus Academic Documentation Setup

## Prerequisites
- Node.js (LTS version recommended)
- npm or yarn package manager
- Git for version control
- Text editor with Markdown support

## Installation Steps

### 1. Initialize Docusaurus Project
```bash
# Navigate to your project directory
cd hack-book

# Create a new Docusaurus project
npm init docusaurus@latest website classic

# Or using Yarn
yarn create docusaurus website classic

# Or using PNPM
pnpm create docusaurus@latest website classic
```

### 2. Project Structure Setup
```bash
# After installation, your structure should look like:
website/
├── blog/                 # Optional blog section
├── docs/                 # Documentation files (will contain modules/chapters)
├── src/
│   ├── components/       # Custom React components
│   ├── css/              # Global styles
│   └── pages/            # Standalone pages
├── static/               # Static assets
├── docusaurus.config.js  # Main configuration
├── sidebars.js           # Navigation sidebar configuration
└── package.json
```

### 3. Configure Academic Standards
```javascript
// In docusaurus.config.js, add academic-focused plugins and configurations
module.exports = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Academic Content for Advanced Robotics Education',
  url: 'https://your-domain.com',
  baseUrl: '/',
  organizationName: 'your-org',
  projectName: 'robotics-textbook',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Additional academic-focused configurations...
};
```

### 4. Create Academic Content Structure
```bash
# Create module directories
mkdir -p website/docs/module-1
mkdir -p website/docs/module-2
# Add more modules as needed

# Create chapter files
touch website/docs/module-1/chapter-1.md
touch website/docs/module-1/chapter-2.md
touch website/docs/module-1/chapter-3.md
```

### 5. Start Development Server
```bash
# Change to website directory
cd website

# Install dependencies
npm install

# Start development server
npm start

# This will start the development server at http://localhost:3000
```

## Academic Content Creation Workflow

### 1. Create New Chapter
```bash
# Create new chapter file in appropriate module directory
touch website/docs/module-X/chapter-Y.md

# Add frontmatter with academic metadata
---
id: chapter-Y
title: Chapter Title
sidebar_label: Chapter Y
description: Brief description of chapter content
tags: [academics, robotics, ai]
learning_objectives:
  - Objective 1
  - Objective 2
sources_count: 15
word_count: 6000
academic_standards_compliant: true
---
```

### 2. Add Citations and References
```markdown
# Chapter Title

## Learning Objectives
- Understand key concepts
- Apply theoretical knowledge
- Evaluate academic sources

## Introduction

Content with academic citations[^1].

## Main Content

More detailed academic content with proper citations and references.

[^1]: Author, A. A. (Year). Title of work. Publisher. DOI/URL if available
```

### 3. Update Sidebar Navigation
```javascript
// In sidebars.js, add new module/chapter to navigation
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Module 1: Foundations',
      items: ['module-1/chapter-1', 'module-1/chapter-2', 'module-1/chapter-3'],
      collapsed: false,
    },
    // Add more modules as they are created
  ],
};
```

## Academic Quality Checks

### 1. Content Validation
- Verify academic accuracy against primary sources
- Ensure proper citation format (APA style)
- Check word count meets standards (5,000-7,000 words per major section)
- Validate Flesch-Kincaid grade level (target: 10-12)

### 2. Compliance Verification
- Confirm zero plagiarism through scanning tools
- Verify peer-reviewed sources (minimum 15 per section)
- Ensure expert review by subject matter experts
- Academic advisor approval before publication

## Building and Deployment

### 1. Build Static Site
```bash
# From website directory
npm run build

# Output will be in build/ directory
```

### 2. Deploy to Hosting Service
```bash
# Deploy to GitHub Pages
GIT_USER=<your-github-username> npm run deploy

# Or deploy to other static hosting services
```

## Common Academic Components

### 1. Citation Component (for MDX)
```jsx
// In src/components/Citation/index.js
import React from 'react';

export default function Citation({ id, authors, year, title, publisher }) {
  return (
    <div className="citation">
      [{id}] {authors} ({year}). {title}. {publisher}.
    </div>
  );
}
```

### 2. Academic Figure with Caption
```markdown
![Figure Description](./path/to/image.png)

<p class="figure-caption">Figure X: Description of the figure with proper attribution.</p>
```