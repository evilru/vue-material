webpackJsonp([9],{850:function(e,s,r){function t(e){r(933)}var a=r(1)(r(935),r(936),t,"data-v-63f6719f",null);e.exports=a.exports},933:function(e,s,r){var t=r(934);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals),r(828)("32b384eb",t,!0)},934:function(e,s,r){s=e.exports=r(827)(),s.push([e.i,".progress-area[data-v-63f6719f]{height:44px}.progress-area+.md-button[data-v-63f6719f]{margin:16px 0 0}.md-progress[data-v-63f6719f]{margin-bottom:16px}",""])},935:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{progress:0,progressInterval:null,transition:!0}},methods:{startProgress:function(){var e=this;this.progressInterval=window.setInterval((function(){e.progress+=3,e.progress>100&&window.clearInterval(e.progressInterval)}),100)},restartProgress:function(){var e=this;this.progress=0,this.transition=!1,window.clearInterval(this.progressInterval),window.setTimeout((function(){e.transition=!0,e.startProgress()}),600)}},mounted:function(){this.startProgress()}},e.exports=s.default},936:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("page-content",{attrs:{"page-title":"Components - Progress"}},[r("docs-component",[r("div",{slot:"description"},[r("p",[e._v("A linear progress indicator should always fill from 0% to 100% and never decrease in value. It should be represented by bars on the edge of a header or sheet that appear and disappear.")]),e._v(" "),r("p",[e._v("The following classes can be applied to change the color palette:")]),e._v(" "),r("ul",{staticClass:"md-body-2"},[r("li",[r("code",[e._v("md-accent")])]),e._v(" "),r("li",[r("code",[e._v("md-warn")])])])]),e._v(" "),r("div",{slot:"api"},[r("api-table",{attrs:{name:"md-progress"}},[r("md-table",{slot:"properties"},[r("md-table-header",[r("md-table-row",[r("md-table-head",[e._v("Name")]),e._v(" "),r("md-table-head",[e._v("Type")]),e._v(" "),r("md-table-head",[e._v("Description")])],1)],1),e._v(" "),r("md-table-body",[r("md-table-row",[r("md-table-cell",[e._v("md-indeterminate")]),e._v(" "),r("md-table-cell",[r("code",[e._v("Boolean")])]),e._v(" "),r("md-table-cell",[e._v("Enable the indeterminate state. "),r("br"),e._v("Default: "),r("code",[e._v("false")])])],1),e._v(" "),r("md-table-row",[r("md-table-cell",[e._v("md-progress")]),e._v(" "),r("md-table-cell",[r("code",[e._v("Number")])]),e._v(" "),r("md-table-cell",[e._v("Define the current progress of the progress. "),r("br"),e._v("Default: "),r("code",[e._v("0")])])],1)],1)],1)],1)],1),e._v(" "),r("div",{slot:"example"},[r("example-box",{attrs:{"card-title":"Determinate"}},[r("div",{staticClass:"progress-demo",slot:"demo"},[r("div",{staticClass:"progress-area"},[e.transition?r("md-progress",{attrs:{"md-progress":e.progress}}):e._e(),e._v(" "),e.transition?r("md-progress",{staticClass:"md-accent",attrs:{"md-progress":e.progress}}):e._e(),e._v(" "),e.transition?r("md-progress",{staticClass:"md-warn",attrs:{"md-progress":e.progress}}):e._e()],1),e._v(" "),r("md-button",{staticClass:"md-primary md-raised",on:{click:e.restartProgress}},[e._v("Restart")])],1),e._v(" "),r("div",{slot:"code"},[r("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-progress :md-progress="progress"></md-progress>\n            <md-progress class="md-accent" :md-progress="progress"></md-progress>\n            <md-progress class="md-warn" :md-progress="progress"></md-progress>\n          ')])],1)]),e._v(" "),r("example-box",{attrs:{"card-title":"Indeterminate"}},[r("div",{staticClass:"progress-demo",slot:"demo"},[r("div",{staticClass:"progress-area"},[e.transition?r("md-progress",{attrs:{"md-indeterminate":""}}):e._e(),e._v(" "),e.transition?r("md-progress",{staticClass:"md-accent",attrs:{"md-indeterminate":""}}):e._e(),e._v(" "),e.transition?r("md-progress",{staticClass:"md-warn",attrs:{"md-indeterminate":""}}):e._e()],1)]),e._v(" "),r("div",{slot:"code"},[r("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-progress md-indeterminate></md-progress>\n            <md-progress class="md-accent" md-indeterminate></md-progress>\n            <md-progress class="md-warn" md-indeterminate></md-progress>\n          ')])],1)]),e._v(" "),r("example-box",{attrs:{"card-title":"Themes"}},[r("div",{staticClass:"progress-demo",slot:"demo"},[r("div",{staticClass:"progress-area"},[e.transition?r("md-progress",{attrs:{"md-theme":"orange","md-indeterminate":""}}):e._e(),e._v(" "),e.transition?r("md-progress",{attrs:{"md-theme":"green","md-progress":e.progress}}):e._e(),e._v(" "),e.transition?r("md-progress",{attrs:{"md-theme":"purple","md-indeterminate":""}}):e._e()],1)]),e._v(" "),r("div",{slot:"code"},[r("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-progress md-theme="orange" md-indeterminate></md-progress>\n            <md-progress md-theme="green" :md-progress="progress"></md-progress>\n            <md-progress md-theme="purple" md-indeterminate></md-progress>\n          ')])],1)])],1)])],1)},staticRenderFns:[]}}});