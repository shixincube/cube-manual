# 快速开始

## 使用魔方控制台

### 获取代码

```bash
git clone https://gitee.com/shixinhulian/cube-server
git clone https://gitee.com/shixinhulian/cube-server-dependencies
```

或者

```bash
git clone https://github.com/shixincube/cube-server
git clone https://github.com/shixincube/cube-server-dependencies
```

### 编译服务器程序

进入 `cube-server` 目录：

```bash
cd cube-server
```

编译 Release 版：

```bash
ant build
```

如果需要可以编译 Debug 版：

```bash
ant build-debug
```

### 启动控制台

进入 `console` 目录：
```bash
cd console
```

执行启动脚本：

```bash
chmod +x ./start.sh
./start.sh
```

### 使用控制台

在浏览器里输入：`http://127.0.0.1:7080` 登录控制台。

默认用户名：cube
默认密码：shixincube

之后即可在控制台操作服务器程序。


### 关闭控制台

执行停止脚本：

```bash
chmod +x ./stop.sh
./stop.sh
```
