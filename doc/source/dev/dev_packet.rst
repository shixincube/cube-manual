===============================
通信数据包报文格式
===============================

.. contents:: 目录


授权服务模块
===============================

- 申请信令
    - **Action** ``applyToken``
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``domain``
              - string
              - Y
              - App 的访问域
            * - ``appKey``
              - string
              - Y
              - App 的 Key 串
    - **S -> C**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``code``
              - int
              - Y
              - `授权服务状态码 <../user/state_code.html#auth-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 申请到的令牌数据，参看 `Auth Token <dev_structure.html#auth-token>`_


- 获取指定令牌编码的令牌
    - **Action** ``getToken``
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``code``
              - string
              - Y
              - 令牌编码
    - **S -> C**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``code``
              - int
              - Y
              - `授权服务状态码 <../user/state_code.html#auth-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 令牌数据，参看 `Auth Token <dev_structure.html#auth-token>`_


|

联系人服务模块
===============================

- 终端签入
    - **Action** ``signIn``
    - **C -> S**
        .. list-table:: **使用联系人和令牌签入**
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``self``
              - JSON
              - Y
              - 当前终端的联系人描述，参看 `Contact <dev_structure.html#contact>`_
            * - ``token``
              - JSON
              - Y
              - 当前使用的令牌，参看 `Auth Token <dev_structure.html#auth-token>`_

        .. list-table:: **使用令牌码签入**
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``code``
              - string
              - Y
              - 当前有效令牌的令牌码，参看 `Auth Token <dev_structure.html#auth-token>`_

    - **S -> C**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``code``
              - int
              - Y
              - 参看 `联系人服务状态码 <../user/state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 签入的联系人数据，参看 `Contact <dev_structure.html#contact>`_

|



.. |br| raw:: html

    <br>
