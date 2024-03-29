---
title: wsl
---

## WSL
### 配置
```shell
# 商店安装 Windows Subsystem for Linux

# 1、出现无法解析服务器的名称或地址，需要配置DNS114.114.114.114 / 备用 8.8.8.8

# 2、查看wsl环境是否就绪，否则需要去 启用或关闭Window功能那里，勾选Linux子系统和虚拟化平台
wsl --install  

# 3、查看可使用的Linux系统，
wsl --list --online

# 4、安装，win11之前只能去微软商店安装
wsl --install -d <DistroName>
wsl --install -d kali-linux

# 5、查看 分发的系统，以及wsl版本
wsl -l -v

# 6、将某个Linux版本设置为 wsl2
wsl --set-version <distro name> 2

# 7、重启终端，自动添加到win11 Windows终端
```

### 使用
-  win `\\wsl$\kali-linux` :直接范围wsl文件
-  wsl `code //wsl$/kali-linux` :直接通过win编辑器操作wsl文件
### window 普通使用
-   WSL 升级 WSL2
    -  `winver`:查看win版本
    -  `wsl -l -v`:查看wsl版本以及平台
    -   先 `wsl --set-version Ubuntu-18.04 2` 才能转`wsl --set-default-version 2`
    -   dos 可以通过`wsl grep xxx` 使用子系统命令
    -   sudo passwd root 设置 root 密码
-   终端切换
    - 普通终端 wsl 进入打开子系统终端
    - 子系统`cmd.exe` 直接进入cmd终端
    - 子系统 `/mnt/d/Scoop/apps/git/current/bin/bash.exe`(自己git路径)进入git终端
    - 子系统 `powershell.exe`进入powershell终端
    - exit 推出进入父及终端
- wslconfig 
	- `wslconfig /u kali-linux`:注销子系统
	- `wslconfig /l`:查看系统列表

```shell
#wsl wsl与git、powerShell相互切换
alias git-bash="/mnt/d/Scoop/apps/git/current/bin/bash.exe"
alias powershell="powershell.exe"
alias cmd="cmd.exe"
```
<!-- 
### 自定义安装
- [下载离线包](https://docs.microsoft.com/en-us/windows/wsl/install-manual)
- 通过`scoop`安装 或 [下载LxRunOffline](https://github.com/DDoSolitary/LxRunOffline/releases)
- 解压得到的LxRunOffline.exe就是可执行程序 
- 安装WSL
	- 1.在windows10控制面板-卸载程序-安装功能 中添加windows10子系统功能 打勾
	- 2.直接解压或将下载的linux包的后缀由.Appx改为.zip，并进行解压。
	- 3.安装
		- 打开cmd，输入 LxRunOffline i -n <安装名称> -d <安装路径> -f <安装.exe文件>
		- 直接双击解压目录中的.exe可执行文件进行安装,会自动安装到当前目录中 -->

### [升级wsl2](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)
- dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

## 服务

### Nginx

```shell
# kali
sudo apt install nginx

# 查看状态
service --status-all

# 启动
sudo service nginx start
sudo service nginx restart
```

