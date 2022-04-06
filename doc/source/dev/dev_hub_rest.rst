===============================
Hub RESTful API
===============================

.. contents:: 目录

|

通道管理
===============================

启用通道
-------------------------------

.. http:get:: /hub/open/(channel_code)

    启用指定通道码的通道。启用 Hub 通道时将登录指定的产品账号。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :resheader Content-Type: ``application/json``

    :>json string product: 产品名。
    :>json string name: 通道开启操作，例如 *LoginQRCode* 。
    :>json object fileLabel: 产品需要的登录二维码文件，参看 `File Label <dev_structure.html#file-label>`_ 。

    :status 401: 该状态表示您的授权码无效或者已过期。

|


关闭通道
-------------------------------

.. http:get:: /hub/close/(channel_code)

    关闭指定的通道。通道关闭时对应的账号将退出登录。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :resheader Content-Type: ``application/json``

    :>json string product: 产品名。
    :>json string name: 通道的关闭操作，例如 *Logout* 。
    :>json object account: 退出登录的账号信息，参看 `Contact <dev_structure.html#contact>`_ 。

    :status 401: 该状态表示您的授权码无效或者已过期。

|


读取文件数据
-------------------------------

.. http:get:: /hub/file/(channel_code)/(file_code)

    读取指定文件码的文件数据。

    :param channel_code: 您申请的通道码。
    :type channel_code: string
    :param file_code: 文件的文件码。
    :type file_code: string

    :resheader Content-Type: 对应文件的 MIME 描述。

    :status 403: 指定的文件码无效。
    :status 404: 服务器未能成功读取到指定文件码对应的文件数据。

|


账号数据管理
===============================

获取通道的账号信息
-------------------------------

.. http:get:: /hub/account/(channel_code)

    获取指定通道已经登录的产品账号信息。应答数据格式参看 `Account <dev_hub_structure.html#account-event>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :resheader Content-Type: ``application/json``

    :>json object account: 账号数据，参看 `Contact <dev_structure.html#contact>`_ 。

|


获取最近的消息会话列表
-------------------------------

.. http:get:: /hub/conversations/(channel_code)

    获取指定通道的账号最近消息会话列表。应答数据格式参看 `Conversations <dev_hub_structure.html#conversations-event>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :resheader Content-Type: ``application/json``

    :>json array conversations: 按照时间倒序存储的最近会话数组。

|


获取通讯录数据
-------------------------------

.. http:get:: /hub/book/(channel_code)

    获取指定通道账号的通讯录。应答数据格式参看 `Contact Zone Event <dev_hub_structure.html#contact-zone-event>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :resheader Content-Type: ``application/json``

    :>json object zone: 携带通讯录数据的分区数据结构，参看 `Contact Zone <dev_structure.html#contact-zone>`_ 。


|


获取群组信息
-------------------------------

.. http:get:: /hub/group/(channel_code)?name=group_name

    获取指定群组的数据。应答数据格式参看 `Group Data <dev_hub_structure.html#group-data-event>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :query name: 群组名称，必须使用 URL 编码形式。

    :resheader Content-Type: ``application/json``

    :>json object group: 群组数据，参看 `Group <dev_structure.html#group>`_ 。

|


消息操作
===============================

发送消息
-------------------------------

.. http:post:: /hub/message/(channel_code)

    发送消息数据到指定会话。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :<json string groupName: 指定消息发送的目标群组名。与 ``partnerId`` 参数二选一。
    :<json string partnerId: 指定消息发送的目标伙伴/好友的外部 ID 。与 ``groupName`` 参数二选一。
    :<json string text: 指定消息的文本内容，文本内容必须为 Base64 编码形式。

    :resheader Content-Type: ``application/json``

    :>json ack: 一般应答数据。

|
