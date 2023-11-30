import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '5kdk 개발 블로그',
  tagline: '프론트엔드 개발자 김동규입니다.',
  favicon: 'img/snoopy-spoon.png',

  // Set the production url of your site here
  url: 'https://5kdk.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '5kdk', // Usually your GitHub org/user name.
  projectName: '5kdk.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko-kr',
    locales: ['ko-kr'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '모든 포스트',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/5kdk/5kdk.github.io/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content:
        '👋 안녕하세요! 블로그 방문을 환영합니다. 도움이 되셨다면 <a target="_blank" rel="noopener noreferrer" href="https://github.com/5kdk/5kdk.github.io">GitHub repo</a>에 🌟를 남겨주세요.',
    },
    // Replace with your project's social card
    image: 'img/snoopy-joe-cool.webp',
    navbar: {
      title: '5kdk',
      logo: {
        alt: '5kdk Logo',
        src: 'img/snoopy-spoon.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/5kdk',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '5kdk',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/5kdk',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 5kdk. Built with Docusaurus.🦖`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'diff', 'json'],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '6BL9UAGD47',

      // Public API key: it is safe to commit it
      apiKey: 'dce9edef93f5fce5b2b2b4a79c55189b',

      indexName: '5kdkio1',

      // Optional: see doc section below
      contextualSearch: true,

      // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    metadata: [
      {
        name: 'google-site-verification',
        content: 'YuTDNs5sShtABibry84DadMRPWqRvlwdaEs4VEJNhi4',
      },
      {
        name: 'naver-site-verification',
        content: '3855a4bfab2899d89b15098aceedacef12fa1fa8',
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
