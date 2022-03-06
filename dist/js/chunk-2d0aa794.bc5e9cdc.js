(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa794"],{"10ba":function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",[a("h2",[s._v("Uploader 上传")]),a("p",{staticClass:"title-text"},[s._v(" 通过点击或者拖拽上传文件 ")]),a("code-view",{attrs:{title:"点击上传",desc:"通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置limit和size来限制上传文件的个数和文件大小",height:"880"}},[a("template",{slot:"source"},[a("sxq-uploader",{attrs:{accept:"image/png, image/jpeg",size:819200,limit:5,"on-success":s.uploadSuccess,"on-error":s.uploadError}},[a("div",{staticClass:"uploader-area",attrs:{slot:"uploader-area"},slot:"uploader-area"},[a("i",{staticClass:"iconfont icon-add"}),a("div",{staticClass:"sxq-uploader-text"},[a("em",[s._v("点击上传")])])]),a("div",{staticClass:"sxq-uploader-tip",attrs:{slot:"tip"},slot:"tip"},[s._v(" 只能上传jpg/png文件，小于800kb，不能超过五张 ")])])],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[s._v(s._s(s.code.main.html))]),a("code",{staticClass:"javascript"},[s._v(s._s(s.code.main.javascript))])])],2),a("code-view",{attrs:{title:"多文件上传",desc:"设置multiple属性，接受一个Boolean，设置true即可多选",height:"880"}},[a("template",{slot:"source"},[a("sxq-uploader",{attrs:{"on-success":s.uploadSuccess,"on-error":s.uploadError,multiple:""}},[a("div",{staticClass:"uploader-area",attrs:{slot:"uploader-area"},slot:"uploader-area"},[a("i",{staticClass:"iconfont icon-add"}),a("div",{staticClass:"sxq-uploader-text"},[a("em",[s._v("点击上传")])])]),a("div",{staticClass:"sxq-uploader-tip",attrs:{slot:"tip"},slot:"tip"},[s._v(" 只能上传jpg/png文件，小于500kb，不能超过三张 ")])])],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[s._v(s._s(s.code.multiple.html))]),a("code",{staticClass:"javascript"},[s._v(s._s(s.code.multiple.javascript))])])],2),a("code-view",{attrs:{title:"拖拽上传",height:"800"}},[a("template",{slot:"source"},[a("sxq-uploader",{attrs:{"on-success":s.uploadSuccess,"on-error":s.uploadError,multiple:""}},[a("div",{staticClass:"uploader-area",attrs:{slot:"uploader-area"},slot:"uploader-area"},[a("i",{staticClass:"iconfont icon-add"}),a("div",{staticClass:"sxq-uploader-text"},[a("div",{staticClass:"sxq-uploader-text"},[s._v(" 将文件拖到此处，或"),a("em",[s._v("点击上传")])])])]),a("div",{staticClass:"sxq-uploader-tip",attrs:{slot:"tip"},slot:"tip"},[s._v(" 只能上传jpg/png文件，小于500kb，不能超过三张 ")])])],1),a("template",{slot:"code"},[a("code",{staticClass:"html"},[s._v(s._s(s.code.drap.html))]),a("code",{staticClass:"javascript"},[s._v(s._s(s.code.drap.javascript))])])],2),a("attr-table",{attrs:{data:s.api}})],1)},l=[],o={name:"Uploader",data:function(){return{code:{main:{html:'\n    <sxq-uploader accept="image/png, image/jpeg" :size="800 * 1024" :limit="5" :on-success="uploadSuccess" :on-error="uploadError">\n        <div class="uploader-area" slot="uploader-area">\n            <i class="iconfont icon-add"></i>\n            <div class="sxq-uploader-text">\n              <em>点击上传</em>\n            </div>\n        </div>\n        <div class="sxq-uploader-tip" slot="tip">只能上传jpg/png文件，小于800kb，不能超过五张</div>\n    </sxq-uploader>\n            ',javascript:"    export default {\n      methods: {\n        uploadSuccess() {\n          this.$message({\n            type: 'success',\n            message: '上传图片成功'\n          })\n        },\n        uploadError(msg) {\n          this.$message({\n            type: 'error',\n            message: msg\n          })\n        }\n      }\n    } "},multiple:{html:'\n    <sxq-uploader :on-success="uploadSuccess" :on-error="uploadError" multiple>\n        <div class="uploader-area" slot="uploader-area">\n            <i class="iconfont icon-add"></i>\n            <div class="sxq-uploader-text">\n              <em>点击上传</em>\n            </div>\n        </div>\n        <div class="sxq-uploader-tip" slot="tip">只能上传jpg/png文件，小于500kb，不能超过三张</div>\n    </sxq-uploader>\n            ',javascript:"    export default {\n      methods: {\n        uploadSuccess() {\n          this.$message({\n            type: 'success',\n            message: '上传图片成功'\n          })\n        },\n        uploadError(msg) {\n          this.$message({\n            type: 'error',\n            message: msg\n          })\n        }\n      }\n    } "},drap:{html:'\n    <sxq-uploader :on-success="uploadSuccess" :on-error="uploadError" multiple>\n        <div class="uploader-area" slot="uploader-area">\n            <i class="iconfont icon-add"></i>\n            <div class="sxq-uploader-text">\n                <div class="sxq-uploader-text">将文件拖到此处，或<em>点击上传</em></div>\n            </div>\n        </div>\n        <div class="sxq-uploader-tip" slot="tip">只能上传jpg/png文件，小于500kb，不能超过三张</div>\n    </sxq-uploader>\n            ',javascript:"    export default {\n      methods: {\n        uploadSuccess() {\n          this.$message({\n            type: 'success',\n            message: '上传图片成功'\n          })\n        },\n        uploadError(msg) {\n          this.$message({\n            type: 'error',\n            message: msg\n          })\n        }\n      }\n    } "}},api:[{params:"multiple",desc:"是否支持多选文件",types:"boolean",value:"true / false",default:"false"},{params:"accept",desc:"接受上传的文件类型",types:"string",value:"",default:"image/png, image/jpeg"},{params:"limit",desc:"最大允许上传个数",types:"number",value:"",default:"3"},{params:"size",desc:"最大允许上传文件大小",types:"number",value:"",default:"500 * 1024"},{params:"on-success",desc:"文件上传成功时的钩子",types:"function",value:"",default:""},{params:"on-error",desc:"文件上传失败时的钩子",types:"function",value:"",default:""}]}},methods:{uploadSuccess:function(){this.$message({type:"success",message:"上传图片成功"})},uploadError:function(s){this.$message({type:"error",message:s})}}},r=o,i=a("2877"),p=Object(i["a"])(r,t,l,!1,null,"2017a8cb",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0aa794.bc5e9cdc.js.map