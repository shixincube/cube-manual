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

2. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/event-callback/ <http://localhost:8000/examples/event-callback/>`__ 或 `https://localhost:4430/examples/event-callback/ <https://localhost:4430/examples/event-callback/>`__ 进入演示程序界面。

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

在讲解示例之前，建议您先阅读 :doc:`Hello World <helloworld>` 示例，因为本示例是在 :doc:`Hello World <helloworld>` 示例的基础上增加几行代码向魔方引擎注册“网络连接状态事件”、“联系人签入事件”和“联系人签出事件”等事件监听回调函数。

时信魔方的每个模块都设计了若干事件来满足客户端程序对于引擎内部事件的监听需求。这主要体现在以下两方面：

* 一是，一些函数的处理过程是异步的，当您执行完一个函数之后并不能立即知道结果，例如您发起通话邀请时。因此我们需要事件回调机制来通知我们一个执行流程的结果或者过程数据。

* 二是，对于一些客户端被动接收的事件，我们也需要事件回调机制将这些事件通知给客户端程序以便客户端程序进行必要的响应，例如收到其他终端发来的消息，或者收到其他联系人的通话邀请等。


|


代码详解
===============================

示例里我们使用的文件有：

* **index.html**：主页面文件。
* **main.css**：页面样式表文件。
* **main.js**：示例的程序主文件。包括程序逻辑流程和页面事件处理。
* **cube.js**：时信魔方的 JavaScript 客户端库文件。

这个示例最主要的函数是 ``bindEvents()`` ，我们在 ``cube.start()`` 调用之前，先注册好我们需要监听的事件：

.. code-block:: javascript

    function bindEvents() {
        // 监听网络事件
        cube.on('network', function(event) {
            if (event.name == 'connected') {
                println('网络事件：已连接');
            }
            else if (event.name == 'failed') {
                println('网络事件：连接发生错误');
            }
            else if (event.name == 'disconnected') {
                println('网络事件：未连接');
            }
        });

        // 监听联系人签入事件
        cube.contact.on(ContactEvent.SignIn, function(event) {
            println(event.name + ' - 签入的联系人 ID ：' + event.data.id);
        });

        // 监听联系人签出事件
        cube.contact.on(ContactEvent.SignOut, function(event) {
            println(event.name + ' - 签出的联系人 ID ：' + event.data.id);
        });
    }

更多的事件可以参看各个模块的 `API 文档 <../../_static/cube-javascript-api/index.html>`__ 。

|
