(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+sqk":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("Bl7J"),c=n("vrFN"),l=n("1Bpj"),u=n("h0Sc"),s=n("J9L7");t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(c.a,{title:"Happy Things"}),a.a.createElement(u.a,null),a.a.createElement(s.a,null),a.a.createElement(l.a,null),a.a.createElement(o.Link,{to:"/blog2#viz1572122314586"},"Happiest Dog"),a.a.createElement(o.Link,{to:"/blog2#viz1572123754567"},"Happiest Shoes"),a.a.createElement(o.Link,{to:"/blog2#viz1572121772029"},"Happiest Playlist"))}},"1Bpj":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);var o=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=document.getElementById("viz1572121772029").getElementsByTagName("object")[0];e.style.width="800px",e.style.height="852px";var t=document.createElement("script");t.src="https://public.tableau.com/javascripts/api/viz_v1.js",e.parentNode.insertBefore(t,e)},o.render=function(){return a.a.createElement("div",{class:"tableauPlaceholder",id:"viz1572121772029",style:{position:"relative",margin:"auto"}},a.a.createElement("noscript",null,a.a.createElement("a",{href:"#"},a.a.createElement("img",{alt:" ",src:"https://public.tableau.com/static/images/Pl/Playlist_15718830465650/Story/1_rss.png",style:{border:"none"}}))),a.a.createElement("object",{class:"tableauViz",style:{display:"none"}},a.a.createElement("param",{name:"host_url",value:"https%3A%2F%2Fpublic.tableau.com%2F"})," ",a.a.createElement("param",{name:"embed_code_version",value:"3"})," ",a.a.createElement("param",{name:"site_root",value:""}),a.a.createElement("param",{name:"name",value:"Playlist_15718830465650/Story"}),a.a.createElement("param",{name:"tabs",value:"no"}),a.a.createElement("param",{name:"toolbar",value:"yes"}),a.a.createElement("param",{name:"static_image",value:"https://public.tableau.com/static/images/Pl/Playlist_15718830465650/Story/1.png"})," ",a.a.createElement("param",{name:"animate_transition",value:"yes"}),a.a.createElement("param",{name:"display_static_image",value:"yes"}),a.a.createElement("param",{name:"display_spinner",value:"yes"}),a.a.createElement("param",{name:"display_overlay",value:"yes"}),a.a.createElement("param",{name:"display_count",value:"yes"}),a.a.createElement("param",{name:"filter",value:"publish=yes"})))},r}(a.a.Component);t.a=o},"2rMq":function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var a=n("q1tI"),o=r(a),i=r(n("2rMq")),c=r(n("Gytx"));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l=[],u=void 0;function s(){u=e(l.map((function(e){return e.props}))),p.canUseDOM?t(u):n&&(u=n(u))}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return u},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},t.prototype.render=function(){return o.createElement(r,this.props)},t}(a.Component);return p.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",p.canUseDOM=i.canUseDOM,p}}},Bl7J:function(e,t,n){"use strict";n("91GP");var r=n("IRj2"),a=n("q1tI"),o=n.n(a),i=n("Wbzz"),c=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.defaultProps={siteTitle:""};var l=c,u=(n("8ypT"),function(e){var t=e.children,n=e.styles,a=r.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,{siteTitle:a.site.siteMetadata.title}),o.a.createElement("div",{style:Object.assign({margin:"0 auto",maxWidth:1040,padding:"0px 1.0875rem 1.45rem",paddingTop:0},n)},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))});u.defaultProps={style:null};t.a=u},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"A portfolio","description":"Data visualizations by Shay Culpepper","author":"@shaypepper"}}}}')},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!c(u))return!1;var s=e[u],p=t[u];if(!1===(a=n?n.call(r,s,p,u):void 0)||void 0===a&&s!==p)return!1}return!0}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"A portfolio"}}}}')},J9L7:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);var o=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=document.getElementById("viz1572123754567"),t=e.getElementsByTagName("object")[0];e.offsetWidth>800?(t.style.width="800px",t.style.height="977px"):e.offsetWidth>500?(t.style.width="800px",t.style.height="977px"):(t.style.width="100%",t.style.height="977px");var n=document.createElement("script");n.src="https://public.tableau.com/javascripts/api/viz_v1.js",t.parentNode.insertBefore(n,t)},o.render=function(){return a.a.createElement("div",{class:"tableauPlaceholder",id:"viz1572123754567",style:{position:"relative",margin:"auto"}},a.a.createElement("noscript",null,a.a.createElement("a",{href:"#"},a.a.createElement("img",{alt:" ",src:"https://public.tableau.com/static/images/9D/9D35CJ9DK/1_rss.png",style:{border:"none"}}))),a.a.createElement("object",{class:"tableauViz",style:{display:"none"}},a.a.createElement("param",{name:"host_url",value:"https%3A%2F%2Fpublic.tableau.com%2F"}),a.a.createElement("param",{name:"embed_code_version",value:"3"}),a.a.createElement("param",{name:"path",value:"shared/9D35CJ9DK"}),a.a.createElement("param",{name:"toolbar",value:"yes"}),a.a.createElement("param",{name:"static_image",value:"https://public.tableau.com/static/images/9D/9D35CJ9DK/1.png"}),a.a.createElement("param",{name:"animate_transition",value:"yes"}),a.a.createElement("param",{name:"display_static_image",value:"yes"}),a.a.createElement("param",{name:"display_spinner",value:"yes"}),a.a.createElement("param",{name:"display_overlay",value:"yes"}),a.a.createElement("param",{name:"display_count",value:"yes"})))},r}(a.a.Component);t.a=o},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),l=n("C/va"),u=r.RegExp,s=u,p=u.prototype,f=/a/g,T=/a/g,m=new u(f)!==f;if(n("nh4g")&&(!m||n("eeVq")((function(){return T[n("K0xU")("match")]=!1,u(f)!=f||u(T)==T||"/a/i"!=u(f,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(m?new s(r&&!o?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&o?l.call(e):t),n?this:p,u)};for(var E=function(e){e in u||o(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},d=i(s),y=0;d.length>y;)E(d[y++]);p.constructor=u,u.prototype=p,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=p(n("q1tI")),i=p(n("17x9")),c=p(n("8+s/")),l=p(n("bmMU")),u=n("v1p5"),s=n("hFT/");function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var T,m,E,d=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),y=(T=d,E=m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(T,a)},a(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(o.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=T.peek,m.rewind=function(){var e=T.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,s=r(t),p=r(n);if(s&&p){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=p)return!1;var f=t instanceof Date,T=n instanceof Date;if(f!=T)return!1;if(f&&T)return t.getTime()==n.getTime();var m=t instanceof RegExp,E=n instanceof RegExp;if(m!=E)return!1;if(m&&E)return t.toString()==n.toString();var d=a(t);if((l=d.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,d[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=d[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h0Sc:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);var o=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=document.getElementById("viz1572122314586"),t=e.getElementsByTagName("object")[0];e.offsetWidth>800?(t.style.width="800px",t.style.height="502px"):e.offsetWidth>500?(t.style.width="800px",t.style.height="502px"):(t.style.width="100%",t.style.height="727px");var n=document.createElement("script");n.src="https://public.tableau.com/javascripts/api/viz_v1.js",t.parentNode.insertBefore(n,t)},o.render=function(){return a.a.createElement("div",{class:"tableauPlaceholder",id:"viz1572122314586",style:{position:"relative",margin:"auto"}},a.a.createElement("noscript",null,a.a.createElement("a",{href:"#"},a.a.createElement("img",{alt:" ",src:"https://public.tableau.com/static/images/Mo/Mousse/Mousse/1_rss.png",style:{border:"none"}}))),a.a.createElement("object",{class:"tableauViz",style:{display:"none"}},a.a.createElement("param",{name:"host_url",value:"https%3A%2F%2Fpublic.tableau.com%2F"}),a.a.createElement("param",{name:"embed_code_version",value:"3"}),a.a.createElement("param",{name:"site_root",value:""}),a.a.createElement("param",{name:"name",value:"Mousse/Mousse"}),a.a.createElement("param",{name:"tabs",value:"no"}),a.a.createElement("param",{name:"toolbar",value:"yes"}),a.a.createElement("param",{name:"static_image",value:"https://public.tableau.com/static/images/Mo/Mousse/Mousse/1.png"}),a.a.createElement("param",{name:"animate_transition",value:"yes"}),a.a.createElement("param",{name:"display_static_image",value:"yes"}),a.a.createElement("param",{name:"display_spinner",value:"yes"}),a.a.createElement("param",{name:"display_overlay",value:"yes"}),a.a.createElement("param",{name:"display_count",value:"yes"})))},r}(a.a.Component);t.a=o},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("q1tI")),i=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=d(e,c.TAG_NAMES.TITLE),n=d(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return d(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},E=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var u=o[l],s=(0,i.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){y(e)}),0)}),h=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,p=e.styleTags,f=e.title,T=e.titleAttributes;M(c.TAG_NAMES.BODY,r),M(c.TAG_NAMES.HTML,a),P(f,T);var m={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,o),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,l),scriptTags:R(c.TAG_NAMES.SCRIPT,s),styleTags:R(c.TAG_NAMES.STYLE,p)},E={},d={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(d[e]=m[e].oldTags)})),t&&t(),u(e,E,d)},g=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),M(c.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var p=o.indexOf(u);-1!==p&&o.splice(p,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=w(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),o=g(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){_&&v(_),e.defer?_=A((function(){S(e,(function(){_=null}))})):(S(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,p=e.title,f=void 0===p?"":p,T=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,a,r),link:I(c.TAG_NAMES.LINK,o,r),meta:I(c.TAG_NAMES.META,i,r),noscript:I(c.TAG_NAMES.NOSCRIPT,l,r),script:I(c.TAG_NAMES.SCRIPT,u,r),style:I(c.TAG_NAMES.STYLE,s,r),title:I(c.TAG_NAMES.TITLE,{title:f,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:d(e,c.HELMET_PROPS.DEFER),encode:d(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=b}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),o=n.n(a),i=n("TJpk"),c=n.n(i);function l(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,l=r.data.site,u=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-blog-2-js-fef8c14fea70ff3c1079.js.map