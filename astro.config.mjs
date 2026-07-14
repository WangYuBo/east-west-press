// @ts-check
import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 子路径；绑定自有域名后删除 base 并改 site
export default defineConfig({
  site: 'https://wangyubo.github.io',
  base: '/east-west-press',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
