===============================
状态码
===============================

.. contents:: 目录


.. _auth-service-state:

Auth Service State
===============================

.. list-table::
    :widths: 30 20 50
    :header-rows: 1

    * - 状态名
      - 状态码
      - 状态描述
    * - Ok
      - 0
      - 状态正常状态码。
    * - Failure
      - 9
      - 状态出现异常状态码。
    * - StorageError
      - 20
      - 存储故障状态码。
    * - Timeout
      - 21
      - 本地任务超时状态码。
    * - DataFormatError
      - 22
      - 数据格式错误。


|


.. _contact-service-state:

Contact Service State
===============================

.. list-table::
    :widths: 30 20 50
    :header-rows: 1

    * - 状态名
      - 状态码
      - 状态描述
    * - Ok
      - 0
      - 状态正常状态码。
    * - InvalidParameter
      - 5
      - 无效的参数。
    * - DataStructureError
      - 8
      - 数据结构错误。
    * - Failure
      - 9
      - 遇到故障。
    * - InvalidDomain
      - 11
      - 无效域信息。
    * - NoSignIn
      - 12
      - 未签入联系人。
    * - NotFindContact
      - 14
      - 未找到联系人。
    * - NotFindGroup
      - 15
      - 未找到群组。
    * - NotFindContactZone
      - 16
      - 未找到联系人分区。
    * - InconsistentToken
      - 21
      - 令牌不一致。
    * - IllegalOperation
      - 25
      - 不被接受的非法操作。
    * - ServerError
      - 101
      - 服务器错误。
    * - NotAllowed
      - 102
      - 不被允许的操作。
    * - NoNetwork
      - 103
      - 无网络连接。
    * - AlreadyExists
      - 104
      - 数据已存在。
    * - Unknown
      - 99
      - 未知的状态。


|


.. _file-storage-state:

File Storage State
===============================

.. list-table::
    :widths: 30 20 50
    :header-rows: 1

    * - 状态名
      - 状态码
      - 状态描述
    * - Ok
      - 0
      - 状态正常状态码。
    * - InvalidParameter
      - 5
      - 传入无效参数。
    * - Failure
      - 9
      - 状态出现异常状态码。
    * - InvalidDomain
      - 11
      - 无效域信息。
    * - Forbidden
      - 12
      - 无效的参数请求，禁止访问。
    * - NotFound
      - 13
      - 未找到指定数据。
    * - Unauthorized
      - 14
      - 未授权访问。
    * - Reject
      - 15
      - 拒绝操作。
    * - FileLabelError
      - 16
      - 文件标签错误。
    * - Writing
      - 17
      - 正在写入文件。
    * - DuplicationOfName
      - 20
      - 数据重名，不被允许操作。
    * - SearchConditionError
      - 25
      - 搜索条件错误。
    * - Unknown
      - 99
      - 未知的状态。


|


.. _messaging-service-state:

Messaging Service State
===============================

.. list-table::
    :widths: 30 20 50
    :header-rows: 1

    * - 状态名
      - 状态码
      - 状态描述
    * - Ok
      - 0
      - 状态正常状态码。
    * - InvalidParameter
      - 5
      - 传入无效参数。
    * - Failure
      - 9
      - 遇到故障。
    * - InvalidDomain
      - 11
      - 无效域信息。
    * - DataStructureError
      - 12
      - 数据结构错误。
    * - NoDomain
      - 13
      - 没有域信息。
    * - NoDevice
      - 14
      - 没有设备信息。
    * - NoContact
      - 15
      - 没有找到联系人。
    * - NoGroup
      - 16
      - 没有找到群组。
    * - AttachmentError
      - 17
      - 消息附件错误。
    * - GroupError
      - 18
      - 群组数据错误。
    * - BeBlocked
      - 30
      - 被对方阻止。
    * - Unknown
      - 99
      - 未知的状态。


