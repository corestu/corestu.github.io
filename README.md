# 摸鱼大王的个人主页

基于 [Astro Homepage Template](https://github.com/corestu/astro-homepage) 构建的个人主页，部署在 GitHub Pages。

**作者：摸鱼大王** | **博客：[摸鱼小窝](https://blog.aistu.cn)**

## 在线访问

**https://corestu.github.io**

## 功能

- **个人简介** - 展示基本信息和社交链接
- **文章聚合** - 自动从博客获取最新文章
- **项目展示** - 展示个人项目和作品
- **站点导航** - 多站点卡片式导航
- **响应式设计** - 完美适配桌面和移动端
- **深色/浅色模式** - 支持主题切换

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- TypeScript - 类型安全
- Tailwind CSS - 原子化 CSS

## 本地开发

```bash
# 克隆模板仓库
git clone https://github.com/corestu/astro-homepage.git
cd astro-homepage

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:4321` 查看效果。

## 自定义配置

编辑 `src/config/site.ts` 修改站点信息，包括个人信息、文章源、项目列表等。

## 相关链接

- **模板项目**：[astro-homepage](https://github.com/corestu/astro-homepage) - 本项目使用的 Astro 个人主页模板
- **作者博客**：[摸鱼小窝](https://blog.aistu.cn) - 技术折腾与生活记录
- **GitHub Pages 文档**：[docs.github.com/pages](https://docs.github.com/en/pages)

## 部署

项目通过 GitHub Actions 自动部署到 GitHub Pages。每次推送到 main 分支时自动构建和部署。

## 许可证

MIT License © 摸鱼大王
