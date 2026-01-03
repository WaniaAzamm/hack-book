import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Academic Content for Advanced Robotics Education',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hack-book-eight.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'robotics-textbook', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-username/your-repo/edit/main/website/',
        },
        blog: false, // Disable blog for academic textbook
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Robotics Textbook',
      logo: {
        alt: 'Robotics Textbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'Glossary',
              to: '/docs/glossary',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'References',
              to: '/docs/references',
            },
          ],
        },
        {
          href: 'https://github.com/your-username/your-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Academic Content',
          items: [
            {
              label: 'Module 1: Foundations',
              to: '/docs/module-1/chapter-1',
            },
            {
              label: 'Module 2: Digital Twin',
              to: '/docs/module-2/gazebo-physics',
            },
            {
              label: 'Module 3: AI-Robot Brain',
              to: '/docs/module-3/isaac-sim-data',
            },
            {
              label: 'Module 4: Vision-Language-Action',
              to: '/docs/module-4/whisper-voice',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Glossary',
              to: '/docs/glossary',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'References',
              to: '/docs/references',
            },
            {
              label: 'Academic Papers',
              to: '/docs/papers',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-username/your-repo',
            },
            {
              label: 'Research Group',
              href: 'https://your-research-group.com',
            },
            {
              label: 'Contact Us',
              href: 'mailto:contact@your-textbook-domain.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
