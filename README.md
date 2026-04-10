# SBTI 灵魂确诊 · Soul Test

> MBTI 已过时。5 道题，确诊你的真实精神状态。

**[🔗 立即体验 → sbti.debugcanada.com](https://sbti.debugcanada.com)**

![og-cover](og-cover.png)

---

## 是什么

SBTI（Soul-Based Type Indicator）是一个恶搞版 MBTI 人格测试，用 5 道贴近当代打工人日常的选择题，将你分配到 8 种荒诞人格原型之一。

比起 MBTI 的"你倾向于内向还是外向"，SBTI 问的是：

> 周日晚上 10 点老板艾特你改方案，你第一反应是什么？

---

## 8 种人格类型

| 类型 | 中文名 | 匹配 MBTI | 一句话定义 |
|------|--------|-----------|-----------|
| 🐒 MALO | 吗喽 | ISFP/INFP | 听劝但命苦，正在猴化中 |
| 🪦 DEAD | 死者 | ISTP/INTJ | 精神已入土，勿扰 |
| 💸 ATM  | 送钱者 | ESFJ/ENFJ | 不一定有钱，但总在买单 |
| 😨 OHNO | 哦不人 | ISFJ/INFJ | 脑内已演完 100 种失败 |
| 📐 CTRL | 拿捏者 | ESTJ/ENTJ | 失控会死，日程精确到秒 |
| 🤡 JOKE | 小丑 | ENTP/ENFP | 把所有痛苦加工成段子 |
| 💅 SEXY | 尤物 | ESFP/ESTP | 地球自转是为你提供背景 |
| 🌫️ NPC  | 背景板 | ISTJ/ISFJ | 存在感为零，但世界靠你撑 |

---

## 技术栈

- 纯原生 HTML / CSS / JavaScript（零依赖，零框架，零构建工具）
- ES6 模块化
- 静态部署，Cloudflare Pages

## 项目结构

```
sbti/
├── index.html       # 主测试页（中文）
├── index-en.html    # 主测试页（英文）
├── types.html       # 全部类型详情（中文）
├── types-en.html    # 全部类型详情（英文）
├── script.js        # 测试逻辑 + 分享功能
├── data.js          # 题目数据 + 人格数据（中英双语）
├── style.css        # 样式（含移动端适配）
├── og-cover.png     # 社交分享封面图 1200×630
├── robots.txt       # 允许主流 AI 爬虫
├── sitemap.xml      # 站点地图（含 hreflang）
└── llms.txt         # GEO：LLM 爬虫站点说明
```

---

## 功能

- **5 题测试** → 结果即时呈现，无需注册
- **自动语言检测** — 中文浏览器看中文，英文浏览器看英文，手动切换后 localStorage 记忆偏好
- **分享功能** — 手机端调起系统原生分享，桌面端一键复制链接；另有 Twitter / Facebook 直达按钮
- **移动端优化** — 三档响应式断点（600 / 480 / 360px），触控友好
- **SEO + GEO** — Open Graph、Twitter Card、JSON-LD、hreflang、llms.txt、robots.txt 全套配置
- **Google Analytics** — G-NWYNWSLHDD

---

## 本地运行

无需安装任何依赖，直接起一个静态服务器即可：

```bash
# Python
python3 -m http.server 8080

# 或 Node.js
npx serve .
```

然后访问 `http://localhost:8080`

> ⚠️ 直接双击 `index.html` 打开会因为 ES6 模块的 CORS 限制报错，需要通过 HTTP 服务访问。

---

## 部署

本项目部署在 Cloudflare Pages，直接连接 GitHub 仓库，push 即自动部署。

```bash
git add .
git commit -m "update"
git push
```

---

## License

MIT — 随便用，欢迎 fork 改成你自己的梗测试。
