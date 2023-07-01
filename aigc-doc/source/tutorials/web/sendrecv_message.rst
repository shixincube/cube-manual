===============================
Web/HTML5 - 发送/接收即时消息
===============================

时信魔方客户端的 **MessagingService** 模块是进行即时消息操作的主要模块。在 `MessagingService <../../_static/cube-javascript-api/MessagingService.html>`__ 里使用 `sendTo() <../../_static/cube-javascript-api/MessagingService.html#sendTo>`__ 、`sendToContact() <../../_static/cube-javascript-api/MessagingService.html#sendToContact>`__ 和 `sendToGroup() <../../_static/cube-javascript-api/MessagingService.html#sendToGroup>`__ 方法发送消息。通过加入事件监听器来接收 MessagingService 的事件，从而实现接收来自其他联系人或者群组的消息。使用 ``queryMessages*`` 方法来查询最近的消息记录。

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

3. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/sendrecv-message/ <http://localhost:8000/examples/sendrecv-message/>`__ 或 `https://localhost:4430/examples/sendrecv-message/ <https://localhost:4430/examples/sendrecv-message/>`__ 进入演示程序界面。

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

理解示例程序
===============================

这里我们将专注讲解消息的收发逻辑，关于如何启动魔方引擎您可以查询 :doc:`helloworld` 示例。

#. 如前所述，我们需要给指定的联系人发送信息需要使用 `MessagingService <../../_static/cube-javascript-api/MessagingService.html>`__ 模块，因此，在魔方引擎启动之后，我们需要启动消息服务模块，模块短名 ``messaging`` ：

    .. code-block:: javascript

        cube.messaging.start();


#. 为了第一时间通知用户有新消息送达，我们需要监听消息服务模块的 ``MessagingEvent.Notify`` 事件，当我们的账号收到消息时，引擎将回调该事件的监听器方法：

    .. code-block:: javascript
    
        cube.messaging.on(MessagingEvent.Notify, onNotify);

    函数 ``onNotify()`` 会在收到消息时被调用，我们可以在 ``onNotify()`` 里编写自己的代码来处理接收到的消息，在示例里我们将接收到的消息内容显示到页面的 *textarea* 标签里。


#. 现在可以使用 ``sendToContact()`` 方法来发送消息了。我们创建 `Message <../../_static/cube-javascript-api/Message.html>`__ 消息对象实例，消息数据格式使用 :term:`JSON` 格式：

    .. code-block:: javascript

        // 创建 Message 实例
        var message = new Message({ content: content });
        // 发送消息给目标联系人
        cube.messaging.sendToContact(target, message);


|

代码详解
===============================

示例里我们使用的文件有：

* **index.html**：主页面文件。
* **main.css**：页面样式表文件。
* **main.js**：示例的程序主文件。包括程序逻辑流程和页面事件处理。
* **cube.js**：时信魔方的 JavaScript 客户端库文件。

这里重点讲解 **main.js** 文件里的逻辑：

#. 绑定事件监听器。

    当页面装载 ``main.js`` 文件后就绑定事件：

    .. code-block:: javascript

        // 监听消息已发送事件
        cube.messaging.on(MessagingEvent.Sent, onSent);
        // 监听接收到消息事件
        cube.messaging.on(MessagingEvent.Notify, onNotify);

    ``onSent()`` 和 ``onNotify()`` 是事件回调函数。


#. 启动引擎和消息服务模块，完成用户签入。

    .. code-block:: javascript

        // 启动魔方引擎
        cube.start(config, function() {
            [...]

            // 启动消息模块
            cube.messaging.start();

            // 签入账号
            cube.signIn(contactIdInput.value, contactNameInput.value);
        }, function() {
            [...]
        });


#. 发送消息。

    .. code-block:: javascript

        function sendMessage() {
            [...]

            // 创建 Message 实例
            var message = new Message({ content: content });
            // 发送消息给目标联系人
            cube.messaging.sendToContact(target, message);

            [...]
        }

#. 处理接收到的消息。

    .. code-block:: javascript

        function onNotify(event) {
            // 从事件中得到接收到的消息实例
            var message = event.getData();

            var text = [message.from, ' -> ', message.to,
                ' (', formatDate(message.getRemoteTimestamp()), '): ',
                    message.getPayload().content, '\n'];

            [...]
        }

#. 处理已发送的消息。

    .. code-block:: javascript

        function onSent(event) {
            // 从事件中得到已发送的消息实例
            var message = event.getData();

            var text = [message.from, ' -> ', message.to,
                ' (', formatDate(message.getRemoteTimestamp()), '): ',
                    message.getPayload().content, '\n'];

            [...]
        }

示例程序会将已经发送的消息和已经接收的消息显示在页面的 ``textarea`` 标签里以便我们直观的看到消息。


.. note::

    很多时候，我们需要在界面上为用户呈现最近的消息记录。当用户签入之后，您可以使用 `queryMessages <../../_static/cube-javascript-api/MessagingService.html#queryMessages>`__ 查询指定起始时间内的消息。而 `queryMessagesWithContact <../../_static/cube-javascript-api/MessagingService.html#queryMessagesWithContact>`__ 和 `queryMessagesWithGroup <../../_static/cube-javascript-api/MessagingService.html#queryMessagesWithGroup>`__ 提供了对指定联系人和群组相关消息的查询。
