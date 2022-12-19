// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const filecoin = require('./static/filecoin.json')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Permissionless Software Foundation',
  tagline: 'Open Source Incentivized With Tokens',
  url: 'https://permissionless-software-foundation.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/psf-logo.png',
  organizationName: 'permissionless-software-foundation', // Usually your GitHub org/user name.
  projectName: 'psfoundation.info', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Permissionless-Software-Foundation/psfoundation.info/tree/master',
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PSF',
        logo: {
          alt: 'PSF',
          src: 'img/psf-logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Permissionless-Software-Foundation/psfoundation.info',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'CashStack',
                to: 'https://cashstack.info'
              },
              {
                label: 'Old Business Plan',
                to: 'https://psfoundation.cash/biz-plan/business-plan'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/permissionless_software'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PSF_DAO'
              }
            ]
          },
          {
            title: 'Mirrors',
            items: [
              {
                label: 'Filecoin',
                to: `https://${filecoin.cid}.ipfs.dweb.link`
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Permissionless-Software-Foundation/psfoundation.info'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} released under MIT License.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
