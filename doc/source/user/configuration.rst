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

1. 配置 :term:`SHM` 协议的监听地址、端口和最大连接数，默认端口号 ``7000`` ：

    .. code-block:: xml

        <server>
            <!-- 服务绑定的地址 -->
            <host>0.0.0.0</host>
            <!-- 服务绑定的端口号 -->
            <port>7000</port>
            <!-- 最大允许连接数 -->
            <max-connection>1000</max-connection>
        </server>

2. 配置 :term:`WebSocket` 协议的监听地址、端口和最大连接数：

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

    2.2. Secure WebSocket 服务器配置，默认端口号 ``7077`` ：

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

5. 配置 Cellet 服务单元

    .. code-block:: xml

        <cellets>
            <cellet port="7000,7070,7077">
                <class>cube.dispatcher.auth.AuthCellet</class>
                <class>cube.dispatcher.contact.ContactCellet</class>
                <class>cube.dispatcher.filestorage.FileStorageCellet</class>
                <class>cube.dispatcher.fileprocessor.FileProcessorCellet</class>
                <class>cube.dispatcher.messaging.MessagingCellet</class>
                <class>cube.dispatcher.multipointcomm.MultipointCommCellet</class>
                <class>cube.dispatcher.conference.ConferenceCellet</class>
            </cellet>
        </cellets>

    这里可以为不同的服务单元指定端口。如果您的服务器修改了端口需要修改 ``port`` 属性对应的端口号。


:term:`HTTP`/:term:`HTTPS` 配置
-----------------------------------

时信魔方的 Web/HTML5 客户端需要使用 HTTP/HTTPS 协议进行文件数据的传输。在 ``dispatcher.properties`` 文件里进行配置。

.. code-block:: properties

    # HTTP 监听地址
    http.host=0.0.0.0
    # HTTP 监听端口
    http.port=7010
    # HTTPS 监听地址
    https.host=0.0.0.0
    # HTTPS 监听端口
    https.port=7017
    # JKS 文件
    keystore=server.jks
    storePassword=shixincube.com
    managerPassword=shixincube.com




主/从连接配置
-------------------------------

在 ``dispatcher.properties`` 文件里配置调度服务器后连的服务单元服务器。

.. code-block:: properties

    # Cellet list
    cellets=Auth,Contact,Messaging,FileStorage,FileProcessor,MultipointComm,Conference

    # Director 1 config
    director.1.address=127.0.0.1
    director.1.port=6000
    director.1.cellets=Auth,Contact,Messaging,FileStorage,FileProcessor,MultipointComm,Conference
    director.1.weight=5

各参数说明如下：

=========================== =============================================================
参数名                       说明
=========================== =============================================================
cellets                     配置此调度服务器可以连接的 Cellet 服务单元
director. *X* .address      被连接服务单元的访问地址
director. *X* .port         被连接服务单元的访问端口
director. *X* .cellets      配置连接哪些 Cellet 服务，使用半角逗号分隔
director. *X* .weight       配置连接此服务单元的权重，取值范围 1 到 10，数值越大权重越大
=========================== =============================================================

.. note:: *X* 是从 1 到 N 的自编序号。

当需要连接多个服务单元时，可以增加 *director* 配置参数项，例如配置调度服务器连接 3 个服务单元节点：

.. code-block:: properties

    # Director 1 config
    director.1.address=192.168.20.11
    director.1.port=6000
    director.1.cellets=Auth,Contact,Messaging,FileStorage,FileProcessor,MultipointComm,Conference
    director.1.weight=5

    # Director 2 config
    director.2.address=192.168.20.12
    director.2.port=6000
    director.2.cellets=Auth,Contact,Messaging,FileStorage,FileProcessor,MultipointComm,Conference
    director.2.weight=5

    # Director 3 config
    director.3.address=192.168.20.13
    director.3.port=6000
    director.3.cellets=Auth,Contact,Messaging,FileStorage,FileProcessor,MultipointComm,Conference
    director.3.weight=2



|


.. _configuration-service:

服务单元服务器 (Service) 配置
===============================

与服务单元服务器相关的配置文件有：

#. 服务器配置相关：
    * ``service.xml`` - Cell 容器配置文件。
    * ``storage.json`` - 数据库配置文件。

#. 缓存配置相关：
    * ``token-pool.properties`` - 集群的令牌缓存池配置文件。
    * ``general-cache.properties`` - 集群的通用型缓存配置文件。
    * ``contact-cache.properties`` - 联系人模块的集群联系人数据缓存配置文件。
    * ``group-cache.properties`` - 联系人模块的集群群组数据缓存配置文件。
    * ``filelabel-cache.properties`` - 文件模块的集群文件标签数据缓存配置文件。
    * ``messaging-series-memory.properties`` - 消息模块的集群时序缓存配置文件。

#. 模块配置相关：
    * ``file-storage.properties`` - 文件存储模块配置文件。
    * ``multipoint-comm.properties`` - 多方通讯模块配置文件。



服务器配置
-------------------------------

容器配置
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

容器配置文件是 ``service.xml`` 。配置服务器监听端口：

.. code-block:: xml

    <server>
        <!-- 服务绑定的地址 -->
        <host>0.0.0.0</host>
        <!-- 服务绑定的端口号 -->
        <port>6000</port>
        <!-- 最大允许连接数 -->
        <max-connection>1000</max-connection>
    </server>

如果修改了端口配置信息，需要同时修改 ``cellet`` 标签的 ``port`` 属性：

.. code-block:: xml

    <cellets>
        <cellet port="6000">
        ...
        </cellet>
    </cellets>


配置联系人事件队列，时信魔方服务器以“联系人”为基本的数据元进行数据管理，因此主要的事件队列以联系人为主检索条件。

.. code-block:: xml

    <adapter name="Contacts" host="192.168.100.160" port="6860">
        <nodes>
            <node host="192.168.100.165" port="6860"></node>
            <node host="192.168.100.175" port="6860"></node>
        </nodes>
    </adapter>

``adapter`` 标签配置使用 **Contacts** 作为队列名称且 **不可修改** ，``host`` 配置为部署主机的可访问内网地址，``port`` 配置为集群端口号 6860 。

``nodes`` 标签下面配置其他集群内的节点信息，同样的，``host`` 配置为节点的访问地址，``port`` 配置为节点的监听端口。

上述示例里，我们配置了一个3个节点构成的对等集群网络，访问地址分别是 *192.168.100.160* 、 *192.168.100.165* 和 *192.168.100.175* 。

.. tip::

    Cell 的 Nucleus 适配器 (Adapter) 支持节点“传播”，当集群节点很多时，只需要填写1到2个节点即可，通过自动“传播”方式，单个节点能找到集群里其他节点，并建立通信。


数据库/存储配置
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

数据库配置文件是 ``storage.json`` ：

.. code-block:: json

    {
        "Auth": {
            "type": "SQLite",
            "file": "storage/AuthService.db"
        },

        "Contact": {
            "type": "SQLite",
            "file": "storage/ContactService.db"
        },

        "Messaging": {
            "type": "SQLite",
            "file": "storage/MessagingService.db"
        },

        "FileStorage": {
            "type": "SQLite",
            "file": "storage/FileStorageService.db"
        },

        "Conference": {
            "type": "SQLite",
            "file": "storage/ConferenceService.db"
        }
    }

上述配置使用 **SQLite** 作为数据库系统进行数据存储。您也可以使用其他数据库系统，例如使用 MySQL 数据库：

.. code-block:: json

    "Auth": {
        "type"     : "MySQL",
        "host"     : "192.168.100.32",
        "port"     : 3306,
        "schema"   : "cube_3",
        "user"     : "cube",
        "password" : "shixincube"
    }

.. note::

    服务器启动时会自动检测数据库表是否存在，如果不存在服务器会创建新的数据库表。

|

缓存配置
-------------------------------

时信魔方服务器使用了针对即时通信技术特点开发的缓存系统，如果您需要使用第三方的缓存系统，例如 `Redis <https://redis.io/>`__ 等，请参考 :doc:`时信魔方开发者向导 </dev/dev_guide>` 进行配置，这里我们主要说明如何配置时信魔方服务器默认的两种缓存服务：**存储键值对的高速缓存** 和 **采用时序存储的高速缓存** 。


存储键值对的高速缓存
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

时信魔方使用对等集群方式的缓存器来缓存键值对数据，因此缓存程序随程序主进程一起运行，相较 C/S 模式的缓存系统来说，不连接外部缓存器服务进程。

键值对缓存器一共有5个，分别由 ``token-pool.properties`` 、 ``general-cache.properties`` 、 ``contact-cache.properties`` 、 ``group-cache.properties`` 、 ``filelabel-cache.properties`` 5个文件进行配置。他们的配置项相同，各配置项说明如下：

=========================== ===================================================================
参数名                       说明
=========================== ===================================================================
host                         缓存器可被其他对等节点访问的地址
port                         缓存器开放的连接端口
capacity                     缓存器容量，如果数据量超过该容量，缓存器按照“LRU”原则将数据转储到存储桩。
expiry                       单条数据的有效时长，单位：毫秒
threshold                    缓存使用的最大内存大小，单位：字节，如果缓存占用内存空间超过该数值，缓存器按照“LRU”原则将数据转储到存储桩。
blocking                     当存储任务排队时，每个存储任务阻塞等待的最长时长，单位：毫秒
endpoint. *X* .host          集群中的其他节点的访问地址
endpoint. *X* .port          集群中的其他节点的访问端口
storage                      缓存器放置临时数据的目录（*可选项*）
pedestal.host                存储桩访问地址（*可选项*）
pedestal.port                存储桩访问端口（*可选项*）
pedestal.backup.host         备用存储桩访问地址（*可选项*）
pedestal.backup.port         备用存储桩访问端口（*可选项*）
=========================== ===================================================================

.. note:: *X* 是从 1 到 N 的自编序号。



采用时序存储的高速缓存
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

时信魔方的即时消息模块在进行消息处理时使用时序逻辑的缓存器，即时消息的时序缓存器的配置文件是： ``messaging-series-memory.properties`` ，配置项说明如下：

=========================== ===================================================================
参数名                       说明
=========================== ===================================================================
capacity                     缓存器可容纳的最大数据条目数
segment.num                  每个键对应的时序数据的分段数量
segment.size                 每个分段的数据的数据量
host                         缓存器可被其他对等节点访问的地址
port                         缓存器开放的连接端口
expiry                       单条数据的有效时长，单位：毫秒
threshold.index              键的索引数据占用内存空间的最大值，单位：字节
threshold.data               值数据占用内存空间的最大值，单位：字节
endpoint. *X* .host          集群中的其他节点的访问地址
endpoint. *X* .port          集群中的其他节点的访问端口
index.pedestal.host          键数据存储桩访问地址（*可选项*）
index.pedestal.port          键数据存储桩访问端口（*可选项*）
data.pedestal.host           值数据存储桩访问地址（*可选项*）
data.pedestal.port           值数据存储桩访问端口（*可选项*）
=========================== ===================================================================

.. note:: *X* 是从 1 到 N 的自编序号。


|


模块配置
-------------------------------

文件存储模块配置
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

文件存储模块的配置文件是 ``file-storage.properties`` 。

.. code-block:: properties

    # 使用的文件管理系统：disk 或 fastdfs
    filesystem=disk

    # 磁盘文件系统的目录
    disk.dir=storage/files
    disk.host=127.0.0.1
    disk.port=6080


    # 文件标签集群缓存配置
    label.cache.name=FileLabelCache
    label.cache.config={"type": "SMC", "configFile": "config/filelabel-cache.properties"}



多方通讯模块配置
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

多方通讯模块的配置文件是 ``multipoint-comm.properties`` 。

.. code-block:: properties

    # Media unit list
    unit.1.kms.url=ws://192.168.56.121:6700/media


|


.. _configuration-media-unit:

媒体单元服务器 (Media Unit) 配置
===============================================

Kurento Media Server 的配置文件默认目录是：

``/etc/kurento/kurento.conf.json``

配置内容如下：

.. code-block:: json

    {
      "mediaServer": {
        "resources": {
          "//": "KMS will raise an error when reaching this usage% of Kernel resources",
          "//": "Applies to allowed number of threads, and number of open file descriptors",
          "//": "Default: 0.8 (80%)",
          "//exceptionLimit": "0.8",

          "//": "KMS process will be automatically killed when there are no sessions but this % of resources are in use",
          "//killLimit": "0.7",

          "//": "Garbage collector period, in seconds",
          "//": "Default: 240 (4 minutes)",
          "garbageCollectorPeriod": 240,

          "//": "Whether to disable the RPC API request cache, for memory constrained environments",
          "//": "Default: false",
          "disableRequestCache": false
        },
        "net": {
          "websocket": {
            "//": "Try (or not) to use IPv6 for the WebSocket connection, with IPv4 fallback",
            "//": "Default: true",
            "//ipv6": false,

            "//": "WebSocket port where API clients connect to control KMS",
            "//": "Set to 0 or comment out the line to disable WebSocket access",
            "port": 6700,

            "secure": {
              "//": "Secure WebSocket port where API clients connect to control KMS",
              "//": "Set to 0 or comment out the line to disable Secure WebSocket access",
              "//port": 8433,

              "//": "Path (absolute or relative to this config file) to the",
              "//": "concatenated certificate (chain) file(s) + private key, in PEM format",
              "//certificate": "cert+key.pem",

              "//": "Password for the private key, if one was set when the key was created",
              "//password": ""
            },

            "//registrar": {
              "//address": "ws://localhost:9090",
              "//localAddress": "localhost"
            },

            "//": "Maximum queue length of pending connections (see sysctl tcp_max_syn_backlog)",
            "//": "Default: SOMAXCONN (128)",
            "//connqueue": 128,

            "path": "media",
            "threads": 10
          }
        }
      }
    }

* 配置 ``net.websocket.port`` 为 **6700**
* 配置 ``net.websocket.path`` 为 **media**
