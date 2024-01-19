
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as v}from"./index-7349637d.js";import{a as _}from"./config-076023d3.js";import{d as P,Q as j,r as p,x as q,h as n,o as B,c as E,e,f as t,a as b,l as M,E as g,q as x}from"./index-7a00c1dd.js";const N={class:"flex justify-between"},U=b("b",null,"思维导图设置",-1),O=P({__name:"mind",setup(R){const a=j({mindDefaultData:"",mindCustomPrompt:""}),y=p({}),r=p();async function m(){const l=await _.queryConfig({keys:["mindDefaultData","mindCustomPrompt"]});Object.assign(a,l.data)}function C(){var l;(l=r.value)==null||l.validate(async o=>{if(o){try{await _.setConfig({settings:w(a)}),g.success("变更配置信息成功")}catch{}m()}else g.error("请填写完整信息")})}function w(l){return Object.keys(l).map(o=>({configKey:o,configVal:l[o]}))}return q(()=>{m()}),(l,o)=>{const c=n("el-alert"),D=v,V=n("el-button"),u=n("el-input"),d=n("el-form-item"),i=n("el-col"),f=n("el-row"),h=n("el-form"),k=n("el-card");return B(),E("div",null,[e(D,null,{default:t(()=>[e(c,{closable:!1,"show-icon":"",title:"系统基础设置配置说明",description:"默认配置数据会在页面加载后初次展示给用户、预设信息系统有内置提示词、如果您想覆盖掉他、则在此处设置您的专属提示词！",type:"success"})]),_:1}),e(k,{style:{margin:"20px"}},{header:t(()=>[b("div",N,[U,e(V,{class:"button",text:"",onClick:C},{default:t(()=>[M(" 保存设置 ")]),_:1})])]),default:t(()=>[e(h,{ref_key:"formRef",ref:r,rules:y.value,model:a,"label-width":"150px"},{default:t(()=>[e(f,null,{default:t(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(d,{label:"思维导图默认数据",prop:"mindDefaultData"},{default:t(()=>[e(u,{modelValue:a.mindDefaultData,"onUpdate:modelValue":o[0]||(o[0]=s=>a.mindDefaultData=s),type:"textarea",rows:10,placeholder:"思维导图的默认展示数据Markdown格式",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(d,{label:"导图自定义提示词",prop:"mindCustomPrompt"},{default:t(()=>[e(u,{modelValue:a.mindCustomPrompt,"onUpdate:modelValue":o[1]||(o[1]=s=>a.mindCustomPrompt=s),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof x=="function"&&x(O);export{O as default};
