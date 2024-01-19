
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as v}from"./index-7349637d.js";import{a as O}from"./config-076023d3.js";import{d as w,Q as B,r as C,B as I,x as R,h as o,o as U,c as q,e,f as l,a as b,l as N,b as m,E as g,q as y}from"./index-7a00c1dd.js";const j={class:"flex justify-between"},E=b("b",null,"阿里云OSS参数设置",-1),M=w({__name:"ali",setup(Q){const t=B({aliOssStatus:"",aliOssAccessKeyId:"",aliOssAccessKeySecret:"",aliOssRegion:"",aliOssBucket:""}),_=C();async function f(){const n=await O.queryConfig({keys:["aliOssAccessKeySecret","aliOssRegion","aliOssBucket","aliOssAccessKeyId","aliOssStatus"]});Object.assign(t,n.data)}function x(){var n;(n=_.value)==null||n.validate(async s=>{if(s){try{await O.setConfig({settings:V(t)}),g.success("变更配置信息成功")}catch{}f()}else g.error("请填写完整信息")})}function V(n){return Object.keys(n).map(s=>({configKey:s,configVal:n[s]}))}const i=I(()=>[{required:Number(t.aliOssStatus)===1,message:"开启配置后请填写此项",trigger:"change"}]);return R(()=>{f()}),(n,s)=>{const p=o("el-alert"),S=v,K=o("el-button"),k=o("el-switch"),c=o("el-form-item"),u=o("el-col"),r=o("el-row"),d=o("el-input"),A=o("el-form"),h=o("el-card");return U(),q("div",null,[e(S,null,{default:l(()=>[e(p,{closable:!1,"show-icon":"",title:"阿里云COS参数说明",description:"阿里云的对象存储oss服务、前往阿里云申请oss服务 https://oss.console.aliyun.com/ 、如果同时开启多个存储服务、腾讯云高于阿里云优先级！",type:"success"})]),_:1}),e(h,{style:{margin:"20px"}},{header:l(()=>[b("div",j,[E,e(K,{class:"button",text:"",onClick:x},{default:l(()=>[N(" 保存设置 ")]),_:1})])]),default:l(()=>[e(A,{ref_key:"formRef",ref:_,model:t,"label-width":"120px"},{default:l(()=>[e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"服务启用状态",prop:"aliOssStatus"},{default:l(()=>[e(k,{modelValue:t.aliOssStatus,"onUpdate:modelValue":s[0]||(s[0]=a=>t.aliOssStatus=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"accessKeyId",prop:"aliOssAccessKeyId",rules:m(i)},{default:l(()=>[e(d,{modelValue:t.aliOssAccessKeyId,"onUpdate:modelValue":s[1]||(s[1]=a=>t.aliOssAccessKeyId=a),placeholder:"请填写SecretId",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"keySecret",prop:"aliOssAccessKeySecret",rules:m(i)},{default:l(()=>[e(d,{modelValue:t.aliOssAccessKeySecret,"onUpdate:modelValue":s[2]||(s[2]=a=>t.aliOssAccessKeySecret=a),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"存储桶名称",prop:"aliOssBucket",rules:m(i)},{default:l(()=>[e(d,{modelValue:t.aliOssBucket,"onUpdate:modelValue":s[3]||(s[3]=a=>t.aliOssBucket=a),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"所属地域",prop:"aliOssRegion",rules:m(i)},{default:l(()=>[e(d,{modelValue:t.aliOssRegion,"onUpdate:modelValue":s[4]||(s[4]=a=>t.aliOssRegion=a),placeholder:"请填写所属地域(oss-cn-shanghai)",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}});typeof y=="function"&&y(M);export{M as default};
