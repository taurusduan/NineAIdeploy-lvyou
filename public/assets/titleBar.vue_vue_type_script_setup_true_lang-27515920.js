import{d as i,o as p,c as f,a as t,m as x,b as m,I as _,f as c,w as v,u as s,h as w,q as a,t as d}from"./index-c84c64f4.js";const h={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},k=t("path",{d:"M30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53z",fill:"currentColor"},null,-1),b=[k],g=i({name:"PlayBack",render:function(e,r){return p(),f("svg",h,b)}}),B={class:"pt-1 mr-2 cursor-pointer"},z=i({__name:"titleBar",props:{title:{default:""},des:{default:""},padding:{default:4}},setup(o){const e=o,r=x(),n=m(()=>r.theme==="dark"),u=_();return(y,l)=>(p(),f("div",{class:a(["flex border-b border-[#ebebeb] dark:border-[#ffffff17] py-4 w-full",[`px-${e.padding}`]])},[t("div",B,[c(s(w),{size:"16",class:"text-primary",onClick:l[0]||(l[0]=C=>s(u).push("/"))},{default:v(()=>[c(s(g))]),_:1})]),t("div",null,[t("b",{class:a([[n.value?"text-[#fff]":"text-[#555]"],"text-lg"])},d(e.title),3),t("div",{class:a([[n.value?"text-[#fff]":"text-[#626569]"],"text-truncate text-[#626569] mt-1"])},d(e.des),3)])],2))}});export{z as _};