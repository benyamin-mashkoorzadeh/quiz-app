"use strict";exports.id=710,exports.ids=[710],exports.modules={7710:(e,t,i)=>{i.d(t,{default:()=>o.a});var r=i(6794),o=i.n(r)},221:(e,t,i)=>{let{createProxy:r}=i(8570);e.exports=r("/Users/benyamin/Desktop/Dev/Projects/React/quiz-app/node_modules/next/dist/client/image-component.js")},9241:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(6501);let r=i(5728),o=i(9472);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:g=!1,loading:m,className:p,quality:h,width:b,height:v,fill:w=!1,style:y,overrideSrc:j,onLoad:x,onLoadingComplete:S,placeholder:_="empty",blurDataURL:P,fetchPriority:z,layout:C,objectFit:O,objectPosition:E,lazyBoundary:I,lazyRoot:M,...R}=e,{imgConf:D,showAltText:k,blurComplete:A,defaultLoader:F}=t,G=D||o.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}if(void 0===F)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=R.loader||F;delete R.loader,delete R.srcSet;let B="__next_img_default"in N;if(B){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:i,...r}=t;return e(r)}}if(C){"fill"===C&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let L="",W=s(b),U=s(v);if("object"==typeof(i=u)&&(n(i)||void 0!==i.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,L=e.src,!w){if(W||U){if(W&&!U){let t=W/e.width;U=Math.round(e.height*t)}else if(!W&&U){let t=U/e.height;W=Math.round(e.width*t)}}else W=e.width,U=e.height}}let V=!g&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:L)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,V=!1),a.unoptimized&&(f=!0),B&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),g&&(z="high");let q=s(h),T=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},k?{}:{color:"transparent"},y),J=A||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:W,heightInt:U,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:T.objectFit})+'")':'url("'+_+'")',Y=J?{backgroundSize:T.objectFit||"cover",backgroundPosition:T.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},H=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:s,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:n,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:a({config:t,src:i,quality:n,width:l[u]})}}({config:a,src:u,unoptimized:f,width:W,quality:q,sizes:c,loader:N});return{props:{...R,loading:V?"lazy":m,fetchPriority:z,width:W,height:U,decoding:"async",className:p,style:{...T,...Y},sizes:H.sizes,srcSet:H.srcSet,src:j||H.src},meta:{unoptimized:f,priority:g,placeholder:_,fill:w}}}},5728:(e,t)=>{function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:s}=e,a=r?40*r:t,l=o?40*o:i,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},9472:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6794:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return a}});let r=i(3370),o=i(9241),n=i(221),s=r._(i(2049));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=n.Image},2049:(e,t)=>{function i(e){let{config:t,src:i,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},6501:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}}};