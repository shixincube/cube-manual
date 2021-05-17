===============================
服务器配置指南
===============================

.. contents:: 目录

时信魔方的各个服务器节点可以使用 :doc:`时信魔方控制台 </features/server_console>` 进行配置和管理，而这节里我们重点介绍的是时信魔方主要服务器组件的配置方式以便您在实际开发环境中按需进行包括主从、集群架构的配置。


.. _configuration-framework:

服务器组件
===============================

时信魔方的核心服务器组件包括调度服务器、服务单元服务器和媒体单元服务器等，他们之间的数据流关系如下图所示：

.. figure:: /images/data_flow_topology.png
    :align: center
    :alt: 时信魔方服务器数据流图

    *时信魔方服务器数据流图*

图中 **Dispatcher** 是调度服务器， **Service** 是服务单元， **Media** 是媒体单元。

* 调度服务器负责接入客户端，客户端通过连接调度服务器来处理数据。
* 服务单元服务器按照模块化原则将各个业务单元封装在模块里，每个模块各自完成具体的业务功能，例如：联系人模块负责联系的签入和签出管理，即时消息模块负责消息的推送和接收等等。
* 媒体单元服务器负责处理客户端与客户端、客户端与服务器之间的媒体流数据，实现 MCU 或 SFU 流传输、分析和记录等。

其中 **服务单元** 是主要的计算和处理节点，包括授权服务、联系人服务、即时消息服务、文件存储服务、多方音视频通讯服务、会议服务等在内的核心功能都在服务单元里进行处理。调度服务器仅负责接入客户端并从服务单元获取数据，媒体单元则仅处理音视频流数据。

因此在实际的部署配置时，我们建议1个调度服务器连接多个（2个以上）服务单元服务器，多个服务单元服务器共享1个媒体单元服务器。

时信魔方服务器的配置文件都放置在服务器工程的 ``config`` 目录下面。


.. _configuration-dispatcher:

调度服务器 (Dispatcher) 配置
===============================

与调度服务器相关的配置文件有：

* ``dispatcher.xml`` - Cell 容器配置文件。
* ``dispatcher.properties`` - 调度服务器工作参数配置文件。
* ``console-follower-dispatcher.properties`` - 调度服务器连接控制台服务参数配置文件。

运行容器配置
-------------------------------

调度服务器使用 Cell 容器运行，配置文件 ``dispatcher.xml`` 主要配置了服务监听端口和支持的服务单元。

1. 配置 :term:`SHM` 协议的监听地址和端口，默认端口号 ``7000`` ：

    .. code-block:: xml

        <server>
            <!-- 服务绑定的地址 -->
            <host>0.0.0.0</host>
            <!-- 服务绑定的端口号 -->
            <port>7000</port>
            <!-- 最大允许连接数 -->
            <max-connection>1000</max-connection>
        </server>

2. 配置 :term:`WebSocket` 协议的监听地址和端口：

    2.1. WebSocket 服务器配置，默认端口号 ``7070`` ：

        .. code-block:: xml

            <ws-server>
                <!-- 服务绑定的地址 -->
                <host>0.0.0.0</host>
                <!-- 服务绑定的端口号 -->
                <port>7070</port>
                <!-- 最大允许连接数 -->
                <max-connection>1000</max-connection>
            </ws-server>

    2.2. WebSocket Secure 服务器配置，默认端口号 ``7077`` ：

        .. code-block:: xml

            <wss-server>
                <!-- 服务绑定的地址 -->
                <host>0.0.0.0</host>
                <!-- 服务绑定的端口号 -->
                <port>7077</port>
                <!-- 最大允许连接数 -->
                <max-connection>1000</max-connection>
            </wss-server>

3. 配置 :term:`SSL` (Secure Socket Layer)

    服务器使用 :term:`JKS` 存储证书数据，建议将 JKS 文件放置在部署目录下面。

    .. code-block:: xml

        <ssl>
            <keystore>server.jks</keystore>
            <password>
                <store-password>shixincube.com</store-password>
                <manager-password>shixincube.com</manager-password>
            </password>
        </ssl>


4. 配置默认日志

    日志等级从低到高依次是：``DEBUG`` ， ``INFO`` ， ``WARNING`` 和 ``ERROR`` 。

    .. code-block:: xml

        <log>
            <!-- 日志等级 -->
            <level>DEBUG</level>
        </log>


.. _configuration-service:

服务单元服务器 (Service) 配置
===============================


.. _configuration-media-unit:

媒体单元服务器 (Media Unit) 配置
===============================================

[TODO - hidden]
