"use strict";(self.webpackChunkpsfoundation_info=self.webpackChunkpsfoundation_info||[]).push([[353],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(o),f=n,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return o?r.createElement(m,i(i({ref:t},l),{},{components:o})):r.createElement(m,i({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2454:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],s={sidebar_position:7},p="Open Source",u={unversionedId:"open-source",id:"open-source",title:"Open Source",description:"The PSF's approach to open source software is greatly influenced by Working in Public by Nadia Eghbal. The PSF focuses its efforts on developers and not end users. The pipeline of software production looks like this:",source:"@site/docs/open-source.md",sourceDirName:".",slug:"/open-source",permalink:"/psfoundation.info/docs/open-source",editUrl:"https://github.com/Permissionless-Software-Foundation/psfoundation.info/tree/master/docs/open-source.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/psfoundation.info/docs/roadmap"}},l={},c=[{value:"Contribution Policy",id:"contribution-policy",level:2},{value:"Community Support",id:"community-support",level:2},{value:"Paid Support",id:"paid-support",level:2}],d={toc:c};function f(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"open-source"},"Open Source"),(0,a.kt)("p",null,"The PSF's approach to open source software is greatly influenced by ",(0,a.kt)("a",{parentName:"p",href:"https://amzn.to/3MvMXm1"},"Working in Public")," by Nadia Eghbal. The PSF focuses its efforts on ",(0,a.kt)("em",{parentName:"p"},"developers")," and not ",(0,a.kt)("em",{parentName:"p"},"end users"),". The pipeline of software production looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PSF Production Workflow",src:o(5778).Z,width:"861",height:"122"})),(0,a.kt)("p",null,"The PSF builds ",(0,a.kt)("em",{parentName:"p"},"infrastructure")," for developers, and will occasionally produce apps like ",(0,a.kt)("a",{parentName:"p",href:"https://demo-wallet.fullstack.cash"},"demo-wallet.fullstack.cash")," or ",(0,a.kt)("a",{parentName:"p",href:"https://dex.fullstack.cash"},"dex.fullstack.cash")," to ",(0,a.kt)("em",{parentName:"p"},"inspire")," developers, but these are not intended to be complete products for ",(0,a.kt)("em",{parentName:"p"},"end-users"),"."),(0,a.kt)("p",null,"Many non-developers who try to consume PSF software become disappointed and are quick to suggest feature improvements, then are further disappointed when their suggestions get little attention. This page exists to set appropriate expectations."),(0,a.kt)("p",null,"The PSFs intention is for infrastructure, specifications, and demo apps produced by the PSF to serve as an inspiration to the developers and entrepreneurs who make up the PSF community. They are the ones who are expected to take the software to the next level, to create and manage a pleasant end-user experience."),(0,a.kt)("h2",{id:"contribution-policy"},"Contribution Policy"),(0,a.kt)("p",null,"The PSF follows a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/TSC/blob/master/CONTRIBUTING.md"},"liberal contribution policy")," modeled after the Node.js Foundation, and described in ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951"},"Healthy Open Source"),". Contributors who 'land' a Pull Request (PR) to one of our GitHub repositories is automatically invited to be part of the PSF GitHub group. They are then welcome to create branches and approve PRs from other contributors."),(0,a.kt)("p",null,"Software developers are encouraged to maintain their own fork of PSF software, so that approval of a PR does not become a bottleneck to their own progress. Pull Requests can sit for a very long time before they are reviewed, rejected, or merged. 100% unit test coverage is a goal of all PSF repositories, and so code submissions will frequently sit for long periods of time until they also include unit tests."),(0,a.kt)("h2",{id:"community-support"},"Community Support"),(0,a.kt)("p",null,"Community technical support is available via the ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/bch_js_toolkit"},"bch-js toolkit Telegram Channel"),"."),(0,a.kt)("h2",{id:"paid-support"},"Paid Support"),(0,a.kt)("p",null,"For businesses who need technical support or time-sensitive feature development or code-review, paid technical support is available at a rate of $100 USD per hour. Ask for more details in the ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/permissionless_software"},"PSF Telegram Channel"),"."))}f.isMDXComponent=!0},5778:function(e,t,o){t.Z=o.p+"assets/images/production-workflow-194c6600fa5d61badc6ea87d8ff58ab3.png"}}]);