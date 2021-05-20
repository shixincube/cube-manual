===============================
术语
===============================

本页是术语表，解释了经常出现在本文档中的常用术语。

.. glossary::

    AVI
        Audio Video Interleaved 是微软在1992年11月推出的一种多媒体容器格式，它是 Windows 视频技术的一部分。AVI 文件可以同时包含音频和视频数据在一个文件容器，允许同步音频与视频播放。AVI是资源交换文件格式（RIFF）的派生版本。

    Cell
        由时信魔方创始人 Xu Jiangwei 开发的实现 :term:`SHM` 协议的软件。该软件服务器端由 Java 和 C/C++ 语言开发，客户端 SDK 支持 Android 、iOS 、Web/HTML5 、Windows 和 macOS 等操作系统。

    DOM
        Document Object Model 文档对象模型是一种跨平台和独立于语言的交互约定，用于表示 HTML 、XHTML 和 XML 文档中的对象并与之交互。

    H.264
        H.264 是国际标准化组织（ISO）和国际电信联盟（ITU）共同提出的继 MPEG4 之后的新一代数字视频压缩格式。H.264 是 ITU-T 以 H.26x 系列为名称命名的视频编解码技术标准之一。

    HTTP
        Hypertext Transfer Protocol 超文本传输协议，是一种用于分布式、协作、超媒体信息系统的应用协议。HTTP 是万维网数据通信的基础。HTTP是应用层协议，同其他应用层协议一样，是为了实现某一类具体应用的协议，并由某一运行在用户空间的应用程序来实现其功能。HTTP是一种协议规范，这种规范记录在文档上，为真正通过HTTP进行通信的HTTP的实现程序。

    HTTPS
        使用 SSL 技术的 :term:`HTTP` 协议。

    ICE
        Interactive Connectivity Establishment 是一种协议，用于：:term:`NAT Traversal`。它定义了一种技术，允许两个端点之间的通信，一个在 NAT 内部，另一个在 NAT 外部。ICE 执行过程的是 NAT 将保留所有需要的端口以供通信，并且两个端点都将具有相关 IP 地址和可以联系另一个端点的端口的完整信息暴露出来。

        ICE 不能独立工作，它需要使用其他两个协议：:term:`STUN` 和 :term:`TURN` 。

    JKS
        Java KeyStore 是 Java 平台的安全证书（授权证书或公钥证书）以及相应的私钥的存储库，例如用于 :term:`TLS` 加密。

    jQuery
        `jQuery <https://jquery.com/>`__ 是一个跨平台 JavaScript 库，旨在简化 HTML 的客户端脚本。

    JSON
        `JSON <https://json.org/>`__ 即 JavaScript Object Notation 是一种轻量级的数据交换格式。它被设计成易于人理解和编写，易于机器进行解析。

    MP4
        MPEG-4 Part 14 或 MP4 是一种数字多媒体格式，最常用于存储视频和音频，但也可用于存储字幕和静止图像等其他数据。

    NAT
        Network Address Translation 即网络地址转换，是一种公共访问隐藏网络中机器的私有 IP 地址的机制，也就是说这种机制允许通过公共地址访问到隐藏在防火墙后面的设备。NAT 机制通常存在于所有类型的网络设备中，包括家庭路由器和成熟的公司防火墙。在所有情况下，效果都是一样的：NAT 内部的机器不能从外部自由访问。

        NAT 给 WebRTC 通信带来了很多问题：网络内部的机器将能够向外部发送数据，但是它们无法从网络外部的远程参与者接收数据。为了实现这一点，NAT 设备通常允许配置 NAT 绑定，以允许数据从网络的外部进入；创建这些 NAT 绑定就是所谓的 :term:`NAT Traversal`，也称为“打洞”或者“穿透”。

    NAT Traversal
        NAT Traversal 是建立基于 Internet 协议的“穿透”技术的总称。该技术遍历所有破坏端到端连接的网络地址转换网关，拦截并修改数据通道实现两个防火墙后面的终端互传数据。

    RTCP
        RTP Control Protocol 是 :term:`RTP` 的姊妹协议，它为 RTP 流提供带外统计信息和控制信息。

    RTP
        Real-time Transport Protocol 实时传输协议是一种标准的分组格式，用于在 IP 网络上传输音频和视频流。一般的，它与 :term:`RTP Control Protocol <RTCP>` 一起使用。使用 RTP传输音视频时，通常使用 :term:`SDP` 来描述媒体流的技术参数。

    SDK
        Software Development Kit 即软件开发包，是指由第三方服务商提供的实现软件产品某项功能的工具包。

    SDP
        Session Description Protocol 用于两个会话实体之间的媒体协商，并达成一致，属信令语言族，采用文本（字符）描述形式。

    SHM
        :term:`Simple Hybrid Messaging` 的缩写形式。
    
    Simple Hybrid Messaging
        简单混合消息传输协议是采用二进制格式的数据传输协议，该协议允许在一个数据管道内同时传输不同形式的数据包，封包包头仅 8 字节，且支持数据通道压缩和加密。

    SSL
        Secure Socket Layer 参看 :term:`TLS` 。
    
    STUN
        Session Traversal Utilities for NAT 是在解决 :term:`NAT` 穿透问题的任务中 对 :term:`ICE` 的补充协议。任何端点都可以使用它来确定 NAT 分配给它的 IP 地址和端口。它还可以用于检查两个端点之间的连接，并作为保持活动的协议来维护 NAT 绑定。STUN 适用于许多现有的 NAT 类型，并且不需要它们的任何特殊行为。
    
    TCP
        Transmission Control Protocol 是一种面向连接的、可靠的、基于字节流的传输层通信协议，由 IETF 的 RFC 793 定义。
    
    TLS
        Transport Layer Security 传输层安全性是一种广泛采用的安全性协议，旨在促进 Internet 上通信的隐私和数据安全性。

    TURN
        Traversal Using Relays around NAT 是 :term:`STUN` 的一个扩展，用于 :term:`NAT` 安全策略过于严格且无法成功创建所需的 NAT 绑定来实现 :term:`NAT Traversal` 的情况。在这些情况下，主机必须使用充当通信中继的 TURN 服务器的服务。

    UDP
        User Datagram Protocol 是无连接的传输协议，UDP 为应用程序提供了一种无需建立连接就可以发送封装的 IP 数据包的方法。RFC 768 描述了 UDP。

    WebSocket
        `WebSocket <https://www.websocket.org/>`__ （作为 HTML5 规范的一部分）规范定义了一个全双工单套接字连接，通过它可以在客户端和服务器之间发送消息。

    时信魔方
        时信魔方是面向开发者的实时协作开发框架。帮助开发者快速、高效的在项目中集成实时协作能力。亦是本产品的中文名称。
