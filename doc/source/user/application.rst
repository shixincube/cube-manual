===============================
客户端应用程序
===============================

.. contents:: 目录


配置并运行 Web 版应用程序
===============================

.. note::

    时信魔方的客户端工程默认提供的是使用 **Node.js** 技术的 `Express <https://expressjs.com/>`__ 作为 Web Application Server 。您可以使用其他 Web 应用服务器技术，例如：`Spring <https://spring.io/>`__ 、`Struts <https://struts.apache.org/>`__ 或 `Rails <https://rubyonrails.org/>`__ 等。您可以参考 :doc:`客户端说明 </features/client_javascript>` 文档来获得更多信息。


1. 准备工作

    您需要在您的开发环境中正确安装以下工具：

    * `node <https://nodejs.org/zh-cn/>`__ (需要 11.0 或以上版本)
    * `npm <https://www.npmjs.com/>`__ 


2. 编译 Web 版应用程序

    1.1. 获取源代码

        .. code-block:: shell
        
            git clone https://gitee.com/shixinhulian/cube-javascript

        或者

        .. code-block:: shell
        
            git clone https://github.com/shixincube/cube-javascript

    1.2. 安装依赖库

        进入 ``web`` 目录，并使用 npm 安装依赖库：

        .. code-block:: shell

            cd cube-javascript/web
            npm install

    1.3. 编译应用程序

        执行编译命令：

        .. code-block:: shell

            npm run build

        该编译脚本将编译应用程序的 Web 端 JavaScript 源代码。

    1.4. 配置服务器信息

        进入 ``public/javascripts`` 目录，编辑 ``server.js`` 文件：

        .. code-block:: javascript

            (function (g, $) {

                /**
                 * 服务器地址。
                 * 请修改为您的服务器地址。
                 */
                var address = '127.0.0.1';

                /**
                 * 服务器端口。
                 * 填写 0 表示使用默认端口。
                 */
                var port = 0;

                /**
                 * 用于文件服务的 HTTP 链接。
                 */
                var httpURL = 'http://127.0.0.1:7777';

                /**
                 * 用于文件服务的 HTTPS 链接。
                 */
                var httpsURL = 'https://127.0.0.1:7777';

                ...

            })(window, jQuery);

        将第36行的服务器地址 ``'127.0.0.1'`` 修改为时信魔方的服务器地址。


3. 配置并启动应用服务器

    参看 :doc:`服务器安装指南 </user/installation>` 中 `配置应用服务器 <installation.html#section-config-appserver>`__ 和 `启动应用服务器 <installation.html#section-start-appserver>`__ 段落。


4. 运行

    使用 npm 启动 Web 服务器：

    .. code-block:: shell

        npm run start

    启动成功之后，在浏览器里输入：``http://您的服务器地址:8080/`` 进入应用程序。

    .. figure:: /images/snapshoot_cube_web_login.png
        :align: center
        :alt: Web 应用程序首页

        *Web 应用程序首页*
    

5. 登录

    您可以通过点击“注册新账号”来创建新账号，也可以使用我们内置的试用账号：

    ======== ================ ================
    账号名     密码             昵称
    ======== ================ ================
    cube1     shixincube       李国诚
    cube2     shixincube       王沛珊
    cube3     shixincube       郝思雁
    cube4     shixincube       高海光
    cube5     shixincube       张明宇
    ======== ================ ================


    .. figure:: /images/snapshoot_cube_web_message.png
        :align: center
        :alt: Web 应用消息界面截图

    .. figure:: /images/snapshoot_cube_web_files.png
        :align: center
        :alt: Web 应用文件界面截图
    
    .. figure:: /images/snapshoot_cube_web_conference.png
        :align: center
        :alt: Web 应用会议界面截图

    .. figure:: /images/snapshoot_cube_web_contacts.png
        :align: center
        :alt: Web 应用联系人界面截图

    .. figure:: /images/snapshoot_cube_web_groupvideo.png
        :align: center
        :alt: Web 应用群组视频界面截图

|


配置并运行 Android 版应用程序
===============================

[TODO - hidden]


|


配置并运行 iOS 版应用程序
===============================

[TODO - hidden]

