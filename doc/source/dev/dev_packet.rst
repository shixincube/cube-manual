===============================
通信数据包报文格式
===============================

.. contents:: 目录


授权服务模块
===============================

信令操作
-------------------------------

- 申请信令
    - 用于终端向服务器申请可用的访问令牌。
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
              - `授权服务状态码 <../state_code.html#auth-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 申请到的令牌数据，参看 `Auth Token <dev_structure.html#auth-token>`_


- 获取指定令牌编码的令牌
    - 用于通过令牌编码查找其对应的令牌信息。
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
              - `授权服务状态码 <../state_code.html#auth-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 令牌数据，参看 `Auth Token <dev_structure.html#auth-token>`_


|


联系人服务模块
===============================

终端操作
-------------------------------

- 终端签入
    - 用于终端将指定联系人及其当前设备签入到服务器。签入操作是客户端获得一切服务操作的前提，服务器将签入的联系人及其提供的合法令牌进行绑定，从而授权签入联系人进行相关操作。
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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 签入的联系人数据，参看 `Contact <dev_structure.html#contact>`_


- 终端签出
    - 用于将已签入的联系人及其设备签出。签出表示服务器不再为其提供服务，该联系人不再活跃。签出后的联系人可再次签入。
    - **Action** ``signOut``
    - **C -> S**
        .. list-table:: 
            :header-rows: 1

            * - 包负载
              - 描述
            * - 当前终端的联系人
              - 参看 `Contact <dev_structure.html#contact>`_

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 签出的联系人数据，参看 `Contact <dev_structure.html#contact>`_


- 终端恢复
    - 对于暂时离线的终端，可以使用该操作恢复自身在服务器内的数据，不需要提供令牌数据，服务器会自动匹配之前使用的合法令牌。
    - **Action** ``comeback``
    - **C -> S**
        .. list-table:: 
            :header-rows: 1

            * - 包负载
              - 描述
            * - 当前终端的联系人
              - 参看 `Contact <dev_structure.html#contact>`_

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 恢复的联系人数据，参看 `Contact <dev_structure.html#contact>`_

|

联系人操作
-------------------------------

- 获取联系人数据
    - 通过联系人的 ID 查找对应联系人的数据。
    - **Action** ``getContact``
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``id``
              - long
              - Y
              - 联系人 ID
            * - ``domain``
              - string
              - Y
              - 联系人所属的域

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 联系人数据，参看 `Contact <dev_structure.html#contact>`_


- 获取联系人附录数据
    - 获取指定联系人对应的附录数据。
    - **Action** getAppendix
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``contactId``
              - long
              - Y
              - 联系人 ID

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 联系人附录数据，参看 `Contact Appendix <dev_structure.html#contact-appendix>`_


- 修改联系人数据
    - 用于客户端修改当前签入的联系人的数据，即修改“自己”的数据。
    - **Action** ``modifyContact``
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``name``
              - string
              - N
              - 联系人的名称。 |br| 如果不设置该字段将不修改联系人名称。
            * - ``context``
              - JSON
              - N
              - 联系人的上下文数据。 |br| 如果不设置该字段将不修改上下文数据。

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 联系人数据，参看 `Contact <dev_structure.html#contact>`_

|

群组操作
-------------------------------

- 获取群组数据
    - 通过群组的 ID 查找对应的群组数据。
    - **Action** ``getGroup``
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``id``
              - long
              - Y
              - 群组的 ID
            * - ``domain``
              - string
              - Y
              - 群组所属的域

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 群组数据，参看 `Group <dev_structure.html#group>`_ 。 |br|
                返回数据包含 ``members`` 数据。


- 获取群组附录数据
    - 获取指定群组对应的附录数据。
    - **Action** getAppendix
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``groupId``
              - long
              - Y
              - 群组 ID

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 群组附录数据，参看 `Group Appendix <dev_structure.html#group-appendix>`_


- 按照最近活跃时间查找联系人的群组
    - 用于客户单列出所有当前签入的联系人所在的群组。查询条件为该群组的最近一次活跃时间。
    - **Action** ``listGroups``
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``beginning``
              - long
              - Y
              - 查询起始的最近一次活跃时间戳
            * - ``ending``
              - long
              - N
              - 查询截止的最近一次活跃时间戳。 |br|
                如果不填写，使用当前实时时间戳。
            * - ``state``
              - int
              - N
              - 查询 `群组的状态 <dev_structure.html#group-state>`_ 。 |br|
                如果不填写，默认使用 ``Normal`` 状态。
            * - ``pageSize``
              - int
              - N
              - 指定返回数据时每个数据包内包含的群组数量。 |br|
                如果不填写，默认指定为 ``4`` 。

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 查找到的群组列表数据。JSON 字段包括： |br| |br|
                ``list`` - Array< `Group <dev_structure.html#group>`_ > ： 每页的群组列表。 |br| |br|
                ``total`` - int ： 满足查询条件的群组总数量。
        
        .. note:: 以上数据包服务器会按照 ``pageSize`` 指定的规则发送给客户端，因此客户端需要多次处理 ``listGroups`` 数据包。


- 创建群组
    - 创建新的群组。
    - **Action** ``createGroup``
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``group``
              - JSON
              - Y
              - 群组数据，参看 `Group <dev_structure.html#group>`_
            * - ``members``
              - Array<long>
              - Y
              - 群组的成员 ID 的数组

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
              - 参看 `联系人服务状态码 <../state_code.html#contact-service-state>`_
            * - ``data``
              - JSON
              - Y
              - 群组数据，参看 `Group <dev_structure.html#group>`_



- 解散群组


- 添加联系人到群组

- 移除群组里的联系人





|

.. |br| raw:: html

    <br>
