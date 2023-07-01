===============================
Hub 数据结构
===============================

.. contents:: 目录

|


.. _contact_context:

`Contact` 上下文数据字段
===============================

在 Hub 服务里将联系人的其他数据信息均保存在上下文中，即 `Contact <dev_structure.html#contact>`_ 的 ``context`` 字段中。

- ``avatarFileLabel`` - 联系人头像的文件标签，参看 `File Label <dev_structure.html#file-label>`_ 结构。


|


.. _message_payload:

`Message` 负载数据字段
===============================

在 Hub 服务里消息的负载数据不仅记录了消息数据还记录了消息类型，即 `Message <dev_structure.html#message>`_ 的 ``payload`` 字段。

- ``type`` - 消息类型。
    * ``text`` - 文本消息类型。
    * ``file`` - 文件消息类型。
    * ``image`` - 图片消息类型。

- ``content`` - 文本消息的文本数据，使用 Base64 格式。

对于图片和文件消息类型，可以通过 `Message <dev_structure.html#message>`_ 的 ``attachment`` 字段获取对应的文件码，通过文件码获取文件数据。


|

.. _account-event:

Account JSON 字段
===============================

账号数据事件。

.. list-table:: 
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
      - 事件序号
    * - ``name``
      - string
      - Y
      - *--*
      - 事件名
    * - ``product``
      - string
      - Y
      - *--*
      - 产品名
    * - ``code``
      - string
      - Y
      - *--*
      - 通道码
    * - ``account``
      - `Contact <dev_structure.html#contact>`_
      - Y
      - *--*
      - 账号数据


|


.. _conversations-event:

Conversations JSON 字段
===============================

会话数据事件。

.. list-table:: 
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
      - 事件序号
    * - ``name``
      - string
      - Y
      - *--*
      - 事件名
    * - ``product``
      - string
      - Y
      - *--*
      - 产品名
    * - ``code``
      - string
      - Y
      - *--*
      - 通道码
    * - ``conversations``
      - Array< `Conversation <dev_structure.html#conversation>`_ >
      - Y
      - *--*
      - 最近会话列表


|


.. _group-data-event:

Group Data JSON 字段
===============================

群组数据事件。

.. list-table:: 
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
      - 事件序号
    * - ``name``
      - string
      - Y
      - *--*
      - 事件名
    * - ``product``
      - string
      - Y
      - *--*
      - 产品名
    * - ``code``
      - string
      - Y
      - *--*
      - 通道码
    * - ``group``
      - `Group <dev_structure.html#group>`_
      - Y
      - *--*
      - 群组数据，参看 `Group <dev_structure.html#group>`_


|


.. _contact-zone-event:

Contact Zone Data JSON 字段
===============================

联系人分区数据事件。

.. list-table:: 
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
      - 事件序号
    * - ``name``
      - string
      - Y
      - *--*
      - 事件名
    * - ``product``
      - string
      - Y
      - *--*
      - 产品名
    * - ``zone``
      - `Contact Zone <dev_structure.html#contact-zone>`_
      - Y
      - *--*
      - 分区数据，参看 `Contact Zone <dev_structure.html#contact-zone>`_
    * - ``begin``
      - int
      - Y
      - *--*
      - 数据的起始索引
    * - ``end``
      - int
      - Y
      - *--*
      - 数据的结束索引
    * - ``total``
      - int
      - Y
      - *--*
      - 数据总数量


|


.. _messages-event:

Messages JSON 字段
===============================

消息列表数据。

.. list-table:: 
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
      - 事件序号
    * - ``name``
      - string
      - Y
      - *--*
      - 事件名
    * - ``product``
      - string
      - Y
      - *--*
      - 产品名
    * - ``group``
      - `Group <dev_structure.html#group>`_
      - N
      - *--*
      - 当前消息清单对应的群组
    * - ``partner``
      - `Contact <dev_structure.html#contact>`_
      - N
      - *--*
      - 当前消息清单对应的参与人
    * - ``begin``
      - int
      - Y
      - *--*
      - 起始索引位置
    * - ``end``
      - int
      - Y
      - *--*
      - 结束索引位置
    * - ``messages``
      - Array< `Message <dev_structure.html#message>`_ >
      - Y
      - *--*
      - 消息数据清单


|
