"use strict";(()=>{var e={};e.id=425,e.ids=[425],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7440:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>l,patchFetch:()=>m,requestAsyncStorage:()=>u,routeModule:()=>i,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var s={};o.r(s),o.d(s,{GET:()=>p});var r=o(9303),a=o(8716),n=o(670);async function p(){let e=await fetch("https://dummyjson.com/posts",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await e.json();return console.log(t),Response.json({data:t})}let i=new r.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/[lang]/api/posts/route",pathname:"/[lang]/api/posts",filename:"route",bundlePath:"app/[lang]/api/posts/route"},resolvedPagePath:"/Users/benyamin/Desktop/Dev/Projects/React/quiz-app/src/app/[lang]/api/posts/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:c}=i,l="/[lang]/api/posts/route";function m(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}},9303:(e,t,o)=>{e.exports=o(517)}};var t=require("../../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),s=t.X(0,[948],()=>o(7440));module.exports=s})();