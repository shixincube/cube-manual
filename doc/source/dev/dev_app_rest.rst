===============================
应用服务器 RESTful API
===============================

.. contents:: 目录

|


账号管理
===============================

账号登录
-------------------------------

.. http:post:: /account/login/

    通过指定的账号数据进行登录。登录成功后返回有效的访问令牌。
    服务器会尝试将访问令牌写入 Cookie 。

    :reqheader Content-Type: ``application/json``

    :<json string device: 指定登录账号使用的设备。
    :<json string jsCode: 指定登录时获取的 code 。

    :resheader Content-Type: ``application/json``

    :>json int code: 状态码。状态码 ``0`` 表示成功。
    :>json string token: 访问令牌。
    :>json string trace: 访问痕迹标识。
    :>json long creation: 令牌的创建时间。
    :>json long expire: 令牌的超期时间。


账号登出
-------------------------------

**TODO**



关联账号
-------------------------------

.. http:post:: /account/bind/

    绑定账号。将指定小程序用户与 Cube 用户进行关联绑定。
    绑定成功后自动使用该账号登录。

    :reqheader Content-Type: ``application/json``

    :<json string device: 指定登录账号使用的设备。
    :<json string jsCode: 指定登录时获取的 code 。
    :<json string phone: 指定账号的电话号码。与 ``account`` 参数二选一。
    :<json string account: 指定账号名。账号名为 Email 格式。与 ``phone`` 参数二选一。
    :<json string password: 指定待绑定账号的密码，使用 MD5 格式。

    :resheader Content-Type: ``application/json``

    :>json int code: 状态码。状态码 ``0`` 表示成功。
    :>json string token: 访问令牌。
    :>json string trace: 访问痕迹标识。
    :>json long creation: 令牌的创建时间。
    :>json long expire: 令牌的超期时间。


|


分享标签管理
===============================

批量获取分享标签
-------------------------------

.. http:get:: /file/list/sharing/

    以批量方式获取该用户创建的分享标签。

    :query string token: 用户的有效令牌。
    :query int begin: 查询数据的起始索引位置。
    :query int end: 查询数据的结束索引位置。
    :query boolean valid: 待查询的分享标签是否是有效的标签。

    :resheader Content-Type: ``application/json``

    :>json Array list: 分享标签列表。分享标签数据结构参看 `Sharing Tag <dev_structure.html#sharing-tag>`_ 。
    :>json int begin: 标签列表的起始索引。
    :>json int end: 标签列表的结束索引。
    :>json boolean valid: 是否是有效的分享标签。
