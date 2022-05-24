"use strict";(self.webpackChunkpsfoundation_info=self.webpackChunkpsfoundation_info||[]).push([[75],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3208:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:6},s="Roadmap",p={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Below is a roadmap of software developed by the PSF. While it's easiest to present the milestones in a linear fashion, most of these goals can be achieved in parallel. Dates are never used when presenting milestones, because the PSF is not a company that can make steady progress on any one area. Most contributions come from intrinsically motivated developers who are persuing their own personal interests, and try to give back to the PSF at the same time.",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/psfoundation.info/docs/roadmap",editUrl:"https://github.com/Permissionless-Software-Foundation/psfoundation.info/tree/master/docs/roadmap.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Software",permalink:"/psfoundation.info/docs/software"},next:{title:"Open Source",permalink:"/psfoundation.info/docs/open-source"}},c={},m=[{value:"Major Milestones Achieved",id:"major-milestones-achieved",level:2},{value:"Milestones Under Development",id:"milestones-under-development",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"Below is a roadmap of software developed by the PSF. While it's easiest to present the milestones in a linear fashion, most of these goals can be achieved in parallel. Dates are never used when presenting milestones, because the PSF is ",(0,o.kt)("em",{parentName:"p"},"not a company")," that can make steady progress on any one area. Most contributions come from ",(0,o.kt)("em",{parentName:"p"},"intrinsically motivated")," developers who are persuing their own personal interests, and try to give back to the PSF at the same time."),(0,o.kt)("p",null,"Milestones are rarely 'done', because they require steady maintenance over time. Instead, progress depends on the number of active developers participating in our open source community. That includes intrinsically motivated developers (which tend to help with new features), and extrinsically (paid) motivated developers (which tend to help with unit tests and maintenance). Business members can accelerate development of any milestone by purchasing PSF tokens and rewarding developers with them."),(0,o.kt)("h2",{id:"major-milestones-achieved"},"Major Milestones Achieved"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create documentation to describe the ",(0,o.kt)("a",{parentName:"li",href:"https://cashstack.info"},"Cash Stack"),"."),(0,o.kt)("li",{parentName:"ul"},"Create a proposal voting process using SLP tokens."),(0,o.kt)("li",{parentName:"ul"},"Create end-to-end encrypted (ee2e) synchronous chat using Bitcoin Eliptic Curve encryption."),(0,o.kt)("li",{parentName:"ul"},"Create ee2e 'email' allowing asynchronous communication with any BCH address."),(0,o.kt)("li",{parentName:"ul"},"Create a mutable data protocol for SLP tokens, allowing changing token icons and tracking of changing data over time."),(0,o.kt)("li",{parentName:"ul"},"Create a more reliable token indexer for SLP tokens."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"https://bch-dex-docs.fullstack.cash/"},"decentralized exchange")," (DEX) for trading SLP tokens.")),(0,o.kt)("h2",{id:"milestones-under-development"},"Milestones Under Development"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cashstack.info"},"Cash Stack"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Get ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/psf-bch-wallet"},"psf-bch-wallet")," to 100% test coverage."),(0,o.kt)("li",{parentName:"ul"},"Get ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/ipfs-service-provider"},"ipfs-service-provider")," to 100% test coverage."),(0,o.kt)("li",{parentName:"ul"},"Create better documentation for ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/minimal-slp-wallet"},"minimal-slp-wallet"),"."),(0,o.kt)("li",{parentName:"ul"},"Create better documentation to explain the relationship between ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/psf-bch-wallet"},"psf-bch-wallet"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer"},"ipfs-bch-wallet-consumer"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service"},"ipfs-bch-wallet-service"),", and the commands used by psf-bch-wallet to control the other two."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bch-dex-docs.fullstack.cash/"},"DEX"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Port existing 'sell' functionality to AVAX."),(0,o.kt)("li",{parentName:"ul"},"Port existing 'sell' functionality to eCash."),(0,o.kt)("li",{parentName:"ul"},"Build chat-bot interface."),(0,o.kt)("li",{parentName:"ul"},"Add OP_RETURN emergency remote controls."))),(0,o.kt)("li",{parentName:"ul"},"P2WDB",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create year-end migration plan."),(0,o.kt)("li",{parentName:"ul"},"Create 5-year database."),(0,o.kt)("li",{parentName:"ul"},"Experiment with moving to a public IPFS network."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"https://portland.craigslist.org/"},"Craigslist")," clone that uses P2WDB and the web3 Cash Stack as the back end."))),(0,o.kt)("li",{parentName:"ul"},"Bridges",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create bridge between PSF token and USDC.e on AVAX"),(0,o.kt)("li",{parentName:"ul"},"Create a PSF token on eCash"),(0,o.kt)("li",{parentName:"ul"},"Create bridge between PSF tokens on BCH and eCash"))),(0,o.kt)("li",{parentName:"ul"},"Administration",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Refactor chat.fullstack.cash to work with web3 Cash Stack."),(0,o.kt)("li",{parentName:"ul"},"Add email notification feature to psf-bch-wallet e2ee messages."),(0,o.kt)("li",{parentName:"ul"},"Create initial Minting Council"),(0,o.kt)("li",{parentName:"ul"},"Have Minting Council practice rotating keys"),(0,o.kt)("li",{parentName:"ul"},"Set up quartly key rotation meetings."),(0,o.kt)("li",{parentName:"ul"},"Air-drop new PSF token with token icon and mutable data.")))),(0,o.kt)("p",null,"Want clarification on the above items? See something interesting that you'd like to contribute to? Ask about it in the ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/permissionless_software"},"PSF Telegram Channel"),"."))}d.isMDXComponent=!0}}]);