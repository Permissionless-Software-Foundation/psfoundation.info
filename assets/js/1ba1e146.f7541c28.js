"use strict";(self.webpackChunkpsfoundation_info=self.webpackChunkpsfoundation_info||[]).push([[18],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,d=u["".concat(m,".").concat(p)]||u[p]||h[p]||r;return n?o.createElement(d,a(a({ref:t},l),{},{components:n})):o.createElement(d,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},m="Governance",c={unversionedId:"governance",id:"governance",title:"Governance",description:"At the highest conceptual level, the goal of PSF governance is to ensure that the people most impacted by decisions are the ones with the greatest influence over those decisions. Everything else is a detail in the attempt to achieve that ideal.",source:"@site/docs/governance.md",sourceDirName:".",slug:"/governance",permalink:"/psfoundation.info/governance",editUrl:"https://github.com/Permissionless-Software-Foundation/psfoundation.info/tree/master/docs/governance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/psfoundation.info/"},next:{title:"Tokenomics",permalink:"/psfoundation.info/tokenomics"}},l={},h=[{value:"Org Chart",id:"org-chart",level:2},{value:"Sub-committees",id:"sub-committees",level:2},{value:"The Management",id:"the-management",level:3},{value:"The Minting Council",id:"the-minting-council",level:3},{value:"Technical Steering Committee (TSC)",id:"technical-steering-committee-tsc",level:3},{value:"Community Committee (CommComm)",id:"community-committee-commcomm",level:3},{value:"Governance Documents",id:"governance-documents",level:2},{value:"Software License",id:"software-license",level:3}],u={toc:h};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"governance"},"Governance"),(0,r.kt)("p",null,"At the highest conceptual level, the goal of PSF governance is to ensure that the people ",(0,r.kt)("em",{parentName:"p"},"most impacted")," by decisions are the ones with the ",(0,r.kt)("em",{parentName:"p"},"greatest influence")," over those decisions. Everything else is a detail in the attempt to achieve that ideal."),(0,r.kt)("p",null,"To make that idea less abstract: When new PSF tokens are brought into existence, it dilutes the value of the existing tokens through inflation. Therefore, the PSF governance is structured to give the existing token holders the most power over decision making."),(0,r.kt)("h2",{id:"org-chart"},"Org Chart"),(0,r.kt)("p",null,"The governance structure for the PSF is as horizontal as possible. At the top of the organizational chart is the ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/psf_vip"},"VIP Telegram channel"),". Only members who have demonstrated a sufficient merit are allowed to speak in the room. Merit is based on the number of PSF tokens held by a member, and the length of time they've been held."),(0,r.kt)("p",null,"The VIP channel is where governance discussion takes place. After sufficient discussion and a rough consensus has been achieved, a voting proposal may be drafted to finalize and execute governance decisions. ",(0,r.kt)("a",{parentName:"p",href:"https://psfoundation.cash/proposals"},"Voting proposals")," are posted to the PSF website. Voting tokens are air-dropped to the top 50 addresses holding PSF tokens, proportional to their merit. Votes are tallied to achive a 'yes' or 'no' vote on major governance decisions."),(0,r.kt)("p",null,"There are four sub-committees that are accountable to the members in the VIP channel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Management - A small team of dedicated members who perform administrative tasks."),(0,r.kt)("li",{parentName:"ul"},"The Minting Council - holds the keys used to mint additional PSF tokens into existence."),(0,r.kt)("li",{parentName:"ul"},"The Technical Steering Committee (TSC) - drives the technical goals of the PSF."),(0,r.kt)("li",{parentName:"ul"},"The Community Committee (CommComm) - represents the non-technical members of PSF which are composed of businesses, entrepreneurs, and users.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PSF governance Org chart",src:n(4949).Z,width:"1042",height:"357"})),(0,r.kt)("h2",{id:"sub-committees"},"Sub-committees"),(0,r.kt)("h3",{id:"the-management"},"The Management"),(0,r.kt)("p",null,"The management is currently composed of three members. Their primary function is to maintain the code repositories and websites, and to pay out PSF bounties. They organize and execute voting proposals at the request of members of the VIP channel. They oversee the execution of the results of the voting proposals."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Head Janitor")," - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/christroutner"},"Chris Troutner")," is currently the chairman of the ",(0,r.kt)("a",{parentName:"p",href:"#technical-steering-committee-tsc"},"Technical Steering Committee"),". He manages the agenda and hosts the bi-weekly meetings. He is the largest contributor to the open source code repositories maintained by the PSF.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Business Development")," - David Allen is an adviser to the PSF and a member of the VIP channel. He occasionally performs business development on behalf of the PSF.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Business Administrator")," - Our business administrator prefers to remain anonymous. While their identity is a secret, their integrity and professionalism is obvious and appreciated."))),(0,r.kt)("h3",{id:"the-minting-council"},"The Minting Council"),(0,r.kt)("p",null,"The minting council is the newest council, and it is still being formed. To be a member of the minting council requires a demonstration of commitment. This will take the form of burning a specified quantity of PSF tokens in exchange for an NFT, issued by the minting council. The NFT acts as a homing-beacon, allowing other members of the minting council to send the holder end-to-end encrypted (ee2e) messages."),(0,r.kt)("p",null,"Each member of the minting council holds a key to the multisignature wallet that allow minting of additional PSF tokens. The minting council communicates at a minimum of once per quarter to rotate keys. They are the only group with the ability to bring new tokens into existence, and they only do so at the direction of the VIP channel, after the passing of a voting proposal."),(0,r.kt)("h3",{id:"technical-steering-committee-tsc"},"Technical Steering Committee (TSC)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/TSC"},"Technical Steering Committee")," meets every two weeks on Wednesdays at 4 PM UST. They meet via Zoom and the meetings are recorded to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCQ57IDXJJSYXHBLpF1tBD0g"},"PSF YouTube channel"),". Agendas are filed as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/TSC/issues"},"GitHub Issues"),". Meetings are announced in the ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/permissionless_software"},"PSF Telegram channel"),". Ask for an invite before joining."),(0,r.kt)("h3",{id:"community-committee-commcomm"},"Community Committee (CommComm)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/community-committee"},"Community Committee")," (CommComm) is currently 'on hold' as the PSF looks for another member (or members) to host the meeting. The goal of the CommComm is to represent the non-technical businesses, entrepreneurs, and users. The CommComm handles marketing related activities and looks for opportunities to develop profitable synergy between the PSF members."),(0,r.kt)("h2",{id:"governance-documents"},"Governance Documents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/TSC/blob/master/CONTRIBUTING.md"},"Contribution Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/community-committee/blob/master/code-of-conduct.md"},"Code of Conduct")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/community-committee/blob/master/moderation-policy.md"},"Moderation Policy"))),(0,r.kt)("h3",{id:"software-license"},"Software License"),(0,r.kt)("p",null,"The PSF uses the ",(0,r.kt)("a",{parentName:"p",href:"https://psfoundation.cash"},"GPL v2 License")," (the same as Linux) for our 'core' infrastructure software. ",(0,r.kt)("a",{parentName:"p",href:"https://psfoundaition.cash"},"MIT license")," is used for all other software, like application examples. The goal is to ensure everyone is free to hack-on, share, and expand our software. The goal is to encourage the growth of cryptocurrency and all it's freedom-enhancing promise."))}p.isMDXComponent=!0},4949:function(e,t,n){t.Z=n.p+"assets/images/gov-org-chart-6488011be8b61e323df8708a58154adb.png"}}]);