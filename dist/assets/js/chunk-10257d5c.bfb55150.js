(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10257d5c"],{1270:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"show-input"},[a("h2",[e._v("Input 输入框")]),a("p",{staticClass:"title-text"},[e._v("通过鼠标或键盘输入字符")]),a("code-view",{attrs:{title:"基础用法",desc:"通过v-model绑定input框输入值",height:"360"}},[a("template",{slot:"source"},[a("sxq-input",{attrs:{type:"text",placeholder:"请输入内容",width:"180"},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}})],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[e._v(e._s(e.code.main.html))]),a("code",{staticClass:"javascript"},[e._v(e._s(e.code.main.javascript))])])],2),a("code-view",{attrs:{title:"禁用状态",desc:"通过 disabled 属性指定是否禁用 input 组件",height:"360"}},[a("template",{slot:"source"},[a("sxq-input",{attrs:{type:"text",placeholder:"请输入内容",disabled:"",width:"180"},model:{value:e.disabledVal,callback:function(t){e.disabledVal=t},expression:"disabledVal"}})],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[e._v(e._s(e.code.disabled.html))]),a("code",{staticClass:"javascript"},[e._v(e._s(e.code.disabled.javascript))])])],2),a("code-view",{attrs:{title:"可清空",desc:"使用clearable属性即可得到一个可清空的输入框",height:"360"}},[a("template",{slot:"source"},[a("sxq-input",{attrs:{type:"text",placeholder:"请输入内容",clearable:"",width:"180"},model:{value:e.clearableVal,callback:function(t){e.clearableVal=t},expression:"clearableVal"}})],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[e._v(e._s(e.code.clearable.html))]),a("code",{staticClass:"javascript"},[e._v(e._s(e.code.clearable.javascript))])])],2),a("code-view",{attrs:{title:"带 icon 的输入框",subtitle:"带有图标标记输入类型",desc:"可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。",height:"450"}},[a("template",{slot:"source"},[a("sxq-input",{attrs:{type:"text","prefix-icon":"icon-search",placeholder:"icon在前面",width:"180"},model:{value:e.prefixVal,callback:function(t){e.prefixVal=t},expression:"prefixVal"}}),a("sxq-input",{staticStyle:{marginTop:"20px"},attrs:{type:"text","suffix-icon":"icon-file",placeholder:"icon在后面",width:"180"},model:{value:e.suffixVal,callback:function(t){e.suffixVal=t},expression:"suffixVal"}})],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[e._v(e._s(e.code.icon.html))]),a("code",{staticClass:"javascript"},[e._v(e._s(e.code.icon.javascript))])])],2),a("code-view",{attrs:{title:"文本域",subtitle:"用于输入多行文本信息，通过将 type 属性的值指定为 textarea。",height:"290"}},[a("template",{slot:"source"},[a("sxq-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.textareaVal,callback:function(t){e.textareaVal=t},expression:"textareaVal"}})],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[e._v(e._s(e.code.textarea.html))]),a("code",{staticClass:"javascript"},[e._v(e._s(e.code.textarea.javascript))])])],2),a("code-view",{attrs:{title:"复合型输入框",subtitle:"可前置或后置元素，一般为标签或按钮",desc:"可通过 slot 来指定在 input 中前置或者后置内容。",height:"705"}},[a("template",{slot:"source"},[a("sxq-input",{attrs:{placeholder:"请输入内容"},model:{value:e.prependVal,callback:function(t){e.prependVal=t},expression:"prependVal"}},[a("template",{slot:"prepend"},[e._v("Http://")])],2),a("div",{staticStyle:{"margin-top":"15px"}},[a("sxq-input",{attrs:{placeholder:"请输入内容"},model:{value:e.appendVal,callback:function(t){e.appendVal=t},expression:"appendVal"}},[a("template",{slot:"append"},[e._v(".com")])],2)],1),a("div",{staticStyle:{"margin-top":"15px"}},[a("sxq-input",{attrs:{placeholder:"请输入内容"},model:{value:e.allVal,callback:function(t){e.allVal=t},expression:"allVal"}},[a("template",{slot:"prepend"},[e._v("Http://")]),a("template",{slot:"append"},[e._v(".com")])],2)],1)],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[e._v(e._s(e.code.all.html))]),a("code",{staticClass:"javascript"},[e._v(e._s(e.code.all.javascript))])])],2),a("attr-table",{attrs:{data:e.api}})],1)},s=[],p={name:"Input",data:function(){return{inputVal:"",disabledVal:"",clearableVal:"",prefixVal:"",suffixVal:"",textareaVal:"",prependVal:"",appendVal:"",allVal:"",code:{main:{html:'   <sxq-input type="text" v-model="inputVal" placeholder="请输入内容" /> ',javascript:"    export default {\n      data () {\n        return {\n          inputVal:''\n        }\n      }\n    } "},disabled:{html:'   <sxq-input type="text" v-model="inputVal" placeholder="请输入内容" disabled /> ',javascript:"    export default {\n      data () {\n        return {\n          inputVal:''\n        }\n      }\n    } "},clearable:{html:'   <sxq-input type="text" v-model="inputVal" placeholder="请输入内容" clearable /> ',javascript:"    export default {\n      data () {\n        return {\n          inputVal:''\n        }\n      }\n    } "},icon:{html:'\n    <sxq-input type="text" v-model="prefixVal" prefix-icon="icon-search" placeholder="icon在前面" />\n    <sxq-input type="text" v-model="suffixVal" suffix-icon="icon-file" placeholder="icon在后面" />',javascript:"    export default {\n      data () {\n        return {\n          prefixVal:'',\n          suffixVal:''\n        }\n      }\n    } "},textarea:{html:'   <sxq-input type="textarea" v-model="textareaVal" placeholder="请输入内容" />',javascript:"    export default {\n      data () {\n        return {\n          textareaVal:''\n        }\n      }\n    } "},all:{html:'\n    <sxq-input placeholder="请输入内容" v-model="inputVal1">\n        <template slot="prepend">Http://</template>\n    </sxq-input>\n    <sxq-input placeholder="请输入内容" v-model="inputVal2">\n        <template slot="append">.com</template>\n    </sxq-input>\n    <sxq-input placeholder="请输入内容" v-model="inputVal3">\n        <template slot="prepend">Http://</template>\n        <template slot="append">.com</template>\n    </sxq-input>\n        ',javascript:"    export default {\n      data () {\n        return {\n          inputVal1:'',\n          inputVal2:'',\n          inputVal3:''\n        }\n      }\n    } "}},api:[{params:"type",desc:"类型",types:"string",value:"text / textarea",default:"text"},{params:"v-model",desc:"绑定值",types:"string / number",value:"",default:""},{params:"width",desc:"输入框长度",types:"string",value:"",default:""},{params:"center",desc:"输入框文本居中",types:"boolean",value:"true / false ",default:"false"},{params:"placeholder",desc:"输入框占位文本",types:"string",value:"",default:""},{params:"clearable",desc:"是否可清空",types:"boolean",value:"true / false ",default:"false"},{params:"disabled",desc:"输入框禁用",types:"boolean",value:"true / false ",default:"false"},{params:"prefix-icon",desc:"输入框头部图标",types:"string",value:"",default:""},{params:"suffix-icon",desc:"输入框尾部图标",types:"string",value:"",default:""}]}}},n=p,i=(a("4d59"),a("2877")),c=Object(i["a"])(n,l,s,!1,null,null,null);t["default"]=c.exports},"1d48":function(e,t,a){},"4d59":function(e,t,a){"use strict";a("1d48")}}]);
//# sourceMappingURL=chunk-10257d5c.bfb55150.js.map