===============================
Web/HTML5 - 发送/接收即时消息
===============================

时信魔方客户端的 **MessagingService** 模块是进行即时消息操作的主要模块。在 `MessagingService <../../_static/cube-javascript-api/MessagingService.html>`__ 里使用 `sendTo() <../../_static/cube-javascript-api/MessagingService.html#sendTo>`__ 、`sendToContact() <../../_static/cube-javascript-api/MessagingService.html#sendToContact>`__ 和 `sendToGroup() <../../_static/cube-javascript-api/MessagingService.html#sendToGroup>`__ 方法发送消息。通过加入事件监听器来接收 MessagingService 的事件，从而实现接收来自其他联系人或者群组的消息。

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

3. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/sendrecv-message/ <http://localhost:8000/examples/sendrecv-message/>`__ 或 `https://localhost:8443/examples/sendrecv-message/ <https://localhost:8443/examples/sendrecv-message/>`__ 进入演示程序界面。

4. 输入账号 ID ，例如：``500100`` ，点击“启动”按钮启动程序。

5. 在“发送目标”里输入接收消息的联系人的 ID ，例如：``500200``。
 
6. 在“输入消息”里输入您要发送的消息内容，点击“发送”按钮发送消息。


您可以登录两个账号，用这两个账号分别给对方发送消息：

.. figure:: /images/tutorials/web_sendrecv_message_a.png
    :align: center
    :alt: 消息发送与接收 A

    *消息发送与接收 A*

.. figure:: /images/tutorials/web_sendrecv_message_b.png
    :align: center
    :alt: 消息发送与接收 B

    *消息发送与接收 B*

|

理解示例运行逻辑
===============================


代码详解
===============================
