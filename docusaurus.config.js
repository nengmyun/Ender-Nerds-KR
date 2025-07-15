// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ender Nerds',
  tagline: '공식 문서 페이지',
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
            label: '문서',
          },
          { href: 'https://discord.gg/wdBFC7Hc6X', label: 'Discord', position: 'left' },

          // Right-aligned item
          { href: 'https://docs.endernerds.com/', label: 'English Docs', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { label: 'Discord', to: 'https://discord.gg/wdBFC7Hc6X' },
          { label: 'Terms of Service', to: 'terms-of-service/' },
          { label: 'Money Back Guarantee', to: 'money-back-guarantee/' },
          { label: '라이선스 시스템', to: 'license-system/' },
        ],
        copyright: `Ender Nerds에 의해 제작됨. Mojang Studios와 관계가 없습니다.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'description', content: '공식 Unlimited Adventures 문서 페이지' },
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
