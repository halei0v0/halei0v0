---
title: 文章撰写教程
published: 2025-10-18
description: Mizuki博客搭建后的文章撰写教程。
tags: [教程]
image: "./16557622803025280.png"
category: 教程
draft: false
---

# 1.Markdown语法

## 什么是Markdown?(必看)

## [为什么要使用Markdown?](https://docs.mizuki.mysqil.com/press/md/#为什么要使用markdown)

使用传统的编辑方案，你得像个鼠标杂技演员，一会儿点粗体一会儿调字号，忙活半天像给文字铺地砖——累到想把键盘当枕头。但Markdown不一样，这货堪称"文字界的懒人福音"，就像发现外卖软件的厨房小白，从此告别格式挣扎，专注干饭...啊不，专注写作。

有人说这玩意叫"马可蛋"，因为学会它，你敲字的速度能赶上马在奔跑中下蛋的概率——听着离谱，但用过的人都知道：这概率居然挺高！

## [这货到底是个啥？](https://docs.mizuki.mysqil.com/press/md/#这货到底是个啥)

简单说，Markdown是一种让文字"自己打扮自己"的神奇咒语。2004年有个叫约翰·格鲁伯的老哥大概是受够了HTML的啰嗦，大手一挥发明了这东西——就像嫌系鞋带麻烦直接发明魔术贴一样天才。

它的脾气特别好：

- 用`#`号当帽子，文字就知道自己是标题；
- 给句子套个`*`号，它就乖乖斜着站；
- 想列清单？加个短横线，文字立马排好队站军姿。

最绝的是，就算你忘了给它"施法"，纯文本状态下的Markdown也长得眉清目秀，不像某些格式文件，换个软件打开就变成乱码抽象画。

## [凭啥它比Word香？](https://docs.mizuki.mysqil.com/press/md/#凭啥它比word香)

Word就像个堆满按钮的战斗机驾驶舱，想加粗文字得先找半天按钮；Markdown则是共享单车，扫码就走。

- **省脑子**：记住几个符号比背Office快捷键容易，就像记外卖电话比背菜谱简单；
- **不挑设备**：在手机上敲的.md文件，到电脑上打开照样整整齐齐，不像某些文档换个设备就"水土不服"；
- **变身达人**：想变HTML？变PDF？变Word？它都行，堪比文字界的变形金刚；
- **适合装X**：程序员看你用Markdown写文档会说"哥们儿懂行"，用Word则可能被吐槽"还在用记事本呢？"

## [哪些人该学这招？](https://docs.mizuki.mysqil.com/press/md/#哪些人该学这招)

- 写技术文档的码农：再也不用在代码里插一堆`<b>`标签，就像给汉堡包插牙签——多此一举；
- 记笔记的学生党：上课记重点时，用`##`标标题比画下划线快10倍，期末复习时再也不用对着乱涂的笔记本发呆；
- 发博客的博主：在知乎、简书敲文时，`**`加粗比找工具栏按钮爽，就像用语音输入代替手写；
- 摸鱼爱好者：格式搞定快，摸鱼时间多，懂的都懂。

## [Markdown学习资源](https://docs.mizuki.mysqil.com/press/md/#markdown学习资源)

📚 **推荐学习地址**：[菜鸟教程 - Markdown教程](https://www.runoob.com/markdown/md-tutorial.html)
（偷偷说：这教程简单到猫都能学会，前提是猫想学）

最后友情提示：学会Markdown不能让马真下蛋，但能让你从格式奴隶变成文字甩手掌柜。现在就打开记事本试试——# 我要当效率大师，怎么样，是不是有内味儿了？

# 2.文件

## 单文件方案

这是在Mizuka博客系统中创建文章的两种方法之一。这种方法适用于简单的文章，不需要管理大量图片资源的情况。 单文件方案会导致RSS无法正常构建图片的路径(指本地,如果你使用图床那么不会有这个问题),如果你需要使用rss功能请使用文件夹写作方案

## [创建文章](https://docs.mizuki.mysqil.com/press/file/#创建文章)

1. 在`src/content/posts`目录下创建一个新的Markdown文件，文件名应该具有描述性，例如`my-first-post.md`。
2. 在文件中添加frontmatter（前置元数据），这是文章的配置信息，必须包含`title`和`description`字段：



```markdown
---
title: Markdown Tutorial
published: 2025-01-20
pinned: true
description: A simple example of a Markdown blog post.
tags: [Markdown, Blogging]
category: Examples
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
date: 2025-01-20
image:
  url: 'https://example.com/image.jpg'
  alt: '图片描述'
pubDate: 2025-01-20
---
```

## [Frontmatter字段详解](https://docs.mizuki.mysqil.com/press/file/#frontmatter字段详解)

frontmatter支持的字段包括：

### [必需字段](https://docs.mizuki.mysqil.com/press/file/#必需字段)

- `title`：文章标题（必需）
- `description`：文章描述（必需）

### [发布相关](https://docs.mizuki.mysqil.com/press/file/#发布相关)

- `published`：文章发布日期，格式为YYYY-MM-DD
- `pubDate`：文章发布日期（与published类似）
- `date`：文章创建日期
- `draft`：是否为草稿，true表示草稿，false表示正式发布

### [内容分类](https://docs.mizuki.mysqil.com/press/file/#内容分类)

- `tags`：文章标签数组，用于标记文章主题
- `category`：文章分类，用于组织文章
- `pinned`：是否置顶文章，true表示置顶

### [作者信息](https://docs.mizuki.mysqil.com/press/file/#作者信息)

- `author`：文章作者姓名
- `licenseName`：文章许可证名称，如"MIT"、"CC BY 4.0"等
- `sourceLink`：文章源链接，通常指向GitHub仓库或原始来源

### [图片设置](https://docs.mizuki.mysqil.com/press/file/#图片设置)

- ```
  image
  ```

  ：文章封面图片(单文件方案会导致RSS无法正常构建图片的路径,如果你需要使用rss功能请使用文件夹写作方案)

  - `url`：图片URL地址
  - `alt`：图片替代文本

1. 在frontmatter下方编写文章内容，可以使用标准的Markdown语法。

## [Markdown学习资源](https://docs.mizuki.mysqil.com/press/file/#markdown学习资源)

如果您还不熟悉Markdown语法，建议先学习基础知识：

📚 **推荐学习地址**：[菜鸟教程 - Markdown教程](https://www.runoob.com/markdown/md-tutorial.html)

这个教程涵盖了：

- Markdown基本语法
- 标题、段落、换行
- 字体样式（粗体、斜体等）
- 列表、链接、图片
- 代码块、表格
- 高级功能

掌握这些基础语法后，您就可以轻松编写美观的博客文章了！

## [Frontmatter最佳实践](https://docs.mizuki.mysqil.com/press/file/#frontmatter最佳实践)

### [日期格式](https://docs.mizuki.mysqil.com/press/file/#日期格式)

建议使用ISO 8601格式（YYYY-MM-DD）来设置日期：



```yaml
published: 2025-01-20
date: 2025-01-20
pubDate: 2025-01-20
```

### [标签和分类](https://docs.mizuki.mysqil.com/press/file/#标签和分类)

- 标签应该具体且相关，避免过于宽泛
- 分类用于高级组织，通常比标签更宽泛
- 示例：



```yaml
tags: [Vue.js, JavaScript, Frontend, Tutorial]
category: Web Development
```

### [草稿管理](https://docs.mizuki.mysqil.com/press/file/#草稿管理)

使用`draft`字段来管理文章状态：

- `draft: true` - 文章不会在生产环境中显示
- `draft: false` - 文章正常发布

### [许可证设置](https://docs.mizuki.mysqil.com/press/file/#许可证设置)

常见的许可证名称：

- "MIT"
- "Apache-2.0"
- "CC BY 4.0"
- "CC BY-SA 4.0"
- "Unlicensed"

### [完整示例](https://docs.mizuki.mysqil.com/press/file/#完整示例)



```markdown
---
title: "Vue.js 3 组合式API完全指南"
published: 2025-01-20
pinned: false
description: "深入了解Vue.js 3的组合式API，包括setup函数、响应式系统和生命周期钩子。"
tags: [Vue.js, JavaScript, Frontend, API]
category: "Web Development"
licenseName: "CC BY 4.0"
author: "张三"
sourceLink: "https://github.com/zhangsan/vue3-guide"
draft: false
date: 2025-01-20
image:
  url: 'https://example.com/vue3-cover.jpg'
  alt: 'Vue.js 3 组合式API指南封面'
pubDate: 2025-01-20
---

# Vue.js 3 组合式API完全指南

在这篇文章中，我们将深入探讨Vue.js 3的组合式API...
```

## [预览文章](https://docs.mizuki.mysqil.com/press/file/#预览文章)

保存文件后，可以在浏览器中预览文章。将文章文件名（不包括.md扩展名）拼接到预览URL的末尾即可查看。 例如，如果本地开发服务器运行在`http://localhost:4321/`，文章文件名为`my-first-post.md`，则可以通过`http://localhost:4321/posts/my-first-post`访问文章。

如果文章尚未创建或文件名错误，页面将显示404错误。当你预览一个尚未创建的文章时，控制台会显示不同的输出，这有助于进行故障排查。

## [链接到文章](https://docs.mizuki.mysqil.com/press/file/#链接到文章)

要在博客页面或其他页面中链接到你的文章，可以使用标准的HTML `<a>` 标签：



```html
<a href="/posts/my-first-post/">我的第一篇文章</a>
```

确保链接的href属性指向正确的文章路径。

## [添加图片](https://docs.mizuki.mysqil.com/press/file/#添加图片)

如果需要在文章中添加图片，可以将图片文件放在`public`目录下，然后在文章中通过相对路径引用：



```markdown
![图片描述](/images/my-image.png)
```

## [创建多篇文章](https://docs.mizuki.mysqil.com/press/file/#创建多篇文章)

你可以在`src/content/posts/`目录下创建多个Markdown文件，每个文件代表一篇文章。例如：



```
src/content/posts/
├── my-first-post.md
├── my-second-post.md
└── my-third-post.md
```

每篇文章都是一个独立的Markdown文件，文件名将被用作文章的URL路径。

## [链接多篇文章](https://docs.mizuki.mysqil.com/press/file/#链接多篇文章)

要在博客页面中链接到多篇文章，可以创建一个文章列表：



```html
<ul>
  <li><a href="/posts/my-first-post/">我的第一篇文章</a></li>
  <li><a href="/posts/my-second-post/">我的第二篇文章</a></li>
  <li><a href="/posts/my-third-post/">我的第三篇文章</a></li>
</ul>
```

确保每个链接都指向正确的文章路径。

## [注意事项](https://docs.mizuki.mysqil.com/press/file/#注意事项)

- 文件名将被用作文章的URL路径，所以应该具有描述性且不含特殊字符
- frontmatter中的`date`字段是可选的，如果不提供，系统会使用文件的创建日期
- 这种方法适合简单的文章，但如果文章包含大量图片，建议使用子文件夹方案

# 3.文件夹

## 文件夹方案（推荐）

这是在Mizuka博客系统中创建文章的推荐方法。这种方法更适合复杂的文章，特别是包含大量图片或其他资源的文章。

## [创建文章](https://docs.mizuki.mysqil.com/press/folder/#创建文章)

1. 在`src/content/posts`目录下创建一个新的文件夹，文件夹名应该具有描述性，例如`my-complex-post`。
2. 在新创建的文件夹中创建一个名为`index.md`的文件。
3. 在`index.md`文件中添加frontmatter（前置元数据），这是文章的配置信息，必须包含`title`和`description`字段：



```markdown
---
title: Markdown Tutorial
published: 2025-01-20
pinned: true
description: A simple example of a Markdown blog post.
tags: [Markdown, Blogging]
category: Examples
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
date: 2025-01-20
image:
  url: './cover.jpg'
  alt: '文章封面'
pubDate: 2025-01-20
---
```

## [Frontmatter字段详解](https://docs.mizuki.mysqil.com/press/folder/#frontmatter字段详解)

frontmatter支持的字段包括：

### [必需字段](https://docs.mizuki.mysqil.com/press/folder/#必需字段)

- `title`：文章标题（必需）
- `description`：文章描述（必需）

### [发布相关](https://docs.mizuki.mysqil.com/press/folder/#发布相关)

- `published`：文章发布日期，格式为YYYY-MM-DD
- `pubDate`：文章发布日期（与published类似）
- `date`：文章创建日期
- `draft`：是否为草稿，true表示草稿，false表示正式发布

### [内容分类](https://docs.mizuki.mysqil.com/press/folder/#内容分类)

- `tags`：文章标签数组，用于标记文章主题
- `category`：文章分类，用于组织文章
- `pinned`：是否置顶文章，true表示置顶

### [作者信息](https://docs.mizuki.mysqil.com/press/folder/#作者信息)

- `author`：文章作者姓名
- `licenseName`：文章许可证名称，如"MIT"、"CC BY 4.0"等
- `sourceLink`：文章源链接，通常指向GitHub仓库或原始来源

### [图片设置](https://docs.mizuki.mysqil.com/press/folder/#图片设置)

- ```
  image
  ```

  ：文章封面图片

  - `url`：图片URL地址（可以是相对路径如'./cover.jpg'）
  - `alt`：图片替代文本

1. 在frontmatter下方编写文章内容，可以使用标准的Markdown语法。

## [Markdown学习资源](https://docs.mizuki.mysqil.com/press/folder/#markdown学习资源)

如果您还不熟悉Markdown语法，建议先学习基础知识：

📚 **推荐学习地址**：[菜鸟教程 - Markdown教程](https://www.runoob.com/markdown/md-tutorial.html)

这个教程涵盖了：

- Markdown基本语法
- 标题、段落、换行
- 字体样式（粗体、斜体等）
- 列表、链接、图片
- 代码块、表格
- 高级功能

掌握这些基础语法后，您就可以轻松编写美观的博客文章了！

## [Frontmatter最佳实践](https://docs.mizuki.mysqil.com/press/folder/#frontmatter最佳实践)

### [日期格式](https://docs.mizuki.mysqil.com/press/folder/#日期格式)

建议使用ISO 8601格式（YYYY-MM-DD）来设置日期：



```yaml
published: 2025-01-20
date: 2025-01-20
pubDate: 2025-01-20
```

### [标签和分类](https://docs.mizuki.mysqil.com/press/folder/#标签和分类)

- 标签应该具体且相关，避免过于宽泛
- 分类用于高级组织，通常比标签更宽泛
- 示例：



```yaml
tags: [Vue.js, JavaScript, Frontend, Tutorial]
category: Web Development
```

### [草稿管理](https://docs.mizuki.mysqil.com/press/folder/#草稿管理)

使用`draft`字段来管理文章状态：

- `draft: true` - 文章不会在生产环境中显示
- `draft: false` - 文章正常发布

### [许可证设置](https://docs.mizuki.mysqil.com/press/folder/#许可证设置)

常见的许可证名称：

- "MIT"
- "Apache-2.0"
- "CC BY 4.0"
- "CC BY-SA 4.0"
- "Unlicensed"

### [图片路径最佳实践](https://docs.mizuki.mysqil.com/press/folder/#图片路径最佳实践)

在子文件夹方法中，推荐使用相对路径引用图片：



```yaml
image:
  url: './cover.jpg'  # 相对于当前文件夹
  alt: '文章封面图片描述'
```

### [完整示例](https://docs.mizuki.mysqil.com/press/folder/#完整示例)



```markdown
---
title: "React Hooks深度解析"
published: 2025-01-20
pinned: true
description: "全面解析React Hooks的使用方法和最佳实践，包含大量代码示例和图片说明。"
tags: [React, JavaScript, Hooks, Frontend]
category: "Web Development"
licenseName: "MIT"
author: "李四"
sourceLink: "https://github.com/lisi/react-hooks-guide"
draft: false
date: 2025-01-20
image:
  url: './react-hooks-cover.png'
  alt: 'React Hooks深度解析封面'
pubDate: 2025-01-20
---

# React Hooks深度解析

![React Hooks示例](./example-diagram.png)

在这篇文章中，我们将深入探讨React Hooks...
```

## [预览文章](https://docs.mizuki.mysqil.com/press/folder/#预览文章)

保存文件后，可以在浏览器中预览文章。将文件夹名拼接到预览URL的末尾即可查看。 例如，如果本地开发服务器运行在`http://localhost:4321/`，文件夹名为`my-complex-post`，则可以通过`http://localhost:4321/posts/my-complex-post`访问文章。

如果文章尚未创建或文件夹名错误，页面将显示404错误。当你预览一个尚未创建的文章时，控制台会显示不同的输出，这有助于进行故障排查。

## [链接到文章](https://docs.mizuki.mysqil.com/press/folder/#链接到文章)

要在博客页面或其他页面中链接到你的文章，可以使用标准的HTML `<a>` 标签：



```html
<a href="/posts/my-complex-post/">我的复杂文章</a>
```

确保链接的href属性指向正确的文章路径。

## [管理图片和其他资源](https://docs.mizuki.mysqil.com/press/folder/#管理图片和其他资源)

使用这种方法，你可以将文章相关的所有资源都放在同一个文件夹中，便于管理：



```
src/content/posts/my-complex-post/
├── index.md
├── image1.png
├── image2.jpg
└── data.json
```

在文章中引用图片时，可以直接使用相对路径：



```markdown
![图片描述](image1.png)
```

注意像这样直接填写文件的名字,这样才能让RSS正常构建图片的路径

## [创建多篇文章](https://docs.mizuki.mysqil.com/press/folder/#创建多篇文章)

你可以在`src/content/posts/`目录下创建多个文件夹，每个文件夹代表一篇文章。例如：



```
src/content/posts/
├── my-first-post/
│   ├── index.md
│   └── cover.jpg
├── my-second-post/
│   ├── index.md
│   ├── image1.png
│   └── image2.png
└── my-third-post/
    ├── index.md
    └── data.json
```

每篇文章都有自己的独立文件夹，便于管理和维护。

## [链接多篇文章](https://docs.mizuki.mysqil.com/press/folder/#链接多篇文章)

要在博客页面中链接到多篇文章，可以创建一个文章列表：



```html
<ul>
  <li><a href="/posts/my-first-post/">我的第一篇文章</a></li>
  <li><a href="/posts/my-second-post/">我的第二篇文章</a></li>
  <li><a href="/posts/my-third-post/">我的第三篇文章</a></li>
</ul>
```

确保每个链接都指向正确的文章路径。

## [优势](https://docs.mizuki.mysqil.com/press/folder/#优势)

- 所有文章资源集中管理，便于维护
- 图片引用更简单，使用相对路径即可
- 更好的组织结构，特别是对于包含大量资源的文章
- 便于文章的迁移和备份
- 每篇文章都有独立的文件夹，避免资源混淆

# 4.文章加密（可选）

## 文章客户端加密

## [概述](https://docs.mizuki.mysqil.com/press/key/#概述)

主题使用了 `bcryptjs` 用于密码的哈希处理，以及 `crypto-js` 用于内容的对称加密。

## [工作流程](https://docs.mizuki.mysqil.com/press/key/#工作流程)

这一阶段发生在访客的浏览器里，当他们访问那个被加密的页面时：

### [1. 用户交互](https://docs.mizuki.mysqil.com/press/key/#_1-用户交互)

访客首先看到的不是文章，而是一个密码输入界面。

### [2. 客户端验证与解密](https://docs.mizuki.mysqil.com/press/key/#_2-客户端验证与解密)

当访客输入密码并点击"解锁"后，页面内嵌的 JavaScript 脚本会执行以下操作：

#### [验证密码](https://docs.mizuki.mysqil.com/press/key/#验证密码)

脚本会先用 `bcryptjs` 将访客输入的密码进行同样的哈希计算，然后与页面中预存的那个哈希值进行比对。如果二者匹配，证明密码正确。这是为了快速验证密码，避免用错误的密码去尝试解密，浪费计算资源。

#### [解密内容](https://docs.mizuki.mysqil.com/press/key/#解密内容)

密码验证通过后，脚本会使用访客刚刚输入的明文密码（它只存在于浏览器内存中，不会被发送到任何地方）作为密钥，调用 `crypto-js` 来解密页面中存储的文章密文。

#### [动态渲染](https://docs.mizuki.mysqil.com/press/key/#动态渲染)

一旦密文被成功解密，脚本就会将还原出的、包含完整格式的 HTML 内容，动态地插入到页面的相应容器中。

### [3. 完成展示](https://docs.mizuki.mysqil.com/press/key/#_3-完成展示)

至此，访客才能看到文章的真实内容。通过这种方式，我们成功地在没有后端的情况下，模拟出了一套安全的"验证-解密-渲染"流程，实现了对静态内容的有效保护。

## [使用方法](https://docs.mizuki.mysqil.com/press/key/#使用方法)

在文章的 Front Matter 中添加以下配置：



```markdown
---
title: '这是一篇加密文章'
encrypted: true
password: 'your-secret-password'
---
```

这样定义后就可以实现为文章设定不可逆的文章加密，只有输入正确的密码才能查看文章内容。

# 5.图表

## Mermaid图表

我们可以使用mermaid语法来在文章中绘制图表

```
    ```mermaid
    graph TD
        A[Start] --> B{Condition Check}
        B -->|Yes| C[Process Step 1]
        B -->|No| D[Process Step 2]
        C --> E[Subprocess]
        D --> E
        subgraph E [Subprocess Details]
            E1[Substep 1] --> E2[Substep 2]
            E2 --> E3[Substep 3]
        end
        E --> F{Another Decision}
        F -->|Option 1| G[Result 1]
        F -->|Option 2| H[Result 2]
        F -->|Option 3| I[Result 3]
        G --> J[End]
        H --> J
        I --> J
```
# 以下是图片测试

**Github**图床图片

![屏幕截图(1)](https://cdn.jsdelivr.net/gh/halei0v0/warehouse@imgmd//imgmd/20251213104931828.png)

![屏幕截图(2)](https://cdn.jsdelivr.net/gh/halei0v0/warehouse@imgmd//imgmd/20251213104911178.png)

**本地直接显示的图片**

![屏幕截图](./屏幕截图(1).png)

![屏幕截图](./屏幕截图(2).png)
