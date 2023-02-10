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
