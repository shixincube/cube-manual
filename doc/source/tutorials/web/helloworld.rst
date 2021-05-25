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

3. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/hello-world/ <http://localhost:8000/examples/hello-world/>`__ 或 `https://localhost:8443/examples/hello-world/ <https://localhost:8443/examples/hello-world/>`__ 进入演示程序界面。

4. 点击“启动”按钮启动魔方引擎。

5. 输入账号ID（至少6位数字），点击“签入”即可签入账号。

6. 点击“签出”按钮将账号签出，点击“停止”按钮停止魔方引擎。

.. figure:: /images/tutorials/web_hello_world.png
    :align: center
    :alt: Hello World

    *Hello World*


|


理解示例原理
===============================

时信魔方通过客户端 SDK 程序连接时信魔方服务器进行通信，如下图所示。应用程序通过在页面中引入客户端 JavaScript 的 SDK 库文件加载魔方程序，在应用程序启动后对魔方引擎进行必要的设置即可调用魔方的各模块进行工作。

.. figure:: /images/client_connect_server.png
    :align: center
    :alt: 客户端连接服务器示意图

    *客户端连接服务器*

这个示例是最简单的使用时信魔方的演示程序，在这个程序里，我们在页面加载 JavaScript 文件之后启动魔方，启动成功之后模拟用户签入到服务器。

.. figure:: /images/tutorials/web_hello_world_sequence.png
    :align: center
    :alt: JavaScript 客户端时序图

    *JavaScript 客户端时序图*

在程序界面上我们打印了每次操作的信息。

|


代码详解
===============================

示例里我们使用的文件有：

* **index.html**：主页面文件。
* **main.css**：页面样式表文件。
* **main.js**：示例的程序主文件。包括程序逻辑流程和页面事件处理。
* **cube.js**：时信魔方的 JavaScript 客户端库文件。


接下来我们详细说明一下代码。

#. 在 ``index.html`` 页面里，我们载入时信魔方的 JavaScript 客户端文件 ``cube.js``：

    .. code-block:: html

        <script type="text/javascript" src="../../js/cube.js"></script>

    在主程序 ``main.js`` 里获取魔方引擎的实例：

    .. code-block:: javascript

        const cube = window.cube();


#. 在主程序文件 ``main.js`` 里点击“启动”按钮将调用 ``startCube()`` 函数来启动魔方引擎：

    .. code-block:: javascript

        function startCube() {
            println('启动引擎...');

            // 填写引擎需要的参数
            var config = {
                "address": "127.0.0.1",
                "domain": "shixincube.com",
                "appKey": "shixin-cubeteam-opensource-appkey"
            };

            // 调用 start 启动引擎
            cube.start(config, function() {
                println('启动 Cube 成功');
            }, function() {
                println('启动 Cube 失败');
            });
        }

    在启动魔方引擎时我们需要向引擎提供诸如服务器地址、所属的域和当前应用程序的校验主键等信息。示例里填写的信息是用于演示用的预置数据。

    引擎启动函数 ``cube.start()`` 的后面两个参数分别是启动成功的回调函数和启动失败的回调函数。通过这两个函数我们就能知道引擎是否启动成功了。

#. 魔方引擎启动成功后，会从服务器申请对应域的访问令牌从而获得合法的访问权限。之后您就可以开始使用引擎各个模块了，例如发送消息或者邀请视频通话，但在这之前我们需要为当前的应用程序指定账号，通过该账号来进行通信。

    .. code-block:: javascript

        cube.signIn(contactIdInput.value, contactNameInput.value);

    调用 ``cube.signIn()`` 函数来签入账号，这个过程类似账号登录。时信魔方的账号 ID 必须是 ``number`` 类型，具体函数释义可以参考 `API 文档 <../../_static/cube-javascript-api/CubeShortcut.html#signIn>`__ 。

#. 同样的，调用 ``cube.singOut()`` 可以将账号签出，调用 ``cube.stop()`` 方法将魔方引擎关闭。


至此，您已经知道了如何启动魔方引擎并完成账号的签入，这是我们使用魔方客户端的第一步，也是最基础的一步。

.. note::

    魔方引擎需要支持 HTML5 特性的浏览器，如果您的浏览器不支持 HTML5 特性，我们建议您安装 Chrome 或者 Firefox 浏览器。
