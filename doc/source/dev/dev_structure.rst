===============================
数据结构
===============================

.. contents:: 目录


.. _auth-token:

Auth Token
===============================

授权令牌。

.. list-table:: 
    :widths: 20 10 10 10 30
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
    :widths: 20 10 10 10 30
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
    :widths: 20 10 10 10 30
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
    :widths: 20 10 10 10 30
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
    :widths: 20 10 10 10 30
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
    :widths: 20 10 10 10 30
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
      - 群组状态
    * - members
      - Array< :ref:`contact` >
      - N
      - *--*
      - 群组成员列表

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
            {
                "id" : 1615268975051,
                "name" : "时信开发者",
                "timestamp" : 1615271263193,
                "domain" : "shixincube.com",
                "context" : {
                    "last" : 1617185580703,
                    "name" : "时信开发者",
                    "id" : 1615268975051,
                    "avatar" : "avatar16.png",
                    "state" : 0,
                    "region" : "--",
                    "department" : "--",
                    "account" : "xujiangwei",
                    "token" : "usJbeagOKAwpBEYKBUKvbaricuKfaKum"
                }
            },
            {
                "id" : 50001001,
                "name" : "Cube-50001001",
                "timestamp" : 1615271263193,
                "domain" : "shixincube.com"
            },
            {
                "id" : 50001005,
                "name" : "Cube-50001005",
                "timestamp" : 1615271263193,
                "domain" : "shixincube.com"
            },
            {
                "id" : 50001004,
                "name" : "Cube-50001004",
                "timestamp" : 1615271263193,
                "domain" : "shixincube.com"
            },
            {
                "id" : 50001003,
                "name" : "Cube-50001003",
                "timestamp" : 1615271263193,
                "domain" : "shixincube.com"
            },
            {
                "id" : 50001002,
                "name" : "Cube-50001002",
                "timestamp" : 1615271263193,
                "domain" : "shixincube.com"
            }
        ]
    }


.. _group-appendix:

Group Appendix
===============================

群组的附录。附录用于记录群组的相关操作数据。

.. list-table:: 
    :widths: 20 10 10 10 30
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

