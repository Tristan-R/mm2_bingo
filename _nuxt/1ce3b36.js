(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("64a859c5",content,!0,{sourceMap:!1})},210:function(t,e,n){"use strict";n.r(e);var c={name:"Square",props:["id","text","size"],data:function(){return{isComplete:!1,selectable:!0}},methods:{onClick:function(){this.selectable&&(this.isComplete=!this.isComplete,this.$emit("update",this.id,this.isComplete))}},mounted:function(){"FREE"===this.text&&(this.isComplete=!0,this.selectable=!1)}},o=(n(212),n(21)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"square",class:{complete:t.isComplete},on:{click:t.onClick}},[n("div",{staticClass:"is-hidden-mobile"},[t._v("\n        "+t._s(t.text)+"\n    ")]),t._v(" "),"five"===t.size?n("div",{staticClass:"is-hidden-tablet",staticStyle:{"font-size":"0.4rem","line-height":"0.5rem"}},[t._v("\n        "+t._s(t.text)+"\n    ")]):t._e(),t._v(" "),"three"===t.size?n("div",{staticClass:"is-hidden-tablet",staticStyle:{"font-size":"0.8rem","line-height":"1rem"}},[t._v("\n        "+t._s(t.text)+"\n    ")]):t._e()])}),[],!1,null,"6ccf2237",null);e.default=component.exports},212:function(t,e,n){"use strict";n(209)},213:function(t,e,n){var c=n(52)(!1);c.push([t.i,"@media screen and (min-width:550px) and (max-width:768px){div.is-hidden-tablet[data-v-6ccf2237]{font-size:.7rem!important;line-height:.8rem!important}}.square[data-v-6ccf2237]{border:1px solid #fff;height:0;width:100%;padding-bottom:100%;background-color:#f08080}.square div[data-v-6ccf2237]{color:#000;padding-top:50%;height:0;display:flex;justify-content:center;align-items:center;text-align:center}.square.complete[data-v-6ccf2237]{background-color:#adff2f}",""]),t.exports=c}}]);