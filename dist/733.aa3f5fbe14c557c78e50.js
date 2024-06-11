/*! For license information please see 733.aa3f5fbe14c557c78e50.js.LICENSE.txt */
"use strict";(self.webpackChunkrecipe_app=self.webpackChunkrecipe_app||[]).push([[733],{733:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var r=n(540),o=n(83);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(){c=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new I(r||[]);return o(i,"_invoke",{value:_(t,n,c)}),i}function m(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",d="completed",g={};function b(){}function E(){}function w(){}var x={};f(x,u,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(q([])));k&&k!==n&&r.call(k,u)&&(x=k);var S=w.prototype=b.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function n(o,i,c,u){var l=m(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==a(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,n,r){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=C(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=m(e,n,r);if("normal"===l.type){if(o=r.done?d:y,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function C(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=m(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function q(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(a(e)+" is not iterable")}return E.prototype=w,o(S,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:E,configurable:!0}),E.displayName=f(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},L(A.prototype),f(A.prototype,l,(function(){return this})),e.AsyncIterator=A,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new A(p(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(S),f(S,s,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=q,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:q(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function u(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))}}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],u=!0,l=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return p(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}const m=function(){var t=s((0,r.useState)([]),2),e=t[0],n=t[1],a=s((0,r.useState)(""),2),u=a[0],f=a[1],p=s((0,r.useState)(""),2),m=p[0],h=p[1],y=s((0,r.useState)(""),2),v=y[0],d=y[1],g=s((0,r.useState)([{item:"",quantity:"",unit:""}]),2),b=g[0],E=g[1],w=s((0,r.useState)(""),2),x=w[0],N=w[1],k=s((0,r.useState)(!1),2),S=k[0],L=k[1],A=s((0,r.useState)(null),2),_=A[0],C=A[1],j=s((0,r.useState)("All"),2),O=j[0],I=j[1],q=s((0,r.useState)(["Chinese","Western","Japanese"]),2),P=q[0],T=q[1];(0,r.useEffect)((function(){F()}),[]);var F=function(){var t=l(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.A.get("http://localhost:5001/api/recipes");case 3:e=t.sent,n(e.data),G(e.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching recipes:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),G=function(t){var e=Array.from(new Set(t.map((function(t){return t.cuisine}))));e.sort(),T(e)},R=function(){var t=l(c().mark((function t(r){var a,l,s,p;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),l={title:u,cuisine:a="new"===m?v:m,ingredients:b,instructions:x},t.prev=3,!S){t.next=13;break}return t.next=7,o.A.put("http://localhost:5001/api/recipes/".concat(_),l);case 7:s=t.sent,n(e.map((function(t){return t._id===_?s.data:t}))),L(!1),C(null),t.next=18;break;case 13:return t.next=15,o.A.post("http://localhost:5001/api/recipes",l);case 15:p=t.sent,n([].concat(i(e),[p.data])),P.includes(a)||T([].concat(i(P),[a]));case 18:f(""),h(""),d(""),E([{item:"",quantity:"",unit:""}]),N(""),t.next=28;break;case 25:t.prev=25,t.t0=t.catch(3),console.error("Error adding/updating recipe:",t.t0);case 28:case"end":return t.stop()}}),t,null,[[3,25]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=l(c().mark((function t(r){var a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.confirm("Are you sure you want to delete this recipe?")){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,o.A.delete("http://localhost:5001/api/recipes/".concat(r));case 6:a=e.filter((function(t){return t._id!==r})),n(a),G(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.error("Error deleting recipe:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),U=function(t,e){var n=i(b);n[t][e.target.name]=e.target.value,E(n)},Y="All"===O?e:e.filter((function(t){return t.cuisine===O})),J=function(t){I(t)};return r.createElement("div",{className:"recipes container"},r.createElement("h2",null,"Recipes"),r.createElement("form",{onSubmit:R,className:"mb-4"},r.createElement("div",{className:"form-group mb-3"},r.createElement("label",{htmlFor:"title"},"Title:"),r.createElement("input",{type:"text",className:"form-control",id:"title",value:u,onChange:function(t){return f(t.target.value)},placeholder:"Enter recipe title",required:!0})),r.createElement("div",{className:"form-group mb-3"},r.createElement("label",{htmlFor:"cuisine"},"Cuisine:"),r.createElement("select",{className:"form-control",id:"cuisine",value:m,onChange:function(t){return h(t.target.value)},required:!0},r.createElement("option",{value:""},"Select cuisine"),P.map((function(t,e){return r.createElement("option",{key:e,value:t},t)})),r.createElement("option",{value:"new"},"Add new cuisine")),"new"===m&&r.createElement("input",{type:"text",className:"form-control mt-2",placeholder:"Enter new cuisine",value:v,onChange:function(t){return d(t.target.value)},required:!0})),r.createElement("div",{className:"form-group mb-3"},r.createElement("label",null,"Ingredients:"),b.map((function(t,e){return r.createElement("div",{key:e,className:"d-flex mb-2"},r.createElement("input",{type:"text",className:"form-control me-2",name:"item",placeholder:"Item",value:t.item,onChange:function(t){return U(e,t)},required:!0}),r.createElement("input",{type:"number",className:"form-control me-2",name:"quantity",placeholder:"Quantity",value:t.quantity,onChange:function(t){return U(e,t)},required:!0}),r.createElement("input",{type:"text",className:"form-control me-2",name:"unit",placeholder:"Unit",value:t.unit,onChange:function(t){return U(e,t)}}),e>0&&r.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return function(t){var e=i(b);e.splice(t,1),E(e)}(e)}},"Remove"))})),r.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){E([].concat(i(b),[{item:"",quantity:"",unit:""}]))}},"Add Ingredient")),r.createElement("div",{className:"form-group mb-3"},r.createElement("label",{htmlFor:"instructions"},"Instructions:"),r.createElement("textarea",{className:"form-control",id:"instructions",value:x,onChange:function(t){return N(t.target.value)},placeholder:"Describe the instructions",required:!0})),r.createElement("button",{type:"submit",className:"btn btn-primary"},S?"Update Recipe":"Add Recipe")),r.createElement("div",{className:"mb-4"},r.createElement("ul",{className:"nav nav-tabs"},r.createElement("li",{className:"nav-item"},r.createElement("button",{className:"nav-link ".concat("All"===O?"active":""),onClick:function(){return J("All")}},"All")),P.map((function(t,e){return r.createElement("li",{className:"nav-item",key:e},r.createElement("button",{className:"nav-link ".concat(O===t?"active":""),onClick:function(){return J(t)}},t))})))),r.createElement("h3",null,"Recipe List"),r.createElement("ul",{className:"list-group"},Y.map((function(t){return r.createElement("li",{key:t._id,className:"list-group-item"},r.createElement("h4",null,t.title),r.createElement("p",null,r.createElement("strong",null,"Cuisine:")," ",t.cuisine),r.createElement("p",null,r.createElement("strong",null,"Ingredients:")),r.createElement("ul",null,t.ingredients.map((function(t,e){return r.createElement("li",{key:e},t.quantity," ",t.unit," ",t.item)}))),r.createElement("p",null,r.createElement("strong",null,"Instructions:")," ",t.instructions),r.createElement("button",{onClick:function(){return function(t){f(t.title),h(t.cuisine),E(t.ingredients),N(t.instructions),L(!0),C(t._id)}(t)},className:"btn btn-warning me-2"},"Edit"),r.createElement("button",{onClick:function(){return D(t._id)},className:"btn btn-danger"},"Delete"))}))))}}}]);