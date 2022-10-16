const helper = require('./../helper/')

module.exports = {
  repo: 'SteiensGate/steiensgate.github.io',
  editLinks: false,
  docsDir: './dist',
  algolia: {
    apiKey: 'd27b4f3d5996aaba8b141e383ef6340a',
    indexName: 'prod_JavaBlog',
    inputSelector: '',
    debug: false
  },
  comment: {
    clientID: '404a8bb0a2635bb8351c',
    clientSecret: 'b2360e85d6ad8f69bd64ced134782d7a16b5af88',
    repo: 'steiensgate.github.io',
    owner: 'SteiensGate',
    admin: ['SteiensGate'],
    perPage: 5,
    proxy: '/github/login/oauth/access_token', // 新添加的
    distractionFreeMode: false // Facebook-like distraction free mode
  },
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '首页',
          link: '/blog/'
        },
        {
          text: 'Go',
          link: '/go/'
        },
        {
          text: '大数据',
          link: '/bigdata/'
        },
        {
          text: '汉化',
          link: '/localization/'
        },
        {
          text: 'Java',
          link: '/java/'
        },
        {
          text: 'Java虚拟机',
          link: '/jvm/'
        },
        {
          text: '微服务',
          link: '/micro-service/'
        },
        {
          text: '更多',
          items: [
            { text: '设计模式', link: '/design-pattern/' },
            { text: '数据结构', link: '/data-structure/' },
            { text: '网络基础', link: '/network/' },
            { text: 'LeetCode', link: '/leetcode/' }
          ]
        }
      ],
      sidebar: {
        '/blog/': helper.utils.genSidebarConfig('', './docs/blog/', false),
        '/data-structure/': helper.utils.genSidebarConfig('', './docs/data-structure/', false),
        '/java/': helper.utils.genSidebarConfig('', './docs/java/', false),
        '/jvm/': helper.utils.genSidebarConfig('', './docs/jvm/', false),
        '/leetcode/': helper.utils.genSidebarConfig('', './docs/leetcode/', false),
        '/micro-service/': helper.utils.genSidebarConfig('', './docs/micro-service/', false),
        '/network/': helper.utils.genSidebarConfig('', './docs/network/', false)
      }
    }
  }
}
