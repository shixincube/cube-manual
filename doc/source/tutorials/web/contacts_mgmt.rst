===============================
Web/HTML5 - 联系人管理
===============================

:term:`魔方引擎` 的 `联系人服务模块 <../../_static/cube-javascript-api/ContactService.html>`__ 是魔方引擎最基础的模块，几乎所有的模块都依赖该模块。

魔方引擎是以 `Contact <../../_static/cube-javascript-api/Contact.html>`__ 即“ **联系人** ”为基础管理单元，也就是我们常说的“ **用户** ”。每个联系人对应一个有效 ID 标记的用户，通过 ID 我们能访问到该联系人的所有开放数据。

一般的，我们在管理社交关系时，需要把若干个联系人分组到一起，比如说把我的好友分到一个叫“好友”的列表里以便快速查阅。在时信魔方里，使用 `ContactZone <../../_static/cube-javascript-api/ContactZone.html>`__ 联系人分区来管理一组特定分类的联系人。

快速开始
===============================

按照以下步骤运行演示程序：

1. 安装时信魔方服务器：:doc:`/user/installation` 。

2. 执行以下命令运行演示程序：

    .. code-block:: shell

        git clone https://gitee.com/shixinhulian/cube-javascript
        cd cube-javascript/cube
        npm install
        npm run example

3. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/contacts-mgmt/ <http://localhost:8000/examples/contacts-mgmt/>`__ 或 `https://localhost:8443/examples/contacts-mgmt/ <https://localhost:8443/examples/contacts-mgmt/>`__ 进入演示程序界面。

4. 在账号 ID 输入框内输入任意账号 ID，例如：``20000`` 。点击“启动”按钮，启动程序。

5. 在“候选联系人”里选择一个联系人，点击“ **添加到 "friends"** ”或者“ **添加到 "teammates"** ”按钮可将联系人添加到对应的分区里。

6. 在 “friends” 区或者 “teammates” 区选择一个联系人，点击“移除”按钮可从分区里移除。

7. 刷新页面后，使用之前的 ID 再次登录程序，点击“ **加载 "friends"** ”或“ **加载 "teammates"** ”，之前操作的数据将被加载到界面里。


.. figure:: /images/tutorials/web_contacts_mgmt.png
    :align: center
    :alt: 联系人管理

    *联系人管理*

|

理解示例程序
===============================

示例程序操作了两个分区，一个名称是 **friends** ，另一个是 **teammates** ，两个分区相当于两个列表，登录的联系人可以将任意联系人添加到分区里。这里需要注意的是 **被添加的联系人在其“待处理”分区里会增加一条待处理记录，通过查询待处理分区可以了解到有哪些联系人把“我”添加到了他的分区里** 。

* 查询分区数据：

    .. code-block:: javascript

        cube.contact.getContactZone('friends', function(contactZone) {
            [...]
        }, function(error) {
            [...]
        });

* 添加联系人到分区：

    .. code-block:: javascript

        cube.contact.addContactToZone('friends', contactId, '这是示例演示', function(zoneName, contactId) {
            [...]
        }, function(error) {
            [...]
        });

* 从分区删除联系人：

    .. code-block:: javascript

        cube.contact.removeContactFromZone('friends', contactId, function(zoneName, contactId) {
            [...]
        }, function(error) {
            [...]
        });


.. note::

    这个示例主要演示如何管理联系人分区，如果需要操作“待处理”联系人，可以使用 `getPendingZone() <../../_static/cube-javascript-api/ContactService.html#getPendingZone>`__ 获取待处理分区数据。

.. tip::

    使用 `queryBlockList() <../../_static/cube-javascript-api/ContactService.html#queryBlockList>`__ 、 `addBlockList() <../../_static/cube-javascript-api/ContactService.html#addBlockList>`__ 和 `removeBlockList() <../../_static/cube-javascript-api/ContactService.html#removeBlockList>`__ 可以管理该联系人的 **阻止清单** （俗称“黑名单”）。

|


代码详解
===============================

示例里我们使用的文件有：

* **index.html** ：主页面文件。
* **main.css** ：页面样式表文件。
* **main.js** ：示例的程序主文件。包括程序逻辑流程和页面事件处理。
* **helper.js** ：提供一些帮助函数的库文件。
* **cube.js** ：时信魔方的 JavaScript 客户端库文件。

#. 程序启动后，将账号签入，使用 **helper.js** 提供的 ``loadContacts()`` 函数将预置的联系人数据装载到 *select* 标签里。

    .. code-block:: javascript

        loadContacts(cube, function(list) {
            list.forEach(function(contact) {
                var option = document.createElement('option');
                option.value = contact.getId();
                option.innerText = contact.getId() + ' - ' + contact.getName();
                selContacts.append(option);
            });
        });

#. 操作栏里的6个按钮对应6个按钮事件处理函数：

    * ``loadFriends``
    * ``addFrined``
    * ``removeFriend``
    * ``loadTeammates``
    * ``addTeammate``
    * ``removeTeammate``

|
