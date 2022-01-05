===============================
通信数据包报文格式
===============================

.. contents:: 目录


授权模块
===============================

- 申请信令
    - **Action** ``applyToken``
    - **C -> S**
        .. list-table:: 
            :widths: 20 10 10 10 30
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 默认值
              - 描述
            * - ``domain``
              - string
              - Y
              - *--*
              - App 的访问域
            * - ``appKey``
              - string
              - Y
              - *--*
              - App 的 Key 串
    - **S -> C**
        .. list-table:: 
            :widths: 20 10 10 10 30
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 默认值
              - 描述
            * - ``code``
              - int
              - Y
              - *--*
              - 状态码
            * - ``data``
              - JSON
              - Y
              - *--*
              - 申请到的令牌数据，参看 `Auth Token <dev_structure.html#auth-token>`__


- 获取指定令牌编码的令牌
    - **Action** ``getToken``
    - **C -> S**
        .. list-table:: 
            :widths: 20 10 10 10 30
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 默认值
              - 描述
            * - ``code``
              - string
              - Y
              - *--*
              - 令牌编码
    - **S -> C**
        .. list-table:: 
            :widths: 20 10 10 10 30
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 默认值
              - 描述
            * - ``code``
              - int
              - Y
              - *--*
              - 状态码
            * - ``data``
              - JSON
              - Y
              - *--*
              - 令牌数据，参看 `Auth Token <dev_structure.html#auth-token>`__


|
