===============================
Hub 数据结构
===============================

.. contents:: 目录

|


.. _contact_context:

联系人上下文数据字段
===============================

- ``avatarFileLabel`` - 联系人头像的文件标签，参看 `File Label <dev_structure.html#file-label>`_ 结构。



|

.. _account-event:

Account Event JSON 字段
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

Conversations Event JSON 字段
===============================




|
