---
title: 打造自己的Minecraft服务器控制面板
published: 2026-01-10
description: MCSManager详细教程。
tags: [工具]
category: 教程
draft: false
---



# 打造自己的Minecraft服务器控制面板：MCSManager详细教程

在广袤的Minecraft世界中，你是否曾梦想拥有一个自己的服务器，与朋友们畅游其中？MCSManager Panel（简称MCSM Panel）是一个多语言、轻量级、开箱即用、支持多实例的Minecraft服务器控制面板，还支持Docker。它可以帮助你轻松管理多个物理服务器，实时创建游戏服务器，并提供安全可靠的用户权限系统，确保多用户之间的流畅体验。

在本教程中，我们将详细介绍如何安装、配置和使用MCSManager Panel，以及一些高级功能。让我们一起来打造自己的Minecraft服务器控制面板吧！

## 1. 运行环境

MCSManager Panel可以在Windows和Linux平台上运行，无需复杂的数据库或系统配置。作为一个轻量级控制面板，你只需要安装Node.js即可。

所需Node.js版本：14.17.6或更高。

## 2. 安装

### Windows系统

对于Windows系统，MCSM Panel已经编译成了一键运行版本。

1. 从官方网站下载：https://mcsmanager.com/

### Linux系统

快速安装，只需一条命令：

```shell
wget -qO- https://raw.githubusercontent.com/mcsmanager/Script/master/setup.sh | bash
```

这个脚本适用于Ubuntu、Centos、Debian和Archlinux的AMD64架构系统。安装完成后，使用以下命令启动服务：

```shell
systemctl start mcsm-{web,daemon}
```

MCSManager的组件和运行目录位于：`/opt/mcsmanager/`

如果安装脚本不起作用，你可以尝试手动安装：

```shell
# 切换到安装目录，如果不存在请提前创建
cd /opt/
# 下载运行环境（Node.js），如果已经安装了Node.js 14+，请忽略此步骤
wget https://nodejs.org/dist/v14.17.6/node-v14.17.6-linux-x64.tar.gz
# 解压缩归档
tar -zxvf node-v14.17.6-linux-x64.tar.gz
# 将程序添加到系统PATH
ln -s /opt/node-v14.17.6-linux-x64/bin/node /usr/bin/node
ln -s /opt/node-v14.17.6-linux-x64/bin/npm /usr/bin/npm

# 准备安装目录
mkdir /opt/mcsmanager/
cd /opt/mcsmanager/

# 下载MCSManager
wget https://github.com/MCSManager/MCSManager/releases/latest/download/mcsmanager_linux_release.tar.gz
tar -zxf mcsmanager_linux_release.tar.gz

./install-dependency.sh

# 请打开两个终端或使用Screen

# 首先启动守护程序
./start-daemon.sh

# 启动Web服务（在第二个终端中执行）
./start-web.sh

# 访问 http://localhost:23333/ 查看Web界面
# 通常情况下，Web应用程序将自动扫描并连接到本地守护程序。
```

需要注意的是，上述步骤没有注册面板组件到系统服务中，你需要使用`screen`来管理它，或者手动注册系统服务。

## 3. 数据目录

Web配置和数据：`/opt/mcsmanager/web/data/`

Daemon配置和数据：`/opt/mcsmanager/daemon/data/`

## 4. 升级

在每次升级之前，强烈建议备份数据目录。升级步骤参考：https://github.com/MCSManager/MCSManager/wiki/Update-MCSManager

## 5. 项目介绍

MCSManager Panel由三个项目组成，你在安装时使用的代码是编译和集成的结果。

- **Web后端**：控制中心，负责后端API、用户数据管理以及与守护程序的通信和身份验证。
- **前端/UI**：后端的用户界面，负责通过Web界面显示统计信息、发送请求以及与守护程序的通信。该项目的最终产品是纯静态文件。
- **守护程序**：被控制的远程节点，负责控制本地的所有实例和管理实际的实例进程。它能够与所有对象通信。

## 6. 搭建开发环境

这部分面向开发者，如果你不是开发者，可以安全地忽略这些内容。一旦这些项目在开发环境中运行，你可以继续开发或预览它们。请确保遵守许可证。

### Web项目

```shell
git clone https://github.com/MCSManager/MCSManager.git
cd MCSManager
npm install
npm run start
# 默认情况下，使用ts-node来直接运行TypeScript代码
# 默认运行在端口23333。
```

### UI项目

```shell
git clone https://github.com/MCSManager/UI.git
cd UI
npm install
npm run serve
# 在 http://localhost:8080/ 预览界面
# 所有请求将被重定向到端口23333。
```

### Daemon项目

```shell
git clone https://github.com/MCSManager/Daemon.git
cd Daemon
npm install
npm run start
# 运行后，请通过Web界面将守护程序连接到控制面板。
# 默认情况下，运行在端口24444。
```

## 7. 浏览器兼容性

MCSManager Panel支持主流现代浏览器，如Chrome、Firefox、Safari和Opera。不再支持IE。

## 8. 国际化

MCSManager的国际化由Lazy、KevinLu2000、zijiren233和Unitwk完成。

## 9. 权限管理

控制面板在运行时会检查用户列表。如果没有可用用户，将创建一个默认的管理员用户。

如果你忘记了唯一的管理员帐户，你可以备份所有当前用户数据，生成一个新的管理员帐户，然后覆盖以前的帐户。

用户数据目录：`/opt/mcsmanager/web/data/Users/*.json`

# 快去试试吧~~