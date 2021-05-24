===============================
Web/HTML5 - 事件回调机制
===============================

这个示例将介绍如何使用时信魔方的事件回调机制来接收事件和数据。事件回调机制是应用程序常用的一种单向耦合方式，这里我们将演示应用程序通过实现监听器函数监听时信魔方的事件。

运行示例程序
===============================

在运行示例程序前务必先安装 `Node.js <https://nodejs.org/zh-cn/>`__ 和 :doc:`时信魔方服务器 </user/installation>` 。

1. 依次执行以下命令运行演示程序：

    .. code-block:: shell

        git clone https://gitee.com/shixinhulian/cube-javascript
        cd cube-javascript/cube
        npm install
        npm run example

2. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/event-callback/ <http://localhost:8000/examples/event-callback/>`__ 或 `https://localhost:8443/examples/event-callback/ <https://localhost:8443/examples/event-callback/>`__ 进入演示程序界面。

3. 点击“启动”按钮启动魔方引擎。

4. 输入账号ID（至少6位数字），点击“签入”即可签入账号。

5. 点击“签出”按钮将账号签出，点击“停止”按钮停止魔方引擎。

在日志显示区域您将看到回调函数打印的日志信息，如下图红色框内所示：

.. figure:: /images/tutorials/web_event_callback.png
    :align: center
    :alt: 事件回调机制示例截图

    *事件回调机制示例截图*

|


理解示例原理
===============================




|


代码详解
===============================
