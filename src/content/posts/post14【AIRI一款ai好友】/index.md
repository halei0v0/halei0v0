---
title: "AIRI：开源 AI 数字桌宠 / 赛博生命"
published: 2026-03-08
description: "一个模型驱动的开源数字生命容器：能聊天、能听见、能开口说话，支持 Live2D / VRM 桌宠、游戏智能体与 MCP 工具。"
tags: [AI, 工具]
image: "https://picture.tianhw.top/images/1070.webp"
category: 工具
draft: false
comment: true
sourceLink: "https://github.com/moeru-ai/airi"
---

# AIRI：开源 AI 数字桌宠 / 赛博生命

> 模型驱动的灵魂容器，什么都能做一点的桌宠：让 Neuro-sama 这样的虚拟伴侣也成为我们世界中的一员吧！

::github{repo="moeru-ai/airi"}

你是否梦想过拥有一个赛博生命（赛博 waifu、数字桌宠），一个能陪你玩耍、交谈的数字伴侣？今天给大家介绍一个能实现这个愿望的开源项目——**Project AIRI**。

## 🌐 相关链接

- [🌍 官网](https://airi.moeru.ai)
- [📚 中文文档](https://airi.moeru.ai/docs/zh-Hans/)
- [🚀 网页版在线体验](https://airi.moeru.ai/)
- [📦 桌面版下载（GitHub Releases）](https://github.com/moeru-ai/airi/releases/latest)
- [💬 Discord 社区](https://discord.gg/TgQ3Cu2F7A)

## 🧠 这是什么？

借助现代大语言模型的力量（如 ChatGPT、Claude），让 AI 和你角色扮演聊天早已不是难事——[Character.ai](https://character.ai)、[JanitorAI](https://janitorai.com/) 和 [SillyTavern](https://github.com/SillyTavern/SillyTavern)（酒馆）都是相当成熟的方案。但 AIRI 想推进的是另一件事：

> **让一个虚拟角色真正「住」进你的电脑、浏览器或移动设备里**——能说话、能听见、能显示自己的身体，还能逐步接入游戏、直播、Discord、Telegram 和 MCP 工具。

你可能听说过 [Neuro-sama](https://www.youtube.com/@Neurosama)，她是最出色的 AI VTuber 之一，能玩游戏、聊天并与观众互动。可惜她并不开源，直播下线后你就无法与她互动了。AIRI 正是受她启发的**开源替代方向**，让你随时随地拥有自己的数字生命。

## ✨ 特别之处

与其他 AI VTuber 开源项目不同，AIRI 从第一天起就大量使用 Web 技术（WebGPU、WebAudio、Web Workers、WebAssembly、WebSocket），把重心放在「角色如何进入真实环境」：

| 维度 | 说明 |
|------|------|
| 🫧 **身体** | 支持 Live2D 与 VRM 模型，拥有可互动的 2D / 3D 表现，自动眨眼、自动看、空闲眼睛移动 |
| 🎙️ **声音** | 整合 TTS（如 ElevenLabs）、STT 语音识别与说话检测，让角色可以开口、听见你说话 |
| 📖 **上下文** | 插件系统正在把应用状态、开发环境、游戏状态等上下文接入对话流程 |
| 🎮 **行动能力** | Minecraft、Factorio、Discord、Telegram 等服务模块，展示作为智能体参与外部世界的方向 |
| 📱 **可移植** | 网页、桌面、移动端共用基础设施，支持 PWA，手机上也能用 |

::::tip
**担心 Web 技术性能下降？** 不用太担心——浏览器版只是用来展示 Web 能做到什么，并不完全依赖它。桌面版默认支持 NVIDIA CUDA 与 Apple Metal 加速（基于 [candle](https://github.com/huggingface/candle)），且无需复杂的依赖管理。
::::

## ✅ 当前进度

- [x] **大脑**
  - [x] 玩 [Minecraft](https://www.minecraft.net)
  - [x] 玩 [Factorio](https://www.factorio.com)（已提供 [PoC 与 demo](https://github.com/moeru-ai/airi-factorio)）
  - [x] 在 [Telegram](https://telegram.org) / [Discord](https://discord.com) 聊天
  - [ ] 记忆（浏览器内数据库 DuckDB WASM / `pglite` 已完成，Alaya 记忆层施工中）
  - [ ] 纯浏览器本地推理（基于 WebGPU）
- [x] **耳朵**
  - [x] 浏览器 / Discord 音频输入
  - [x] 客户端语音识别与说话检测
- [x] **嘴巴**
  - [x] [ElevenLabs](https://elevenlabs.io/) 语音合成
- [x] **身体**
  - [x] VRM 模型控制与动画（自动眨眼 / 自动看 / 空闲眼睛移动）
  - [x] Live2D 模型控制与动画（自动眨眼 / 自动看 / 空闲眼睛移动）

## 🚀 怎么开始玩？

### 网页版（零配置体验）

打开 [airi.moeru.ai](https://airi.moeru.ai)，配置模型提供商（支持 OpenAI 兼容接口、OpenRouter、DeepSeek、Ollama、Qwen、Gemini、Claude 等）和 API Key，即可开始对话。也支持 PWA，手机上也能用，适合快速尝鲜。

### 桌面版（桌宠模式）

桌面版基于 Electron，可让 AIRI 以 Live2D / VRM 模型常驻桌面，提供系统托盘、窗口穿透、悬停淡化、本地模型接入等桌宠式交互。从 [GitHub Releases](https://github.com/moeru-ai/airi/releases/latest) 下载即可。

### 本地开发

想折腾源码的话：

```shell
pnpm i
pnpm dev        # 网页版
pnpm dev:tamagotchi  # 桌面版（aka 电子宠物）
```

项目还提供了拓麻歌子的 Nix 包（需启用 flakes）：

```shell
nix run github:moeru-ai/airi
```

::::note
**仍在快速演进**：发布版优先保证聊天、角色、模型显示与基础设置；Minecraft 智能体、Discord / Telegram 机器人、Factorio、插件宿主、MCP 等高级能力可能还需要从源码配置或参与开发。详细指南见[开发者文档](https://airi.moeru.ai/docs/zh-Hans/docs/contributing/)。
::::

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=moeru-ai/airi&type=Date)](https://www.star-history.com/#moeru-ai/airi&Date)
