===============================
Robot
===============================

.. contents:: 目录

|


.. _robot-auto-task:

自动任务
===============================

采集抖音账号基础数据
-------------------------------

通过指定账号搜索关键字，通过搜索方式定位数据，读取搜索结果的账号数据。包括账号发布的作品信息。

* 任务名称：

    ``DouYinAccountData``


* 参数说明：

    - ``word`` - 检索关键词
    - ``maxNumVideo`` - 采集视频作品的最大数量


* 参数设置示例：

    .. code-block:: java

        JSONObject parameter = new JSONObject();
        parameter.put("word", "光明网");
        parameter.put("maxNumVideo", 10);


抖音日常操作
-------------------------------

模拟日常刷抖音看视频操作。

* 任务名称：

    ``DouYinDailyOperation``


* 参数说明：

    - ``duration`` - 操作需要执行总时长，单位：秒。


|


开放接口
===============================

注册回调
-------------------------------

.. http:post:: /robot/register/(code)

    注册事件回调的 URL 链接。

    :param code: 您申请的访问码。
    :type code: string

    :reqheader Content-Type: ``application/json``

    :<json string url: 回调的 URL 链接。

    :status 401: 访问码无效或者已过期。
    :status 403: 请求数据错误。


注销回调
-------------------------------

.. http:post:: /robot/deregister/(code)

    注销事件回调的 URL 链接。

    :param code: 您申请的访问码。
    :type code: string

    :reqheader Content-Type: ``application/json``

    :<json string url: 回调的 URL 链接。

    :status 401: 访问码无效或者已过期。
    :status 403: 请求数据错误。


获取在线设备列表
-------------------------------

.. http:get:: /robot/online/(code)

    获取当前在线的设备列表。

    :param code: 您申请的访问码。
    :type code: string

    :resheader Content-Type: ``application/json``

    :>json number total: 在线设备总数。
    :>json Array list: 设备账号数据列表，参看 `账号 <#robot-account>`_ 数据结构。

    :status 401: 访问码无效或者已过期。
    :status 400: 读取数据错误。


获取账号数据
-------------------------------

.. http:get:: /robot/account/(code)

    获取账号数据。

    :param code: 您申请的访问码。
    :type code: string

    :resheader Content-Type: ``application/json``

    :>json object -: 账号数据，参看 `账号 <#robot-account>`_ 数据结构。

    :status 401: 访问码无效或者已过期。
    :status 403: 参数错误或参数名错误。
    :status 400: 读取数据错误。


执行任务
-------------------------------

.. http:post:: /robot/perform/(code)

    执行指定任务。可执行任务参看 `自动任务 <#robot-auto-task>`_ 章节。

    :param code: 您申请的访问码。
    :type code: string

    :reqheader Content-Type: ``application/json``

    :<json string name: 任务名称。
    :<json object parameter: 任务参数。
    :<json number accountId: 执行任务的设备账号。

    :status 401: 访问码无效或者已过期。
    :status 403: 参数错误，请检测参数格式。
    :status 404: 交付任务到设备失败。
    :status 400: 任务执行失败。


取消任务
-------------------------------

.. http:post:: /robot/cancel/(code)

    取消正在执行的任务。

    :param code: 您申请的访问码。
    :type code: string

    :reqheader Content-Type: ``application/json``

    :<json number accountId: 执行任务的设备账号。
    :<json string name: 任务名称。

    :status 401: 访问码无效或者已过期。
    :status 403: 参数错误，请检测参数格式。
    :status 404: 取消任务时服务器出错。
    :status 400: 取消任务失败。


|


数据结构
===============================

.. _robot-account:

账号
-------------------------------

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
      - 账号 ID 。
    * - ``name``
      - string
      - Y
      - *--*
      - 账号名。
    * - ``avatar``
      - string
      - Y
      - *--*
      - 账号头像。
    * - ``isAdmin``
      - boolean
      - Y
      - *--*
      - 是否是管理员账号。
    * - ``fullName``
      - string
      - Y
      - *--*
      - 账号全名。
    * - ``creationTime``
      - long
      - Y
      - *--*
      - 账号创建时间戳。
    * - ``state``
      - int
      - Y
      - *--*
      - 账号状态。|br2|
        ``0`` - 状态正常 |br|
        ``3`` - 账号被禁用
    * - ``online``
      - boolean
      - Y
      - *--*
      - 账号是否在线。
    * - ``taskRunning``
      - boolean
      - Y
      - *--*
      - 账号当前是否有正在执行的任务。
    * - ``lastAddress``
      - string
      - N
      - *--*
      - 账号最近一次连接服务器的地址。
    * - ``lastLoginTime``
      - long
      - N
      - *--*
      - 账号最近一次登录时间戳。
    * - ``lastDevice``
      - JSON Object
      - N
      - *--*
      - 账号最近一次登录的设备信息。参看 :ref:`robot-device` 。
    * - ``token``
      - string
      - N
      - *--*
      - 账号的授权令牌。

|

.. _robot-device:

设备
-------------------------------

.. list-table:: 
    :header-rows: 1

    * - 字段
      - 类型
      - 必填
      - 默认值
      - 描述
    * - ``width``
      - int
      - Y
      - *--*
      - 设备屏幕分辨率宽度。例如 1080。
    * - ``height``
      - int
      - Y
      - *--*
      - 设备屏幕分辨率高度。例如 1920。
    * - ``buildId``
      - string
      - Y
      - *--*
      - 修订版本号。
    * - ``broad``
      - string
      - Y
      - *--*
      - 设备板卡型号。
    * - ``brand``
      - string
      - Y
      - *--*
      - 与产品或硬件相关的厂商品牌，例如 "Xiaomi", "Huawei"。
    * - ``device``
      - string
      - Y
      - *--*
      - 设备在工业设计中的名称。
    * - ``model``
      - string
      - Y
      - *--*
      - 设备型号。
    * - ``product``
      - string
      - Y
      - *--*
      - 整个产品的名称。
    * - ``bootloader``
      - string
      - Y
      - *--*
      - 设备 Bootloader 的版本。
    * - ``hardware``
      - string
      - Y
      - *--*
      - 设备的硬件名称。
    * - ``fingerprint``
      - string
      - Y
      - *--*
      - 构建(build)的唯一标识码。
    * - ``sdkInt``
      - int
      - Y
      - *--*
      - Android 系统 API 版本。
    * - ``incremental``
      - string
      - Y
      - *--*
      - 底层源代码版本控制描述，用于表示此构建的内部值。
    * - ``release``
      - string
      - Y
      - *--*
      - Android 系统版本号。
    * - ``baseOS``
      - string
      - Y
      - *--*
      - 产品所基于的基础操作系统。
    * - ``securityPatch``
      - string
      - Y
      - *--*
      - 用户可见的安全补丁级别。
    * - ``codename``
      - string
      - Y
      - *--*
      - 开发代号。
    * - ``buildDisplay``
      - string
      - Y
      - *--*
      - 用于显示给用户的构建ID字符串。


|

.. |br| raw:: html

    <br>

.. |br2| raw:: html

    <br><br>
