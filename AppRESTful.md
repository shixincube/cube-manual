# App RESTful 接口

## /cube/config/

获取时信魔方的配置信息。

> /cube/config/
> GET

### Request
```json
{
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK"
}
```

### Respond
```json
{
    "address": "127.0.0.1",
    "domain": "shixincube.com",
    "appKey": "shixin-cubeteam-opensource-appkey"
}
```


## /account/check_phone_available/

校验手机号码，并支持是否发送验证码。

> /account/check_phone_available/
> POST

### Request
```json
{
    "regionCode": "86",
    "phoneNumber": "13912345678",
    "verificationCodeRequired": true
}
```

### Respond
```json
{
    "code": 0,
    "verificationCodeRequired": true
}
```


## /account/register/

注册账号

> /account/register/
> POST

### Request
```json
{
    "account": "haosiyan",
    "password": "c7af98d321febe62e04d45e8806852e0",
    "nickname": "郝思雁",
    "avatar": "avatar13"
}
```
*OR*
```json
{
    "phone": "13012345678",
    "password": "c7af98d321febe62e04d45e8806852e0",
    "nickname": "郝思雁",
    "avatar": "avatar13",
    "vcode": "8752"
}
```

### Respond
```json
{
    "code": 0,
    "account": {
        "id": 1615268975051,
        "account": "haosiyan",
        "phone": "130****0987",
        "name": "郝思雁",
        "avatar": "avatar13",
        "state": 0,
        "region": "--",
        "department": "--"
    }
}
```

&nbsp;

## /account/login/

账号登录

> /account/login/
> POST

### Request
```json
{
    "account": "haosiyan",
    "password": "c7af98d321febe62e04d45e8806852e0",
    "device": "Web/Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:90.0) Gecko/20100101 Firefox/90.0"
}
```
*OR*
```json
{
    "phone": "18012345678",
    "password": "c7af98d321febe62e04d45e8806852e0",
    "device": "Web/Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:90.0) Gecko/20100101 Firefox/90.0"
}
```
*OR*
```json
{
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK"
}
```

### Respond
```json
{
    "code": 0,
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK",
    "creation": 1615354962015,
    "expire": 1615959762015
}
```

&nbsp;

## /account/logout/

账号登出

> /account/logout
> POST

### Request
```json
{
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK",
    "device": "Web/Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:90.0) Gecko/20100101 Firefox/90.0"
}
```

### Respond
```json
{
    "code": 0,
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK"
}
```

&nbsp;

## /account/info/

获取账号数据

> /account/info/
> GET

### Request

#### 获取自己的账号信息
```json
{
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK"
}
```
*OR*

#### 获取指定账号的信息
```json
{
    "id": 50001003,
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK"
}
```
*OR*

#### 批量获取账号信息
```json
{
    "list": "50001002,50001003,50001004",
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK"
}
```

### Respond
```json
{
    "id": 50001003,
    "account": "haosiyan",
    "name": "郝思雁",
    "phone": "130****9876",
    "avatar": "avatar03",
    "state": 0,
    "region": "上海",
    "department": "公关部"
}
```
*OR*
```json
[{
    "id": 50001002,
    "name": "王沛珊",
    "phone": "130****1234",
    "avatar": "avatar02",
    "state": "offline",
    "region": "武汉",
    "department": "媒介部"
},{
    "id": 50001003,
    "account": "haosiyan",
    "name": "郝思雁",
    "phone": "130****9876",
    "avatar": "avatar03",
    "state": 0,
    "region": "上海",
    "department": "公关部"
}]
```

&nbsp;

## /account/info/

修改当前账号数据

> /account/info/
> POST

### Request
```json
{
    "name": "来自白垩纪",
    "avatar": "avatar09",
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK"
}
```

### Respond
```json
{
    "id": 50001003,
    "phone": "130****9876",
    "name": "来自白垩纪",
    "avatar": "avatar09",
    "state": 0,
    "region": "上海",
    "department": "公关部"
}
```

> 该接口仅能修改当前已登录账号的信息。


&nbsp;

## /account/hb/

心跳指令，客户端保持活跃。

> /account/hb
> POST

### Request
```json
{
    "token": "JSZeCEqjQgHpeoMAqwVVtmzLcDyJxGUK"
}
```

### Respond
```json
{
    "success": true
}
```

&nbsp;

----

## /account/buildin/

> /account/buildin/
> GET

返回系统内置的联系人列表。

```javascript
[{
    id: 50001001,
    name: '李国诚',
    phone: "130****1234",
    avatar: 'avatar01',
    state: 'offline',
    region: '北京',
    department: '产品中心'
}, {
    id: 50001002,
    name: '王沛珊',
    phone: "130****1234",
    avatar: 'avatar02',
    state: 'offline',
    region: '武汉',
    department: '媒介部'
}, {
    id: 50001003,
    name: '郝思雁',
    phone: "130****1234",
    avatar: 'avatar03',
    state: 'offline',
    region: '上海',
    department: '公关部'
}, {
    id: 50001004,
    name: '高海光',
    phone: "130****1234",
    avatar: 'avatar04',
    state: 'offline',
    region: '成都',
    department: '技术部'
}, {
    id: 50001005,
    name: '张明宇',
    phone: "130****1234",
    avatar: 'avatar05',
    state: 'offline',
    region: '广州',
    department: '设计部'
}]
```

&nbsp;
