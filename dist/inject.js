!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";t(4)},function(e,r,t){r=e.exports=t(2)(),r.push([e.id,'#word-paraphrase{width:fit-content;max-width:350px;font-family:"sans-serif";font-size:14px;border-radius:8px/6px;border:1px solid #ccc;padding:10px;box-shadow:2px 2px 2px #ccc}#word-paraphrase .wp-pointer{display:block;margin:0 auto;margin-top:-32px;background-color:#fff}#word-paraphrase .wp-word{margin:0 0 10px}#word-paraphrase .wp-word h3{margin:0;display:inline}#word-paraphrase .wp-net-tran{font-size:8px;margin:15px 0 7px}#word-paraphrase .wp-net-tran hr{margin:0;border-bottom:0;border-top:1px solid #ccc}#word-paraphrase .wp-btn-group{margin:px 0;text-align:right}#word-paraphrase .wp-btn{padding:5px 20px;display:inline-block;cursor:pointer;margin-left:10px;border-radius:3px/4px}#word-paraphrase .wp-btn:hover{background-color:#f3f3f3}',""])},function(e,r){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],r=0;r<this.length;r++){var t=this[r];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(r,t){"string"==typeof r&&(r=[[null,r,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<r.length;o++){var a=r[o];"number"==typeof a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(e,r,t){function n(e,r){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(f(n.parts[i],r))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(f(n.parts[i],r));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var r=[],t={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],p=o[3],f={css:a,media:s,sourceMap:p};t[i]?t[i].parts.push(f):r.push(t[i]={id:i,parts:[f]})}return r}function i(e,r){var t=g(),n=b[b.length-1];if("top"===e.insertAt)n?n.nextSibling?t.insertBefore(r,n.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),b.push(r);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(r)}}function a(e){e.parentNode.removeChild(e);var r=b.indexOf(e);r>=0&&b.splice(r,1)}function s(e){var r=document.createElement("style");return r.type="text/css",i(e,r),r}function p(e){var r=document.createElement("link");return r.rel="stylesheet",i(e,r),r}function f(e,r){var t,n,o;if(r.singleton){var i=m++;t=x||(x=s(r)),n=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=p(r),n=d.bind(null,t),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(r),n=c.bind(null,t),o=function(){a(t)});return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else o()}}function u(e,r,t,n){var o=t?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function c(e,r){var t=r.css,n=r.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function d(e,r){var t=r.css,n=r.sourceMap;n&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([t],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var l={},h=function(e){var r;return function(){return"undefined"==typeof r&&(r=e.apply(this,arguments)),r}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,m=0,b=[];e.exports=function(e,r){r=r||{},"undefined"==typeof r.singleton&&(r.singleton=v()),"undefined"==typeof r.insertAt&&(r.insertAt="bottom");var t=o(e);return n(t,r),function(e){for(var i=[],a=0;a<t.length;a++){var s=t[a],p=l[s.id];p.refs--,i.push(p)}if(e){var f=o(e);n(f,r)}for(var a=0;a<i.length;a++){var p=i[a];if(0===p.refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete l[p.id]}}}};var w=function(){var e=[];return function(r,t){return e[r]=t,e.filter(Boolean).join("\n")}}()},function(e,r,t){var n=t(1);"string"==typeof n&&(n=[[e.id,n,""]]);t(3)(n,{});n.locals&&(e.exports=n.locals)}]);