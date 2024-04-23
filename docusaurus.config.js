// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '엔더 너드',
  tagline: '언리미티드 어드벤쳐, 언리미티드 백팩 등 엔더 너드들의 창의적인 상품들을 한국어로 더욱 편하게 입문하세요!',
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
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '엔더 너드',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '설명서',
          },
          {
            href: 'https://discord.gg/xZQtkE5uCG',
            label: '디스코드',
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
                label: '설명서',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '링크',
            items: [
              {
                label: '언리미티드 어드벤처 (Unlimited Adventures)',
                href: 'https://builtbybit.com/resources/unlimited-adventures-survival-setup.27917/',
              },
              {
                label: '어드번처 백팩 (Adventures Backpacks)',
                href: 'https://builtbybit.com/resources/adventure-backpacks.35950/',
              },
              {
                label: '디스코드',
                href: 'https://discord.gg/xZQtkE5uCG',
              },
            ],
          },
        ],
        copyright: `Ender Nerds가 제작한 제품입니다. Mojang Studios 와는 관련 없습니다.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
