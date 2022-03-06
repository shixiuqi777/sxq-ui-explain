(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c85da"],{5526:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("h2",[a._v("Radio 单选框")]),t("p",{staticClass:"title-text"},[a._v("在一组备选项中进行单选")]),t("code-view",{attrs:{title:"基础用法",subtitle:"由于选项默认可见，不宜过多",desc:"要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值",height:"385"}},[t("template",{slot:"source"},[t("sxq-radio",{attrs:{label:"备选项1"},model:{value:a.radio,callback:function(e){a.radio=e},expression:"radio"}}),t("sxq-radio",{attrs:{label:"备选项2"},model:{value:a.radio,callback:function(e){a.radio=e},expression:"radio"}})],1),t("template",{slot:"code"},[t("code",{staticClass:"html"},[a._v(a._s(a.code.main.html))]),t("code",{staticClass:"javascript"},[a._v(a._s(a.code.main.javascript))])])],2),t("code-view",{attrs:{title:"禁用状态",subtitle:"单选框不可用的状态",desc:"只要在sxq-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用",height:"385"}},[t("template",{slot:"source"},[t("sxq-radio",{attrs:{label:"禁用",disabled:""},model:{value:a.radio1,callback:function(e){a.radio1=e},expression:"radio1"}}),t("sxq-radio",{attrs:{label:"选中且禁用",disabled:""},model:{value:a.radio1,callback:function(e){a.radio1=e},expression:"radio1"}})],1),t("template",{slot:"code"},[t("code",{staticClass:"html"},[a._v(a._s(a.code.disabled.html))]),t("code",{staticClass:"javascript"},[a._v(a._s(a.code.disabled.javascript))])])],2),t("code-view",{attrs:{title:"单选框组",subtitle:"适用于在多个互斥的选项中选择的场景",desc:"结合sxq-radio-group元素和子元素sxq-radio可以实现单选组，在sxq-radio-group中绑定v-model，在sxq-radio中设置好label即可",height:"460"}},[t("template",{slot:"source"},[t("sxq-radio-group",{model:{value:a.radio2,callback:function(e){a.radio2=e},expression:"radio2"}},[t("sxq-radio",{attrs:{label:"备选项1"}}),t("sxq-radio",{attrs:{label:"备选项2"}}),t("sxq-radio",{attrs:{label:"备选项3"}})],1)],1),t("template",{slot:"code"},[t("code",{staticClass:"html"},[a._v(a._s(a.code.list.html))]),t("code",{staticClass:"javascript"},[a._v(a._s(a.code.list.javascript))])])],2),t("attr-table",{attrs:{data:a.api}})],1)},d=[],l={name:"Radio",data:function(){return{radio:"备选项1",radio1:"选中且禁用",radio2:"备选项1",code:{main:{html:'    <sxq-radio v-model="radio" label="备选项1"></sxq-radio>\n    <sxq-radio v-model="radio" label="备选项2"></sxq-radio>',javascript:"    export default {\n      data () {\n        return {\n          radio: '备选项1'\n        }\n      }\n    } "},disabled:{html:'    <sxq-radio v-model="radio" label="禁用" disabled></sxq-radio>\n    <sxq-radio v-model="radio" label="选中且禁用" disabled></sxq-radio>',javascript:"    export default {\n      data () {\n        return {\n          radio: '选中且禁用'\n        }\n      }\n    } "},list:{html:'    <sxq-radio-group v-model="radio">\n      <sxq-radio label="备选项1"></sxq-radio>\n      <sxq-radio label="备选项2"></sxq-radio>\n      <sxq-radio label="备选项3"></sxq-radio>\n    </sxq-radio-group>',javascript:"    export default {\n      data () {\n        return {\n          radio: '备选项1'\n        }\n      }\n    } "}},api:[{params:"v-model",desc:"绑定值",types:"string / number",value:"",default:""},{params:"label",desc:"选中状态的值",types:"string",value:"",default:""},{params:"disabled",desc:"是否禁用",types:"boolean",value:"true / false",default:"false"}]}}},o=l,i=t("2877"),r=Object(i["a"])(o,s,d,!1,null,"619cba78",null);e["default"]=r.exports}}]);