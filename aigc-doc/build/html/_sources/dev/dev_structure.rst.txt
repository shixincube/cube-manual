===============================
数据结构
===============================

.. contents:: 目录

|

.. _auth-token:

Auth Token
===============================

授权令牌。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``code``
      - string
      - Y
      - *--*
      - 令牌编码
    * - ``domain``
      - string
      - Y
      - *--*
      - App 的访问域
    * - ``appKey``
      - string
      - Y
      - *--*
      - App 的 Key 串
    * - ``cid``
      - long
      - Y
      - 0
      - 令牌绑定的联系人 ID
    * - ``issues``
      - long
      - Y
      - *--*
      - 发布时间
    * - ``expiry``
      - long
      - Y
      - *--*
      - 过期时间
    * - ``description``
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

|

.. _pd:

Primary Description
===============================

主内容描述。用于配置客户端各参数，为各模块提供必要的配置信息。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``address``
      - string
      - Y
      - *--*
      - 客户端需要优先连接的主地址
    * - ``port``
      - int
      - Y
      - *--*
      - 客户端需要优先连接的端口
    * - ``primaryContent``
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
      - 必填
      - 默认值
      - 描述
    * - ``name``
      - string
      - Y
      - *--*
      - 设备名称
    * - ``platform``
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

|

.. _contact:

Contact
===============================

联系人实体。联系人是魔方管理的最小用户单位，表示一个可被管理的基础实体，代表一个具体的用户及其关联的设备。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 联系人 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 联系人所在域
    * - ``timestamp``
      - long
      - Y
      - *--*
      - 数据时间戳
    * - ``name``
      - string
      - Y
      - *--*
      - 联系人名称
    * - ``namePY``
      - string
      - N
      - *--*
      - 联系人名称的拼音形式
    * - ``context``
      - JSON
      - N
      - *--*
      - 关联的上下文数据
    * - ``externalId``
      - string
      - N
      - *--*
      - 外部关联 ID
    * - ``devices``
      - Array< :ref:`device` >
      - N
      - *--*
      - 联系人当前登录的设备列表
    * - ``device``
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
        "externalId" : "lei3_2020",
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

|

.. _contact-appendix:

Contact Appendix
===============================

联系人的附录。附录用于记录联系人的相关操作数据。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``contact``
      - JSON
      - Y
      - *--*
      - 附录所属的联系人，参看 :ref:`contact`
    * - ``remarkName``
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

|

.. _group:

Group
===============================

群组描述。群组是一系列联系人的集合，通过群组将联系人进行集中管理。

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 群组 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 群组所在域
    * - ``timestamp``
      - long
      - Y
      - *--*
      - 数据时间戳
    * - ``name``
      - string
      - Y
      - *--*
      - 群组名称
    * - ``tag``
      - string
      - Y
      - *--*
      - 群组标签
    * - ``ownerId``
      - long
      - Y
      - *--*
      - 群组当前群主的 ID
    * - ``creation``
      - long
      - Y
      - *--*
      - 群组的创建时间
    * - ``lastActive``
      - long
      - Y
      - *--*
      - 群组的最后一次活跃时间戳
    * - ``state``
      - int
      - Y
      - *--*
      - 群组状态，参看 :ref:`group-state`
    * - ``members``
      - Array<long>
      - N
      - *--*
      - 群组成员的 ID 列表
    * - ``memberContacts``
      - Array< :ref:`contact` >
      - N
      - *--*
      - 群组成员列表。 |br2| 该属性仅在 Hub 服务里使用

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

|

.. _group-appendix:

Group Appendix
===============================

群组的附录。附录用于记录群组的相关操作数据。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``groupId``
      - long
      - Y
      - *--*
      - 附录所属的群组 ID
    * - ``group``
      - JSON
      - Y
      - *--*
      - 附录所属的群组的数据，参看 :ref:`group`
    * - ``notice``
      - string
      - Y
      - *--*
      - 群组公告
    * - ``noticeOperatorId``
      - long
      - Y
      - *--*
      - 群组公告编写人的 ID
    * - ``noticeTime``
      - long
      - Y
      - *--*
      - 群组公告的更新时间
    * - ``memberRemarks``
      - Array<JSON>
      - Y
      - *--*
      - 成员的备注名清单，JSON 主键：|br2|
        ``id`` - long ： 联系人ID |br2|
        ``name`` - string ： 在群内的备注名
    * - ``remark``
      - string
      - Y
      - ``""``
      - 群组的备注名
    * - ``following``
      - boolean
      - Y
      - ``false``
      - 成员对该群是否进行了关注。 |br| 如果进行了关注该值为 ``true``
    * - ``memberNameDisplayed``
      - boolean
      - Y
      - ``false``
      - 是否需要显示群组成员的名称
    * - ``applicants``
      - Array<JSON>
      - N
      - *--*
      - 申请人清单，JSON 主键：|br2|
        ``id`` - long ： 联系人 ID |br2|
        ``time`` - long ： 申请时间 |br2|
        ``postscript`` - string ： 附言 |br2|
        ``agreed`` - boolean ： 是否允许 |br2|
        ``agreedTime`` - long ： 处理申请时间
    * - ``commId``
      - long
      - N
      - *--*
      - 群组的通讯 ID

|

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

|

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
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 分区的 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 分区所属的域
    * - ``timestamp``
      - long
      - Y
      - *--*
      - 数据的时间戳
    * - ``owner``
      - long
      - Y
      - *--*
      - 分区所属的联系人 ID
    * - ``name``
      - string
      - Y
      - *--*
      - 分区名称， **分区名称是分区的唯一标识**
    * - ``displayName``
      - string
      - Y
      - *--*
      - 分区的显示名
    * - ``state``
      - int
      - Y
      - *--*
      - 分区状态： |br2|
        ``0`` - Normal ：正常状态。  |br2|
        ``1`` - Deleted ：已删除状态。
    * - ``peerMode``
      - boolean
      - Y
      - ``false``
      - 分区是否是端到端对等模式
    * - ``participants``
      - Array<JSON>
      - N
      - *--*
      - 分区里的参与者，参看 :ref:`contact-zone-participant`

|

.. _contact-zone-participant:

Contact Zone Participant
===============================

分区参与人。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 参与人 ID
    * - ``type``
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
    * - ``timestamp``
      - long
      - Y
      - *--*
      - 数据的时间戳
    * - ``state``
      - int
      - Y
      - *--*
      - 参与人状态，参看 :ref:`contact-zone-participant-state`
    * - ``inviterId``
      - long
      - Y
      - *--*
      - 邀请人的 ID
    * - ``postscript``
      - string
      - Y
      - ``""``
      - 加入分区时的附言
    * - ``linkedContact``
      - JSON
      - N
      - *--*
      - 链接的联系人，参看 :ref:`contact` 或 :ref:`group` 


|

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

|

.. _group-bundle:

Group Bundle
===============================

群组操作时受影响的相关数据描述。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``group``
      - JSON
      - Y
      - *--*
      - 群组数据 :ref:`group`
    * - ``modified``
      - Array<long>
      - Y
      - *--*
      - 群组操作时变化的群成员 ID 列表
    * - ``operator``
      - long
      - N
      - *--*
      - 本次操作的联系人的 ID

|

.. _file-label:

File Label
===============================

文件标签。文件标签表示可被存储到系统的文件实体。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
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

|

.. _file-anchor:

File Anchor
===============================

文件锚点。文件锚点用于客户端记录文件处理流程的相关信息。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``fileCode``
      - string
      - Y
      - *--*
      - 文件码
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
      - 文件最后一次修改时间
    * - ``position``
      - long
      - Y
      - *--*
      - 该锚点对应的文件的数据位置

|

.. _file-thumbnail:

File Thumbnail
===============================

文件缩略图。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
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

.. _directory:

Directory
===============================

文件目录。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 目录的 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 目录所属的域
    * - ``owner``
      - long
      - N
      - *--*
      - 目录所属的文件层级 ID
    * - ``name``
      - string
      - Y
      - *--*
      - 目录名
    * - ``creation``
      - long
      - Y
      - *--*
      - 目录创建时间
    * - ``lastModified``
      - long
      - Y
      - *--*
      - 目录最后一次修改时间
    * - ``size``
      - long
      - Y
      - *--*
      - 目录包含的所有文件大小
    * - ``hidden``
      - boolean
      - Y
      - *--*
      - 是否是隐藏目录
    * - ``parentId``
      - long
      - N
      - *--*
      - 父目录 ID
    * - ``numDirs``
      - long
      - Y
      - *--*
      - 包含的子目录数量
    * - ``numFiles``
      - long
      - Y
      - *--*
      - 包含的文件数量
    * - ``dirs``
      - Array< :ref:`directory` >
      - N
      - *--*
      - 包含的所有子目录列表

|

.. _file-attachment:

File Attachment
===============================

消息的文件附件。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``anchors``
      - Array< :ref:`file-anchor` >
      - Y
      - *--*
      - 附件包含的文件锚点列表
    * - ``labels``
      - Array< :ref:`file-label` >
      - Y
      - *--*
      - 附件包含的文件标签列表
    * - ``compressed``
      - boolean
      - Y
      - ``false``
      - 附件文件是否是源文件的压缩文件

|

.. _sharing-tag-config:

Sharing Tag Config
===============================

分享标签的配置信息。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``contact``
      - :ref:`contact`
      - Y
      - *--*
      - 分享数据的发起人。
    * - ``device``
      - :ref:`device`
      - N
      - *--*
      - 创建分享的设备。
    * - ``fileLabel``
      - :ref:`file-label`
      - Y
      - *--*
      - 分享的文件。
    * - ``duration``
      - long
      - Y
      - *--*
      - 分享的有效时长。
    * - ``password``
      - string
      - N
      - *--*
      - 文件的下载密码。
    * - ``preview``
      - boolean
      - Y
      - ``false``
      - 分享文件是否有预览图。
    * - ``download``
      - boolean
      - Y
      - ``true``
      - 是否允许下载原文件。
    * - ``traceDownload``
      - boolean
      - Y
      - ``true``
      - 下载原文件时是否需要登录以便留痕。

|

.. _sharing-tag:

Sharing Tag
===============================

分享标签。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 分享标签的唯一 ID 。
    * - ``domain``
      - string
      - Y
      - *--*
      - 标签的域。
    * - ``timestamp``
      - long
      - Y
      - *--*
      - 创建标签时的时间戳。
    * - ``code``
      - string
      - Y
      - *--*
      - 分享码。分享码是分享标签对外公开的唯一检索。
    * - ``expiryDate``
      - long
      - Y
      - *--*
      - 标签的到期日期。
    * - ``config``
      - :ref:`sharing-tag-config`
      - Y
      - *--*
      - 分享标签的配置信息。
    * - ``httpURL``
      - string
      - N
      - *--*
      - 分享链接的 HTTP URL 。
    * - ``httpsURL``
      - string
      - N
      - *--*
      - 分享链接的 HTTPS URL 。
    * - ``httpHostInfo``
      - string
      - N
      - *--*
      - HTTP URL 的主机信息。
    * - ``httpsHostInfo``
      - string
      - N
      - *--*
      - HTTPS URL 的主机信息。
    * - ``sharer``
      - :ref:`trace`
      - N
      - *--*
      - 该分享标签的分享人。
    * - ``parent``
      - :ref:`trace`
      - N
      - *--*
      - 该分享标签上一级来源。
    * - ``previewList``
      - Array< :ref:`file-label` >
      - N
      - *--*
      - 分享文件的预览图列表。
    * - ``state``
      - number
      - Y
      - *--*
      - 标签状态：|br2|
        ``0`` - 一般状态。 |br2|
        ``1`` - 已取消状态。

|

.. _trace:

Trace
===============================

操作痕迹描述。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``string``
      - string
      - Y
      - *--*
      - 追踪串。用于识别痕迹的随机字符串。
    * - ``contact``
      - :ref:`contact`
      - N
      - *--*
      - 留痕的联系人。
    * - ``contactId``
      - long
      - N
      - *--*
      - 留痕的联系人 ID 。

|

.. _visit-trace:

Visit Trace
===============================

访问痕迹记录。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``platform``
      - string
      - Y
      - *--*
      - 操作平台： |br2|
        ``Browser`` - 浏览器。 |br2|
        ``AppletWeChat`` - 微信小程序。
    * - ``time``
      - long
      - Y
      - *--*
      - 记录的时间。
    * - ``address``
      - string
      - Y
      - *--*
      - 操作时的地址。
    * - ``url``
      - string
      - Y
      - *--*
      - 可访问的 URL 。
    * - ``domain``
      - string
      - Y
      - *--*
      - 操作时数据访问的站点域名。
    * - ``title``
      - string
      - Y
      - *--*
      - 操作界面标题。
    * - ``screen``
      - JSON Object
      - Y
      - *--*
      - 设备的屏幕参数信息：|br2|
        ``width`` (*int*) - 屏幕宽度。|br2|
        ``height`` (*int*) - 屏幕高度。|br2|
        ``colorDepth`` (*int*) - 屏幕颜色深度值。|br2|
        ``orientation`` (*string*) - 操作时的屏幕方向描述。
    * - ``language``
      - string
      - Y
      - *--*
      - 系统的语言。
    * - ``userAgent``
      - string
      - N
      - *--*
      - 浏览器的 User Agent 描述。|br2|
        只有在平台类型是 ``Browser`` 时才有该数据。
    * - ``agent``
      - JSON Object
      - N
      - *--*
      - 小程序的 Agent 描述。|br2|
        只有在平台类型是 ``AppletWeChat`` 时才有该数据。
    * - ``event``
      - string
      - Y
      - *--*
      - 事件名。
    * - ``eventTag``
      - string
      - N
      - *--*
      - 事件标签。
    * - ``eventParam``
      - JSON Object
      - N
      - *--*
      - 事件参数。
    * - ``sharerId``
      - long
      - N
      - *--*
      - 分享人 ID 。
    * - ``parentId``
      - long
      - N
      - *--*
      - 上一级分享人 ID 。
    * - ``contactId``
      - long
      - N
      - *--*
      - 触发记录的联系人 ID 。
    * - ``contactDomain``
      - string
      - N
      - *--*
      - 触发记录的联系人的域。

|

.. _message:

Message
===============================

即时消息结构。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 消息的 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 消息所属的域
    * - ``from``
      - long
      - Y
      - *--*
      - 消息来源的 ID
    * - ``to``
      - long
      - Y
      - *--*
      - 消息投送目标的 ID
    * - ``source``
      - long
      - Y
      - *--*
      - 消息转副本之后的源 ID
    * - ``owner``
      - long
      - Y
      - *--*
      - 副本持有人
    * - ``lts``
      - long
      - Y
      - *--*
      - 消息生成时的源时间戳
    * - ``rts``
      - long
      - Y
      - *--*
      - 消息到达接入层时的时间戳
    * - ``state``
      - int
      - Y
      - *--*
      - 消息状态，参看 :ref:`message-state`
    * - ``scope``
      - int
      - Y
      - *--*
      - 消息作用域： |br2|
        ``0`` - Unlimited ：无限制。 |br2|
        ``1`` - Private ：仅限自己可见。
    * - ``payload``
      - JSON
      - Y
      - *--*
      - 消息数据负载
    * - ``attachment``
      - :ref:`file-attachment`
      - N
      - *--*
      - 消息附件
    * - ``device``
      - :ref:`device`
      - N
      - *--*
      - 发送消息的设备
    * - ``sender``
      - :ref:`contact`
      - N
      - *--*
      - 消息发件人（仅客户端）
    * - ``group``
      - :ref:`group`
      - N
      - *--*
      - 消息发生的群组（仅客户端）
    * - ``partner``
      - :ref:`contact`
      - N
      - *--*
      - 消息对话伙伴方（仅客户端）
    * - ``timestampPrecision``
      - int
      - N
      - *--*
      - 消息的时间戳精度描述（仅客户端）：|br2|
        ``0`` - Minute ：精确到分钟。 |br2|
        ``1`` - Day ：精确到天。

|

.. _message-state:

Message State
===============================

消息状态描述。

.. list-table::
    :widths: 30 20 50
    :header-rows: 1

    * - 状态名
      - 状态码
      - 状态描述
    * - Fault
      - 1
      - 消息处理失败
    * - Unsent
      - 5
      - 未发送状态
    * - Sending
      - 9
      - 正在发送状态
    * - Sent
      - 10
      - 已发送状态
    * - Read
      - 20
      - 已被阅读状态
    * - Recalled
      - 30
      - 已召回
    * - Deleted
      - 40
      - 已删除
    * - SendBlocked
      - 51
      - 被阻止发送
    * - ReceiveBlocked
      - 52
      - 被阻止接收
    * - Unknown
      - 0
      - 未知状态

|

.. _conversation:

Conversation
===============================

消息会话。用于集中管理与联系人或者群组的连续消息记录。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 会话的 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 所属的域
    * - ``timestamp``
      - long
      - Y
      - *--*
      - 会话的数据时间戳
    * - ``owner``
      - long
      - Y
      - *--*
      - 会话所属的联系人 ID
    * - ``type``
      - int
      - Y
      - *--*
      - 会话类型： |br2|
        ``1`` - Contact ：与联系人的会话。 |br2|
        ``2`` - Group ：与群组的会话。 |br2|
        ``3`` - Organization ：与组织的会话。 |br2|
        ``4`` - System ：系统类型会话。 |br2|
        ``5`` - Notifier ：通知类型会话。 |br2|
        ``6`` - Assistant ：助手类型会话。 |br2|
        ``9`` - Other ：其他会话类型。
    * - ``state``
      - int
      - Y
      - *--*
      - 会话状态： |br2|
        ``1`` - Normal ：正常状态。 |br2|
        ``2`` - Important ：重要的或置顶的状态。 |br2|
        ``3`` - Deleted ：已删除状态。 |br2|
        ``4`` - Destroyed ：已销毁状态。
    * - ``reminding``
      - int
      - Y
      - *--*
      - 会话提醒类型： |br2|
        ``1`` - Normal ：正常接收。 |br2|
        ``2`` - Closed ：接收不提醒。 |br2|
        ``3`` - NotCare ：接收但不关注。 |br2|
        ``4`` - Refused ：不接收。
    * - ``pivotal``
      - long
      - Y
      - *--*
      - 与会话相关的关键实体的 ID
    * - ``unread``
      - int
      - Y
      - *--*
      - 未读消息数量
    * - ``recentMessage``
      - :ref:`message`
      - N
      - *--*
      - 会话最近一条消息，当仅有一条消息时使用该字段
    * - ``recentMessages``
      - Array< :ref:`message` >
      - N
      - *--*
      - 会话最近的消息列表，当有多条消息时使用该字段
    * - ``pivotalEntity``
      - :ref:`contact` 或 :ref:`group`
      - N
      - *--*
      - 关键会话实体（仅 Hub 使用）
    * - ``avatarURL``
      - string
      - N
      - *--*
      - 会话头像的 URL
    * - ``avatarName``
      - string
      - N
      - *--*
      - 会话头像名

|

.. _media-constraint:

Media Constraint
===============================

媒体的参数约束。包括视频和音频的性能约束。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``video``
      - boolean
      - Y
      - *--*
      - 是否启用视频数据通道
    * - ``audio``
      - boolean
      - Y
      - *--*
      - 是否启用音频数据通道
    * - ``dimension``
      - JSON
      - N
      - *--*
      - 视频尺寸约束。 |br2|
        ``width`` - int ：优先的视频宽度 |br2|
        ``height`` - int ：优先的视频宽度 |br2|
        ``constraints`` - JSON ：用于 WebRTC 的约束。

|

.. _comm-field:

Comm Field
===============================

通讯场域。通讯场域是指一个多方通讯的集中管理场所，在一个场域内进行媒体流的管理和配置，对每个参与多方通讯的终端进行数据流的分配。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 场域的 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 场域所属的域
    * - ``timestamp``
      - long
      - Y
      - *--*
      - 当前数据的时间戳
    * - ``name``
      - string
      - Y
      - *--*
      - 场域的名称
    * - ``founder``
      - JSON
      - Y
      - *--*
      - 场域的创建人，参看 :ref:`Contact`
    * - ``mediaConstraint``
      - JSON
      - Y
      - *--*
      - 场域的创建人，参看 :ref:`media-constraint`
    * - ``startTime``
      - long
      - Y
      - *--*
      - 场域开始进行通讯的时间
    * - ``endTime``
      - long
      - Y
      - *--*
      - 场域结束通讯的时间
    * - ``endpoints``
      - Array<JSON>
      - N
      - *--*
      - 参与多方通讯的各个终端节点， |br2| 参看 :ref:`comm-field-endpoint`
    * - ``group``
      - JSON
      - N
      - *--*
      - 场域关联的群组，参看 :ref:`group`
    * - ``caller``
      - JSON
      - N
      - *--*
      - 场域的主叫联系人，参看 :ref:`contact`
    * - ``callee``
      - JSON
      - N
      - *--*
      - 场域的被叫联系人，参看 :ref:`contact`

|

.. _comm-field-endpoint:

Comm Field Endpoint
===============================

场域内的终端节点。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``id``
      - long
      - Y
      - *--*
      - 场域终端的 ID
    * - ``domain``
      - string
      - Y
      - *--*
      - 场域终端所属的域
    * - ``timestamp``
      - long
      - Y
      - *--*
      - 当前数据的时间戳
    * - ``contact``
      - :ref:`contact`
      - Y
      - *--*
      - 终端的联系人数据
    * - ``device``
      - :ref:`device`
      - Y
      - *--*
      - 终端的设备数据
    * - ``name``
      - string
      - Y
      - *--*
      - 终端名称
    * - ``state``
      - int
      - Y
      - *--*
      - 状态描述： |br2|
        ``0`` - Normal ：正常状态 |br2|
        ``10`` - Calling ：正在建立通话 |br2|
        ``11`` - Busy ：当前线路忙 |br2|
        ``13`` - CallConnected ：通话已接通 |br2|
        ``15`` - CallBye ：通话结束
    * - ``description``
      - JSON
      - N
      - *--*
      - 会话描述数据
    * - ``constraint``
      - JSON
      - N
      - *--*
      - 媒体约束，参看 :ref:`media-constraint`
    * - ``video``
      - JSON
      - N
      - *--*
      - 视频流状态描述，JSON 结构： |br2|
        ``enabled`` - boolean ：是否启用了视频通道 |br2|
        ``streamEnabled`` - boolean ：当前数据流是否可传输
    * - ``audio``
      - JSON
      - N
      - *--*
      - 音频流状态描述，JSON 结构： |br2|
        ``enabled`` - boolean ：是否启用了音频通道 |br2|
        ``streamEnabled`` - boolean ：当前数据流是否可传输

|

.. _signaling:

Signaling
===============================

通讯信令。

.. list-table:: 
    :widths: 20 20 10 10 40
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``sn``
      - long
      - Y
      - *--*
      - 信令的序号
    * - ``name``
      - string
      - Y
      - *--*
      - 信令名
    * - ``field``
      - JSON
      - Y
      - *--*
      - 信令作用的场域，参看 :ref:`comm-field`




|

.. |br| raw:: html

    <br>

.. |br2| raw:: html

    <br><br>

.. |p-head| raw:: html

    <p>

.. |p-tail| raw:: html

    </p>

