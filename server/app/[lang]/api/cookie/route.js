"use strict";(()=>{var e={};e.id=900,e.ids=[900],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4792:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>x,patchFetch:()=>g,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l});var o={};r.r(o),r.d(o,{GET:()=>p});var n=r(9303),a=r(8716),s=r(670),i=r(1615);async function p(){let e=(0,i.cookies)().get("token");return new Response(`Hello NexJS!: Token -> ${e&&e.value}`,{status:200,headers:{"Set-Cookie":`token=${e}`}})}let u=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/[lang]/api/cookie/route",pathname:"/[lang]/api/cookie",filename:"route",bundlePath:"app/[lang]/api/cookie/route"},resolvedPagePath:"/Users/benyamin/Desktop/Dev/Projects/React/quiz-app/src/app/[lang]/api/cookie/route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:d}=u,x="/[lang]/api/cookie/route";function g(){return(0,s.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:l})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[948,615],()=>r(4792));module.exports=o})();