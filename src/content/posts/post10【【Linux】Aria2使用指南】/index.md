---
title: Aria2【Linux版本使用教程】
published: 2026-02-03
description: 关于磁力链接下载器Aria2的使用经验分享。
tags: [工具,Linux]
category: 工具分享
image: "https://n.sinaimg.cn/sinakd20201124s/224/w512h512/20201124/b36e-kefmphe2201724.png"
draft: false
---

# 【Linux】Aria2使用指南

1. 基本介绍：**aria2** 是一个轻量级、多协议的命令行下载工具，支持 **HTTP、HTTPS、FTP、SFTP、BitTorrent、Metalink** 等协议，并可通过多连接同时从多个来源下载文件，大幅提升速度。
2. **安装方法**

* **Debian/Ubuntu**

  ```shell
  sudo apt update
  sudo yum install aria2
  ```

* **CentOS/RHEL**

  ```shell
  sudo yum install aria2
  ```

* **Fedora**

  ```shell
  sudo dnf install aria2
  ```

3. **常用下载示例**

* **单文件下载**

  ```shell
  aria2c http://example.com/file.zip
  ```

* **多文件下载**

  ```shell
  aria2c http://example.com/file1.zip http://example.com/file2.zip
  ```

* **断点续传**

  ```shell
  aria2c -c http://example.com/largefile.zip
  ```

* **多线程下载**（4个连接）

  ```shell
  aria2c -x 4 http://example.com/largefile.zip
  ```

* **磁力链接下载**

  ```shell
  aria2c "magnet:?xt=urn:btih:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  ```

4. **进阶功能**

* **限速**

  ```shell
  aria2c --max-download-limit=500K http://example.com/file.zip
  ```

* **指定目录**

  ```shell
  aria2c -d /path/to/directory http://example.com/file.zip\
  ```

  :::note

  **指定目录**命令一定要记住，非常好用！

  :::

* **后台运行（守护进程）**

  ```shell
  aria2c --daemon http://example.com/file.zip
  ```

  :::note

  **后台运行（守护进程）**命令一定要记住，非常好用！

  :::

* **使用配置文件**（`~/.aria2/aria2.conf`）

  ```shell
  continue=true
  max-connection-per-server=4
  dir=/path/to/downloads
  max-download-limit=1M
  ```

* 运行：

  ```shell
  aria2c --conf-path=/path/to/aria2.conf http://example.com/file.zip
  ```

  * **启用JSON-RPC远程控制**

    ```shell
    aria2c --enable-rpc --rpc-listen-all=true --rpc-allow-origin-all --rpc-listen-port=6800
    ```

* **实用技巧**

  * **静默模式**：`-q --show-console-readout=false`

  * **文件完整性校验**：`--check-integrity`

  * **定时任务下载**（每天凌晨3点）

    ```shell
    0 3 * * * /usr/bin/aria2c -d /path/to/directory http://example.com/dailyfile.zip
    ```

    aria2 在 Linux 下不仅支持多协议高速下载，还能通过 RPC 与其他程序集成，非常适合服务器环境批量、自动化下载任务。

  
