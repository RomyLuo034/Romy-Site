export default {
  title: 'Romy Luo',
  description: '个人简介 | 实习项目展示 |',
  ignoreDeadLinks: true,

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '简历', link: '/resume/' },
          { text: '财经新闻', link: '/posts/' },
          { text: '财报分析', link: '/earnings/' },
          { text: '实习作品', link: '/work/' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Resume', link: '/en/resume/' },
          { text: 'Finance News', link: '/en/posts/' },
          { text: 'Earnings', link: '/en/earnings/' },
          { text: 'Projects', link: '/en/work/' }
        ]
      }
    }
  }
}
