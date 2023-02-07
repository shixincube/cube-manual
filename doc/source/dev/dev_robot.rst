===============================
Robot
===============================

.. contents:: 目录

|

自动任务
===============================

采集抖音账号基础数据
-------------------------------

任务名称：

``DouYinAccountData``


参数说明：

- ``word`` - 检索关键词
- ``maxNumVideo`` - 采集视频作品的最大数量

参数设置示例：

    .. code-block:: java

        JSONObject parameter = new JSONObject();
        parameter.put("word", "光明网");
        parameter.put("maxNumVideo", 10);


|


数据结构
===============================

[TODO]


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

    :status 401: 该状态表示访问码无效或者已过期。
    :status 403: 该状态表示请求数据错误。


注销回调
-------------------------------

.. http:post:: /robot/deregister/(code)

    注销事件回调的 URL 链接。

    :param code: 您申请的访问码。
    :type code: string

    :reqheader Content-Type: ``application/json``

    :<json string url: 回调的 URL 链接。

    :status 401: 该状态表示访问码无效或者已过期。
    :status 403: 该状态表示请求数据错误。
