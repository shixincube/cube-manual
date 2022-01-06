===============================
通信报文
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


- 更新联系人附录
    - 更新联系人关联的附录数据。
    - **Action** ``updateAppendix``
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
              - 附录的联系人 ID
            * - ``remarkName``
              - string
              - N
              - 指定该联系人的新的备注名

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
    - 解散指定的群组，只有该群组的群主才能解散该群。
    - **Action** ``dismissGroup``
    - **C -> S**
         .. list-table:: 
            :header-rows: 1

            * - 包负载
              - 描述
            * - 请求解散的群组
              - 参看 `Group <dev_structure.html#group>`_

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
              - 被解散的群组数据，参看 `Group <dev_structure.html#group>`_


- 添加联系人到群组
    - 向指定的群组添加联系人。
    - **Action** ``addGroupMember``
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
              - 群组的 ID
            * - ``memberIdList``
              - Array<long>
              - Y
              - 加入群组的联系人 ID
            * - ``operator``
              - JSON
              - Y
              - 执行该操作的操作员，参看 `Contact <dev_structure.html#contact>`_

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
              - 群组的变化数据，参看 `Group Bundle <dev_structure.html#group-bundle>`_


- 移除群组里的联系人
    - 从指定群组移除联系人。
    - **Action** ``removeGroupMember``
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
              - 群组的 ID
            * - ``memberIdList``
              - Array<long>
              - Y
              - 加入群组的联系人 ID
            * - ``operator``
              - JSON
              - Y
              - 执行该操作的操作员，参看 `Contact <dev_structure.html#contact>`_

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
              - 群组的变化数据，参看 `Group Bundle <dev_structure.html#group-bundle>`_


- 修改群组基础数据
    - 修改群组的基础数据，包括群组名称、群主（群组所有者）和上下文数据等。
    - **Action** ``modifyGroup``
    - **C -> S**
        .. list-table:: 
            :widths: 20 20 10 50
            :header-rows: 1

            * - 字段
              - 类型
              - 是否必填
              - 描述
            * - ``groupId`` |br2| *OR* |br2| ``id``
              - long
              - Y
              - 群组的 ID
            * - ``ownerId``
              - long
              - N
              - 群组新的群主 ID
            * - ``owner``
              - JSON
              - N
              - 群组新的群主，参看 `Contact <dev_structure.html#contact>`_
            * - ``name``
              - string
              - N
              - 新的群组名称
            * - ``context``
              - JSON
              - N
              - 新的群组的上下文数据

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
              - 新的群组数据，参看 `Group <dev_structure.html#group>`_


- 更新群组附录
    - 更新群组关联的附录数据。
    - **Action** ``updateAppendix``
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
              - 附录的群组 ID
            * - ``notice``
              - string
              - N
              - 群组公告内容
            * - ``memberRemark``
              - JSON
              - N
              - 指定群成员备注名。JSON 结构： |br2|
                ``id`` - long ：成员的 ID |br2|
                ``name`` - string ： 成员的备注名
            * - ``remark``
              - string
              - N
              - 指定对该群的备注
            * - ``following``
              - boolean
              - N
              - 指定是否关注该群组
            * - ``memberNameDisplayed``
              - boolean
              - N
              - 指定群组是否显示群成员名称
            * - ``commId``
              - long
              - N
              - 指定群组当前的通讯 ID

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


|

联系人分区操作
-------------------------------

- 创建分区
    - 创建指定名称的新分区。
    - **Action** ``createContactZone``
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
              - Y
              - 分区名称
            * - ``participants``
              - Array<JSON>
              - N
              - 分区参与人列表。 |br| 列表里存储参与人的 JSON 数据， |br| 参看 `Contact Zone Participant <dev_structure.html#contact-zone-participant>`_
            * - ``displayName``
              - string
              - N
              - 指定分区的显示名
            * - ``peerMode``
              - boolean
              - N
              - 指定是否使用对等模式。 |br| 默认值： ``false``

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
              - 新的分区，参看 `Contact Zone <dev_structure.html#contact-zone>`_


- 删除分区
    - 删除指定名称的分区。
    - **Action** ``deleteContactZone``
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
              - Y
              - 分区名称

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
              - 客户端发送的数据，JSON 结构： |br2|
                ``name`` - string ： 被删除的分区名称。


- 获取分区数据
    - 获取指定名称的分区数据。
    - **Action** ``getContactZone``
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
              - Y
              - 分区名称
            * - ``compact``
              - boolean
              - N
              - 是否返回紧凑结构，紧凑结构不包括参与人列表

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
              - 分区数据，参看 `Contact Zone <dev_structure.html#contact-zone>`_ 。 |br|
                如果请求数据设置 ``compact`` 为 ``true`` ， |br|
                则 Contact Zone 数据没有 ``participants`` 字段。


- 添加参与人到指定分区
    - 向指定分区添加参与人。
    - **Action** ``addParticipantToZone``
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
              - Y
              - 分区名称
            * - ``participant``
              - JSON
              - Y
              - 待添加的分区参与人，参看 `Contact Zone Participant <dev_structure.html#contact-zone-participant>`_

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
              - JSON 结构： |br2|
                ``name`` - string ： 分区名称 |br2|
                ``participant`` - JSON ： 添加的参与人 `Contact Zone Participant <dev_structure.html#contact-zone-participant>`_ |br2|
                ``timestamp`` - long ： 新的分区时间戳


- 从指定分区删除参与人
    - 将指定的参与人从分区移除。
    - **Action** ``removeParticipantFromZone``
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
              - Y
              - 分区名称
            * - ``participant``
              - JSON
              - Y
              - 待删除的分区参与人，参看 `Contact Zone Participant <dev_structure.html#contact-zone-participant>`_

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
              - JSON 结构： |br2|
                ``name`` - string ： 分区名称 |br2|
                ``participant`` - JSON ： 删除的参与人 `Contact Zone Participant <dev_structure.html#contact-zone-participant>`_ |br2|
                ``timestamp`` - long ： 新的分区时间戳


- 修改分区参与人数据
    - 修改指定分区参与人数据。
    - **Action** ``modifyZoneParticipant``
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
              - Y
              - 分区名称
            * - ``participant``
              - JSON
              - Y
              - 新的分区参与人，参看 `Contact Zone Participant <dev_structure.html#contact-zone-participant>`_

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
              - 新的参与人数据，参看 `Contact Zone Participant <dev_structure.html#contact-zone-participant>`_


- 分区是否包含指定参与人
    - 判断指定的参与人是否已经在指定分区里。
    - **Action** ``containsParticipantInZone``
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
              - Y
              - 分区名称
            * - ``participantId``
              - long
              - Y
              - 指定参与人 ID

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
              - JSON 结构： |br|
                ``contained`` - boolean ： 是否包含指定的参与人 |br|
                ``name`` - string ： 分区名称 |br|
                ``participantId`` - long ： 参与人 ID




|

.. |br| raw:: html

    <br>

.. |br2| raw:: html

    <br><br>
