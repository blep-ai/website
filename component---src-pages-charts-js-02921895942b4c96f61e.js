(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2mql":function(t,e,r){"use strict";r("4DPX"),r("R48M");var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(t){return n.isMemo(t)?i:c[t.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(d){var o=p(r);o&&o!==d&&t(e,o,n)}var i=l(r);f&&(i=i.concat(f(r)));for(var c=s(e),y=s(r),m=0;m<i.length;++m){var v=i[m];if(!(a[v]||n&&n[v]||y&&y[v]||c&&c[v])){var g=h(r,v);try{u(e,v,g)}catch(b){}}}}return e}},TOwV:function(t,e,r){"use strict";t.exports=r("qT12")},ls82:function(t,e,r){r("rzGZ"),r("Dq+y"),r("q8oJ"),r("C9fy"),r("6kNP"),r("8npG"),r("LagC"),r("pJf4"),r("JHok"),r("pS08"),r("m210"),r("4DPX");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u={};function l(){}function f(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(E([])));y&&y!==e&&r.call(y,o)&&(p=y);var m=h.prototype=l.prototype=Object.create(p);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=m.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new g(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(m),m[i]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},oY9k:function(t,e,r){"use strict";r("n7j8");var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();t.exports=e=n.fetch,e.default=n.fetch.bind(n),e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response},qT12:function(t,e,r){"use strict";r("m210"),r("4DPX");var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,S=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function x(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case f:case h:case i:case s:case c:case d:return t;default:switch(t=t&&t.$$typeof){case l:case p:case v:case m:case u:return t;default:return e}}case a:return e}}}function E(t){return x(t)===h}e.AsyncMode=f,e.ConcurrentMode=h,e.ContextConsumer=l,e.ContextProvider=u,e.Element=o,e.ForwardRef=p,e.Fragment=i,e.Lazy=v,e.Memo=m,e.Portal=a,e.Profiler=s,e.StrictMode=c,e.Suspense=d,e.isAsyncMode=function(t){return E(t)||x(t)===f},e.isConcurrentMode=E,e.isContextConsumer=function(t){return x(t)===l},e.isContextProvider=function(t){return x(t)===u},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return x(t)===p},e.isFragment=function(t){return x(t)===i},e.isLazy=function(t){return x(t)===v},e.isMemo=function(t){return x(t)===m},e.isPortal=function(t){return x(t)===a},e.isProfiler=function(t){return x(t)===s},e.isStrictMode=function(t){return x(t)===c},e.isSuspense=function(t){return x(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===h||t===s||t===c||t===d||t===y||"object"==typeof t&&null!==t&&(t.$$typeof===v||t.$$typeof===m||t.$$typeof===u||t.$$typeof===l||t.$$typeof===p||t.$$typeof===b||t.$$typeof===S||t.$$typeof===w||t.$$typeof===g)},e.typeOf=x},yFFX:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return A}));r("6kNP"),r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("pJf4");var n=r("o0o1"),o=r.n(n),a=(r("ls82"),r("E5k/"),r("q1tI")),i=r.n(a),c=r("oY9k"),s=r.n(c),u=r("Zttt");r("sc67"),r("wZFJ"),r("MIFh"),r("n7j8"),r("DrhF");function l(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var p=r("2mql"),d=r.n(p);function y(t,e){if(!t){var r=new Error("loadable: "+e);throw r.framesToPop=1,r.name="Invariant Violation",r}}var m=i.a.createContext();var v=function(t){return t};function g(t){var e=t.resolve,r=void 0===e?v:e,n=t.render,o=t.onLoad;function a(t,e){void 0===e&&(e={});var a=function(t){return"function"==typeof t?{requireAsync:t}:t}(t),c={};function s(t){return e.cacheKey?e.cacheKey(t):a.resolve?a.resolve(t):null}var u,p=function(t){var i,u;function p(r){var n;return(n=t.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:s(r)},n.promise=null,y(!r.__chunkExtractor||a.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===e.ssr||(a.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(a.chunkName(r))),h(n)):(!1!==e.ssr&&a.isReady&&a.isReady(r)&&n.loadSync(),n)}u=t,(i=p).prototype=Object.create(u.prototype),i.prototype.constructor=i,i.__proto__=u,p.getDerivedStateFromProps=function(t,e){var r=s(t);return f({},e,{cacheKey:r,loading:e.loading||e.cacheKey!==r})};var d=p.prototype;return d.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},d.componentDidUpdate=function(t,e){e.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},d.componentWillUnmount=function(){this.mounted=!1},d.safeSetState=function(t,e){this.mounted&&this.setState(t,e)},d.triggerOnLoad=function(){var t=this;o&&setTimeout((function(){o(t.state.result,t.props)}))},d.loadSync=function(){if(this.state.loading)try{var t=a.requireSync(this.props),e=r(t,{Loadable:v});this.state.result=e,this.state.loading=!1}catch(n){this.state.error=n}},d.getCacheKey=function(){return s(this.props)||JSON.stringify(this.props)},d.getCache=function(){return c[this.getCacheKey()]},d.setCache=function(t){c[this.getCacheKey()]=t},d.loadAsync=function(){var t=this;if(!this.promise){var n=this.props,o=(n.__chunkExtractor,n.forwardedRef,l(n,["__chunkExtractor","forwardedRef"]));this.promise=a.requireAsync(o).then((function(n){var o=r(n,{Loadable:v});e.suspense&&t.setCache(o),t.safeSetState({result:r(n,{Loadable:v}),loading:!1},(function(){return t.triggerOnLoad()}))})).catch((function(e){t.safeSetState({error:e,loading:!1})}))}return this.promise},d.render=function(){var t=this.props,r=t.forwardedRef,o=t.fallback,a=(t.__chunkExtractor,l(t,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,c=i.error,s=i.loading,u=i.result;if(e.suspense){var h=this.getCache();if(!h)throw this.loadAsync();return n({loading:!1,fallback:null,result:h,options:e,props:f({},a,{ref:r})})}if(c)throw c;var p=o||e.fallback||null;return s?p:n({loading:s,fallback:p,result:u,options:e,props:f({},a,{ref:r})})},p}(i.a.Component),d=(u=p,function(t){return i.a.createElement(m.Consumer,null,(function(e){return i.a.createElement(u,Object.assign({__chunkExtractor:e},t))}))}),v=i.a.forwardRef((function(t,e){return i.a.createElement(d,Object.assign({forwardedRef:e},t))}));return v.preload=function(t){a.requireAsync(t)},v.load=function(t){return a.requireAsync(t)},v}return{loadable:a,lazy:function(t,e){return a(t,f({},e,{suspense:!0}))}}}var b=g({resolve:function(t,e){var r=e.Loadable,n=t.__esModule?t.default:t.default||t;return d()(r,n,{preload:!0}),n},render:function(t){var e=t.result,r=t.props;return i.a.createElement(e,r)}}),S=b.loadable,w=b.lazy,x=g({onLoad:function(t,e){t&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(t):e.forwardedRef.current=t)},render:function(t){var e=t.result,r=t.loading,n=t.props;return!r&&n.children?n.children(e):null}}),E=x.loadable,L=x.lazy;var O=S;O.lib=E,w.lib=L;function _(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function k(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){_(a,n,o,i,c,"next",t)}function c(t){_(a,n,o,i,c,"throw",t)}i(void 0)}))}}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var P=O((function(){return Promise.all([r.e(4),r.e(23)]).then(r.bind(null,"435K"))}),{ssr:!1}),j={color:"rgba(11, 94, 29, 0.2)",visible:!0,text:"blep.ai",fontSize:48,horzAlign:"center",vertAlign:"center"},A=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).handleChange=r.handleChange.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r)),r.state={exchange:"binance",period:"5m",symbol:"BTCUSDT",limit:300,options:{alignLabels:!0,timeScale:{rightOffset:0,barSpacing:3,fixLeftEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2b2b43",visible:!0,timeVisible:!0,secondsVisible:!1},layout:{fontFamily:"Heebo"},priceScale:{},watermark:Object.assign({},j)},sumOpenInterest:[{data:[]}],sumOpenInterestValue:[{data:[]}],topLongShortAccountRatio_longAccount:[{data:[]}],globalLongShortAccountRatio_longAccount:[{data:[]}],topLongShortPositionRatio_longAccount:[{data:[]}],buySellRatio:[{data:[]}],buySellVol:[{data:[]}]},r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a,c,l,f=n.prototype;return f.extractLineSeries=function(t){for(var e={},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var a=0,i=n;a<i.length;a++){var c=i[a];e[c]=[]}return t.forEach((function(t){for(var r in e)e[r].push({time:t.timestamp/1e3,value:parseFloat(t[r])})})),e},f.makeReq=function(){var t=k(o.a.mark((function t(e){var r,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://blep-cors.herokuapp.com","https://fapi.binance.com",r=this.state.symbol,n=this.state.limit,t.prev=4,t.next=7,s()("https://blep-cors.herokuapp.com/https://fapi.binance.com"+e+"/?symbol="+r+"&period="+this.state.period+"&limit="+n);case 7:if((a=t.sent).ok){t.next=10;break}throw Error(a.statusText);case 10:return t.abrupt("return",a.json());case 13:t.prev=13,t.t0=t.catch(4),console.error(t.t0);case 16:case"end":return t.stop()}}),t,this,[[4,13]])})));return function(e){return t.apply(this,arguments)}}(),f.handleChange=function(t){this.state[t.target.name]=t.target.value,this.componentDidMount()},f.componentDidMount=function(){var t=k(o.a.mark((function t(){var e,r,n,a,i,c,s,u,l,f,h,p,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=["/futures/data/openInterestHist","/futures/data/topLongShortAccountRatio","/futures/data/globalLongShortAccountRatio","/futures/data/topLongShortPositionRatio","/futures/data/takerlongshortRatio"],t.next=3,Promise.all(e.map(this.makeReq.bind(this)));case 3:for(a in r=t.sent,n=this.extractLineSeries(r[0],"sumOpenInterest","sumOpenInterestValue"))this.setState(((i={})[a]=[{data:n[a]}],i));for(u in n=this.extractLineSeries(r[1],"longAccount"),c=n.longAccount.map((function(t){return{time:t.timestamp/1e3,value:1}})),s=n.longAccount.map((function(t){return{time:t.timestamp/1e3,value:0}})),n)this.setState(((l={})["topLongShortAccountRatio_"+u]=[{data:n[u]},{data:c},{data:s}],l));for(f in n=this.extractLineSeries(r[2],"longAccount"))this.setState(((h={})["globalLongShortAccountRatio_"+f]=[{data:n[f]},{data:c},{data:s}],h));for(p in n=this.extractLineSeries(r[3],"longAccount"))this.setState(((d={})["topLongShortPositionRatio_"+p]=[{data:n[p]},{data:c},{data:s}],d));(n=this.extractLineSeries(r[4],"buySellRatio","buyVol","sellVol")).buyVol=n.buyVol.map((function(t){return Object.assign({},t,{color:"green"})})),n.sellVol=n.sellVol.map((function(t){return Object.assign({},t,{value:-t.value,color:"red"})})),this.setState({buySellRatio:[{data:n.buySellRatio}]}),this.setState({buySellVol:[{data:n.buyVol},{data:n.sellVol}]});case 19:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),f.render=function(){return i.a.createElement(u.a,{includePreFooter:!0},i.a.createElement("div",{className:"flex flex-col bg-white"},i.a.createElement("div",{className:"container px-8 mx-auto"},i.a.createElement("main",{className:"py-12 my-12"},i.a.createElement("label",null,"Exchange",i.a.createElement("select",{name:"exchange",value:this.state.period,onChange:this.handleChange},i.a.createElement("option",{value:"binance"},"Binance"))),i.a.createElement("label",null,"Period",i.a.createElement("select",{name:"period",value:this.state.period,onChange:this.handleChange},i.a.createElement("option",{value:"5m"},"5m"),i.a.createElement("option",{value:"15m"},"15m"),i.a.createElement("option",{value:"30m"},"30m"),i.a.createElement("option",{value:"1h"},"1h"),i.a.createElement("option",{value:"2h"},"2h"),i.a.createElement("option",{value:"4h"},"4h"),i.a.createElement("option",{value:"6h"},"6h"),i.a.createElement("option",{value:"12h"},"12h"),i.a.createElement("option",{value:"1d"},"1d"))),this.charts))))},a=n,(c=[{key:"charts",get:function(){var t=this,e=[["Open Interest",this.state.sumOpenInterest],["Open Value",this.state.sumOpenInterestValue],["Top Account Longs+Shorts",this.state.topLongShortAccountRatio_longAccount,"areaSeries"],["Account Longs+Shorts",this.state.globalLongShortAccountRatio_longAccount,"areaSeries"],["Top Positions Longs+Shorts",this.state.topLongShortPositionRatio_longAccount,"areaSeries"],["Buy Sell Volume Ratio",this.state.buySellRatio],["Buy Sell Volume",this.state.buySellVol,"histogramSeries"]],r=function(e){return e+" "+t.state.period+" | blep.ai"};return e.map((function(e){var n,o=e[0],a=e[1],c=e[2],s=void 0===c?"lineSeries":c;return i.a.createElement(P,Object.assign({key:o,className:"py-12 my-12",options:Object.assign({},t.state.options,{watermark:Object.assign({},j,{text:r(o)})})},((n={})[s]=a,n),{autoWidth:!0,height:600}))}))}}])&&R(a.prototype,c),l&&R(a,l),n}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-charts-js-02921895942b4c96f61e.js.map