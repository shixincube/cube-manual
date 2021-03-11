# 快速开始

## 安装服务器

推荐使用魔方控制台进行魔方服务器部署、配置和管理。

您需要在您的开发环境中正确安装以下工具：

1. 安装 [Java SE](https://www.oracle.com/java/technologies/javase-downloads.html) 。建议从 Oracle 官网下载安装包后，按照安装程序引导进行安装。Cube Server 需要的最低版本为 Java SE 8 。

2. 安装 [Apache Ant](http://ant.apache.org/) 。
  适用 Ubuntu 的安装命令：`sudo apt-get install ant`
  适用 CentOS 的安装命令：`yum -y install ant`


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

>
>如果需要可以编译 Debug 版：
>
>```bash
>ant build-debug
>```
>

执行部署命令：

```bash
ant deploy
```

### 3、配置控制台

配置控制台的数据库。

进入 `console` 目录：
```bash
cd console
```

编辑配置文件 `console.properties` ：
```bash
vi console.properties
```

配置文件的相关数据库配置项说明如下：

```
# DB
db=mysql

# MySQL Config
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

> 控制台目前仅支持 MySQL 数据库。


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

----

## 安装 Web 客户端

时信魔方 3.0 的 Web App 使用纯静态页面编写，以便于开发者进行二次开发，因此没有使用前端模板技术。您可以根据项目需要整合到任何前端模板技术框架下。

这里介绍使用 [node](https://nodejs.org/zh-cn/) 作为 Web 容器安装客户端程序，您也可以到我们的代码库里找到使用 Spring 框架的客户端程序。

您需要在您的开发环境中正确安装以下工具：

* [node](https://nodejs.org/zh-cn/) (需要 11.0 及以上版本。)
* [npm](https://www.npmjs.com/)


### 1、获取代码

```bash
git clone https://gitee.com/shixinhulian/cube-javascript
```

或者

```bash
git clone https://github.com/shixincube/cube-javascript
```

### 2、安装依赖库

进入 `cube-javascript` 目录：

```bash
cd cube-javascript
```

执行依赖安装：

```bash
npm install
```

### 3、配置数据库

目前 Web App 仅支持 MySQL 数据库。

进入 `web` 目录并编辑 `config.js` 文件：

```bash
cd web
vi config.js
```

修改对应的配置项：

```javascript
const config = {
    db: {
        host     : '192.168.100.122',  // 数据库服务器地址
        port     : '3307',             // 数据库服务器端口
        user     : 'cube',             // 数据库访问用户
        password : 'shixincube',       // 数据库访问密码
        database : 'cube_3_app',       // 数据库 Schema
        charset  : 'UTF8',
        supportBigNumbers : true
    },

    cube: {
        address : '127.0.0.1',         // 魔方服务器地址
        domain  : 'shixincube.com',    // 当前应用所在的域
        appKey  : 'shixin-cubeteam-opensource-appkey'  // 当前应用的 App-Key
    }
};
```

> 服务器默认已经包含名为 `shixincube.com` 的域，因此在没有修改服务器配置的情况下不建议修改 `domain` 和 `appKey` 数据。

### 4、启动程序

使用 node 或者 npm 命令启动容器：

```bash
node ./bin/www
```

或者

```bash
npm run start
```

### 5、开始使用

在浏览器里输入：`http://127.0.0.1:8080` 即可开始使用 Web 客户端程序。

您可以直接注册新账号或者使用以下5个由系统内置的演示账号：

| 账号 | 密码 | 用户昵称 |
| -- | -- | -- |
| cube1 | shixincube | 李国诚 |
| cube2 | shixincube | 王沛珊 |
| cube3 | shixincube | 郝思雁 |
| cube4 | shixincube | 高海光 |
| cube5 | shixincube | 张明宇 |


&nbsp;
&nbsp;
&nbsp;
