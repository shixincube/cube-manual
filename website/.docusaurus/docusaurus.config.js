export default {
  "title": "时信魔方",
  "tagline": "面向开发者的开源实时协作、通信开发框架。",
  "url": "https://shixincube.com",
  "baseUrl": "/en/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Shinxin Cube",
  "projectName": "Cube",
  "customFields": {
    "keywords": [
      "即时通信",
      "IM",
      "实时协作",
      "视频",
      "视频会议",
      "音视频",
      "音视频通话",
      "SDK"
    ]
  },
  "i18n": {
    "defaultLocale": "zh-cn",
    "locales": [
      "zh-cn",
      "en"
    ],
    "localeConfigs": {}
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/ambrose/Documents/Repositories/Cube3/cube-manual/website/sidebars.js",
          "editUrl": "https://github.com/shixincube/cube-manual/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/shixincube/cube-manual/website/"
        },
        "theme": {
          "customCss": "/Users/ambrose/Documents/Repositories/Cube3/cube-manual/website/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "时信魔方",
      "logo": {
        "alt": "时信魔方",
        "src": "img/cube_256.png"
      },
      "items": [
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://doc.shixincube.com/",
          "label": "文档",
          "position": "left"
        },
        {
          "href": "https://doc.shixincube.com/user/installation.html",
          "label": "服务器指南",
          "position": "left"
        },
        {
          "href": "https://doc.shixincube.com/user/client_tutorials.html",
          "label": "客户端开发教程",
          "position": "left"
        },
        {
          "href": "https://github.com/shixincube/",
          "label": "GitHub",
          "position": "right"
        },
        {
          "href": "https://gitee.com/shixinhulian/",
          "label": "Gitee",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "学习资料",
          "items": [
            {
              "label": "入门指南",
              "href": "https://doc.shixincube.com/user/quickstart.html"
            },
            {
              "label": "最佳实践",
              "href": "https://doc.shixincube.com/user/best_practice.html"
            },
            {
              "label": "服务器指南",
              "href": "https://doc.shixincube.com/user/installation.html"
            },
            {
              "label": "客户端开发教程",
              "href": "https://doc.shixincube.com/user/client_tutorials.html"
            }
          ]
        },
        {
          "title": "开源社区",
          "items": [
            {
              "label": "Github",
              "href": "https://github.com/shixincube/"
            },
            {
              "label": "Gitee",
              "href": "https://gitee.com/shixinhulian/"
            },
            {
              "label": "项目展示",
              "to": "showcase"
            }
          ]
        },
        {
          "title": "更多",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "获得帮助",
              "href": "https://doc.shixincube.com/user/support.html"
            }
          ]
        }
      ],
      "copyright": "版权所有 © 2021 北京时信互联网络科技有限公司<br/><a class=\"footer__link-item footer_link\" href=\"https://beian.miit.gov.cn/\" target=\"_blank\">京ICP备16000263号</a><br/><a class=\"footer__link-item footer_link\" href=\"http://www.beian.gov.cn/portal/registerSystemInfo\" target=\"_blank\">京公网安备11010502037036号</a>"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};