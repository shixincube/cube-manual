===============================
Web/HTML5 - 视频通话
===============================

本节教程将使用 :term:`魔方引擎` 的 `MultipointComm <../../_static/cube-javascript-api/MultipointComm.html>`__ 多方通讯模块进行视频通话。

快速开始
===============================

在开始运行程序之前您需要在您的设备上连接摄像机设备，例如使用 USB 进行连接的网络摄像机或者您的笔记本电脑内置的摄像头。我们建议您准备两个浏览器分别登录两个账号，使用其中一个账号呼叫另一个账号来演示完成的视频通话流程。

按照以下步骤运行演示程序：

1. 安装 :term:`时信魔方` 服务器：:doc:`/user/installation` 。

2. 执行以下命令运行演示程序：

    .. code-block:: shell

        git clone https://gitee.com/shixinhulian/cube-javascript
        cd cube-javascript/cube
        npm install
        npm run example

3. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/contact-video/ <http://localhost:8000/examples/contact-video/>`__ 或 `https://localhost:4430/examples/contact-video/ <https://localhost:4430/examples/contact-video/>`__ 进入演示程序界面。

4. 输入 **对端 ID** ，例如：``20000`` ，输入 **我的 ID**  ，例如：``10000``，点击“登录”按钮启动演示程序。

5. 在主叫端点击“呼叫”按钮发起视频通话邀请。

6. 在被叫端点击“应答”按钮接受视频通话邀请。

7. 点击“挂断”按钮结束本次视频通话。


.. tip::

    在示例程序里，我们会使用浏览器的 ``navigator.mediaDevices.getUserMedia()`` 方法开启摄像机或麦克风设备。如果您没有授权演示程序页面启动摄像机设备，浏览器会提示您是否允许我们的演示程序启用摄像机。
    
    Chrome 浏览器在右上角会进行提示：

    .. figure:: /images/chrome_device.png
        :width: 300 px
        :align: center
        :alt: Chrome 提示媒体设备权限

    Firefox 浏览器在左上角会进行提示：

    .. figure:: /images/firefox_device.png
        :width: 400 px
        :align: center
        :alt: Firefox 提示媒体设备权限


程序运行之后您将在页面上看到双方的视频通话画面：

.. figure:: /images/tutorials/web_contact_video_a.png
    :align: center
    :alt: 视频通话 A

    *视频通话主叫端画面*

.. figure:: /images/tutorials/web_contact_video_b.png
    :align: center
    :alt: 视频通话 B

    *视频通话被叫端画面*

|


预备知识
===============================

在开始介绍程序逻辑之前，我们需要预先了解两个知识点：视频通话的数据流是如何流转的以及 :term:`WebRTC` 是如何进行工作的。

视频通话数据流
-------------------------------

一个典型的视频通话的数据流拓扑结构如图所示：

.. figure:: /images/tutorial_rtc_flow.jpg
    :width: 340 px
    :align: center
    :alt: 数据流拓扑结构

    *数据流拓扑结构*

* 信令服务器（Signaling Server）：信令服务器，负责为通信双方在通话前和通话后进行数据传输的服务器，把一方的通话邀请发送给另一方，以及把一方接受邀请的数据传递给另一方等。

* 媒体流服务器（Streaming Server）：媒体流服务器通过 :term:`RTP` 协议将接收到的一方的视频以及音频数据流转发或处理后转发给另一方。在时信魔方里，媒体流服务器一般被称为 **媒体服务器**，处理转发媒体流，还会对媒体数据进行一些优化处理，比如对多路音频数据进行混码，对多路视频进行融屏等等。

* 客户端（Client）：参与视频通话的客户端程序，连接信令服务器完成通话前准备和通话后处理。客户端将视频数据实时发送给媒体流服务器，并接收来自媒体服务器的数据，将视频画面显示在界面上。

在时信魔方里，以上的结构被实现为如下图所示的具体结构：

.. figure:: /images/data_flow_topology.png
    :width: 400 px
    :align: center
    :alt: 时信魔方数据流结构

    *时信魔方数据流结构*

当使用魔方引擎时，引擎将自动连接时信魔方服务器的多方通讯模块完成信令服务器的功能，连接媒体服务器完成媒体数据的发送和接收，这些功能仅需调用3个 API 即可完成：

* `makeCall <../../_static/cube-javascript-api/MultipointComm.html#makeCall>`__ ：发起主叫邀请。
* `answerCall <../../_static/cube-javascript-api/MultipointComm.html#answerCall>`__ ：被叫应答通话邀请。
* `hangupCall <../../_static/cube-javascript-api/MultipointComm.html#hangupCall>`__ ：结束当前的通话。

魔方引擎将极大简化上述的通信过程的处理。

|

WebRTC 的工作流
-------------------------------

关于 :term:`WebRTC` 的介绍在很多地方都能查阅，这里通过来自 `MDN Web Docs <https://developer.mozilla.org/>`__ 的两张图说明一下示例程序里使用到的技术细节。

WebRTC 通过 :term:`SDP` 进行媒体数据通道的协商，因此信令服务器要完成在各个对端之间进行 SDP 数据的传输，如下图所示：

.. figure:: /images/tutorials/WebRTC_Signaling_Diagram.svg
    :align: center
    :alt: WebRTC 信令数据流

    *WebRTC 信令数据流*

借助 :term:`ICE` 技术 WebRTC 能实现 :term:`NAT Traversal` 方式在对端之间传递音视频数据流，如下图所示：

.. figure:: /images/tutorials/WebRTC_ICE_Candidate_Exchange.svg
    :align: center
    :alt: WebRTC ICE Candidate Exchange

    *WebRTC ICE Candidate Exchange*

因此信令服务器需要完成 ICE Candidate 在终端之间的交换。

以上两点就是示例程序里使用到的主要的 WebRTC 技术。

|

理解示例程序
===============================

#. 准备工作

    在进行通话前，我们需要启动 `MultipointComm <../../_static/cube-javascript-api/MultipointComm.html>`__ 模块，并监听相关的通讯事件，接收到来自其他终端的通话邀请。

    启动 `MultipointComm <../../_static/cube-javascript-api/MultipointComm.html>`__ 模块，模块短名：``mpComm`` ：

    .. code-block:: javascript

        cube.mpComm.start();

    监听事件：

    .. code-block:: javascript

        // 事件：当前通话正在处理中
        cube.mpComm.on(CallEvent.InProgress, onInProgress);
        // 事件：对方已振铃
        cube.mpComm.on(CallEvent.Ringing, onRinging);
        // 事件：通话已经被接通
        cube.mpComm.on(CallEvent.Connected, onConnected);
        // 事件：通话已结束
        cube.mpComm.on(CallEvent.Bye, onBye);
        // 事件：有新通话邀请
        cube.mpComm.on(CallEvent.NewCall, onNewCall);
        // 事件：对端忙
        cube.mpComm.on(CallEvent.Busy, onBusy);
        // 事件：通话邀请或通话应答超时
        cube.mpComm.on(CallEvent.Timeout, onTimeout);
        // 事件：通话时发送错误
        cube.mpComm.on(CallEvent.Failed, onFailed);


#. 发起通话邀请

    通过联系人模块获取被叫方的联系人数据：

    .. code-block:: javascript

        cube.contact.getContact(peerIdInput.value, function(contact) {
            [...]
        });

    调用 `makeCall() <../../_static/cube-javascript-api/MultipointComm.html#makeCall>`__ 发起对该联系人的呼叫邀请：

    .. code-block:: javascript

        // 告诉引擎同时使用视频和音频通话
        var mediaConstraint = new MediaConstraint(true, true);

        // 调用 makeCall 发起邀请
        cube.mpComm.makeCall(contact, mediaConstraint, function() {
            [...]
        }, function(error) {
            [...]
        });


#. 应答邀请

    当收到其他终端的通话邀请时，点击“应答”来接通通话，调用 `answerCall() <../../_static/cube-javascript-api/MultipointComm.html#answerCall>`__ 方法：

    .. code-block:: javascript

        var mediaConstraint = new MediaConstraint(true, true);

        // 调用 answerCall 发起邀请
        cube.mpComm.answerCall(mediaConstraint, function(record) {
            [...]
        }, function(error) {
            [...]
        });


#. 结束通话

    通话结束时，点击“挂断”按钮来停止通话，关闭摄像机和麦克风。

    .. code-block:: javascript

        // 调用 hangupCall 结束通话
        cube.mpComm.hangupCall();


#. 事件处理

    这里我们主要讲解一下 ``NewCall`` 事件，``NewCall`` 事件的回调函数代码如下：

    .. code-block:: javascript

        function onNewCall(event) {
            // 当前的通话记录
            var record = event.getData();
            stateLabel.innerHTML = '收到来自 ' + record.getCaller().getId() + ' 通话邀请';

            [...]

            setTimeout(function() {
                if (confirm('是否接听来自 ' + record.getCaller().getId() + ' 的通话？')) {
                    answerCall();
                }
            }, 100);
        }

    **NewCall** 事件回调函数是当前签入的联系人收到主叫端的邀请时被回调，这时需要用户选择是否应答对方的通话邀请。函数的回调参数是当前的通话记录对象 `CallRecord <../../_static/cube-javascript-api/CallRecord.html>`__ 。


|

代码详解
===============================

示例里我们使用的文件有：

* **index.html**：主页面文件。
* **main.css**：页面样式表文件。
* **main.js**：示例的程序主文件。包括程序逻辑流程和页面事件处理。
* **cube.js**：时信魔方的 JavaScript 客户端库文件。

#. 使用 **video** 标签显示视频画面。我们需要在 *index.html* 加入两个 **video** 标签分别加载对方摄像机的画面和本地摄像机的画面。

    .. code-block:: html

        <video id="peerVideo" autoplay></video>

    .. code-block:: html

        <video id="myVideo" autoplay></video>


#. 在 *main.js* 里我们先为界面上的各个按钮绑定上处理事件：

    * “登录”按钮的事件处理函数是 ``start()``
    * “退出”按钮的事件处理函数是 ``stop()``
    * “呼叫”按钮的事件处理函数是 ``makeCall()``
    * “应答”按钮的事件处理函数是 ``answerCall()``
    * “挂断”按钮的事件处理函数是 ``hangupCall()``


#. 在发起和应答通话时将 **video** 标签的 :term:`DOM` 对象实例赋值到引擎，以便引擎自动加载画面：

    .. code-block:: javascript

        function makeCall() {
            // 设置视频标签元素
            cube.mpComm.setRemoteVideoElement(peerVideo);
            cube.mpComm.setLocalVideoElement(myVideo);

            [...]
        }

    .. code-block:: javascript

        function answerCall() {
            // 设置视频标签元素
            cube.mpComm.setRemoteVideoElement(peerVideo);
            cube.mpComm.setLocalVideoElement(myVideo);

            [...]
        }

|
