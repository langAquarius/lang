!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=class{constructor(e){this.wrap=this.$(e),this.init()}$(e){return document.getElementById(e)}init(){this.addEvent()}changTitle(e){[...this.wrap.querySelectorAll("ul li")].map((t,n)=>{t.className=e==n?"act":""})}changContent(e){[...document.querySelectorAll("main section")].map((t,n)=>{t.style.display="none",e==n&&(t.style.display="block")})}addEvent(){[...document.querySelectorAll("ul li")].map((e,t)=>{e.addEventListener("click",e=>{this.changTitle(t),this.changContent(t)})})}};var r=(e,t="GET")=>{return new Promise((n,l)=>{const r=new XMLHttpRequest;r.open(t,e),r.onreadystatechange=(()=>{4===r.readyState&&(200===r.status?n(r.responseText):l("404"))}),r.send(null)})};console.log("hello world!"),new l("title");!function(){let e=document.getElementById("songsList");r("http://localhost:8080/songs").then(t=>{let n="";JSON.parse(t).map((e,t)=>{n+=` <li class="col-xs-4 pl0 pr0">\n                    <span>\n                        <i class="fa fa-music "></i>\n                        ${e.paly}\n                    </span>\n                    <dl>\n                        <dt>\n                            <img src="${e.url}">\n                        </dt>\n                        <dd>${e.name}</dd>\n                    </dl>\n                </li>`}),e.innerHTML+=n})}()}]);