/*!
* Vue Material v0.7.3
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=479)})({0:function(t,e){t.exports=function(t,e,n,o,r){var a,d=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,d=t.default);var c="function"==typeof d?d.options:d;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),o&&(c._scopeId=o);var m;if(r?(m=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=m):n&&(m=n),m){var u=c.functional,l=u?c.render:c.beforeCreate;u?c.render=function(t,e){return m.call(e),l(t,e)}:c.beforeCreate=l?[].concat(l,m):[m]}return{esModule:a,exports:d,options:c}}},1:function(t,e,n){"use strict";function o(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||o(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return o(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t||"default")}},t.exports=e.default},430:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){t.component("md-toolbar",d.default),t.material.styles.push(c.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=n(431),d=o(a),i=n(435),c=o(i);t.exports=e.default},431:function(t,e,n){function o(t){n(432)}var r=n(0)(n(433),n(434),o,null,null);t.exports=r.exports},432:function(t,e){},433:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=(function(t){return t&&t.__esModule?t:{default:t}})(o);e.default={name:"md-toolbar",mixins:[r.default]},t.exports=e.default},434:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-toolbar",class:[t.themeClass]},[t._t("default")],2)},staticRenderFns:[]}},435:function(t,e){t.exports=".THEME_NAME.md-toolbar{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container.md-input-focused input,.THEME_NAME.md-toolbar .md-input-container.md-input-focused textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container.md-input-focused label,.THEME_NAME.md-toolbar .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container:after{background-color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container input,.THEME_NAME.md-toolbar .md-input-container textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-toolbar .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-toolbar .md-input-container textarea::-webkit-input-placeholder{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-toolbar .md-input-container label,.THEME_NAME.md-toolbar .md-input-container .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused input,.THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused label,.THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container:after{background-color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container input,.THEME_NAME.md-toolbar.md-accent .md-input-container textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-accent .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-toolbar.md-accent .md-input-container textarea::-webkit-input-placeholder{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-toolbar.md-accent .md-input-container label,.THEME_NAME.md-toolbar.md-accent .md-input-container .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused input,.THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused label,.THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container:after{background-color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container input,.THEME_NAME.md-toolbar.md-warn .md-input-container textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-toolbar.md-warn .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-toolbar.md-warn .md-input-container textarea::-webkit-input-placeholder{color:WARN-CONTRAST-0.54}.THEME_NAME.md-toolbar.md-warn .md-input-container label,.THEME_NAME.md-toolbar.md-warn .md-input-container .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-transparent{background-color:transparent;color:BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused input,.THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused textarea{color:BACKGROUND-CONTRAST;text-shadow:0 0 0 BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused label,.THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container:after{background-color:BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container input,.THEME_NAME.md-toolbar.md-transparent .md-input-container textarea{color:BACKGROUND-CONTRAST;text-shadow:0 0 0 BACKGROUND-CONTRAST}.THEME_NAME.md-toolbar.md-transparent .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-toolbar.md-transparent .md-input-container textarea::-webkit-input-placeholder{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-toolbar.md-transparent .md-input-container label,.THEME_NAME.md-toolbar.md-transparent .md-input-container .md-icon:not(.md-icon-delete){color:BACKGROUND-CONTRAST}\n"},479:function(t,e,n){t.exports=n(430)}})}));