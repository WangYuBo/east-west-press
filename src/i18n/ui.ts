export type Lang = 'en' | 'zh';

export const ui = {
  en: {
    siteName: 'East-West Press',
    siteTagline: 'Promoting dialogues and exchanges between East and West',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.books': 'Books',
    'nav.contact': 'Contact',
    'nav.langSwitch': '中文',
    'home.featured': 'Featured Books',
    'home.viewAll': 'View All Books',
    'home.aboutTitle': 'Who We Are',
    'home.aboutCta': 'Learn more about us',
    'books.title': 'Our Books',
    'books.intro':
      'Scholarly works in the humanities, social sciences, Asian studies, and global studies.',
    'book.author': 'Author',
    'book.isbn': 'ISBN',
    'book.published': 'Published',
    'book.buy': 'Buy This Book',
    'book.back': 'Back to Books',
    'contact.title': 'Contact Us',
    'footer.rights': 'All rights reserved.',
  },
  zh: {
    siteName: '美国东西方出版社',
    siteTagline: '促进东西方之间的对话与交流',
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.books': '书目',
    'nav.contact': '联系我们',
    'nav.langSwitch': 'EN',
    'home.featured': '精选书目',
    'home.viewAll': '查看全部书目',
    'home.aboutTitle': '关于我们',
    'home.aboutCta': '了解更多',
    'books.title': '出版书目',
    'books.intro': '专注于人文学科、社会科学、亚洲研究与全球研究领域的学术出版。',
    'book.author': '作者',
    'book.isbn': 'ISBN',
    'book.published': '出版时间',
    'book.buy': '购买本书',
    'book.back': '返回书目',
    'contact.title': '联系我们',
    'footer.rights': '版权所有。',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['en']): string {
  return ui[lang][key];
}

// 站内链接/静态资源统一加上 GitHub Pages 的 base 前缀
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

// 当前页面在另一语言下的路径（en 与 zh 页面路径互为镜像）
export function altLangPath(lang: Lang, path: string): string {
  return lang === 'en' ? `zh/${path.replace(/^\/+/, '')}` : path.replace(/^\/+/, '');
}
