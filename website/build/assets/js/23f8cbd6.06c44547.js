"use strict";(self.webpackChunkshixincube=self.webpackChunkshixincube||[]).push([[859],{1605:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return k},assets:function(){return i},toc:function(){return c},default:function(){return s}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),p=["components"],r={title:"\u6d45\u8c08 AIGC \u751f\u4ea7\u529b",slug:"aigc_production_force",authors:["ambrose"],tags:["Diary"],keywords:["\u7a0b\u5e8f\u5458","\u521b\u4e1a","AIGC","\u5927\u8bed\u8a00\u6a21\u578b"],hide_table_of_contents:!1,draft:!1},u=void 0,k={permalink:"/blog/aigc_production_force",editUrl:"https://github.com/shixincube/cube-manual/website/blog/2023-07-05-think_about_aigc_production_force.md",source:"@site/blog/2023-07-05-think_about_aigc_production_force.md",title:"\u6d45\u8c08 AIGC \u751f\u4ea7\u529b",description:"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5728 LLM/AIGC \u884c\u4e1a\u91cc\u4e00\u5927\u6279\u5546\u4e1a\u3001\u5f00\u6e90\u5927\u6a21\u578b\u5982\u96e8\u540e\u6625\u7b0b\u822c\u7206\u53d1\u5f0f\u6d8c\u73b0\uff08\u4f8b\u5982\uff1a\u6587\u5fc3\u4e00\u8a00\uff0c\u901a\u4e49\uff0c\u6df7\u5143\uff0c\u4f0f\u7fb2\uff0c\u76d8\u53e4\uff0cMOSS\uff0c\u609f\u9053\u7b49\uff09\uff0c\u5404\u79cd\u57fa\u4e8e\u7ec6\u5206\u573a\u666f\u7684\u4ea7\u54c1\u4e5f\u7eb7\u7eb7\u629b\u5934\u9732\u9762\uff0c\u4f8b\u5982\u57fa\u4e8e\u5fc3\u7406\u60c5\u611f\u966a\u804a\u7684 EmoGPT\uff0c\u7528\u4e8e\u533b\u7597\u95ee\u8bca\u7684 MedGPT \u548c\u7528\u4e8e\u6cd5\u5f8b\u95ee\u7b54\u7684 ChatLaw \u7b49\u7b49\u3002",date:"2023-07-05T00:00:00.000Z",formattedDate:"2023\u5e747\u67085\u65e5",tags:[{label:"Diary",permalink:"/blog/tags/diary"}],readingTime:8.345,truncated:!0,authors:[{name:"Xu Jiangwei (Ambrose Xu)",title:"Leader of Cube",url:"https://github.com/xujiangwei",imageURL:"https://static.shixincube.com/cube/assets/images/avatar/ambrose.png",key:"ambrose"}],prevItem:{title:"\u7f13\u6162\u8fdb\u5316\u7684\u4eba\u6027\uff1a\u60ef\u6027\u5b9a\u5f8b\uff0c\u4eba\u751f\u6210\u5c31\u9ad8\u5ea6\u7684\u6c38\u6052\u5bc6\u7801",permalink:"/blog/law_of_inertia"},nextItem:{title:"\u4e00\u8def\u8d70\uff0c\u4e00\u8def\u4e22 \uff08\u5f00\u9898\uff09",permalink:"/blog/opening_topic"}},i={authorsImageUrls:[void 0]},c=[{value:"\u201c\u7cbe\u51c6\u201d\u7684\u201c\u6982\u7387\u201d",id:"\u7cbe\u51c6\u7684\u6982\u7387",children:[]},{value:"\u4e1a\u52a1\u5411\u4e0a\u878d\u5408",id:"\u4e1a\u52a1\u5411\u4e0a\u878d\u5408",children:[]},{value:"\u4ece Question \u56de\u5230 Prompt",id:"\u4ece-question-\u56de\u5230-prompt",children:[]}],m={toc:c};function s(t){var e=t.components,r=(0,o.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5728 LLM/AIGC \u884c\u4e1a\u91cc\u4e00\u5927\u6279\u5546\u4e1a\u3001\u5f00\u6e90\u5927\u6a21\u578b\u5982\u96e8\u540e\u6625\u7b0b\u822c\u7206\u53d1\u5f0f\u6d8c\u73b0\uff08\u4f8b\u5982\uff1a\u6587\u5fc3\u4e00\u8a00\uff0c\u901a\u4e49\uff0c\u6df7\u5143\uff0c\u4f0f\u7fb2\uff0c\u76d8\u53e4\uff0cMOSS\uff0c\u609f\u9053\u7b49\uff09\uff0c\u5404\u79cd\u57fa\u4e8e\u7ec6\u5206\u573a\u666f\u7684\u4ea7\u54c1\u4e5f\u7eb7\u7eb7\u629b\u5934\u9732\u9762\uff0c\u4f8b\u5982\u57fa\u4e8e\u5fc3\u7406\u60c5\u611f\u966a\u804a\u7684 EmoGPT\uff0c\u7528\u4e8e\u533b\u7597\u95ee\u8bca\u7684 MedGPT \u548c\u7528\u4e8e\u6cd5\u5f8b\u95ee\u7b54\u7684 ChatLaw \u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u4eca\u5929\u521a\u597d\u628a\u6211\u6700\u8fd1\u7684\u4e00\u4e9b\u601d\u8def\u6574\u7406\u4e00\u4e0b\uff0c\u6d45\u804a\u4e00\u4e0b AIGC \u5f62\u6210\u751f\u4ea7\u529b\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5927\u6a21\u578b\u672c\u8eab\uff0c\u5f88\u591a\u5927\u4f6c\u5df2\u7ecf\u8bb2\u5f97\u5f88\u900f\u5f7b\u4e86\uff0c\u652f\u6491 AIGC \u7684\u4e09\u5927\u652f\u67f1\uff0c\u5373\u7b97\u6cd5\u3001\u6570\u636e\u3001\u7b97\u529b\u3002\u7b97\u6cd5\u51b3\u5b9a\u667a\u80fd\u6c34\u5e73\uff0c\u6570\u636e\u51b3\u5b9a\u667a\u80fd\u8303\u56f4\uff0c\u7b97\u529b\u51b3\u5b9a\u667a\u80fd\u6548\u7387\u3002\u672c\u6587\u4e3b\u8981\u804a\u804a\u4ece AIGC \u6784\u5efa\u751f\u6210\u529b\u7684\u8fc7\u7a0b\u8981\u7d20\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6709\u51e0\u4e2a\u6838\u5fc3\u89c2\u70b9\u4f5c\u4e3a\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LLM \u7684\u7b97\u6cd5\u3001\u6570\u636e\u3001\u7b97\u529b\u662f\u76f8\u4e92\u5f71\u54cd\u7684\u3002\u7b80\u5355\u5730\u8bf4\uff0c\u53c2\u6570\u89c4\u6a21\u8d8a\u5927\u7684\u6a21\u578b\u9700\u8981\u7684\u9884\u8bad\u7ec3\u6570\u636e\u91cf\u8d8a\u5927\uff0c\u4e5f\u5c31\u9700\u8981\u66f4\u5927\u7684\u7b97\u529b\u652f\u6491\u3002\u4e00\u5473\u5730\u8ffd\u6c42\u6a21\u578b\u89c4\u6a21\u662f\u6709\u74f6\u9888\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u666e\u53ca\u5230\u6d88\u8d39\u7ea7\u7684 LLM \u4e0d\u5728\u672c\u6587\u8ba8\u8bba\u8303\u56f4\u5185\u3002\u90a3\u4e9b\u9700\u89818GPU+\uff0c200GB+\u624d\u80fd\u63a8\u7b97\u7684\u6a21\u578b\u4e0d\u9002\u7528\u672c\u6587\u3002"),(0,l.kt)("li",{parentName:"ul"},"AIGC \u7684\u573a\u666f\u662f\u89e3\u51b3\u73b0\u5b9e\u9700\u6c42\u7684\u573a\u666f\u3002\u201cAI\u662f\u5426\u53d6\u4ee3\u4eba\u201d\u8bf7\u79fb\u6b65\u81f3\u79d1\u5e7b\u5c0f\u8bf4\u3002")),(0,l.kt)("h2",{id:"\u7cbe\u51c6\u7684\u6982\u7387"},"\u201c\u7cbe\u51c6\u201d\u7684\u201c\u6982\u7387\u201d"),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053 LLM \u901a\u8fc7\u8ba1\u7b97\u6982\u7387\u6765\u63a8\u6d4b\u7ed3\u679c\uff0c\u6240\u6709\u7684\u7ed3\u679c\u90fd\u662f\u88ab\u201d\u9884\u8bad\u7ec3\u201c\u51fa\u6765\u7684\u3002\u8db3\u591f\u7684\u7ecf\u9a8c\u77e5\u8bc6\u548c\u8db3\u591f\u7684\u89c4\u6a21\u63cf\u8ff0\u5c31\u80fd\u5e26\u6765\u666e\u904d\u610f\u4e49\u4e0a\u7684\u671f\u671b\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u201c\u6982\u7387\u201d\u5c31\u5e26\u6765\u4e00\u4e2a\u91cd\u8981\u7684\u8981\u7d20\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u786e\u5b9a\u6027")," \u3002\u5728 AIGC \u6587\u7ae0\u521b\u4f5c\u573a\u666f\u91cc\uff0c\u4e0d\u786e\u5b9a\u6027\u5e26\u6765\u201c\u53d8\u5316\u201d\uff0c\u5e26\u6765\u66f4\u591a\u7684\u8bdd\u672f\u63cf\u8ff0\uff0c\u4f46\u662f\u5728\u79d1\u5b66\u8ba1\u7b97\u548c\u6570\u636e\u5206\u6790\u4e0a\uff0c\u4e0d\u786e\u5b9a\u6027\u5e26\u6765\u7684\u662f\u201c\u80e1\u8bf4\u516b\u9053\u201d\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u8be2\u95ee\u65e5\u671f\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u95ee\uff1a\u4eca\u5929\u662f7\u67085\u53f7\uff0c\u4e0a\u5468\u5468\u4e00\u662f\u51e0\u53f7\uff1f"),(0,l.kt)("p",{parentName:"blockquote"},"\u7b54\uff1a\u4eca\u5929\u662f7\u67085\u53f7\uff0c\u4e0a\u5468\u5468\u4e00\u662f6\u670826\u65e5\u3002")),(0,l.kt)("p",null,"\u4e00\u4e9b\u9700\u8981\u8ba1\u7b97\u7684\u573a\u666f\uff0c\u4e0d\u4ec5\u8981\u9075\u5faa\u65e2\u5b9a\u7684\u8ba1\u7b97\u516c\u5f0f\u548c\u903b\u8f91\uff0c\u8fd8\u9700\u8981\u9690\u85cf\u7684\u201c",(0,l.kt)("strong",{parentName:"p"},"\u5e38\u8bc6\u53d8\u91cf"),"\u201d\u6765\u8865\u5168\u4fe1\u606f\u3002\u4ee5\u4e0a\u8ff0\u793a\u4f8b\u4e3a\u4f8b\uff0c\u9700\u8981\u8865\u5168\u7684\u4fe1\u606f\u662f\u201c\u4eca\u5929\u662f7\u67085\u53f7\u201d\u5c31\u662f2023\u5e747\u67085\u65e5\uff0c\u8865\u5168\u5e74\u4efd\u4fe1\u606f\u3002\u5bf9\u5e94\u7684\u8ba1\u7b97\u903b\u8f91\u5c31\u662f\u65e5\u5386\u7684\u65e5\u671f\u8ba1\u7b97\uff0c\u4ee5\u5468\u4e3a\u5355\u4f4d\uff0c\u5411\u524d\u56de\u6eaf\u4e00\u5468\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u7b54\u6848\u662f\u552f\u4e00\u7684\uff1a6\u670826\u65e5\u3002\u8fd9\u91cc\u6211\u4eec\u5176\u5b9e\u662f\u4e0d\u9700\u8981\u201c\u6982\u7387\u201d\u7684\u3002\u9700\u8981\u7684\u662f\u201c\u7cbe\u51c6\u201d\uff0c\u9700\u8981\u7b54\u6848\u5728\u6570\u7406\u4e0a\u7684\u786e\u5b9a\u6027\u3002\u663e\u7136\uff0c\u8981\u7528 LLM \u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6700\u76f4\u63a5\u7684\u529e\u6cd5\u5c31\u662f\u8bad\u7ec3\u6a21\u578b\u63a8\u7406\u51fa\u8fd9\u662f\u201c\u65e5\u671f\u8ba1\u7b97\u201d\uff0c\u628a\u8ba1\u7b97\u4efb\u52a1\u63a8\u7ed9\u4e0b\u6e38\u4efb\u52a1\u6216\u8005\u63d2\u4ef6\u8fdb\u884c\u8ba1\u7b97\u5e76\u8fd4\u56de\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u90a3\u66f4\u590d\u6742\u7684\u4efb\u52a1\u5462\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u95ee\uff1a\u628a\u4e1a\u52a1\u4e09\u90e82022\u5e741\u6708\u523012\u6708\u7684\u5dee\u65c5\u8d39\u7528\u6309\u7167\u6708\u4e3a\u5355\u4f4d\u7edf\u8ba1\u6210\u56fe\u8868\u8fdb\u884c\u5c55\u793a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u7b54\uff1a\u2026\u2026")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u95ee\uff1a\u6628\u5929\u5317\u4eac\u8def\u5206\u5e97\u7684\u8425\u4e1a\u6570\u636e\u6574\u7406\u6210\u56fe\u8868\u8fdb\u884c\u5c55\u793a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u7b54\uff1a\u2026\u2026")),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u8bf4\u53ef\u4ee5\u7528\u201c\u63a8\u8bad\u4e00\u4f53\u5316\u201d\u89e3\u51b3\u6216\u8005\u8fdb\u884c\u5f3a\u5316\u5fae\u8c03\uff0c\u5bf9\u4e8e\u767e\u4ebf\u53c2\u6570\u89c4\u6a21\u7684\u6a21\u578b\u6765\u8bf4\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u786e\u5b9a\u6027"),"\u5e76\u4e0d\u7a33\u5b9a\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u7684\u53ef\u80fd\u4e0d\u662f\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u4e0b\u6e38\u4efb\u52a1"),"\u6216\u8005",(0,l.kt)("strong",{parentName:"p"},"\u63d2\u4ef6"),"\uff0c\u6211\u4eec\u9700\u8981\u201c\u7cbe\u51c6\u201d\u7684\u201c\u6982\u7387\u201d\u5c06\u8bdd\u672f\u201c\u6982\u7387\u201d\u6620\u5c04\u5230\u201c\u7cbe\u786e\u201d\u7684\u6570\u636e\u4e0a\u3002",(0,l.kt)("strong",{parentName:"p"},"\u786e\u5b9a\u6027"),"\u7684\u8981\u7d20\u63d0\u4f9b\u5148\u4e8e LLM \u7684",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u786e\u5b9a\u6027"),"\u53d1\u751f\u3002\u5728 LLM \u63a8\u7406\u4e4b\u524d\u5148\u9501\u5b9a\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"\u4e1a\u52a1\u5411\u4e0a\u878d\u5408"},"\u4e1a\u52a1\u5411\u4e0a\u878d\u5408"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u5728\u4e1a\u52a1\u4e0a\u7684\u63d0\u95ee\uff0c\u9700\u8981\u62df\u5408\u4e1a\u52a1\u8981\u7d20\u3002\u679a\u4e3e\u8bed\u6599\u662f\u53ef\u884c\u7684\uff0c\u4e5f\u53ef\u4ee5\u7528\u6a21\u578b\u57fa\u4e8e\u7b54\u6848\u53cd\u5411\u751f\u6210\u63d0\u95ee\u3002"),(0,l.kt)("p",null,"\u90a3\u95ee\u9898\u6765\u4e86\uff0c\u4e1a\u52a1\u6570\u636e\u662f\u4e00\u4e2a\u5e9e\u5927\u7684\u6570\u636e\u5e93\u548c\u77e5\u8bc6\u5e93\uff0c\u600e\u4e48\u8bad\u7ec3\u5230\u6a21\u578b\u91cc\uff1f"),(0,l.kt)("p",null,"\u5f88\u591a\u573a\u666f\u4e0b\u6211\u4eec\u662f\u4e0d\u9700\u8981\u63d0\u53d6\u4e1a\u52a1\u6570\u636e\u8fdb\u884c\u9884\u8bad\u7ec3\u7684\uff0c\u4f46\u8fd9\u91cc\u6709\u4e00\u4e2a\u524d\u63d0\u6761\u4ef6\u5c31\u662f\u6a21\u578b\u5148\u8981\u8fdb\u884c\u8be5\u4e1a\u52a1\u7684\u884c\u4e1a\u77e5\u8bc6\u9884\u8bad\u7ec3\u6216\u8005\u8fed\u4ee3\u8bad\u7ec3\u3002\u5904\u7406\u6587\u672c\u5411\u91cf\u4e4b\u540e\u6784\u5efa\u65b0\u7684 Prompt \u8fdb\u884c\u63a8\u7406\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u77e5\u8bc6\u5e93",src:n(6389).Z})),(0,l.kt)("p",null,"\u4e0a\u56fe\u662f\u4e00\u4e2a\u5904\u7406\u4e1a\u52a1\u77e5\u8bc6\u5e93\u7684\u6d41\u7a0b\u3002\u5728 Prompt \u9636\u6bb5\u8fdb\u884c\u6570\u636e\u878d\u5408\uff0c\u63a8\u7406\u80fd\u529b\u9996\u5148\u4f9d\u8d56\u7684\u662f\u6587\u672c\u5411\u91cf\u5904\u7406\u7684\u80fd\u529b\uff0c\u8fd9\u5176\u5b9e\u7ed9\u6211\u4eec\u673a\u4f1a\u5728 Prompt \u6784\u5efa\u65f6\u4e5f\u4f7f\u7528\u4e00\u4e2a LLM \u6765\u8fdb\u884c\u63a8\u7406\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u5728\u6b63\u6587\u63a8\u7406\u524d\uff0c\u628a\u4e1a\u52a1\u878d\u5408\u5230 Prompt \u91cc\u3002\u5982\u679c\u4f60\u5728 LLM \u884c\u4e1a\u521b\u4e1a\uff0c\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u5b8c\u7f8e\u907f\u5f00\u5927\u5382\u7684\uff0c\u53ef\u6df1\u8015\u7684\u7ec6\u5206\u6280\u672f\u9886\u57df\u3002"),(0,l.kt)("h2",{id:"\u4ece-question-\u56de\u5230-prompt"},"\u4ece Question \u56de\u5230 Prompt"),(0,l.kt)("p",null,"\u591a\u8f6e\u5bf9\u8bdd\u662f\u8d1f\u62c5\u3002"),(0,l.kt)("p",null,"\u662f\u7684\uff0c\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\u591a\u8f6e\u5bf9\u8bdd\u662f\u8d1f\u62c5\uff0c\u7528\u6237\u7684\u95ee\u9898\u5e94\u5f53\u662f LLM \u7684 Prompt \u3002\u8bf7\u628a\u6211\u524d\u8ff0\u7684",(0,l.kt)("strong",{parentName:"p"},"\u524d\u7f6e\u6761\u4ef6"),"\u8003\u8651\u8fdb\u6765\uff0c\u4ece\u751f\u4ea7\u6548\u7387\u7684\u89d2\u5ea6\u6765\u8bf4\uff0cAI \u9700\u8981\u4ee5\u6700\u77ed\u7684\u8def\u5f84\u627e\u5230\u7b54\u6848\u3002\u4e00\u6b21\u5bf9\u8bdd\u5c31\u5e94\u8be5\u5e26\u51fa\u6240\u6709\u7684\u8def\u5f84\uff0c\u800c\u4e0d\u662f\u95ee\u9898\u63a5\u7eed\u95ee\u9898\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7528\u6237\uff1a\u6211\u60f3\u4e70\u4e00\u8f86SUV\uff0c\u4f60\u80fd\u4e3a\u6211\u63a8\u8350\u4e00\u4e9b\u6027\u4ef7\u6bd4\u8f83\u9ad8\u7684\u8f66\u578b\u5417\uff1f"),(0,l.kt)("p",{parentName:"blockquote"},"AI\uff1a\u60a8\u8003\u8651\u591a\u5c11\u9884\u7b97\u533a\u95f4\u7684\u8f66\u578b\uff1f"),(0,l.kt)("p",{parentName:"blockquote"},"\u7528\u6237\uff1a20\u4e07\u5de6\u53f3\u5427"),(0,l.kt)("p",{parentName:"blockquote"},"AI\uff1a\u60a8\u8003\u8651\u4ec0\u4e48\u8f66\u578b\uff1f\u57ce\u5e02SUV\u8fd8\u662f\u8d8a\u91ce\u8f66\uff1f"),(0,l.kt)("p",{parentName:"blockquote"},"\u7528\u6237\uff1a\u2026\u2026")),(0,l.kt)("p",null,"\u4e0a\u9762\u662f\u4e00\u4e2a\u7cdf\u7cd5\u7684\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u3002Chat \u6a21\u5f0f\u5176\u5b9e\u5f88\u591a\u751f\u4ea7\u529b\u573a\u666f\u4e0b\u662f\u4e0d\u9002\u7528\u7684\u3002\u65e2\u7136\u662f\u4eba\u673a\u4ea4\u4e92\u7684\u8fc7\u7a0b\uff0c\u90a3\u4e48\u5c31\u5e94\u8be5\u50cf",(0,l.kt)("strong",{parentName:"p"},"\u8d3e\u7ef4\u65af"),"\u4e00\u6837\u56de\u5230\u9ad8\u6548\u7684\u4eba\u673a\u4ea4\u4e92\u5f62\u5f0f\uff0c\u4f8b\u5982\u4e0b\u9762\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u6c7d\u8f66\u793a\u4f8b",src:n(8334).Z})),(0,l.kt)("p",null,"\u7528\u6237\u7684\u63d0\u95ee\u5bf9\u5e94\u7684\u662f\u4e00\u7cfb\u5217\u7684 Prompt \u53ca\u5176\u63cf\u8ff0\uff0c\u652f\u6491\u95ee\u9898\u7684\u7b54\u6848\u5e94\u5f53\u662f\u76f4\u8fbe\u7b54\u6848\u7684\u6700\u77ed\u8def\u5f84\u3002Chat \u4e0d\u662f\u552f\u4e00\u7684\u6a21\u5f0f\uff0cUI \u5e94\u8be5\u878d\u5408 Chat\uff0c\u56e0\u6b64\u65e0\u8bba\u90a3\u79cd\u65b9\u5f0f\u90fd\u5e94\u8be5\u662f\u5bf9\u5f53\u524d Question \u7684\u6700\u77ed\u8def\u5f84\u3002\u8fd9\u91cc\u6d89\u53ca\u590d\u6742\u7684\u5de5\u7a0b\u5316\u8def\u5f84\u95ee\u9898\uff0c\u5c31\u4e0d\u5c55\u5f00\u63cf\u8ff0\u4e86\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u5e76\u6ca1\u6709\u63d0\u53ca",(0,l.kt)("strong",{parentName:"p"},"\u591a\u6a21\u6001"),"\u7684\u95ee\u9898\uff0c\u591a\u6a21\u6001\u5728 AIGC \u751f\u6210\u529b\u7ed3\u6784\u91cc\u662f\u6a2a\u5411\u80fd\u529b\u7684\u589e\u5f3a\uff0c\u8fd9\u91cc\u4e3b\u8981\u8c08\u7684\u662f\u7eb5\u5411\u80fd\u529b\u7684\u878d\u5408\u3002"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u4efb\u4f55\u6280\u672f\u7684\u666e\u53ca\u90fd\u662f\u4e3a\u4eba\u7c7b\u7684\u751f\u6d3b\u548c\u751f\u4ea7\u5e26\u6765\u76ca\u5904\uff0c\u9700\u8981\u6bcf\u4e00\u4e2a\u73af\u8282\u7684\u73af\u73af\u76f8\u6263\uff01"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u547d\u8fd0\u6df1\u5904\u6d8c\u52a8\u7740\u66f4\u591a\u6d6a\u6f2b\uff0c\u68a6\u60f3\u7834\u571f\u751f\u957f\u66f4\u591a\u7b54\u6848\uff0c\u7e41\u661f\u80cc\u540e\u592a\u9633\u5df2\u5f00\u59cb\u707f\u70c2\u3002")))}s.isMDXComponent=!0},8334:function(t,e,n){e.Z=n.p+"assets/images/autocar_example-937ff5808bcdaad5bf5ce0cb6766f0f0.jpg"},6389:function(t,e,n){e.Z=n.p+"assets/images/llm_knowledge-89d476af17bbcea16393584264fad157.jpg"}}]);