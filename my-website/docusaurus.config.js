
import {themes as prismThemes} from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml"); // объявляем плагин для plantuml

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bilingual',
  favicon: 'img/favicon.ico',

  url: 'https://DvoryadkinaDV.github.io',
  baseUrl: 'Bilingual',
  organizationName: 'DvoryadkinaDV', 
  projectName: 'Bilingual', 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  blog: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

//подключаем плагин для drawio
  plugins: [
    ['drawio', {}]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/DvoryadkinaDV/Bilingual',
          remarkPlugins: [simplePlantUML], //подключаем плагин для plantuml
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    // подключаем плагин для OPENAPI
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'Bilingual',
            spec: 'api_specs/openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Bilingual',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/DvoryadkinaDV/Bilingual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
