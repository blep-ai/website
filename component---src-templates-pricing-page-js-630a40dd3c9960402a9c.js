(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4xPE":function(t,e,n){"use strict";n.r(e),n.d(e,"pricingPageQuery",(function(){return u}));var a=n("q1tI"),r=n.n(a),i=n("TJpk"),o=n.n(i),s=function(t){return t.data.map((function(t){return r.a.createElement("div",{key:t.plan,className:"w-1/3 p-4"},r.a.createElement("div",{className:"shadow-lg rounded overflow-hidden"},r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-xl mb-2"},t.plan),r.a.createElement("p",{className:"text-gray-700 text-base"},t.description)),r.a.createElement("div",{className:"px-6 py-4"},t.items.map((function(t){return r.a.createElement("span",{key:t,className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 last:mr-0"},"#",t)}))),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"text-sm"},r.a.createElement("p",{className:"text-gray-900 leading-none"},t.price)))))}))},c=n("U8hA"),l=function(t){var e=t.title,n=t.meta_title,a=t.meta_description,i=t.pricing;return r.a.createElement("div",{className:"bg-white flex flex-col"},r.a.createElement("div",{className:"container mx-auto px-8"},r.a.createElement(o.a,null,r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:a})),r.a.createElement("main",{className:"flex flex-wrap items-center text-center md:text-left my-12 py-12 lg:px-24"},r.a.createElement("div",{className:"w-full md:w-full whitespace-pre-line"},r.a.createElement("h1",{className:"text-5xl text-black leading-tight mb-6"},e))),r.a.createElement("h2",{className:"has-text-weight-semibold is-size-2"},i.heading),r.a.createElement("p",{className:"is-size-5"},i.description),r.a.createElement("section",{className:"flex flex-wrap mb-4 my-12"},r.a.createElement(s,{data:i.plans})),r.a.createElement(c.a,null)))},f=n("Zttt"),u=(e.default=function(t){var e=t.data.markdownRemark.frontmatter;return r.a.createElement(f.a,null,r.a.createElement(l,{title:e.title,meta_title:e.meta_title,meta_description:e.meta_description,pricing:e.pricing}))},"3156483243")},"7O5W":function(t,e,n){"use strict";(function(t,a){n.d(e,"a",(function(){return _t})),n.d(e,"b",(function(){return Ot}));n("pS08"),n("pJf4"),n("Ll4R"),n("klQ5"),n("n0hJ"),n("U6Bt"),n("HXzo"),n("sC2a"),n("HQhv"),n("6kNP"),n("AqHK"),n("sc67"),n("YbXK"),n("cFtU"),n("q8oJ"),n("C9fy"),n("MIFh"),n("JHok"),n("OeI1"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("R48M"),n("m210"),n("4DPX");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(c){r=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(){},f={},u={},m={mark:l,measure:l};try{"undefined"!=typeof window&&(f=window),"undefined"!=typeof document&&(u=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(m=performance)}catch(Et){}var d=(f.navigator||{}).userAgent,p=void 0===d?"":d,h=f,g=u,y=m,b=(h.document,!!g.documentElement&&!!g.head&&"function"==typeof g.addEventListener&&"function"==typeof g.createElement),v=(~p.indexOf("MSIE")||p.indexOf("Trident/"),function(){try{}catch(Et){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),w=v.concat([11,12,13,14,15,16,17,18,19,20]),x={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},k=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",x.GROUP,x.SWAP_OPACITY,x.PRIMARY,x.SECONDARY].concat(v.map((function(t){return"".concat(t,"x")}))).concat(w.map((function(t){return"w-".concat(t)}))),h.FontAwesomeConfig||{});if(g&&"function"==typeof g.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=c(t,2),n=e[0],a=e[1],r=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));null!=r&&(k[a]=r)}))}var O=s({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},k);O.autoReplaceSvg||(O.observeMutations=!1);var _=s({},O);h.FontAwesomeConfig=_;var E=h||{};E.___FONT_AWESOME___||(E.___FONT_AWESOME___={}),E.___FONT_AWESOME___.styles||(E.___FONT_AWESOME___.styles={}),E.___FONT_AWESOME___.hooks||(E.___FONT_AWESOME___.hooks={}),E.___FONT_AWESOME___.shims||(E.___FONT_AWESOME___.shims=[]);var I=E.___FONT_AWESOME___,N=[];b&&((g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState)||g.addEventListener("DOMContentLoaded",(function t(){g.removeEventListener("DOMContentLoaded",t),1,N.map((function(t){return t()}))})));var j,P=function(){},M=void 0!==t&&void 0!==t.process&&"function"==typeof t.process.emit,T=void 0===a?setTimeout:a,A=[];function z(){for(var t=0;t<A.length;t++)A[t][0](A[t][1]);A=[],j=!1}function C(t,e){A.push([t,e]),j||(j=!0,T(z,0))}function S(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n="fulfilled";try{a=r(a)}catch(Et){F(i,Et)}}L(i,a)||("fulfilled"===n&&D(i,a),"rejected"===n&&F(i,a))}function L(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===r(e))){var a=e.then;if("function"==typeof a)return a.call(e,(function(a){n||(n=!0,e===a?R(t,a):D(t,a))}),(function(e){n||(n=!0,F(t,e))})),!0}}catch(Et){return n||F(t,Et),!0}return!1}function D(t,e){t!==e&&L(t,e)||R(t,e)}function R(t,e){"pending"===t._state&&(t._state="settled",t._data=e,C(Y,t))}function F(t,e){"pending"===t._state&&(t._state="settled",t._data=e,C(U,t))}function W(t){t._then=t._then.forEach(S)}function Y(t){t._state="fulfilled",W(t)}function U(e){e._state="rejected",W(e),!e._handled&&M&&t.process.emit("unhandledRejection",e._data,e)}function H(e){t.process.emit("rejectionHandled",e)}function X(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof X==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){F(e,t)}try{t((function(t){D(e,t)}),n)}catch(Et){n(Et)}}(t,this)}X.prototype={constructor:X,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(P),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&M&&C(H,this)),"fulfilled"===this._state||"rejected"===this._state?C(S,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},X.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new X((function(e,n){var a=[],r=0;function i(t){return r++,function(n){a[t]=n,--r||e(a)}}for(var o,s=0;s<t.length;s++)(o=t[s])&&"function"==typeof o.then?o.then(i(s),n):a[s]=o;r||e(a)}))},X.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new X((function(e,n){for(var a,r=0;r<t.length;r++)(a=t[r])&&"function"==typeof a.then?a.then(e,n):e(a)}))},X.resolve=function(t){return t&&"object"===r(t)&&t.constructor===X?t:new X((function(e){e(t)}))},X.reject=function(t){return new X((function(e,n){n(t)}))};var B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function q(t){if(t&&b){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}}function G(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function J(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function K(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n],";")}),"")}function Q(t){return t.size!==B.size||t.x!==B.x||t.y!==B.y||t.rotate!==B.rotate||t.flipX||t.flipY}function V(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var Z={x:0,y:0,width:"100%",height:"100%"};function $(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function tt(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,c=t.symbol,l=t.title,f=t.maskId,u=t.titleId,m=t.extra,d=t.watchable,p=void 0!==d&&d,h=a.found?a:n,g=h.width,y=h.height,b="fa-w-".concat(Math.ceil(g/y*16)),v=[_.replacementClass,i?"".concat(_.familyPrefix,"-").concat(i):"",b].filter((function(t){return-1===m.classes.indexOf(t)})).concat(m.classes).join(" "),w={children:[],attributes:s({},m.attributes,{"data-prefix":r,"data-icon":i,class:v,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})};p&&(w.attributes["data-fa-i2svg"]=""),l&&w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||G())},children:[l]});var x=s({},w,{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:c,styles:m.styles}),k=a.found&&n.found?function(t){var e,n=t.children,a=t.attributes,r=t.main,i=t.mask,o=t.maskId,c=t.transform,l=r.width,f=r.icon,u=i.width,m=i.icon,d=V({transform:c,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:s({},Z,{fill:"white"})},h=f.children?{children:f.children.map($)}:{},g={tag:"g",attributes:s({},d.inner),children:[$(s({tag:f.tag,attributes:s({},f.attributes,d.path)},h))]},y={tag:"g",attributes:s({},d.outer),children:[g]},b="mask-".concat(o||G()),v="clip-".concat(o||G()),w={tag:"mask",attributes:s({},Z,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(e=m,"g"===e.tag?e.children:[e])},w]};return n.push(x,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},Z)}),{children:n,attributes:a}}(x):function(t){var e=t.children,n=t.attributes,a=t.main,r=t.transform,i=K(t.styles);if(i.length>0&&(n.style=i),Q(r)){var o=V({transform:r,containerWidth:a.width,iconWidth:a.width});e.push({tag:"g",attributes:s({},o.outer),children:[{tag:"g",attributes:s({},o.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:s({},a.icon.attributes,o.path)}]}]})}else e.push(a.icon);return{children:e,attributes:n}}(x),O=k.children,E=k.attributes;return x.children=O,x.attributes=E,c?function(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s({},r,{id:!0===i?"".concat(e,"-").concat(_.familyPrefix,"-").concat(n):i}),children:a}]}]}(x):function(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Q(o)&&n.found&&!a.found){var c={x:n.width/n.height/2,y:.5};r.style=K(s({},i,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}(x)}var et=function(){},nt=(_.measurePerformance&&y&&y.mark&&y.measure,function(t,e,n,a){var r,i,o,s=Object.keys(t),c=s.length,l=void 0!==a?function(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}}(e,a):e;for(void 0===n?(r=1,o=t[s[0]]):(r=0,o=n);r<c;r++)o=l(o,t[i=s[r]],i,t);return o});function at(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.skipHooks,r=void 0!==a&&a,i=Object.keys(e).reduce((function(t,n){var a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t}),{});"function"!=typeof I.hooks.addPack||r?I.styles[t]=s({},I.styles[t]||{},i):I.hooks.addPack(t,i),"fas"===t&&at("fa",e)}var rt=I.styles,it=I.shims,ot=function(){var t=function(t){return nt(rt,(function(e,n,a){return e[a]=nt(n,t,{}),e}),{})};t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),t((function(t,e,n){var a=e[2];return t[n]=n,a.forEach((function(e){t[e]=n})),t}));var e="far"in rt;nt(it,(function(t,n){var a=n[0],r=n[1],i=n[2];return"far"!==r||e||(r="fas"),t[a]={prefix:r,iconName:i},t}),{})};ot();I.styles;function st(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function ct(t){var e=t.tag,n=t.attributes,a=void 0===n?{}:n,r=t.children,i=void 0===r?[]:r;return"string"==typeof t?J(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(J(t[n]),'" ')}),"").trim()}(a),">").concat(i.map(ct).join(""),"</").concat(e,">")}var lt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t}),e):e};function ft(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}ft.prototype=Object.create(Error.prototype),ft.prototype.constructor=ft;var ut={fill:"currentColor"},mt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},dt={tag:"path",attributes:s({},ut,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},pt=s({},mt,{attributeName:"opacity"});s({},ut,{cx:"256",cy:"364",r:"28"}),s({},mt,{attributeName:"r",values:"28;14;28;28;14;28;"}),s({},pt,{values:"1;0;1;1;0;1;"}),s({},ut,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),s({},pt,{values:"1;0;0;0;0;1;"}),s({},ut,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),s({},pt,{values:"0;0;1;1;0;0;"}),I.styles;function ht(t){var e=t[0],n=t[1],a=c(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(_.familyPrefix,"-").concat(x.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.familyPrefix,"-").concat(x.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(_.familyPrefix,"-").concat(x.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}I.styles;function gt(){var t="svg-inline--fa",e=_.familyPrefix,n=_.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if("fa"!==e||n!==t){var r=new RegExp("\\.".concat("fa","\\-"),"g"),i=new RegExp("\\--".concat("fa","\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(r,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(n))}return a}function yt(){_.autoAddCss&&!kt&&(q(gt()),kt=!0)}function bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return ct(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(b){var e=g.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function vt(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return st(xt.definitions,n,a)||st(I.styles,n,a)}var wt,xt=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e,n,a;return e=t,(n=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach((function(e){t.definitions[e]=s({},t.definitions[e]||{},r[e]),at(e,r[e]),ot()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var a=n[e],r=a.prefix,i=a.iconName,o=a.icon;t[r]||(t[r]={}),t[r][i]=o})),t}}])&&i(e.prototype,n),a&&i(e,a),t}()),kt=!1,Ot={transform:function(t){return lt(t)}},_t=(wt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?B:n,r=e.symbol,i=void 0!==r&&r,o=e.mask,c=void 0===o?null:o,l=e.maskId,f=void 0===l?null:l,u=e.title,m=void 0===u?null:u,d=e.titleId,p=void 0===d?null:d,h=e.classes,g=void 0===h?[]:h,y=e.attributes,b=void 0===y?{}:y,v=e.styles,w=void 0===v?{}:v;if(t){var x=t.prefix,k=t.iconName,O=t.icon;return bt(s({type:"icon"},t),(function(){return yt(),_.autoA11y&&(m?b["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(p||G()):(b["aria-hidden"]="true",b.focusable="false")),tt({icons:{main:ht(O),mask:c?ht(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:s({},B,a),symbol:i,title:m,maskId:f,titleId:p,extra:{attributes:b,styles:w,classes:g}})}))}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:vt(t||{}),a=e.mask;return a&&(a=(a||{}).icon?a:vt(a||{})),wt(n,s({},e,{mask:a}))})}).call(this,n("yLpj"),n("URgk").setImmediate)},IP2g:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));n("n7j8"),n("TAD1"),n("HXzo"),n("HQhv"),n("U6Bt"),n("sC2a"),n("AqHK"),n("YbXK"),n("cFtU"),n("q8oJ"),n("C9fy"),n("MIFh"),n("sc67"),n("+ar0"),n("xtjI"),n("JHok"),n("OeI1"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("R48M"),n("m210"),n("4DPX");var a=n("7O5W"),r=n("17x9"),i=n.n(r),o=n("q1tI"),s=n.n(o);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function d(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function h(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,a=e.indexOf(":"),r=p(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?t[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=i:t[r]=i,t}),{})}var g=!1;try{g=!0}catch(x){}function y(t){return null===t?null:"object"===c(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function b(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?l({},t,e):{}}function v(t){var e=t.icon,n=t.mask,r=t.symbol,i=t.className,o=t.title,s=y(e),c=b("classes",[].concat(d(function(t){var e,n=t.spin,a=t.pulse,r=t.fixedWidth,i=t.inverse,o=t.border,s=t.listItem,c=t.flip,f=t.size,u=t.rotation,m=t.pull,d=(l(e={"fa-spin":n,"fa-pulse":a,"fa-fw":r,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(f),null!=f),l(e,"fa-rotate-".concat(u),null!=u),l(e,"fa-pull-".concat(m),null!=m),l(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(d).map((function(t){return d[t]?t:null})).filter((function(t){return t}))}(t)),d(i.split(" ")))),f=b("transform","string"==typeof t.transform?a.b.transform(t.transform):t.transform),m=b("mask",y(n)),p=Object(a.a)(s,u({},c,{},f,{},m,{symbol:r,title:o}));if(!p)return function(){var t;!g&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",s),null;var h=p.abstract,x={};return Object.keys(t).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(x[e]=t[e])})),w(h[0],x)}v.displayName="FontAwesomeIcon",v.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object]),swapOpacity:i.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map((function(n){return t(e,n)})),i=Object.keys(n.attributes||{}).reduce((function(t,e){var a=n.attributes[e];switch(e){case"class":t.attrs.className=a,delete n.attributes.class;break;case"style":t.attrs.style=h(a);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=a:t.attrs[p(e)]=a}return t}),{attrs:{}}),o=a.style,s=void 0===o?{}:o,c=m(a,["style"]);return i.attrs.style=u({},i.attrs.style,{},s),e.apply(void 0,[n.tag,u({},i.attrs,{},c)].concat(d(r)))}.bind(null,s.a.createElement)},U8hA:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("obyI"),o=n.n(i),s=n("IP2g"),c=n("8tEE"),l=n("yTz/"),f=n("L/9/");e.a=function(){return r.a.createElement("div",{className:"flex flex-wrap -mx-6 overflow-hidden sm:mb-12"},r.a.createElement("div",{className:"my-2 px-8 md:w-1/2 w-full md:order-1 overflow-hidden mb-12 sm:mb-0"},r.a.createElement("div",{className:"mb-6"},r.a.createElement(f.a,null)),r.a.createElement("p",{className:"text-xs text-gray-500 mb-4"},"Join our newsletter to stay up to date on features and releases"),r.a.createElement(l.a,{className:"w-full max-w-sm mb-4",inputPlaceholder1:"Enter your email address",inputClass2:"hidden",inputClass1:"bg-gray-200 appearance-none border-2 border-gray-200 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-xs",buttonClass:"hidden"}),r.a.createElement("a",{href:"https://twitter.com/"+o.a.userTwitter},r.a.createElement(s.a,{icon:c.b,className:"mx-2 text-gray-500"})),r.a.createElement("a",{href:"https://t.me/"+o.a.telegram},r.a.createElement(s.a,{icon:c.a,className:"mx-2 text-gray-500"}))),r.a.createElement("div",{className:"my-2 px-8 md:w-1/2 w-full md:order-3 overflow-hidden"},r.a.createElement("h5",{className:"text-sm mb-4 medium"},"Disclaimer"),r.a.createElement("p",{className:"text-xs text-gray-500"},"There are risks associated with investing. Investing in stocks, bonds, exchange traded funds, mutual funds, money market funds, and cryptocurrency involve risk of loss. The content on this website is for entertainment purposes only and do not constitute investment advice.")))}},URgk:function(t,e,n){(function(t){var a=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(r.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n("YBdB"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},"Y++M":function(t,e,n){"use strict";var a=n("DFzH"),r=n("dTG6"),i=n("kiRH");t.exports=function(t){for(var e=a(this),n=i(e.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,l=void 0===c?n:r(c,n);l>s;)e[s++]=t;return e}},YBdB:function(t,e,n){(function(t,e){n("8npG"),n("sc67"),function(t,n){"use strict";if(!t.setImmediate){var a,r,i,o,s,c=1,l={},f=!1,u=t.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(t);m=m&&m.setTimeout?m:t,"[object process]"==={}.toString.call(t.process)?a=function(t){e.nextTick((function(){p(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){p(t.data)},a=function(t){i.port2.postMessage(t)}):u&&"onreadystatechange"in u.createElement("script")?(r=u.documentElement,a=function(t){var e=u.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,r.removeChild(e),e=null},r.appendChild(e)}):a=function(t){setTimeout(p,0,t)}:(o="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(o)&&p(+e.data.slice(o.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),a=function(e){t.postMessage(o+e,"*")}),m.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return l[c]=r,a(c),c++},m.clearImmediate=d}function d(t){delete l[t]}function p(t){if(f)setTimeout(p,0,t);else{var e=l[t];if(e){f=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{d(t),f=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n("yLpj"),n("8oxB"))},n0hJ:function(t,e,n){var a=n("P8UN");a(a.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},uSBc:function(t,e,n){var a=n("chL8"),r=n("lHo0"),i=n("1a8y"),o=n("emib").Reflect;t.exports=o&&o.ownKeys||function(t){var e=a.f(i(t)),n=r.f;return n?e.concat(n(t)):e}},xtjI:function(t,e,n){var a=n("P8UN"),r=n("uSBc"),i=n("5SQf"),o=n("Drra"),s=n("Fgx0");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,a=i(t),c=o.f,l=r(a),f={},u=0;l.length>u;)void 0!==(n=c(a,e=l[u++]))&&s(f,e,n);return f}})}}]);
//# sourceMappingURL=component---src-templates-pricing-page-js-630a40dd3c9960402a9c.js.map