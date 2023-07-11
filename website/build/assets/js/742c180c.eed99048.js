"use strict";(self.webpackChunkshixincube=self.webpackChunkshixincube||[]).push([[925],{4689:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return l},toc:function(){return m},default:function(){return b}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],u={title:"\u6d45\u8c08 AIGC \u751f\u4ea7\u529b",slug:"aigc_production_force",authors:["ambrose"],tags:["Diary"],keywords:["\u7a0b\u5e8f\u5458","\u521b\u4e1a","AIGC","\u5927\u8bed\u8a00\u6a21\u578b"],hide_table_of_contents:!1,draft:!1},c=void 0,s={permalink:"/blog/aigc_production_force",editUrl:"https://github.com/shixincube/cube-manual/website/blog/2023-07-05-think_about_aigc_production_force.md",source:"@site/blog/2023-07-05-think_about_aigc_production_force.md",title:"\u6d45\u8c08 AIGC \u751f\u4ea7\u529b",description:"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5728 LLM/AIGC \u884c\u4e1a\u91cc\u4e00\u5927\u6279\u5546\u4e1a\u3001\u5f00\u6e90\u5927\u6a21\u578b\u5982\u96e8\u540e\u6625\u7b0b\u822c\u7206\u53d1\u5f0f\u6d8c\u73b0\uff08\u4f8b\u5982\uff1a\u6587\u5fc3\u4e00\u8a00\uff0c\u901a\u4e49\uff0c\u6df7\u5143\uff0c\u4f0f\u7fb2\uff0c\u76d8\u53e4\uff0cMOSS\uff0c\u609f\u9053\u7b49\uff09\uff0c\u5404\u79cd\u57fa\u4e8e\u7ec6\u5206\u573a\u666f\u7684\u4ea7\u54c1\u4e5f\u7eb7\u7eb7\u629b\u5934\u9732\u9762\uff0c\u4f8b\u5982\u57fa\u4e8e\u5fc3\u7406\u60c5\u611f\u966a\u804a\u7684 EmoGPT\uff0c\u7528\u4e8e\u533b\u7597\u95ee\u8bca\u7684 MedGPT \u548c\u7528\u4e8e\u6cd5\u5f8b\u95ee\u7b54\u7684 ChatLaw \u7b49\u7b49\u3002",date:"2023-07-05T00:00:00.000Z",formattedDate:"2023\u5e747\u67085\u65e5",tags:[{label:"Diary",permalink:"/blog/tags/diary"}],readingTime:8.225,truncated:!0,authors:[{name:"Xu Jiangwei (Ambrose Xu)",title:"Leader of Cube",url:"https://github.com/xujiangwei",imageURL:"https://static.shixincube.com/cube/assets/images/avatar/ambrose.png",key:"ambrose"}],nextItem:{title:"\u4e00\u8def\u8d70\uff0c\u4e00\u8def\u4e22 \uff08\u5f00\u9898\uff09",permalink:"/blog/opening_topic"}},l={authorsImageUrls:[void 0]},m=[],p={toc:m};function b(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5728 LLM/AIGC \u884c\u4e1a\u91cc\u4e00\u5927\u6279\u5546\u4e1a\u3001\u5f00\u6e90\u5927\u6a21\u578b\u5982\u96e8\u540e\u6625\u7b0b\u822c\u7206\u53d1\u5f0f\u6d8c\u73b0\uff08\u4f8b\u5982\uff1a\u6587\u5fc3\u4e00\u8a00\uff0c\u901a\u4e49\uff0c\u6df7\u5143\uff0c\u4f0f\u7fb2\uff0c\u76d8\u53e4\uff0cMOSS\uff0c\u609f\u9053\u7b49\uff09\uff0c\u5404\u79cd\u57fa\u4e8e\u7ec6\u5206\u573a\u666f\u7684\u4ea7\u54c1\u4e5f\u7eb7\u7eb7\u629b\u5934\u9732\u9762\uff0c\u4f8b\u5982\u57fa\u4e8e\u5fc3\u7406\u60c5\u611f\u966a\u804a\u7684 EmoGPT\uff0c\u7528\u4e8e\u533b\u7597\u95ee\u8bca\u7684 MedGPT \u548c\u7528\u4e8e\u6cd5\u5f8b\u95ee\u7b54\u7684 ChatLaw \u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u4eca\u5929\u521a\u597d\u628a\u6211\u6700\u8fd1\u7684\u4e00\u4e9b\u601d\u8def\u6574\u7406\u4e00\u4e0b\uff0c\u6d45\u804a\u4e00\u4e0b AIGC \u5f62\u6210\u751f\u4ea7\u529b\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5927\u6a21\u578b\u672c\u8eab\uff0c\u5f88\u591a\u5927\u4f6c\u5df2\u7ecf\u8bb2\u5f97\u5f88\u900f\u5f7b\u4e86\uff0c\u652f\u6491 AIGC \u7684\u4e09\u5927\u652f\u67f1\uff0c\u5373\u7b97\u6cd5\u3001\u6570\u636e\u3001\u7b97\u529b\u3002\u7b97\u6cd5\u51b3\u5b9a\u667a\u80fd\u6c34\u5e73\uff0c\u6570\u636e\u51b3\u5b9a\u667a\u80fd\u8303\u56f4\uff0c\u7b97\u529b\u51b3\u5b9a\u667a\u80fd\u6548\u7387\u3002\u672c\u6587\u4e3b\u8981\u804a\u804a\u4ece AIGC \u6784\u5efa\u751f\u6210\u529b\u7684\u8fc7\u7a0b\u8981\u7d20\u95ee\u9898\u3002"))}b.isMDXComponent=!0}}]);