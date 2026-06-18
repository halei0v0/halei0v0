---
title: AIRI赛博生命（赛博 waifu、数字桌宠）
published: 2026-03-08
description: 让 AI waifu / 虚拟角色也能来到我们的世界
tags: [AI,工具]
image: "https://picture.tianhw.top/images/1070.webp"
category: 工具
draft: false
---

<h1 align="center">赛博生命 AIRI</h1>

你是否梦想过拥有一个赛博生命（赛博 waifu、数字桌宠），或者能与你玩耍和交谈的数字伴侣？

借助现代大型语言模型的力量，像是 [ChatGPT](https://chatgpt.com) 和著名的 [Claude](https://claude.ai) 所能带来的，想要 LLM（大语言模型）和我们角色扮演、聊天已经超简单了，每个人都能上手。而像 [Character.ai（又称 c.ai）](https://character.ai) 和 [JanitorAI](https://janitorai.com/) 这样的平台，以及本地应用如 [SillyTavern（又称酒馆）](https://github.com/SillyTavern/SillyTavern)，已经是基于聊天或文字冒险游戏体验的相当不错的解决方案。

> 但是，如何赋予它们玩游戏的能力呢？让它们能看到你正在编写的代码？不仅能一边聊天一边玩游戏，也可以看视频，还能做很多其他事情？

你可能已经知道 [Neuro-sama](https://www.youtube.com/@Neurosama)，她目前是最好的能够玩游戏、聊天并与你和参与者（在VTuber社区中）互动的 AI VTuber / 伴侣，有些人也称这种存在为"数字人"。**可惜的是，她并不开源，当她从直播中下线后，你就无法与她互动了**。

因此，这个项目 AIRI，在这里提供了另一种可能性：**让你轻松拥有自己的数字生命、赛博生命，随时随地**。

- https://airi.moeru.ai/docs/zh-Hans/)


> 此项目深受 [Neuro-sama](https://www.youtube.com/@Neurosama) 启发
>

## 这个项目有什么特别？

与其他 AI 和 LLM 驱动的 VTuber 开源项目不同，アイリ VTuber 从开始开发的第一天开始就支持多种 Web 技术，涵盖诸如 [WebGPU](https://www.w3.org/TR/webgpu/)、[WebAudio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)、[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)、[WebAssembly](https://webassembly.org/)、[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 等已经广泛应用或仍在大量实验的 API。

> [!TIP]
> 担心使用 Web 技术会导致性能下降吗？
>
> 不用担心，浏览器版本旨在展示我们在浏览器和 webview 里能做到什么，但不会完全依赖它。AIRI 的桌面版默认可用 [NVIDIA CUDA](https://developer.nvidia.com/cuda-toolkit) 和 [Apple Metal](https://developer.apple.com/metal/)（多亏了 HuggingFace 与可爱的 [candle](https://github.com/huggingface/candle) 项目），且无需复杂的依赖管理。考虑到取舍，我们在图形、布局、动画和 WIP 插件系统上部分使用了 Web 技术，方便大家集成。

这意味着 **アイリ VTuber 能够在现代浏览器和设备上运行**，甚至能够在移动设备上运行（已经完成了 PWA 支持），这为我们（贡献者们）带来了更多的可能性，让我们得以更进一步构建和扩展 アイリ VTuber 的外部功能，而与此同时也不失配置的灵活性——可以有选择地在不同设备上启用会需要 TCP 连接或其他非 Web 技术的功能，例如连接到 Discord 的语音频道一起开黑，或是和朋友们一起玩 Minecraft（我的世界）、Factorio（异星工厂）。

## 当前进度

目前已经能做到：
- [x] 大脑
  - [x] 玩 [Minecraft](https://www.minecraft.net)
  - [x] 玩 [Factorio](https://www.factorio.com)（进行中，但已提供 [PoC 和 demo](https://github.com/moeru-ai/airi-factorio)）
  - [x] 在 [Telegram](https://telegram.org) 聊天
  - [x] 在 [Discord](https://discord.com) 聊天
  - [ ] 记忆
    - [x] 纯浏览器内数据库支持（DuckDB WASM | `pglite`）
    - [ ] Alaya 记忆层（施工中）
  - [ ] 纯浏览器的本地推理（基于 WebGPU）
- [x] 耳朵
  - [x] 浏览器音频输入
  - [x] [Discord](https://discord.com) 音频输入
  - [x] 客户端语音识别
  - [x] 客户端说话检测
- [x] 嘴巴
  - [x] [ElevenLabs](https://elevenlabs.io/) 语音合成
- [x] 身体
  - [x] VRM 支持
    - [x] 控制 VRM 模型
  - [x] VRM 模型动画
    - [x] 自动眨眼
    - [x] 自动看
    - [x] 空闲眼睛移动
  - [x] Live2D 支持
    - [x] 控制 Live2D 模型
  - [x] Live2D 模型动画
    - [x] 自动眨眼
    - [x] 自动看
    - [x] 空闲眼睛移动

## 开发

> 开发本项目的详细指南请参阅 [CONTRIBUTING.md](../.github/CONTRIBUTING.md)

> [!NOTE]
> 默认情况下 `pnpm dev` 会启动 Stage Web（浏览器版）的开发服务器；如果你想尝试桌面版，请先阅读 [CONTRIBUTING.md](../.github/CONTRIBUTING.md) 正确完成环境配置。

```shell
pnpm i
pnpm dev
```

### 网页版 (也就是 [airi.moeru.ai](https://airi.moeru.ai) 的版本)

```shell
pnpm dev
```

### 桌面版（也叫拓麻歌子，aka 电子宠物）

```shell
pnpm dev:tamagotchi
```

我们提供了拓麻歌子的 Nix 包。先启用 flakes，然后可以直接运行：

```shell
nix run github:moeru-ai/airi
```

### 文档站

```shell
pnpm dev:docs
```

### 发布

运行 `bumpp` 后，请记得在 `Cargo.toml` 中更新版本号：

```shell
npx bumpp --no-commit --no-tag
```

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=moeru-ai/airi&type=Date)](https://www.star-history.com/#moeru-ai/airi&Date)
