# Champion Heart — Skill Registry 提交操作手册

> 生成时间：2026-04-09
> 所有文案已准备好，按顺序执行即可。

---

## ✅ 1. Vercel skills.sh（已完成）

`npx skills add aigclist/championheart` 已验证可用。
用户安装时会自动被 skills.sh 索引，无需额外操作。

安装命令（写入 README 供用户使用）：
```bash
npx skills add aigclist/championheart
```

---

## 🔲 2. ClawHub（需手动登录）

```bash
# 登录（会打开浏览器）
clawhub login

# 发布
clawhub publish "D:\Cloudflare Projects\skills\champion-heart" \
  --slug champion-heart \
  --name "Champion Heart" \
  --version 0.9.0 \
  --changelog "Initial public release: behavioral overwrite layer for illusion cutting, truth contact, and lawful decisive action" \
  --tags latest

# 验证
clawhub inspect champion-heart
```

---

## 🔲 3. Skills Directory (skillsdirectory.com)

1. 打开 https://www.skillsdirectory.com/submit
2. 用 GitHub 账号登录
3. 提交仓库地址：`https://github.com/aigclist/championheart`
4. 等待安全扫描通过

---

## 🔲 4. awesome-claude-skills PR（3 个仓库）

### 4a. travisvn/awesome-claude-skills

1. Fork https://github.com/travisvn/awesome-claude-skills
2. 在 Community Skills > Individual Skills 表格中添加一行：

```markdown
| **[champion-heart](https://github.com/aigclist/championheart)** | Behavioral overwrite layer for illusion cutting, truth contact, and lawful decisive action — installs terminal-state clarity, false-necessity cutting, and non-linear precision without borrowed guarantee. |
```

3. 提交 PR，标题：`Add champion-heart: behavioral overwrite skill for illusion cutting`

### 4b. ComposioHQ/awesome-claude-skills

1. Fork https://github.com/ComposioHQ/awesome-claude-skills
2. 在合适的分类下添加：

```markdown
- [champion-heart](https://github.com/aigclist/championheart) - Behavioral overwrite layer for illusion cutting, truth contact, and lawful decisive action. Installs terminal-state clarity, false-necessity cutting, and non-linear precision without borrowed guarantee.
```

3. 提交 PR，标题：`Add champion-heart skill`

### 4c. BehiSecc/awesome-claude-skills

1. Fork https://github.com/BehiSecc/awesome-claude-skills
2. 添加条目：

```markdown
[champion-heart](https://github.com/aigclist/championheart) - Behavioral overwrite layer for illusion cutting, truth contact, and lawful decisive action. Installs false-necessity cutting, frame breaking, and lawful non-linear precision into AI agents.
```

3. 提交 PR，标题：`Add champion-heart skill`

---

## 🔲 5. awesome-skills.com

1. 打开 https://awesome-skills.com/
2. 查找提交入口（通常在页面底部或导航栏）
3. 提交仓库地址：`https://github.com/aigclist/championheart`

---

## 🔲 6. LobeHub Skills Marketplace

1. 打开 https://lobehub.com/skills
2. 查找提交/发布入口
3. 提交仓库信息

---

## 提交后验证清单

- [ ] `npx skills add aigclist/championheart` 可正常安装
- [ ] `clawhub search champion-heart` 能搜到
- [ ] skillsdirectory.com 搜索能找到
- [ ] awesome-claude-skills PR 被合并
- [ ] OpenCode 中 `find-skills` 能发现 champion-heart
