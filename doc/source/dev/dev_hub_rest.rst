===============================
Hub RESTful API
===============================

.. contents:: 目录

|


启用通道
===============================

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
===============================

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


获取当前通道的账号信息
===============================

.. http:get:: /hub/account/(channel_code)


|


获取最近的消息会话列表
===============================


|


获取群组信息
===============================


|


发送消息
===============================


|
