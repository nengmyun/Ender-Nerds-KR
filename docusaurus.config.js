// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ender Nerds',
  tagline: '공식 한글 문서 페이지',
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
          { to: 'blog', label: '블로그', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '문시',
          },
          { href: 'https://discord.gg/wdBFC7Hc6X', label: '디스코드', position: 'left' },

          // Right-aligned item
          { href: 'https://docs.endernerds.com/', label: 'English Docs', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { label: '디스코드', to: 'https://discord.gg/wdBFC7Hc6X' },
          { label: '이용약관', to: 'terms-of-service/' },
          { label: '환불약관', to: 'money-back-guarantee/' },
        ],
        copyright: `Ender Nerds에 의해 제작됨. Mojang Studios와 공식적인 관계가 없습니다.`,
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
