===============================
服务器安装指南
===============================

.. contents:: 目录

时信魔方团队仅提供支持 **64-bit x86** 架构的 **时信魔方服务器** 程序版本，如果您需要其他架构的服务器版本，需要您从源代码编译并构建。


.. _installation-build:

从构建版本安装
===============================

一般的，我们建议使用构建版本进行安装和配置，推荐使用 Ubuntu 或 CentOS 进行安装。


1. 获取构建版本。

    * 下载预构建版本：

    .. code-block:: shell

        curl -o cube-server-3.0.tar.gz https://static.shixincube.com/cube/prebuild/cube-server-3.0.tar.gz


    * 解压安装包：

    .. code-block:: shell

        tar -xzf cube-server-3.0.tar.gz


2. 配置服务器管理控制台。

    时信魔方控制台默认使用 MySQL 数据库，编辑 ``cube-server-3.0/console/console.properties`` 配置文件：

    .. code-block::

        # console.properties

        # DB
        db=mysql
        
        # MySQL config
        # 数据库服务器地址
        mysql.host=127.0.0.1
        # 数据库服务器端口
        mysql.port=3306
        # 数据库 Schema
        mysql.schema=cube_3_console
        # 访问用户名
        mysql.user=cube
        # 访问密码
        mysql.password=shixin_cube_2021

    在配置文件里填写您的 MySQL 配置信息。


3. 启动服务器管理控制台。

    按照以下步骤启动控制器台程序。

    .. code-block:: shell

        cd cube-server-3.0/console
        chmod +x ./start.sh
        ./start.sh
    
    当您看到终端打印以下内容时，说明控制台已经启动：

    .. code-block:: shell

        Enter "http://Your-Server-IP:7080" in your browser to login Cube Console.
        
        在浏览器中输入 "http://您的服务器IP:7080" 登录 Cube Console 。


4. 登录控制台，在控制台里启动并配置服务器。

    在浏览器里输入：``http://127.0.0.1:7080`` 登录控制台。

    * 默认用户名：``cube``
    * 默认密码：``shixincube``

    |

    .. figure:: /images/snapshoot_cube_console_index.png
        :align: center
        :alt: 时信魔方控制台首页截图

        *时信魔方控制台首页截图*

    您可以查看 :doc:`时信魔方控制台使用文档 </features/server_console>` 了解如何使用控制台来管理各个服务器节点。


我们建议您在控制台里启动或停止时信魔方的服务器，当然，如果您需要进一步了解服务器的架构和集群结构可以查看 :doc:`时信魔方服务器架构 </features/server_java>` 文档。


|


.. _installation-source:

从源代码安装
===============================

.. note::

    时信魔方代码同时托管在 `Gitee <https://gitee.com/shixinhulian>`__ 和 `GitHub <https://github.com/shixincube>`__ 两个站点，因此您可以选择其中一个站点来获得数据。

0. 前期准备

    您需要在您的开发环境中正确安装以下工具，如果您已经配置好了请跳过该步骤：

    1. 安装 `Java SE <https://www.oracle.com/java/technologies/javase-downloads.html>`__ 。建议从 Oracle 官网下载安装包后，按照安装程序引导进行安装。时信魔方需要的最低版本为 **Java SE 8** 。

    2. 安装 `Apache Ant <http://ant.apache.org/>`__ 。

        * 适用 Ubuntu 的安装命令：``sudo apt-get install ant``
        * 适用 CentOS 的安装命令：``sudo yum -y install ant``

    3. 安装开发与构建工具。

        * 适用 Ubuntu 的安装命令：``sudo apt-get install build-essential``
        * 适用 CentOS 的安装命令：``sudo yum groupinstall "Development Tools"``


1. 获取源代码。

    准备目录结构：

    .. code-block:: shell

        mkdir cube
        cd cube

    从代码库检出源代码和依赖库：

    .. code-block:: shell

        git clone https://gitee.com/shixinhulian/cube-server
        git clone https://gitee.com/shixinhulian/cube-server-dependencies
    
    或

    .. code-block:: shell

        git clone https://github.com/shixincube/cube-server
        git clone https://github.com/shixincube/cube-server-dependencies


2. 编译服务器。

    进入 `cube-server` 目录：

    .. code-block:: shell

        cd cube-server

    编译 Release 版：

    .. code-block:: shell

        ant build

    或者编译 Debug 版：

    .. code-block:: shell

        ant build-debug

    执行部署命令：

    .. code-block:: shell

        ant deploy

    成功执行部署之后，时信魔方的工程文件将全部部署到 ``cube-server/deploy`` 目录下。  


3. 配置控制台

    配置控制台的数据库。进入 ``console`` 目录：

    .. code-block:: shell

        cd console

    编辑配置文件 `console.properties` ：

    .. code-block:: shell

        vi console.properties

    配置文件的相关数据库配置项说明如下：

    .. code-block::

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


4. 启动控制台

    .. code-block:: shell

        chmod +x ./start.sh
        ./start.sh

    在浏览器里输入：``http://127.0.0.1:7080`` 登录控制台。

    * 默认用户名：``cube``
    * 默认密码：``shixincube``

    |

    之后即可在控制台操作服务器程序。

    .. figure:: /images/snapshoot_cube_console_index.png
        :align: center
        :alt: 时信魔方控制台首页截图

        *时信魔方控制台首页截图*

    您可以查看 :doc:`时信魔方控制台使用文档 </features/server_console>` 了解如何使用控制台来管理各个服务器节点。

|


.. _installation-docker:

Docker 镜像
===============================

[TODO - hidden]


|


.. _check_installation:

检查安装
===============================

通过以下命令验证服务器控制台是否正在运行：

.. code-block:: shell-session

    $ ps -ef | grep cube.console.container.Main | grep -v 'grep' | awk '{print $2}'
    8722

该命令将回显控制台进程的 PID 信息。

如果您没有修改调度服务器、服务单元服务器和媒体单元服务器的端口，可以通过 ``netstat`` 命令来检测对应的端口是否已就绪。

调度服务器默认使用 7000 端口，7070 端口和 7077 端口等：

.. code-block:: shell-session

    $ netstat -al -p tcp | grep 7000
    tcp6       0      0 [::]:7000               [::]:*                  LISTEN      -

服务单元服务器默认使用 6000 端口：

.. code-block:: shell-session

    $ netstat -al -p tcp | grep 6000
    tcp6       0      0 [::]:6000               [::]:*                  LISTEN      -

媒体单元服务器默认使用 8888 端口等：

.. code-block:: shell-session

    $ netstat -al -p tcp | grep 8888
    tcp6       0      0 [::]:8888               [::]:*                  LISTEN      -

|

我们也可以使用下面的命令来检测服务器的监听端口是否可用。

检查调度服务器的监听端口是否可用：

.. code-block:: shell-session

    $ telnet 127.0.0.1 7000
    Trying 127.0.0.1...
    Connected to 127.0.0.1.
    Escape character is '^]'.


检查服务单元服务器的监听端口是否可用：

.. code-block:: shell-session

    $ telnet 127.0.0.1 6000
    Trying 127.0.0.1...
    Connected to 127.0.0.1.
    Escape character is '^]'.

