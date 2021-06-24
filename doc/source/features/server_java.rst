===============================
服务器 Java Client
===============================

当您的服务器需要从时信魔方服务器获取数据或者管理时信魔方服务器时，可以使用服务器的 Client 程序。

工作原理
===============================

服务器 Client 直接连接服务单元服务器。如下图所示：

.. figure:: /images/data_flow_topology_with_client.png
    :align: center
    :alt: 服务器 Java Client 数据流

    *服务器 Java Client 数据流*

Server Client 使用 :term:`SHM` 协议连接到服务单元节点，建立长连接双工数据通道。实现包括事件监听和数据处理的能力：

 * 监听服务单元的功能事件
 * 更新或修改数据实体数据
 * 查询各模块数据
 * 监视服务器工况

|

快速开始
===============================

#. 获取项目代码

    .. code-block:: shell

        mkdir cube
        cd cube

        # 从仓库获取代码
        git clone https://gitee.com/shixinhulian/cube-server-dependencies.git
        git clone https://gitee.com/shixinhulian/cube-server.git
        git clone https://gitee.com/shixinhulian/cube-server-client.git


#. 编译项目

    .. code-block:: shell

        # 编译服务器项目
        cd cube-server
        make all

        # 编译客户端项目
        cd ../cube-server-client
        ant build


#. 在项目中导入 JAR 文件

    完成构建之后，在 ``cube-server-client`` 的 ``build`` 目录下将生成 ``cube-server-client-X.X.X.jar`` 的客户端 JAR 库文件。在项目中导入该 JAR 库文件，并导入 Client 的依赖文件：

    - ``cube-server-dependencies/json-20201115.jar``
    - ``cube-server-dependencies/cell-2.3.jar``
    - ``cube-server/build/cube-common-3.0.jar``

#. 使用 **CubeClient** 对象

    客户端程序提供 ``CubeClient`` 作为 API 入口，因此，使用时仅需要实例化该类，并使用该类提供的方法进行操作。

    .. code-block:: java

        // 创建客户端实例
        CubeClient client = new CubeClient("111.72.86.12");

        [...]

        // 注册联系人监听器
        client.registerListener(new ContactListener() {
            [...]
        });

        [...]

        // 销毁客户端
        client.destroy();


    详细方法说明可以查看 `客户端 API 文档 <../_static/cube-server-client-api/index.html>`__ 。

|


示例
===============================



|
