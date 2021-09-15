const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: '时信魔方',
    tagline: '面向开发者的开源实时协作、通信开发框架。',
    url: 'https://shixincube.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Shinxin Cube',
    projectName: 'Cube',

    customFields: {
        keywords: ['即时通信','IM','实时协作','视频','视频会议','音视频','音视频通话','SDK']
    },

    i18n: {
        defaultLocale: 'zh-cn',
        locales: ['zh-cn', 'en']
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/shixincube/cube-manual/website/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/shixincube/cube-manual/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            title: '时信魔方',
            logo: {
                alt: '时信魔方',
                src: 'img/cube_256.png',
            },
            items: [
                /*{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Tutorial',
                },*/
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    href: 'https://doc.shixincube.com/',
                    label: '文档',
                    position: 'left'
                },
                {
                    href: 'https://doc.shixincube.com/user/installation.html',
                    label: '服务器指南',
                    position: 'left'
                },
                {
                    href: 'https://doc.shixincube.com/user/client_tutorials.html',
                    label: '客户端开发教程',
                    position: 'left'
                },
                {
                    href: 'https://github.com/shixincube/',
                    label: 'GitHub',
                    position: 'right'
                },
                {
                    href: 'https://gitee.com/shixinhulian/',
                    label: 'Gitee',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '学习资料',
                    items: [
                        {
                            label: '入门指南',
                            href: 'https://doc.shixincube.com/user/quickstart.html'
                        },
                        {
                            label: '最佳实践',
                            href: 'https://doc.shixincube.com/user/best_practice.html'
                        },
                        {
                            label: '服务器指南',
                            href: 'https://doc.shixincube.com/user/installation.html'
                        },
                        {
                            label: '客户端开发教程',
                            href: 'https://doc.shixincube.com/user/client_tutorials.html'
                        }
                    ]
                },
                {
                    title: '开源社区',
                    items: [
                        {
                            label: 'Github',
                            href: 'https://github.com/shixincube/'
                        },
                        {
                            label: 'Gitee',
                            href: 'https://gitee.com/shixinhulian/'
                        },
                        {
                            label: '项目展示',
                            to: 'showcase'
                        }
                    ],
                },
                {
                    title: '更多',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog'
                        },
                        {
                            label: '获得帮助',
                            href: 'https://doc.shixincube.com/user/support.html',
                        },
                    ],
                },
            ],
            copyright: `版权所有 © ${new Date().getFullYear()} 北京时信互联网络科技有限公司<br/><a class="footer__link-item footer_link" href="https://beian.miit.gov.cn/" target="_blank">京ICP备16000263号</a><br/><a class="footer__link-item footer_link" href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank">京公网安备11010502037036号</a>`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        }
    })
});
