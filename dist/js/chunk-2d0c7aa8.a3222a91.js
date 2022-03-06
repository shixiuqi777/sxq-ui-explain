(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7aa8"],{"521f":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("MessageBox 弹框")]),s("p",{staticClass:"title-text"},[e._v(" 模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容 ")]),s("code-view",{attrs:{title:"消息提示",subtitle:"当进行操作时会被触发，该对话框中断操作，直到确认后才可关闭",desc:"调用$alert方法即可打开消息提示，它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，message和title",height:"520"}},[s("template",{slot:"source"},[s("sxq-button",{on:{click:e.open}},[e._v("点击打开 MessageBox")])],1),s("template",{slot:"code"},[s("code",{staticClass:"html"},[e._v(e._s(e.code.main.html))]),s("code",{staticClass:"javascript"},[e._v(e._s(e.code.main.javascript))])])],2),s("code-view",{attrs:{title:"确认消息",subtitle:"提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框",desc:"调用$confirm方法即可打开消息提示",height:"735"}},[s("template",{slot:"source"},[s("sxq-button",{on:{click:e.open1}},[e._v("点击打开 MessageBox")])],1),s("template",{slot:"code"},[s("code",{staticClass:"html"},[e._v(e._s(e.code.confirm.html))]),s("code",{staticClass:"javascript"},[e._v(e._s(e.code.confirm.javascript))])])],2),s("attr-table",{attrs:{data:e.api}})],1)},a=[],o={name:"MessageBox",data:function(){return{code:{main:{html:'    <sxq-button @click="open">点击打开 MessageBox</sxq-button>',javascript:"    export default {\n      methods: {\n        open() {\n          this.$alert({\n            title: '标题名称',\n            content: '这是一段内容',\n            onOk: () => {\n              this.$message()\n            }\n          })\n        }\n      }\n    } "},confirm:{html:'    <sxq-button @click="open">点击打开 MessageBox</sxq-button>',javascript:"    export default {\n      methods: {\n        open() {\n          this.$confirm({\n            title: '提示',\n            content: '此操作将永久删除该文件, 是否继续?',\n            onOk: () => {\n              this.$message({\n                message: '删除成功！',\n                type: 'success'\n              })\n            },\n            onCancel: () => {\n              this.$message({\n                message: '已取消删除'\n              })\n            }\n          })\n        }\n      }\n    } "}},api:[{params:"title",desc:"MessageBox 标题",types:"string",value:"",default:"标题名称"},{params:"content",desc:"MessageBox 消息正文内容",types:"string",value:"",default:"这是一段内容"},{params:"onOk",desc:"MessageBox点击确定的回调",types:"function",value:"",default:""},{params:"onCancel",desc:"MessageBox点击取消的回调",types:"function",value:"",default:""},{params:"type",desc:"MessageBox的方式",types:"string",value:"confirm / alert",default:"confirm"}]}},methods:{open:function(){var e=this;this.$alert({title:"标题名称",content:"这是一段内容",onOk:function(){e.$message()}})},open1:function(){var e=this;this.$confirm({title:"提示",content:"此操作将永久删除该文件, 是否继续?",onOk:function(){e.$message({message:"删除成功！",type:"success"})},onCancel:function(){e.$message({message:"已取消删除"})}})}}},c=o,i=s("2877"),l=Object(i["a"])(c,n,a,!1,null,"416e7388",null);t["default"]=l.exports}}]);