(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),a=r("Bnag");t.exports=function(t){return n(t)||o(t)||c(t)||a()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),a=r("8OQS");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=r("q1tI"),f=r("7ljp").mdx,p=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,c=a(t,["scope","children"]),i=p(e),s=l.useMemo((function(){if(!r)return null;var t=u({React:l,mdx:f},i),e=Object.keys(t),c=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,e]);return l.createElement(s,u({},c))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},kiaG:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),c=r("vOnD"),a=r("A2+M"),i=r("6p55"),u=r("9Dj+"),l=r("H8eV"),f=c.b.small.withConfig({displayName:"blog__Small",componentId:"sc-1kjnax6-0"})(["color:",";"],i.b.ACCENT.DARK_GREY);e.default=function(t){var e=t.data.mdx,r=e.frontmatter,n=e.body,c=e.timeToRead,i=r.title,p=r.description,s=r.cover,b=r.date,y=r.dateFormatted;return o.a.createElement(u.a,null,o.a.createElement(l.a,{title:i,description:p,image:s.childImageSharp.fixed.src}),o.a.createElement("h1",null,i),o.a.createElement(f,null,o.a.createElement("time",{dateTime:b},y)," ",o.a.createElement("span",{"aria-hidden":"true"},"・")," ",c," min read"),o.a.createElement(a.MDXRenderer,null,n))}},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function c(e,r,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=component---src-templates-blog-tsx-125933e4441dd4ab0d77.js.map