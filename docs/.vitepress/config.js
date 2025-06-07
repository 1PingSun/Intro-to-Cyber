export default {
    title: 'Intro to Cyber',
    description: 'A Document for cyber beginners',
    base: '/Intro-to-Cyber/',
    themeConfig: {
      nav: [
      ],

      sidebar: [
        {
          items: [
            { text: '第〇章 資安倫理宣導', link: '/0' }
          ]
        },
        {
          text: '第一章：密碼學基礎',
          items: [
            { text: '1.1 編碼篇', link: '/1.1' },
            { text: '1.2 古典密碼學篇', link: '/1.2' }
          ]
        },
        {
          text: '第二章：Misc',
          items: [
            { text: '2.1 圖片隱寫術', link: '/2.1' },
            { text: '2.2 Google Hacking', link: '/2.2' }
          ]
        },
        {
          text: '第三章：Web',
          items: [
            { text: '3.1 Web 基礎概念', link: '/3.1' }
          ]
        }
      ],

      // socialLinks: [
      //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      // ]
    }
  }