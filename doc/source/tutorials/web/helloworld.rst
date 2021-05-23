===============================
Web/HTML5 - Hello World
===============================

这个示例将介绍如何在您的项目里导入时信魔方的 JavaScript SDK 文件，并演示如何启动和停止魔方引擎。在此之前，我们需要您确认您已经阅读了 :doc:`/user/installation` 并且已经成功启动了时信魔方的服务器程序，因为我们的演示程序会需要连接服务器程序。

.. note::

    目前主流的浏览器都推荐使用 :term:`HTTPS` 进行访问，因此，我们建议您在您的 Web 服务器上配置好 HTTPS 服务，以便正常的使用浏览器的功能。


快速开始
===============================

按照以下步骤运行演示程序：

1. 安装时信魔方服务器：:doc:`/user/installation` 。

2. 执行以下命令运行演示程序：

    .. code-block:: shell

        git clone https://gitee.com/shixinhulian/cube-javascript
        cd cube-javascript/cube
        npm install
        npm run example

3. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/ <http://localhost:8000/>`__ 进入演示程序界面。

4. 点击“启动”按钮启动魔方引擎。

5. 输入账号ID（至少6位数字），点击“签入”即可签入账号。

6. 点击“签出”按钮将账号签出，点击“停止”按钮即停止魔方引擎。

.. figure:: /images/tutorials/web_hello_world.png
    :align: center
    :alt: Hello World

    *Hello World*



理解示例原理
===============================


代码详解
===============================
