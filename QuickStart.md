# 快速开始

## 使用魔方控制台

推荐使用魔方控制台进行魔方服务器部署、配置和管理。

### 1、获取代码

```bash
git clone https://gitee.com/shixinhulian/cube-server-dependencies
git clone https://gitee.com/shixinhulian/cube-server
```

或者

```bash
git clone https://github.com/shixincube/cube-server-dependencies
git clone https://github.com/shixincube/cube-server
```

### 2、编译并部署程序

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

执行部署命令：

```bash
ant deploy
```

### 3、配置控制台

对控制台连接的数据库进行配置。

进入 `console` 目录：
```bash
cd console
```

编辑配置文件 `console.properties` 里的相关数据库配置项：

```
# DB
db=mysql

# MySQL config
# 数据库服务器地址
mysql.host=192.168.100.122
# 数据库服务器端口
mysql.port=3307
# 数据库 Schema
mysql.schema=cube_console
# 访问用户名
mysql.user=cube
# 访问密码
mysql.password=shixincube
```

默认使用 MySQL 数据库。

### 4、启动控制台

执行启动脚本：

```bash
chmod +x ./start.sh
./start.sh
```

### 5、使用控制台

在浏览器里输入：`http://127.0.0.1:7080` 登录控制台。

默认用户名：cube
默认密码：shixincube

之后即可在控制台操作服务器程序。


### 6、关闭控制台

执行停止脚本：

```bash
chmod +x ./stop.sh
./stop.sh
```
