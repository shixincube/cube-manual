===============================
状态码
===============================

.. contents:: 目录


.. _auth_state:

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


.. _contact_state:

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
