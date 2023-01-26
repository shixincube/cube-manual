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

``ReportDouYinAccountData``


参数说明：

- ``word`` - 检索关键词
- ``maxNumVideo`` - 采集视频作品的最大数量

参数设置示例：

    .. code-block:: java

        JSONObject parameter = new JSONObject();
        parameter.put("word", "光明网");
        parameter.put("maxNumVideo", 10);



数据结构
===============================

