===============================
Web/HTML5 - 群组语音通话
===============================

本示例较之前的示例程序复杂，因此建议您先阅读 :doc:`视频通话 <contact_video_call>` 和 :doc:`群组管理 <groups_mgmt>` 再阅读本示例。

:term:`时信魔方` 里可以直接使用 `Group`_ 进行群组成员之间的多人通话，这样便于群组成员随时发起通话邀请。

在开始讲解前我们需要先清楚以下几个概念：

    - 魔方引擎里 `CommField`_ 表示一个“场域”，一个场域就是若干个通讯终端节点的集合和控制中心，每个通讯终端用 `CommFieldEndpoint`_ 表示。
    - 每个终端参与通话时，上行（出站）数据和下行（入站）数据分离，且每个终端有且仅有一路上行连接和一路下行连接。
    - 通话控制策略影响媒体服务器对数据流的控制策略，由服务器控制终端在场域里的数据行为。终端的媒体控制操作不影响服务器上的媒体流控制。

|

快速开始
===============================

在开始运行程序之前您需要在您的设备上连接麦克风设备，例如使用 USB 进行连接的网络麦克风或者您的笔记本电脑内置的麦克风。

按照以下步骤运行演示程序：

1. 安装 :term:`时信魔方` 服务器：:doc:`/user/installation` 。

2. 执行以下命令运行演示程序：

    .. code-block:: shell

        git clone https://gitee.com/shixinhulian/cube-javascript
        cd cube-javascript/cube
        npm install
        npm run example

3. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/group-audio/ <http://localhost:8000/examples/group-audio/>`__ 或 `https://localhost:4430/examples/group-audio/ <https://localhost:4430/examples/group-audio/>`__ 进入演示程序界面。

4. 选择一个演示账号，点击“登录”按钮。

5. 点击“发起群组通话”按钮，并允许开启麦克风，将发起或加入群组通话。

6. 点击“加入群组通话”按钮，并允许开启麦克风，将加入群组通话。

.. figure:: /images/tutorials/web_group_audio.png
    :align: center
    :alt: 群组语音通话

    *群组语音通话*

在通话过程中，在“参与者”姓名后的输入框里可以实时看到对方麦克风的音量显示。如果需要查看 :term:`RTP` 统计数据信息，点击“显示/隐藏连接数据”，如下图所示：

.. figure:: /images/tutorials/web_group_audio_statistics.png
    :width: 500px
    :align: center
    :alt: 群组语音通话 RTP 数据统计

    *群组语音通话 RTP 数据统计*

|

工作原理
===============================

示例的基本工作原理：终端（浏览器）申请为指定的群组创建 `CommField`_ 进行群组通信，然后启动 :term:`WebRTC` 创建上行通道向服务器发送本地麦克风的数据流，接着创建下行通道服务器将场域内混码后的语音数据流发给给终端。

.. figure:: /images/media-mcu.png
    :align: center
    :alt: 媒体服务器 MCU 数据流

    *媒体服务器 MCU 数据流*

|

理解示例程序
===============================

#. 准备事件监听。除了通话的流程事件：``CommEvent.InProgress`` ，``CommEvent.Ringing`` ，``CommEvent.Connected`` 和 ``CommEvent.Bye``，我们还需要增加监听以下几个事件：

     * ``CommEvent.Arrived`` - 当有新的成员加入通话时该事件被触发。触发事件调用 ``onArrived()`` 函数刷新“参与者”列表。
     * ``CommEvent.Left`` - 当成员退出通话时该事件被触发。触发事件调用 ``onLeft()`` 函数刷新“参与者”列表。
     * ``CommEvent.MicrophoneVolume`` - 当成员麦克风音量改变时该事件被触发。触发事件调用 ``onMicrophoneVolume()`` 函数显示成员的麦克风音量数据。

#. 选择一个可用的设备。当我们的主机上安装了多个麦克风设备时，我们可以使用 `MediaDeviceTool.enumDevices() <../../_static/cube-javascript-api/MediaDeviceTool.html#.enumDevices>`__ 方法来枚举已经安装的设备，并选择其中一个设备使用，如下图所示：

    .. figure:: /images/tutorials/web_group_audio_select_device.png
        :align: center
        :alt: 选择麦克风设备

        *选择麦克风设备*

    在示例里我们使用 ``helper.js`` 里的 ``selectMediaDevice()`` 函数显示一个设备列表来进行选择操作。在发起通话前，设置媒体约束时将选择的设备赋值给媒体约束对象：

    .. code-block:: javascript

        // 创建媒体约束，使用音频，禁用视频
        var mediaConstraint = new MediaConstraint(false, true);
        // 设置设备
        mediaConstraint.setAudioDevice(device);


#. 使用 ``video`` 标签播放通话语音数据，在 ``index.html`` 里加入 video 标签：

    .. code-block:: html

        <div id="media-container">
            <video id="local" autoplay></video>
            <video id="remote" autoplay></video>
        </div>

    在发起通话前将标签 DOM 实例赋值给魔方引擎：

    .. code-block:: javascript

        cube.mpComm.setLocalVideoElement(document.querySelector('video#local'));
        cube.mpComm.setRemoteVideoElement(document.querySelector('video#remote'));


#. 控制麦克风数据。`CommFieldEndpoint`_ 提供了对麦克风设备数据的控制操作：

    * `isAudioMuted()`_ - 用于判断麦克风是否被静音。


|

代码详解
===============================

|


.. _Group: ../../_static/cube-javascript-api/Group.html
.. _CommField: ../../_static/cube-javascript-api/CommField.html
.. _CommFieldEndpoint: ../../_static/cube-javascript-api/CommFieldEndpoint.html
.. _isAudioMuted(): ../../_static/cube-javascript-api/CommFieldEndpoint.html#isAudioMuted
