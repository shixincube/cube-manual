===============================
Web/HTML5 - 群组管理
===============================

在 :term:`魔方引擎` 里我们可以将若干联系人分为一个 **群组** ，在同一群组里联系人能共享群组的数据，群组也是 :term:`时信魔方` 的基础管理单元，其他模块都会使用到群组数据。

`联系人服务模块 <../../_static/cube-javascript-api/ContactService.html>`__ 提供了操作群组的接口，`Group <../../_static/cube-javascript-api/Group.html>`__ 是描述群组的对象实体， `GroupAppendix <../../_static/cube-javascript-api/GroupAppendix.html>`__ 群组附录对象描述了群组相关的数据，例如群组的公告等。


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

3. 打开浏览器（Chrome 或 Firefox）输入：`http://localhost:8000/examples/groups-mgmt/ <http://localhost:8000/examples/groups-mgmt/>`__ 或 `https://localhost:4430/examples/groups-mgmt/ <https://localhost:4430/examples/groups-mgmt/>`__ 进入演示程序界面。

4. 在账号 ID 输入框内输入任意账号 ID，例如：``20000`` 。在账号名称输入框内输入任意名称，点击“ **登录** ”按钮，启动程序并登录账号。

5. 点击“ **创建群组** ”按钮，依次输入群组名称，选择群组成员完成新群组的创建。

6. 点击“ **添加群成员** ”按钮可选择需要添加的新成员，点击“ **移除群成员** ”可移除已选择群组成员。

7. 点击“ **修改群公告** ”按钮，输入新的群组公告。

8. 点击“ **解散群组** ”按钮，确认之后可解散选中的群组。


.. figure:: /images/tutorials/web_groups_mgmt.png
    :align: center
    :alt: 群组管理

    *群组管理*

|

理解示例程序
===============================

示例程序主要演示了以下群组功能：

* 查询当前签入的联系人所在的群组 - 使用 `queryGroups() <../../_static/cube-javascript-api/ContactService.html#queryGroups>`__ 方法以群组的更新时间为查询线索获得群组。

    .. code-block:: javascript

        cube.contact.queryGroups(beginning, ending, function(list) {
            [...]
        });


* 创建群组 - 使用 `createGroup() <../../_static/cube-javascript-api/ContactService.html#createGroup>`__ 方法创建新的群组。

    .. code-block:: javascript

        cube.contact.createGroup(groupName, list, function(group) {
            // 群组创建成功
            [...]
        }, function(error) {
            [...]
        });

    该方法会触发 `ContactEvent.GroupCreated <../../_static/cube-javascript-api/global.html#ContactEvent>`__ 事件。

* 解散群组 - 使用 `dissolveGroup() <../../_static/cube-javascript-api/ContactService.html#dissolveGroup>`__ 方法解散群组。这里需要注意的是，只有群组的创建人可以解散群组。

    .. code-block:: javascript

        cube.contact.dissolveGroup(group, function(group) {
            // 群组解散成功
            [...]
        }, function(error) {
            [...]
        });

    该方法会触发 `ContactEvent.GroupDissolved <../../_static/cube-javascript-api/global.html#ContactEvent>`__ 事件。

* 添加群组成员 - 使用 `Group#addMembers() <../../_static/cube-javascript-api/Group.html#addMembers>`__ 方法向群组添加联系人。

    .. code-block:: javascript

        group.addMembers(list, function(group, members) {
            [...]
        }, function(error) {
            [...]
        });

    该方法会触发 `ContactEvent.GroupMemberAdded <../../_static/cube-javascript-api/global.html#ContactEvent>`__ 事件。

* 移除群组成员 - 使用 `Group#removeMembers() <../../_static/cube-javascript-api/Group.html#removeMembers>`__ 方法从群组里移除联系人。

    .. code-block:: javascript

        group.removeMembers(list, function() {
            [...]
        }, function(error) {
            [...]
        });

    该方法会触发 `ContactEvent.GroupMemberRemoved <../../_static/cube-javascript-api/global.html#ContactEvent>`__ 事件。

* 修改群组公告内容 - 使用 `GroupAppendix#updateNotice() <../../_static/cube-javascript-api/GroupAppendix.html#updateNotice>`__ 方法更新群组的公告信息。

    .. code-block:: javascript

        // notice 是新的公告内容字符串
        group.getAppendix().updateNotice(notice, function(appendix) {
            [...]
        }, function(error) {
            [...]
        });

    该方法会触发 `ContactEvent.GroupAppendixUpdated <../../_static/cube-javascript-api/global.html#ContactEvent>`__ 事件。

需要注意的是，在示例程序里我们总是使用 `getGroup() <../../_static/cube-javascript-api/ContactService.html#getGroup>`__ 方法来获取 ``Group`` 实例，我们推荐在您的应用程序里也这样操作。您的应用程序仅保存群组的 ID ，通过群组 ID 来获取 ``Group`` 实例。

|

代码详解
===============================

示例里我们使用的文件有：

* **index.html** ：主页面文件。
* **main.css** ：页面样式表文件。
* **main.js** ：示例的程序主文件。包括程序逻辑流程和页面事件处理。
* **helper.js** ：提供一些帮助函数的库文件。这个示例主要使用了 ``dialog`` 函数来显示联系人列表对话框。
* **cube.js** ：时信魔方的 JavaScript 客户端库文件。

#. 在示例程序的主文件 ``main.js`` 里我们增加了几个函数来帮助我们完成界面上的操作：

    * ``getSelectedGroupId`` - 该函数返回在群列表里选择的群组的 ID 。
    * ``querySelectedContacts`` - 该函数返回联系人对话框里被选中的联系人。
    * ``presetContactsDialog`` - 在显示联系人对话框之前对数据进行预处理，预先设置要禁用的选项。
    * ``resetContactsDialog`` - 重置联系人对话框的数据。

#. 当用户登录后，触发 ``onSignIn`` 回调函数调用 ``refreshGroupList()`` 查询当前签入联系人所在的群组。

    .. code-block:: javascript

        function refreshGroupList() {
            [...]

            // 查找自己所在的群组
            cube.contact.queryGroups(function(list) {
                list.forEach(function(group) {
                    [...]
                });
            });
        }

#. 创建群组、解散群组、添加群组成员、移除群组成员和修改群公告按钮对应的回调函数依次是：

      * ``createGroup``
      * ``dissolveGroup``
      * ``addMember``
      * ``removeMember``
      * ``updateNotice``


|
