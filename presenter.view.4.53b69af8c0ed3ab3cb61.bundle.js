(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(e,n,t){var r=t(299);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,a);r.locals&&(e.exports=r.locals)},299:function(e,n,t){},341:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),i=t(4);function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}var n,t,r;return n=e,(t=[{key:"registerEvent",value:function(e,n){navigator.presentation.receiver.connectionList.then(function(t){t.connections.forEach(function(t){t.addEventListener(e,n)}),t.addEventListener("connectionavailable",function(e){n(e.connection)})})}},{key:"setUp",value:function(){this.registerEvent("close",function(e){console.log(e)})}},{key:"onChangePage",value:function(e){"presentation"===this.apiType?this.registerEvent("message",function(n){var t=JSON.parse(n.data).page;e(t)}):window.addEventListener("storage",function(n){if("page"===n.key){var t=JSON.parse(n.newValue).page;e(t)}})}}])&&o(n.prototype,t),r&&o(n,r),e}(),c=t(136),s=t(124);t(298);function l(e,n,t,r,a,i,o){try{var u=e[i](o),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var i=e.apply(n,t);function o(e){l(i,r,a,o,u,"next",e)}function u(e){l(i,r,a,o,u,"throw",e)}o(void 0)})}}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=null,d=null,h=null,w=null,g=Object(r.memo)(function(e){var n=e.slides,t=e.hash;v||(v=new u).onChangePage(function(e){window.slide&&(window.slide.goToSlide(e),d&&h&&y(h))});var o=p(Object(r.useState)(!1),2),l=o[0],g=(o[1],function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=7;break}return d=new s.a,e.next=4,d.startCapturing({video:{displaySurface:"monitor"}});case 4:return e.abrupt("return",e.sent);case 7:throw new Error("Capturing has already run.");case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),y=function(e){d&&e&&(e.pause(),d.stopCapturing(e),w.style.opacity=1,d=null,w=null,h=null)},m=function(){var e=f(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=document.querySelectorAll("#webslides .fusuma-screen"))){e.next=3;break}return e.abrupt("return");case 3:t.forEach(function(e){var n=p(e.children,2),t=n[0],r=n[1];r.addEventListener("click",f(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=10;break}return e.next=3,g();case 3:n=e.sent,r.srcObject=n,r.play(),h=r,(w=t).style.opacity=0,n.getVideoTracks()[0].onended=function(){y(r)};case 10:case"end":return e.stop()}},e)})))});case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){m()},[]),a.a.createElement("div",{className:"fusuma-presenter-view"},l&&a.a.createElement(c.a,{disabled:!0,hideGrid:!0}),a.a.createElement(i.a,{slides:n,hash:t,showIndex:!1}))});n.default=g}}]);