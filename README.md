# east-west-press

美国东西方出版社官网（East-West Press），基于 [Astro](https://astro.build) 的中英双语静态站点，通过 GitHub Actions 自动部署到 GitHub Pages。

- 线上地址：https://wangyubo.github.io/east-west-press/ （中文版 `/zh/`）
- 参考站点：https://kfbook.org/

## 本地开发

```bash
npm install
npm run dev       # 开发服务器 http://localhost:4321/east-west-press/
npm run build     # 构建到 dist/
npm run preview   # 预览构建结果
```

## 如何添加一本书

1. 在 `src/content/books/en/` 新建 `书名-slug.md`（英文版），在 `src/content/books/zh/` 建同名文件（中文版）：

   ```markdown
   ---
   title: 书名
   subtitle: 副标题（可选）
   author: 作者
   isbn: 978-x-xxxxxx-xx-x
   cover: covers/书名-slug.svg
   buyLink: https://www.amazon.com/xxx
   lang: en          # 中文版写 zh
   featured: true    # 是否在首页精选展示
   publishDate: "2025"
   ---

   书籍简介正文（Markdown 格式）……
   ```

2. 把封面图放到 `public/covers/`（jpg/png/svg 均可，frontmatter 的 `cover` 路径对应即可）
3. `git push` 后 GitHub Actions 自动重新构建发布

## 如何修改页面文案

- 首页 / 关于 / 联系：`src/pages/*.astro`（英文）与 `src/pages/zh/*.astro`（中文）
- 导航、页脚、按钮等公共文案：`src/i18n/ui.ts`
- 样式：`src/styles/global.css`

## 部署

push 到 `main` 分支即自动部署（`.github/workflows/deploy.yml`）。
仓库 Settings → Pages 的 Source 需设为 **GitHub Actions**（仅首次需要）。

以后如绑定自有域名：在 `public/` 下加 `CNAME` 文件，并删除 `astro.config.mjs` 中的 `base`、把 `site` 改为自有域名。
