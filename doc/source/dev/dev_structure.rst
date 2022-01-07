===============================
数据结构
===============================

.. contents:: 目录


.. _auth-token:

Auth Token
===============================

授权令牌。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - code
      - string
      - Y
      - *--*
      - 令牌编码
    * - domain
      - string
      - Y
      - *--*
      - App 的访问域
    * - appKey
      - string
      - Y
      - *--*
      - App 的 Key 串
    * - cid
      - long
      - Y
      - 0
      - 令牌绑定的联系人 ID
    * - issues
      - long
      - Y
      - *--*
      - 发布时间
    * - expiry
      - long
      - Y
      - *--*
      - 过期时间
    * - description
      - JSON
      - Y
      - *--*
      - 主描述信息 :ref:`pd`


**JSON 示例**

.. code-block:: json

    {
        "code"   : "HmKZiQBbuXBuiFijgTTXbwKHeveWjItP",
        "domain" : "shixincube.com",
        "appKey" : "shixin-cubeteam-opensource-appkey",
        "cid"    : 1615268975051,
        "issues" : 1617005161851,
        "expiry" : 1617609961851,
        "description" : {
            "address" : "127.0.0.1",
            "port"    : 7000,
            "primaryContent" : {
                "FileStorage" : {
                    "fileURL" : "http://127.0.0.1:7010/filestorage/file/",
                    "fileSecureURL" : "https://127.0.0.1:7017/filestorage/file/"
                },
                "MultipointComm" : {
                    "iceServers" : [
                        {
                            "urls" : "turn:202.183.15.67:3478",
                            "username" : "shixincube.com",
                            "credential" : "cube_shixin"
                        }
                    ]
                }
            }
        }
    }


.. _pd:

Primary Description
===============================

主内容描述。用于配置客户端各参数，为各模块提供必要的配置信息。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - address
      - string
      - Y
      - *--*
      - 客户端需要优先连接的主地址
    * - port
      - int
      - Y
      - *--*
      - 客户端需要优先连接的端口
    * - primaryContent
      - JSON
      - Y
      - *--*
      - 对客户端进行配置的信息

.. note:: 字段 `primaryContent` 数据格式由各个模块填写以模块名为键的模块的配置参数。

**JSON 示例**

.. code-block:: json

    {
        "address" : "127.0.0.1",
        "port"    : 7000,
        "primaryContent" : {
            "FileStorage" : {
                "fileURL" : "http://127.0.0.1:7010/filestorage/file/",
                "fileSecureURL" : "https://127.0.0.1:7017/filestorage/file/"
            },
            "MultipointComm" : {
                "iceServers" : [
                    {
                        "urls" : "turn:202.183.15.67:3478",
                        "username" : "shixincube.com",
                        "credential" : "cube_shixin"
                    }
                ]
            }
        }
    }

|

.. _device:

Device
===============================

设备描述。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - name
      - string
      - Y
      - *--*
      - 设备名称
    * - platform
      - string
      - Y
      - *--*
      - 设备平台描述

.. tip::

    设备名称一般为：Web、Windows、Mac、Linux、iPhone、iPad、Android、AndroidPad等。平台描述采用“厂商+平台名+平台版本信息+操作系统信息”的字符串拼接形式。

**JSON 示例**

.. code-block:: json

    {
        "name" : "Web",
        "platform": "Chrome/Mac OS X 10.15"
    }


.. _contact:

Contact
===============================

联系人实体。联系人是魔方管理的最小用户单位，表示一个可被管理的基础实体，代表一个具体的用户及其关联的设备。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - id
      - long
      - Y
      - *--*
      - 联系人 ID
    * - domain
      - string
      - Y
      - *--*
      - 联系人所在域
    * - timestamp
      - long
      - Y
      - *--*
      - 数据时间戳
    * - name
      - string
      - Y
      - *--*
      - 联系人名称
    * - namePY
      - string
      - N
      - *--*
      - 联系人名称的拼音形式
    * - context
      - JSON
      - N
      - *--*
      - 关联的上下文数据
    * - devices
      - Array< :ref:`device` >
      - N
      - *--*
      - 联系人当前登录的设备列表
    * - device
      - :ref:`device`
      - N
      - *--*
      - 当前终端联系人使用的设备


**JSON 示例**

.. code-block:: json

    {
        "id" : 1615268975051,
        "domain" : "shixincube.com",
        "timestamp" : 1615271263193,
        "name" : "时信开发者",
        "namePY" : "shi,xin,kai,fa,zhe",
        "devices" : [
            {
                "address" : "127.0.0.1",
                "port" : 52568,
                "name" : "Web",
                "platform" : "Firefox/Mac OS X 10.15"
            }
        ],
        "context": {
            "id" : 1615268975051,
            "account" : "xujiangwei",
            "name" : "时信开发者",
            "token" : "usJbeagOKAwpBEYKBUKvbaricuKfaKum",
            "avatar" : "avatar16.png",
            "state" : 0,
            "region" : "--",
            "department" : "--",
            "last" : 1617240922478
        }
    }


.. _contact-appendix:

Contact Appendix
===============================

联系人的附录。附录用于记录联系人的相关操作数据。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - contact
      - JSON
      - Y
      - *--*
      - 附录所属的联系人，参看 :ref:`contact`
    * - remarkName
      - string
      - Y
      - *--*
      - 该联系人的备注名

**JSON 示例**

.. code-block:: json

    {
        "contact": {
            "id" : 1615268975051,
            "domain" : "shixincube.com",
            "timestamp" : 1615271263193,
            "name" : "时信开发者",
            "namePY" : "shi,xin,kai,fa,zhe",
            "context": {
                "id" : 1615268975051,
                "account" : "xujiangwei",
                "name" : "时信开发者",
                "token" : "usJbeagOKAwpBEYKBUKvbaricuKfaKum",
                "avatar" : "avatar16.png",
                "state" : 0,
                "region" : "--",
                "department" : "--",
                "last" : 1617240922478
            }
        },
        "remarkName" : "银河之外的你"
    }


.. _group:

Group
===============================

群组描述。群组是一系列联系人的集合，通过群组将联系人进行集中管理。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - id
      - long
      - Y
      - *--*
      - 群组 ID
    * - domain
      - string
      - Y
      - *--*
      - 群组所在域
    * - timestamp
      - long
      - Y
      - *--*
      - 数据时间戳
    * - name
      - string
      - Y
      - *--*
      - 群组名称
    * - tag
      - string
      - Y
      - *--*
      - 群组标签
    * - ownerId
      - long
      - Y
      - *--*
      - 群组当前群主的 ID
    * - creation
      - long
      - Y
      - *--*
      - 群组的创建时间
    * - lastActive
      - long
      - Y
      - *--*
      - 群组的最后一次活跃时间戳
    * - state
      - int
      - Y
      - *--*
      - 群组状态，参看 :ref:`group-state`
    * - members
      - Array<long>
      - N
      - *--*
      - 群组成员的 ID 列表

**JSON 示例**

.. code-block:: json

    {
        "id" : 1151210247,
        "domain" : "shixincube.com",
        "timestamp" : 1615278694211,
        "name" : "这是一个群",
        "ownerId" : 1615268975051,
        "tag" : "public",
        "creation" : 1617197011036,
        "lastActive" : 1617197111210,
        "state" : 0,
        "members" : [
            1615268975051,
            50001001,
            50001005,
            50001004,
            50001003,
            50001002
        ]
    }


.. _group-appendix:

Group Appendix
===============================

群组的附录。附录用于记录群组的相关操作数据。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - groupId
      - long
      - Y
      - *--*
      - 附录所属的群组 ID
    * - group
      - JSON
      - Y
      - *--*
      - 附录所属的群组的数据，参看 :ref:`group`
    * - notice
      - string
      - Y
      - *--*
      - 群组公告
    * - noticeOperatorId
      - long
      - Y
      - *--*
      - 群组公告编写人的 ID
    * - noticeTime
      - long
      - Y
      - *--*
      - 群组公告的更新时间
    * - memberRemarks
      - Array<JSON>
      - Y
      - *--*
      - 成员的备注名清单，JSON 主键：|br| |br|
        ``id`` - long ： 联系人ID |br| |br|
        ``name`` - string ： 在群内的备注名
    * - remark
      - string
      - Y
      - ``""``
      - 群组的备注名
    * - following
      - boolean
      - Y
      - ``false``
      - 成员对该群是否进行了关注。 |br| 如果进行了关注该值为 ``true``
    * - memberNameDisplayed
      - boolean
      - Y
      - ``false``
      - 是否需要显示群组成员的名称
    * - applicants
      - Array<JSON>
      - N
      - *--*
      - 申请人清单，JSON 主键：|br| |br|
        ``id`` - long ： 联系人 ID |br| |br|
        ``time`` - long ： 申请时间 |br| |br|
        ``postscript`` - string ： 附言 |br| |br|
        ``agreed`` - boolean ： 是否允许 |br| |br|
        ``agreedTime`` - long ： 处理申请时间
    * - commId
      - long
      - N
      - *--*
      - 群组的通讯 ID


.. _group-state:

Group State
===============================

群组的状态描述。

.. list-table::
    :widths: 30 20 50
    :header-rows: 1

    * - 状态名
      - 状态码
      - 状态描述
    * - Normal
      - 0
      - 正常状态
    * - Dismissed
      - 1
      - 解散状态
    * - Forbidden
      - 2
      - 禁用状态
    * - HighRisk
      - 3
      - 高风险状态
    * - Disabled
      - 9
      - 失效状态


.. _contact-zone:

Contact Zone
===============================

联系人分区。联系人分区是联系人和群组的集合，这个集合里没有管理逻辑和规则，可以按照需求随意修改分区数据。
例如，用户的“好友列表”就可以是一个名为“friends”的分区。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - id
      - long
      - Y
      - *--*
      - 分区的 ID
    * - domain
      - string
      - Y
      - *--*
      - 分区所属的域
    * - timestamp
      - long
      - Y
      - *--*
      - 数据的时间戳
    * - owner
      - long
      - Y
      - *--*
      - 分区所属的联系人 ID
    * - name
      - string
      - Y
      - *--*
      - 分区名称， **分区名称是分区的唯一标识**
    * - displayName
      - string
      - Y
      - *--*
      - 分区的显示名
    * - state
      - int
      - Y
      - *--*
      - 分区状态
    * - peerMode
      - boolean
      - Y
      - ``false``
      - 分区是否是端到端模式
    * - participants
      - Array< :ref:`contact-zone-participant` >
      - N
      - *--*
      - 当前分区里包含的参与者



.. _contact-zone-participant:

Contact Zone Participant
===============================

分区参与人。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - id
      - long
      - Y
      - *--*
      - 参与人 ID
    * - type
      - int
      - Y
      - *--*
      - 参与人类型： |br| |br|
        ``1`` - Contact |br|
        ``2`` - Group |br|
        ``3`` - Organization |br|
        ``4`` - System |br|
        ``5`` - Conference |br|
        ``9`` - Other
    * - timestamp
      - long
      - Y
      - *--*
      - 数据的时间戳
    * - state
      - int
      - Y
      - *--*
      - 参与人状态，参看 :ref:`contact-zone-participant-state`
    * - inviterId
      - long
      - Y
      - *--*
      - 邀请人的 ID
    * - postscript
      - string
      - Y
      - ``""``
      - 加入分区时的附言



.. _contact-zone-participant-state:

Contact Zone Participant State
===============================

.. list-table::
    :widths: 30 20 50
    :header-rows: 1

    * - 状态名
      - 状态码
      - 状态描述
    * - Normal
      - 0
      - 正常状态
    * - Pending
      - 1
      - 待处理状态
    * - KnownPending
      - 2
      - 已知待处理状态
    * - Reject
      - 3
      - 拒绝



.. _group-bundle:

Group Bundle
===============================

群组操作时受影响的相关数据描述。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - group
      - JSON
      - Y
      - *--*
      - 群组数据 :ref:`group`
    * - modified
      - Array<long>
      - Y
      - *--*
      - 群组操作时变化的群成员 ID 列表
    * - operator
      - long
      - N
      - *--*
      - 本次操作的联系人的 ID



.. _file-label:

File Label
===============================

文件标签。文件标签表示可被存储到系统的文件实体。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 标签的 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 标签所属的域
    * - ``fileCode``
      - string
      - Y
      - *--*
      - 文件码
    * - ``ownerId``
      - long
      - Y
      - *--*
      - 标签所属的联系人 ID
    * - ``fileName``
      - string
      - Y
      - *--*
      - 文件名
    * - ``fileSize``
      - long
      - Y
      - *--*
      - 文件大小，单位：字节
    * - ``lastModified``
      - long
      - Y
      - *--*
      - 文件最后一次修改时间戳
    * - ``completedTime``
      - long
      - Y
      - *--*
      - 文件在服务器处理完成时的时间戳
    * - ``expiryTime``
      - long
      - Y
      - *--*
      - 标签的失效时间戳
    * - ``fileType``
      - string
      - Y
      - *--*
      - 文件类型
    * - ``md5``
      - string
      - N
      - *--*
      - 文件内容的 MD5 散列码
    * - ``sha1``
      - string
      - N
      - *--*
      - 文件内容的 SHA1 散列码
    * - ``fileURL``
      - string
      - N
      - *--*
      - 文件的访问 URL ，默认使用 HTTP 协议
    * - ``fileSecureURL``
      - string
      - N
      - *--*
      - 文件的安全访问 URL ，默认使用 HTTPS 协议



.. _file-thumbnail:

File Thumbnail
===============================

文件缩略图。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 缩略图 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 缩略图所属的域
    * - ``fileLabel``
      - :ref:`file-label`
      - Y
      - *--*
      - 缩略图的文件标签
    * - ``width``
      - int
      - Y
      - *--*
      - 缩略图宽度
    * - ``height``
      - int
      - Y
      - *--*
      - 缩略图高度
    * - ``sourceFileCode``
      - string
      - Y
      - *--*
      - 源文件的文件码
    * - ``sourceWidth``
      - int
      - N
      - *--*
      - 源文件的宽度
    * - ``sourceHeight``
      - int
      - N
      - *--*
      - 源文件的高度
    * - ``quality``
      - int
      - Y
      - *--*
      - 缩略图质量，取值范围： ``0`` - ``100``




|

.. |br| raw:: html

    <br>

.. |p-head| raw:: html

    <p>

.. |p-tail| raw:: html

    </p>

