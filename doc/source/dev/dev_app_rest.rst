===============================
应用服务器 RESTful API
===============================

应用服务器的 RESTful 接口文档。

应用服务器的默认端口： ``7777`` 。

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

|

账号登出
-------------------------------

**TODO**

|

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

|

操作痕迹记录
-------------------------------

.. http:post:: /trace/sharing/applet/wechat/

    提交访问或操作记录。

    :reqheader Content-Type: ``application/json``

    :<json string domain: 访问的域名。
    :<json string url: 完整的 URL 。
    :<json string title: 标题。
    :<json object screen: 屏幕数据 JSON Object ：

        .. code-block:: json

            {
                "width" : 1680,
                "height": 1050,
                "colorDepth" : 30,
                "orientation": "landscape-primary"
            }

    :<json string language: 平台语言。
    :<json string userAgent: 浏览器的 User Agent 描述（ *选填数据* ）。
    :<json object agent: 平台信息代理（ *选填数据* ）：

        .. code-block:: json

            {
                "SDKVersion": "2.25.0",
                "appId": "__UNI__75E13B4",
                "appLanguage": "zh-Hans",
                "appName": "CubeBox",
                "appVersion": "1.0.0",
                "appVersionCode": "100",
                "batteryLevel": 100,
                "benchmarkLevel": 1,
                "bluetoothEnabled": true,
                "brand": "devtools",
                "browserName": "",
                "browserVersion": "",
                "cameraAuthorized": true,
                "deviceBrand": "devtools",
                "deviceId": "17578534465635660197",
                "deviceModel": "iPhone X",
                "deviceOrientation": "portrait",
                "devicePixelRatio": 3,
                "deviceType": "phone",
                "enableDebug": false,
                "errMsg": "getSystemInfo:ok",
                "fontSizeSetting": 16,
                "hostFontSizeSetting": 16,
                "hostLanguage": "zh-CN",
                "hostName": "WeChat",
                "hostPackageName": "",
                "hostSDKVersion": "2.25.0",
                "hostTheme": "",
                "hostVersion": "8.0.5",
                "language": "zh_CN",
                "locationAuthorized": true,
                "locationEnabled": true,
                "microphoneAuthorized": true,
                "mode": "default",
                "model": "iPhone X",
                "notificationAuthorized": true,
                "osLanguage": "",
                "osName": "ios",
                "osTheme": "",
                "osVersion": "10.0.1",
                "pixelRatio": 3,
                "platform": "devtools",
                "safeArea": {
                    "top": 44,
                    "left": 0,
                    "right": 375,
                    "bottom": 778,
                    "width": 375,
                    "height": 724
                },
                "safeAreaInsets": {
                    "top": 44,
                    "left": 0,
                    "right": 0,
                    "bottom": 34
                },
                "screenHeight": 812,
                "screenWidth": 375,
                "statusBarHeight": 44,
                "system": "iOS 10.0.1",
                "ua": "",
                "uniCompileVersion": "3.4.18",
                "uniPlatform": "mp-weixin",
                "uniRuntimeVersion": "3.4.18",
                "version": "8.0.5",
                "wifiEnabled": true,
                "windowBottom": 0,
                "windowHeight": 724,
                "windowTop": 0,
                "windowWidth": 375
            }

    :<json string event: 事件名。
    :<json string eventTag: 事件标签（ *选填数据* ）。
    :<json object eventParam: 事件参数（ *选填数据* ）。

