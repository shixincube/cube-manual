===============================
数据结构
===============================

.. contents:: 目录


.. _auth-token:

Auth Token
===============================

授权令牌。

.. list-table:: 
    :widths: 20 10 10 10 30
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - code
      - string
      - Y
      - *--*
      - 令牌编码
    * - domain
      - string
      - Y
      - *--*
      - App 的访问域
    * - appKey
      - string
      - Y
      - *--*
      - App 的 Key 串
    * - cid
      - long
      - Y
      - 0
      - 令牌绑定的联系人 ID
    * - issues
      - long
      - Y
      - *--*
      - 发布时间
    * - expiry
      - long
      - Y
      - *--*
      - 过期时间
    * - description
      - JSON
      - Y
      - *--*
      - 主描述信息 :ref:`pd`


**JSON 示例**

.. code-block:: json

    {
        "code"   : "HmKZiQBbuXBuiFijgTTXbwKHeveWjItP",
        "domain" : "shixincube.com",
        "appKey" : "shixin-cubeteam-opensource-appkey",
        "cid"    : 1615268975051,
        "issues" : 1617005161851,
        "expiry" : 1617609961851,
        "description" : {
            "address" : "127.0.0.1",
            "port"    : 7000,
            "primaryContent" : {
                "FileStorage" : {
                    "fileURL" : "http://127.0.0.1:7010/filestorage/file/",
                    "fileSecureURL" : "https://127.0.0.1:7017/filestorage/file/"
                },
                "MultipointComm" : {
                    "iceServers" : [
                        {
                            "urls" : "turn:202.183.15.67:3478",
                            "username" : "shixincube.com",
                            "credential" : "cube_shixin"
                        }
                    ]
                }
            }
        }
    }


.. _pd:

Primary Description
===============================

主内容描述。用于配置客户端各参数，为各模块提供必要的配置信息。

.. list-table:: 
    :widths: 20 10 10 10 30
    :header-rows: 1

    * - 字段
      - 类型
      - 是否必填
      - 默认值
      - 描述
    * - address
      - string
      - Y
      - *--*
      - 客户端需要优先连接的主地址
    * - port
      - int
      - Y
      - *--*
      - 客户端需要优先连接的端口
    * - primaryContent
      - JSON
      - Y
      - *--*
      - 对客户端进行配置的信息

.. note:: 字段 `primaryContent` 数据格式由各个模块填写以模块名为键的模块的配置参数。

**JSON 示例**

.. code-block:: json

    {
        "address" : "127.0.0.1",
        "port"    : 7000,
        "primaryContent" : {
            "FileStorage" : {
                "fileURL" : "http://127.0.0.1:7010/filestorage/file/",
                "fileSecureURL" : "https://127.0.0.1:7017/filestorage/file/"
            },
            "MultipointComm" : {
                "iceServers" : [
                    {
                        "urls" : "turn:202.183.15.67:3478",
                        "username" : "shixincube.com",
                        "credential" : "cube_shixin"
                    }
                ]
            }
        }
    }

