
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as ce}from"./index-7349637d.js";import{A as E}from"./models-4e9e5642.js";import{u as ye}from"./utcformatTime-e76e5157.js";import{f as fe,g as _e,h as W,M as ke,b as ge,i as be,j as we}from"./index-d342e869.js";import{d as Te,r as w,Q as j,B as I,x as ve,h as s,R as Ve,o as r,c as N,e,f as t,S as M,U as R,b as m,l as i,a as k,w as X,I as f,t as _,J as A,V as xe,E as G,X as he,q as H}from"./index-7a00c1dd.js";const Ue={style:{float:"right"}},De=k("div",{style:{width:"250px"}}," 账号启用状态、一旦锁定当前key将停止工作！ ",-1),Ne=k("div",{style:{width:"250px"}}," 不同模型的设置不同、例如openai仅设置key即可、如果是百度大模型、则填写clientId以及同时需要填写secret。对于OPENAI模型、我们支持批量导入、如果您需要批量导入key、则一行一个key即可、多个key使用换行隔离、其余配置将共享、多个key可以重复选用默认模型。 ",-1),Me=k("div",{style:{width:"250px"}}," 不同账号填写的内容不同、但是都代表的是Secret秘钥 ",-1),Re=k("div",{style:{width:"250px"}}," 给定了部分可选的模型列表、你可以可以手动填写您需要调用的模型、请确保填写的模型是当前key支持的类型、否则可能会在调用中出现不可预知错误！ ",-1),Se=k("div",{style:{width:"250px"}}," 设置当前key的扣费类型、扣除普通余额或是高级余额。 ",-1),Ce=k("div",{style:{width:"250px"}}," 设置当前key的单词调用扣除余额、建议同模型或名称key设置相同的金额、避免扣费发生异常！ ",-1),Le=k("div",{style:{width:"250px"}}," 填写此配置可以限制用户在选择模型时候的高级配置中的最大上下文轮次、可以通过限制此数量减少token的损耗、减低上下文的损耗量、 如果设置了模型的最大token和返回量、那么两个限制会同时生效！ ",-1),Ie=k("div",{style:{width:"250px"}}," 当前轮询是根据模型下的列表按顺序调用、如果权重为2则表示轮到此key的时候会调用两次之后再轮询下一个key 保证每个key的调用顺序以及限制每次调用的准确次数 ",-1),Ae=k("div",{style:{width:"250px"}}," 基础绘画来自于OPENAI的DALL-E模型、所以需要为官方的apiKey、请确定至少设置一张key为基础绘画key即可使用绘画功能！同时当前版本的mind思维导图和mj联想绘图等功能都会走当前设置的key，会后后续版本解除此限制！ ",-1),Oe={class:"flex justify-end mr-5"},Pe=Te({__name:"index",setup(qe){w();const B=w(),Y=w(0),h=w(!1),C=w(!1),Z=w(!1);w(!1);const c=j({keyType:"",model:"",status:null,page:1,size:10}),O=w(),U=w(0),o=j({keyType:1,modelName:"",status:!0,model:"",temperature:"",deduct:1,deductType:1,order:100,maxTokens:4096,maxResponseTokens:2048,maxRounds:12,isDallE3:!1,isUseTool:!1}),ee=j({keyType:[{required:!0,message:"请填写您的调用模型类型",trigger:"blur"}],modelName:[{required:!0,message:"请填写您的模型名称",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],temperature:[{required:!0,message:"请设置模型默认温度",trigger:"change"}],maxTokens:[{required:!0,message:"请填写模型允许的最大token数",trigger:"blur"}],maxResponseTokens:[{required:!0,message:"请填写允许用户使用的最大回复token数",trigger:"blur"}],deductType:[{required:!0,message:"请选择当前模型扣费类型",trigger:"change"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],maxRounds:[{required:!0,message:"请填写允许用户选择的最大上下文轮次",trigger:"blur"}]});function le(n){U.value=0,n==null||n.resetFields()}const te=I(()=>fe[o.keyType]),ae=I(()=>U.value?"更新秘钥":"新增秘钥"),oe=I(()=>_e[o.keyType]),de=I(()=>U.value?"确认更新":"确认新增"),F=w([]);async function D(){try{C.value=!0;const n=await E.queryModels(c);C.value=!1;const{rows:a,count:p}=n.data;Y.value=p,F.value=a}catch{C.value=!1}}async function ne(n){const{id:a}=n;await E.delModels({id:a}),G({type:"success",message:"操作完成！"}),D()}function se(n){U.value=n.id;const{keyType:a,modelName:p,key:T,secret:d,status:g,model:P,keyWeight:y,maxTokens:L,maxResponseTokens:S,proxyUrl:q,timeout:v,deductType:u,deduct:z,maxRounds:K,isDraw:$}=n;he(()=>{Object.assign(o,{keyType:a,modelName:p,key:T,secret:d,status:g,model:P,keyWeight:y,maxTokens:L,maxResponseTokens:S,proxyUrl:q,timeout:v,deductType:u,deduct:z,maxRounds:K,isDraw:$})}),h.value=!0}function re(n){n==null||n.resetFields(),D()}async function ue(n){n==null||n.validate(async a=>{if(a){const p=JSON.parse(JSON.stringify(o));if(delete p.id,U.value&&(p.id=U.value),Number(o.keyType)===1){const d=JSON.parse(JSON.stringify(o.key)).split(`
`);p.key=d}await E.setModels(p),G({type:"success",message:"操作成功！"}),U.value=0,h.value=!1,D()}})}return ve(()=>{D()}),(n,a)=>{const p=s("el-option"),T=s("el-select"),d=s("el-form-item"),g=s("el-button"),P=s("Plus"),y=s("el-icon"),L=s("el-form"),S=ce,q=s("el-alert"),v=s("el-tag"),u=s("el-table-column"),z=s("el-popconfirm"),K=s("el-table"),$=s("el-pagination"),ie=s("el-row"),J=s("el-switch"),V=s("QuestionFilled"),x=s("el-tooltip"),b=s("el-input"),pe=s("el-dialog"),Q=Ve("loading");return r(),N("div",null,[e(S,null,{default:t(()=>[e(L,{ref_key:"formRef",ref:B,inline:!0,model:c},{default:t(()=>[e(d,{label:"模型类别",prop:"model"},{default:t(()=>[e(T,{modelValue:c.keyType,"onUpdate:modelValue":a[0]||(a[0]=l=>c.keyType=l),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:""},{default:t(()=>[(r(!0),N(M,null,R(m(W),l=>(r(),f(p,{key:l,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"模型名称",prop:"model"},{default:t(()=>[e(T,{modelValue:c.model,"onUpdate:modelValue":a[1]||(a[1]=l=>c.model=l),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:""},{default:t(()=>[(r(!0),N(M,null,R(m(ke),l=>(r(),f(p,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"启用状态",prop:"status"},{default:t(()=>[e(T,{modelValue:c.status,"onUpdate:modelValue":a[2]||(a[2]=l=>c.status=l),placeholder:"请选择模型启用状态",clearable:""},{default:t(()=>[(r(!0),N(M,null,R(m(ge),l=>(r(),f(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[e(g,{type:"primary",onClick:D},{default:t(()=>[i(" 查询 ")]),_:1}),e(g,{onClick:a[3]||(a[3]=l=>re(m(B)))},{default:t(()=>[i(" 重置 ")]),_:1})]),_:1}),k("span",Ue,[e(g,{type:"success",onClick:a[4]||(a[4]=l=>h.value=!0)},{default:t(()=>[i(" 添加模型 "),e(y,{class:"ml-3"},{default:t(()=>[e(P)]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1}),e(S,null,{default:t(()=>[e(q,{"show-icon":"",title:"模型说明",description:"所有开启的模型将会直接应用到客户端供用户选择使用、请注意在添加模型时候如果您需要使用DALL-E绘画你需要特别指定模型为绘画时候、同时例如思维导图、应用、翻译、联想等功能【目前绑定为OPENAI类目】请在添加模型的时候勾选上设置为工具Key、届时调用此类功能将使用我们指定的模型！",type:"success"})]),_:1}),e(S,{style:{width:"100%"}},{default:t(()=>[X((r(),f(K,{border:"",data:m(F),style:{width:"100%"},size:"large"},{default:t(()=>[e(u,{prop:"keyType",label:"模型类型",width:"120"},{default:t(l=>[e(v,{type:"success"},{default:t(()=>[i(_(m(be)[l.row.keyType]),1)]),_:2},1024)]),_:1}),e(u,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:t(l=>[e(v,{type:l.row.status?"success":"danger"},{default:t(()=>[i(_(l.row.status?"使用中":"已暂停"),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"modelName",label:"自定义模型名称"}),e(u,{prop:"model",align:"center",label:"指定模型"},{default:t(l=>[e(v,{type:l.row.model.includes("gpt-4")?"success":""},{default:t(()=>[i(_(l.row.model),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"isDraw",align:"center",label:"绑定DALL-E",width:"120"},{default:t(l=>[e(v,{type:l.row.isDraw?"success":"danger"},{default:t(()=>[i(_(l.row.isDraw?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"isDraw",align:"center",label:"绑定通用功能",width:"120"},{default:t(l=>[e(v,{type:l.row.isDraw?"success":"danger"},{default:t(()=>[i(_(l.row.isUseTool?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"deductType",align:"center",label:"扣费类型",width:"120"},{default:t(l=>[e(v,{type:l.row.deductType===1?"":"error"},{default:t(()=>[i(_(l.row.deductType===1?"普通余额":"高级余额"),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"deduct",align:"center",label:"单次扣除",width:"100"},{default:t(l=>[e(v,{type:l.row.deductType===1?"success":"warning"},{default:t(()=>[i(_(`${l.row.deduct} 积分`),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"temperature",align:"center",label:"默认温度",width:"100"},{default:t(l=>[i(_(l.row.temperature||"---"),1)]),_:1}),e(u,{prop:"order",align:"center",label:"排序ID",width:"90"}),e(u,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),e(u,{prop:"useToken",align:"center",label:"调用Token",width:"120"}),e(u,{prop:"maxResponseTokens",align:"center",label:"限制最大回复",width:"160"},{default:t(l=>[e(g,{type:"info",text:""},{default:t(()=>[i(_(l.row.maxResponseTokens||"-"),1)]),_:2},1024)]),_:1}),e(u,{prop:"maxRounds",align:"center",label:"限制上下文轮次",width:"160"},{default:t(l=>[i(_(l.row.maxRounds||"-"),1)]),_:1}),e(u,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:t(l=>[i(_(m(ye)(l.row.createdAt,"YYYY-MM-DD")),1)]),_:1}),e(u,{fixed:"right",label:"操作",width:"200"},{default:t(l=>[e(g,{link:"",type:"primary",size:"small",onClick:me=>se(l.row)},{default:t(()=>[i(" 变更 ")]),_:2},1032,["onClick"]),e(z,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:me=>ne(l.row)},{reference:t(()=>[e(g,{link:"",type:"danger",size:"small"},{default:t(()=>[i(" 删除秘钥 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[Q,m(C)]]),e(ie,{class:"flex justify-end mt-5"},{default:t(()=>[e($,{"current-page":c.page,"onUpdate:currentPage":a[5]||(a[5]=l=>c.page=l),"page-size":c.size,"onUpdate:pageSize":a[6]||(a[6]=l=>c.size=l),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:m(Y),onSizeChange:D,onCurrentChange:D},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(pe,{modelValue:m(h),"onUpdate:modelValue":a[24]||(a[24]=l=>xe(h)?h.value=l:null),"close-on-click-modal":!1,title:ae.value,width:"770",onClose:a[25]||(a[25]=l=>le(m(O)))},{footer:t(()=>[k("span",Oe,[e(g,{onClick:a[22]||(a[22]=l=>h.value=!1)},{default:t(()=>[i("取消")]),_:1}),e(g,{type:"primary",onClick:a[23]||(a[23]=l=>ue(m(O)))},{default:t(()=>[i(_(de.value),1)]),_:1})])]),default:t(()=>[X((r(),f(L,{ref_key:"formPackageRef",ref:O,"label-position":"right","label-width":"120px",model:o,rules:ee},{default:t(()=>[e(d,{label:"模型类型选择",prop:"keyType"},{default:t(()=>[e(T,{modelValue:o.keyType,"onUpdate:modelValue":a[7]||(a[7]=l=>o.keyType=l),placeholder:"请选择模型类型",style:{width:"100%"}},{default:t(()=>[(r(!0),N(M,null,R(m(W),l=>(r(),f(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"模型启用状态",prop:"status"},{default:t(()=>[e(J,{modelValue:o.status,"onUpdate:modelValue":a[8]||(a[8]=l=>o.status=l)},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[De]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1}),e(d,{label:"模型中文名称",prop:"modelName"},{default:t(()=>[e(b,{modelValue:o.modelName,"onUpdate:modelValue":a[9]||(a[9]=l=>o.modelName=l),placeholder:"请填写模型中文名称（用户选择的）"},null,8,["modelValue"])]),_:1}),e(d,{label:oe.value,prop:"key"},{default:t(()=>[e(b,{modelValue:o.key,"onUpdate:modelValue":a[10]||(a[10]=l=>o.key=l),type:Number(o.keyType)===1?"textarea":"text",rows:5,placeholder:"请填写模型Key|clientId|AppId",style:{width:"95%"}},null,8,["modelValue","type"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ne]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1},8,["label"]),[2].includes(Number(o.keyType))?(r(),f(d,{key:0,label:"SecretKey",prop:"secret"},{default:t(()=>[e(b,{modelValue:o.secret,"onUpdate:modelValue":a[11]||(a[11]=l=>o.secret=l),placeholder:"请填写模型调用所需的Secret[部分类型模型需要]",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Me]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1})):A("",!0),e(d,{label:"账号关联模型",prop:"model"},{default:t(()=>[e(T,{modelValue:o.model,"onUpdate:modelValue":a[12]||(a[12]=l=>o.model=l),filterable:"",clearable:"",placeholder:"请选用或填写绑定的模型","allow-create":Number(o.keyType)===1,style:{width:"80%"}},{default:t(()=>[(r(!0),N(M,null,R(te.value,l=>(r(),f(p,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue","allow-create"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Re]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1}),e(d,{label:"模型扣费类型",prop:"deductType"},{default:t(()=>[e(T,{modelValue:o.deductType,"onUpdate:modelValue":a[13]||(a[13]=l=>o.deductType=l),filterable:"","allow-create":"",clearable:"",placeholder:"请选用模型扣费类型",style:{width:"80%"}},{default:t(()=>[(r(!0),N(M,null,R(m(we),l=>(r(),f(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Se]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1}),e(d,{label:"单词扣除金额",prop:"deduct"},{default:t(()=>[e(b,{modelValue:o.deduct,"onUpdate:modelValue":a[14]||(a[14]=l=>o.deduct=l),modelModifiers:{number:!0},placeholder:"请填写单词调用此key的扣费金额！",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ce]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1}),e(d,{label:"上下文限制",prop:"maxRounds"},{default:t(()=>[e(b,{modelValue:o.maxRounds,"onUpdate:modelValue":a[15]||(a[15]=l=>o.maxRounds=l),modelModifiers:{number:!0},placeholder:"请填写允许用户选择的最高上下文轮次！",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Le]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1}),e(d,{label:"调用轮询权重",prop:"keyWeight"},{default:t(()=>[e(b,{modelValue:o.keyWeight,"onUpdate:modelValue":a[16]||(a[16]=l=>o.keyWeight=l),modelModifiers:{number:!0},placeholder:"请填写key的权重、数字越大使用评率越高！",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ie]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1}),e(d,{label:"模型最大Token",prop:"maxTokens"},{default:t(()=>[e(b,{modelValue:o.maxTokens,"onUpdate:modelValue":a[17]||(a[17]=l=>o.maxTokens=l),modelModifiers:{number:!0},placeholder:"请填写模型最大Token、不填写默认使用默认！"},null,8,["modelValue"])]),_:1}),e(d,{label:"最大回复Token",prop:"maxResponseTokens"},{default:t(()=>[e(b,{modelValue:o.maxResponseTokens,"onUpdate:modelValue":a[18]||(a[18]=l=>o.maxResponseTokens=l),modelModifiers:{number:!0},placeholder:"请填写最大回复Token、不填写使用默认！"},null,8,["modelValue"])]),_:1}),[1].includes(Number(o.keyType))?(r(),f(d,{key:1,label:"调用超时时间",prop:"timeout"},{default:t(()=>[e(b,{modelValue:o.timeout,"onUpdate:modelValue":a[19]||(a[19]=l=>o.timeout=l),modelModifiers:{number:!0},placeholder:"请填写key的超时时间单位（秒）！"},null,8,["modelValue"])]),_:1})):A("",!0),[1].includes(Number(o.keyType))?(r(),f(d,{key:2,label:"设为特殊key",prop:"isDraw"},{default:t(()=>[e(J,{modelValue:o.isDraw,"onUpdate:modelValue":a[20]||(a[20]=l=>o.isDraw=l)},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ae]),default:t(()=>[e(y,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(V)]),_:1})]),_:1})]),_:1})):A("",!0),[1].includes(Number(o.keyType))?(r(),f(d,{key:3,label:"指定代理地址",prop:"proxyUrl"},{default:t(()=>[e(b,{modelValue:o.proxyUrl,"onUpdate:modelValue":a[21]||(a[21]=l=>o.proxyUrl=l),modelModifiers:{number:!0},placeholder:"如需使用代理请填写、不填写默认使用全局配置！"},null,8,["modelValue"])]),_:1})):A("",!0)]),_:1},8,["model","rules"])),[[Q,m(Z)]])]),_:1},8,["modelValue","title"])])}}});typeof H=="function"&&H(Pe);export{Pe as default};
