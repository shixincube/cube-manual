===============================
服务器控制台
===============================

服务器控制台是时信魔方服务器的一站式管理系统，它能以直观的方式管理所有的服务器节点。

|

安装与配置
===============================

1. 从代码库检出源代码：

    .. code-block:: shell

        git clone https://github.com/shixincube/cube-server
        git clone https://github.com/shixincube/cube-server-dependencies


2. 编译并安装：

    .. code-block:: shell

        cd cube-server
        make all


3. 配置数据库：

    .. code-block:: shell

        cd console
        vi console.properties
    

    配置文件的相关数据库配置项说明如下：

    .. code-block:: properties

        # DB
        db=mysql
        
        # MySQL Config
        # 数据库服务器地址
        mysql.host=192.168.100.122
        # 数据库服务器端口
        mysql.port=3307
        # 数据库 Schema
        mysql.schema=cube_console
        # 访问用户名
        mysql.user=cube
        # 访问密码
        mysql.password=shixincube


4. 启动/停用控制台：

    使用以下命令启动控制台：

    .. code-block:: shell

        ./start.sh

    使用以下命令停用控制台：

    .. code-block:: shell

        ./stop.sh


    .. important:: 停用控制台操作仅关闭控制台自身的服务器进程，并不会关闭从控制台启动的服务器进程。如果您需要停用时信魔方服务器，请在控制台里进行操作。


5. 登录

    在浏览器里输入：``http://127.0.0.1:7080`` 登录控制台。

    * 默认用户名：``cube``
    * 默认密码：``shixincube``

    |

    之后即可在控制台操作服务器程序。

    .. figure:: /images/snapshoot_cube_console_index.png
        :align: center
        :alt: 时信魔方控制台首页截图

        *时信魔方控制台首页截图*


|



调度机服务器管理
===============================

在控制台左侧导航菜单点击“调度机”打开调度机管理界面。

.. figure:: /images/snapshoot_cube_console_dispatcher.png
    :align: center
    :alt: 时信魔方控制台调度机管理界面

    *时信魔方控制台调度机管理界面*


已部署列表
-------------------------------

已部署列表里显示当前您的系统中部署的所有调度机节点。表格中各列数据说明如下：

- **标签**
    节点所在主机的唯一标签，标签相同的节点表示被安装在同一个宿主主机上。
- **部署路径**
    调度机服务器所在的工作路径。
- **状态** 
    当前该节点的工作状态，分为：*运行中* ，*已关闭* 和 *故障* 3 个状态。
- **负载**
    运行中节点的工作负载描述，该数据通过计算客户端连接数计算得到。


启动/停止
-------------------------------

点击“启动”或者“停止”按钮可以启动或停止该调度机服务器。在界面里您需要输入当前账号的登录密码进行验证。如果您是用 ``cube`` 用户名登录的，则默认密码是 ``shixincube``。

.. figure:: /images/snapshoot_cube_console_start_dispatcher.png
    :align: center
    :alt: 调度机启动/停止界面

    *调度机启动/停止界面*


详情与配置
-------------------------------

点击“详情”按钮打开详情界面。

.. figure:: /images/snapshoot_cube_console_dispatcher_detail.png
    :align: center
    :alt: 调度机详情界面

    *调度机详情界面*

在详情界面点击“修改配置”可切换到配置界面。

.. figure:: /images/snapshoot_cube_console_dispatcher_config.png
    :align: center
    :alt: 调度机配置界面

    *调度机配置界面*

监视器
-------------------------------

启动调度机服务器之后，可以在 **监视器** 的“选择调度机”菜单里选择需要监视数据的调度机。在监视器界面里将显示最近一次调度机实时运行的快照数据。


|


服务单元服务器管理
===============================

在控制台左侧导航菜单点击“服务单元”打开服务器单元管理界面。

.. figure:: /images/snapshoot_cube_console_service.png
    :align: center
    :alt: 时信魔方控制台服务单元管理界面

    *时信魔方控制台服务单元管理界面*


已部署列表
-------------------------------

已部署列表里显示当前您的系统中部署的所有服务单元节点。表格中各列数据说明如下：

- **标签**
    节点所在主机的唯一标签，标签相同的节点表示被安装在同一个宿主主机上。
- **部署路径**
    服务单元服务器所在的工作路径。
- **状态** 
    当前该节点的工作状态，分为：*运行中* ，*已关闭* 和 *故障* 3 个状态。
- **负载**
    运行中节点的工作负载描述，该数据通过综合计算内部任务运行数据、内存使用情况和缓存响应时间等数值得到。


启动/停止
-------------------------------

点击“启动”或者“停止”按钮可以启动或停止该服务单元服务器。在界面里您需要输入当前账号的登录密码进行验证。如果您是用 ``cube`` 用户名登录的，则默认密码是 ``shixincube``。

.. figure:: /images/snapshoot_cube_console_start_service.png
    :align: center
    :alt: 服务单元启动/停止界面

    *服务单元启动/停止界面*


详情
-------------------------------

点击“详情”按钮打开详情界面。

.. figure:: /images/snapshoot_cube_console_service_detail.png
    :align: center
    :alt: 服务单元详情界面

    *服务单元详情界面*


配置
-------------------------------

点击“配置”按钮打开配置界面。

.. figure:: /images/snapshoot_cube_console_service_config.png
    :align: center
    :alt: 服务单元配置界面

    *服务单元配置界面*


监视器
-------------------------------

启动服务单元服务器之后，可以在 **监视器** 的“选择服务单元”菜单里选择需要监视数据的服务单元。在监视器界面里将显示最近一次服务单元实时运行的快照数据。


|


媒体单元服务器管理
===============================

[TODO]


|


存储节点管理
===============================

[TODO]

|
