
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as C}from"./index-7349637d.js";import{a as x}from"./config-076023d3.js";import{d as T,Q as q,r as h,x as R,h as l,o as j,c as E,e,f as t,a as s,l as N,E as y,q as w}from"./index-7a00c1dd.js";const Q={class:"flex justify-between"},F=s("b",null,"客户端显示设置",-1),I=s("div",{style:{width:"250px"}}," 用于应用菜单顶部的自定义语句、修改后将生效、不设置则使用默认的！ ",-1),O=s("div",{style:{width:"250px"}}," 用于应用菜单顶部的自定义背景图片地址、修改后将生效、不设置则使用默认的！ ",-1),A=T({__name:"visible",setup(K){const a=q({appMenuHeaderTips:null,appMenuHeaderBgUrl:null}),M=h({appMenuHeaderTips:[{required:!0,trigger:"blur",message:"填写应用市场的提示语"}],appMenuHeaderBgUrl:[{required:!0,trigger:"blur",message:"请填写应用市场头部背景图地址"}]}),c=h();async function u(){const n=await x.queryConfig({keys:["appMenuHeaderTips","appMenuHeaderBgUrl"]});Object.assign(a,n.data)}function v(){var n;(n=c.value)==null||n.validate(async o=>{if(o){try{await x.setConfig({settings:H(a)}),y.success("变更配置信息成功")}catch{}u()}else y.error("请填写完整信息")})}function H(n){return Object.keys(n).map(o=>({configKey:o,configVal:n[o]}))}return R(()=>{u()}),(n,o)=>{const i=l("el-alert"),V=C,U=l("el-button"),p=l("el-input"),d=l("QuestionFilled"),_=l("el-icon"),m=l("el-tooltip"),f=l("el-form-item"),g=l("el-col"),b=l("el-row"),k=l("el-form"),B=l("el-card");return j(),E("div",null,[e(V,null,{default:t(()=>[e(i,{closable:!1,"show-icon":"",title:"客户端UI设置",description:"对于用户端各个模块的显隐控制、具体显示部分参考提示！app",type:"success"})]),_:1}),e(B,{style:{margin:"20px"}},{header:t(()=>[s("div",Q,[F,e(U,{class:"button",text:"",onClick:v},{default:t(()=>[N(" 保存设置 ")]),_:1})])]),default:t(()=>[e(k,{ref_key:"formRef",ref:c,rules:M.value,model:a,"label-width":"150px"},{default:t(()=>[e(b,null,{default:t(()=>[e(g,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(f,{label:"应用菜单顶部提示语",prop:"maxRounds"},{default:t(()=>[e(p,{modelValue:a.appMenuHeaderTips,"onUpdate:modelValue":o[0]||(o[0]=r=>a.appMenuHeaderTips=r),placeholder:"请填写应用菜单顶部提示语",clearable:"",style:{width:"80%"}},null,8,["modelValue"]),e(m,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[I]),default:t(()=>[e(_,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(d)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(g,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(f,{label:"应用菜单顶部背景图",prop:"maxRounds"},{default:t(()=>[e(p,{modelValue:a.appMenuHeaderBgUrl,"onUpdate:modelValue":o[1]||(o[1]=r=>a.appMenuHeaderBgUrl=r),placeholder:"请填写应用菜单顶部背景图地址",clearable:"",style:{width:"80%"}},null,8,["modelValue"]),e(m,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[O]),default:t(()=>[e(_,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(d)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof w=="function"&&w(A);export{A as default};
