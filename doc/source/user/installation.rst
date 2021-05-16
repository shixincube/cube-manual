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


2. 配置并启动控制台

    .. code-block:: shell

        cd cube-server-3.0/console
        chmod +x ./start.sh


3. 登录控制台

    登录控制台，在控制台里启动并配置服务器。在浏览器里输入：``http://127.0.0.1:7080`` 登录控制台。

    * 默认用户名：``cube``
    * 默认密码：``shixincube``


|


.. _installation-source:

从源代码安装
===============================

.. note::

    时信魔方代码同时托管在 `Gitee <https://gitee.com/shixinhulian>`__ 和 `GitHub <https://github.com/shixincube>`__ 两个站点，因此您可以选择其中一个站点来获得数据。

1. 获取源代码

    准备目录结构：

    .. code-block:: shell

        mkdir cube
        cd cube

    从代码库检出构建版本和依赖库：

    .. code-block:: shell

        git clone https://gitee.com/shixinhulian/cube-server
        git clone https://gitee.com/shixinhulian/cube-server-dependencies
    
    或

    .. code-block:: shell

        git clone https://github.com/shixincube/cube-server
        git clone https://github.com/shixincube/cube-server-dependencies


2. 编译



3. 启动控制台

    .. code-block:: shell

        cd cube-server/console
        chmod +x ./start.sh

|


.. _installation-docker:

Docker 镜像
===============================

[TODO]

