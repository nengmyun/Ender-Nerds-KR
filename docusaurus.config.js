// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ender Nerds',
  tagline: '언리미티드 어드벤처, 어드벤처 백팩 등 Ender Nerds의 창의적인 상품들을 한국어로 더욱 편하게 입문하세요!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://endernerdskr.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'BX44LKSLEL',
  
        // Public API key: it is safe to commit it
        apiKey: '544d8152fe9c320af1fd2ea40cecd4de',
  
        indexName: 'YOUR_INDEX_NAME',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '엔더 너드',
        logo: {
          alt: 'Ender Nerds Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '설명서',
          },
          {
            position: 'left',
            label: '디스코드',
            href: 'https://discord.gg/wdBFC7Hc6X'
          },
          {href: 'https://builtbybit.com/creators/madpancake.171954/', label: '제품구매', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { label: '디스코드', to: 'https://discord.gg/wdBFC7Hc6X' },
          { label: '서비스 약관', to: 'terms-of-service/' },
          { label: '환불 보증', to: 'money-back-guarantee/' }
        ],
        copyright: `\nEnder Nerds가 제작한 제품이며, Mojang Studios와는 관계가 없습니다..`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'description', content: '공식 Ender Nerds 설명서'}
      ],
    }),
};

export default config;
