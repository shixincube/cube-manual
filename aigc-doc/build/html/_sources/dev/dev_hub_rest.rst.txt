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


下载文件数据
-------------------------------

.. http:get:: /hub/file/(channel_code)/(file_code)

    下载指定文件码的文件数据。

    :param channel_code: 您申请的通道码。
    :type channel_code: string
    :param file_code: 文件的文件码。
    :type file_code: string

    :resheader Content-Type: 对应文件的 MIME 描述。

    :status 403: 指定的文件码无效。
    :status 404: 服务器未能成功读取到指定文件码对应的文件数据。

|


上传文件数据
-------------------------------

.. http:post:: /hub/file/(channel_code)

    上传文件数据到服务器，客户端需要按照 ``multipart/form-data`` 的 MIME 类型封装表单数据。
    应答数据为 JSON 结构，参看 `File Label <dev_structure.html#file-label>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :form file: 文件名和文件数据。

    :reqheader Content-Type: ``multipart/form-data``

    :resheader Content-Type: ``application/json``

    :>json string fileCode: 文件码。
    :>json string fileName: 文件名。
    :>json string fileSize: 文件大小。

    :status 400: 上传文件数据时发生错误。

|


账号数据操作
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


获取通讯录数据
-------------------------------

.. http:get:: /hub/book/(channel_code)

    获取指定通道账号的通讯录。应答数据格式参看 `Contact Zone Event <dev_hub_structure.html#contact-zone-event>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :query begin: 查询数据的起始索引。默认值：0 。
    :query end: 查询数据的结束索引。默认值：9 。

    :resheader Content-Type: ``application/json``

    :>json object zone: 携带通讯录数据的分区数据结构，参看 `Contact Zone <dev_structure.html#contact-zone>`_ 。
    :>json int begin: 数据的起始索引。
    :>json int end: 数据的结束索引。
    :>json int total: 数据的总数。

|


获取群组信息
-------------------------------

.. http:get:: /hub/group/(channel_code)

    获取指定群组的数据。应答数据格式参看 `Group Data <dev_hub_structure.html#group-data-event>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :query name: 群组名称，必须使用 URL 编码形式。

    :resheader Content-Type: ``application/json``

    :>json object group: 群组数据，参看 `Group <dev_structure.html#group>`_ 。

|


申请添加朋友
-------------------------------

.. http:post:: /hub/friend/add/(channel_code)

    通过检索指定关键字申请添加联系人为朋友。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :reqheader Content-Type: ``application/json``

    :<json string keyword: 指定联系人的外部 ID 或者手机号码。
    :<json string postscript: 指定申请附言， **可选参数** 。
    :<json string remarkName: 指定添加的朋友备注名， **可选参数** 。

    :resheader Content-Type: ``application/json``

    :>json code: 通道码。

|


消息会话操作
===============================

获取最近的消息会话列表
-------------------------------

.. http:get:: /hub/conversations/(channel_code)

    获取指定通道的账号最近消息会话列表。应答数据格式参看 `Conversations <dev_hub_structure.html#conversations-event>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :query nc: 查询会话的数量。默认值：8 。
    :query nm: 查询的每个会话的最近消息数量。默认值：5 。

    :resheader Content-Type: ``application/json``

    :>json array conversations: 按照时间倒序存储的最近会话数组。

|


获取指定消息列表
-------------------------------

.. http:get:: /hub/messages/(channel_code)

    获取指定会话的消息列表。应答数据格式参看 `Messages <dev_hub_structure.html#messages-event>`_ 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :query cid: 查询的联系人的外部 ID 。（与 ``gn`` 参数二选一）。
    :query gn: 查询的群组名称 。（与 ``cid`` 参数二选一）。
    :query begin: 查询列表的起始索引。默认值：0 。
    :query end: 查询列表的结束索引。默认值：9 。

    :resheader Content-Type: ``application/json``

    :>json array messages: 按照时间序存储的消息列表。消息数据结构参看 `Message <dev_structure.html#message>`_ 。

|


轮询最近消息列表
-------------------------------

.. warning:: 
    1. 该方法仅供采用 HTTP 协议的客户端使用。
    2. 该方法仅对最新的消息队列数据进行查询，不对会话的消息列表进行操作。
    3. 更短的轮询间隔并不能提高消息更新频率，消息更新频率由通道规则控制。


.. http:get:: /hub/polling/(channel_code)

    实时获取指定会话的最近消息。可以定时调用该接口获取最近的消息列表，最小调用间隔 **200 ms** 。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :query type: 指定会话类型，数值参考 `Conversation <dev_structure.html#conversation>`_ 的 ``type`` **会话类型** 字段。
    :query name: 指定会话名称，群组会话则设置为群组名称，联系人会话则设置为联系人名称。
    :query num: 指定查询的最大数量。默认值：5 。

    :resheader Content-Type: ``application/json``

    :>json int conversationType: 会话类型。
    :>json string conversationName: 会话名称。
    :>json array messageList: 消息列表。消息数据结构参看 `Message <dev_structure.html#message>`_ 。

|


发送消息
-------------------------------

.. http:post:: /hub/message/(channel_code)

    发送消息数据到指定会话。

    :param channel_code: 您申请的通道码。
    :type channel_code: string

    :reqheader Content-Type: ``application/json``

    :<json string groupName: 指定消息发送的目标群组名。与 ``partnerId`` 参数二选一。
    :<json string partnerId: 指定消息发送的目标伙伴/好友的外部 ID 。与 ``groupName`` 参数二选一。
    :<json string text: 指定消息的文本内容，文本内容必须为 Base64 编码形式。
    :<json string fileCode: 指定文件消息的文件码。

    :resheader Content-Type: ``application/json``

    :>json code: 通道码。

    **请求示例**

    .. sourcecode:: http

        POST /hub/message/xdUrpSczEgWbSiDKmjhOWIOXZjQFOcmh HTTP/1.1
        HOST: api.shixincube.com
        Accept: application/json

        {
            "partnerId": "heit9077_cube",
            "text": "5LuK5aSp5pivMjAyMuW5tDTmnIgxNeaXpQ=="
        }




|
