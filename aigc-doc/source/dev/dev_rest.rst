===============================
RESTful API
===============================

.. contents:: 目录

|


文件存储
===============================

查找文件
-------------------------------

.. http:post:: /filestorage/operation/find/

    按照指定条件查找文件。

    :reqheader Content-Type: ``application/json``

    :<json string token: 授权联系人的令牌码。
    :<json string md5: 指定查找文件的 MD5 码。

    :>json object data: 查找到的文件标签数据，参看 `FileLabel <dev_structure.html#file-label>`_ 。
    :>json string name: 文件操作动作。
    :>json number sn: 操作序号。

    :status 400: 访问文件服务故障。
    :status 403: 参数错误。
    :status 404: 没有找到指定文件。



上传文件（Binary）
-------------------------------

.. http:post:: /filestorage/file/

    以二进制流方式上传文件数据。

    :query string token: 授权联系人的令牌码。
    :query string filename: 文件名。
    :query number filesize: 文件大小（ *选填* ）。
    :query number modified: 文件最后修改的时间戳（ *选填* ）。
    :query number sn: 操作序号（ *选填* ）。

    :>json object data: 上传的文件数据。|br|
                        **fileName** - 文件名。|br|
                        **fileSize** - 文件大小。|br|
                        **fileCode** - 文件码。|br|
                        **lastModified** - 文件最后一次修改时间戳。|br|
                        **position** - 上传数据结束位置。

    :>json string name: 文件操作动作。
    :>json number sn: 操作序号。

    .. code-block:: json

        {
            "data": {
                "fileName": "yuebing.wav",
                "fileSize": 10248112,
                "fileCode": "UxUiHFebTvyQusIRBQCpANsMdYfWGlHGwVxHlbzAxepzvKBXapMJJZcNkOXiZpEx",
                "lastModified": 1607927012129,
                "position": 10248112
            },
            "name": "uploadFile",
            "sn": 187653391
        }

    :status 400: 访问文件服务故障。
    :status 403: 读取上传数据错误。
    :status 404: 读取令牌码数据故障。
    :status 406: 服务不可用。
    :status 503: 令牌码无效。





|

.. |br| raw:: html

    <br>