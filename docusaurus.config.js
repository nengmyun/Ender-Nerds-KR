// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ender Nerds',
  tagline: 'Official Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: { showReadingTime: true },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ender Nerds',
        logo: {
          alt: 'Ender Nerds Logo',
          src: 'img/logo.jpg',
        },
        items: [
          // Centered links
          { to: 'blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { href: 'https://discord.gg/wdBFC7Hc6X', label: 'Discord', position: 'left' },

          // Right-aligned item
          { href: 'https://docs.endernerds.kr/', label: '한국어 문서', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { label: 'Discord', to: 'https://discord.gg/wdBFC7Hc6X' },
          { label: 'Terms of Service', to: 'terms-of-service/' },
          { label: 'Money Back Guarantee', to: 'money-back-guarantee/' },
          { label: 'License System', to: 'license-system/' },
        ],
        copyright: `Made for Ender Nerds. Not affiliated with Mojang Studios.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'description', content: 'Official Unlimited Adventures Documentation' },
      ],
    }),

  plugins: [
    [
      'docusaurus-plugin-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        docsDir: 'docs',
      },
    ],
  ],



};

export default config;
