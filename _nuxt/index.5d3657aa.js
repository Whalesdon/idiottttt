import{d as k,p as D,aN as z,o as s,c as A,w as b,b as o,F as v,g as w,h as _,u,R as $,aJ as H,x as V,I as T,t as f,E as F,a as e,C as U,aL as ee,bx as J,L as E,q as I,y as M,c1 as G,B as te,J as L,N as Q,O as Y,P as q,S as se,bi as ae,Q as oe,c2 as ne,_ as le}from"./entry.ce650135.js";import{_ as re}from"./Avatar.013398e0.js";import{S as X,f as K}from"./pagination.5230790e.js";import{c as ie}from"./clone.29a1ea51.js";import{_ as ce}from"./MediaLinks.vue.a0cbb7e8.js";import"./_Uint8Array.05303a70.js";import"./_MapCache.6f623674.js";import"./discord.c5ced3e8.js";import"./telegram.bcd4326b.js";import"./twitter.daab0505.js";const pe=["onClick"],de={key:0,class:"text-white text-2xl font-bold"},_e={key:1,class:"flex gap-4 items-center"},me={class:"flex-col text-standard"},ge={class:"font-semibold text-white"},ue=2500,fe=k({__name:"BannerSwiper",setup(m){const c=D(),l=D(1),p=D(),a=n=>{c.value=n,h()},r=(n,y)=>{if(n===l.value-1){J(`/artwork/${y}`);return}g(n),clearInterval(p.value),h()},g=n=>{var P;const y=n===(d==null?void 0:d.length)?1:n+1;(P=c.value)==null||P.slideTo(y,300),l.value=y},h=()=>{p.value=setInterval(()=>{g(l.value)},ue)};z(()=>{var n;c.value&&((n=c.value)==null||n.destroy()),clearInterval(p.value)});const d=[{id:"ZAN8vW6LOwXqm0pYN0rGn2kVj37gKxl4",prompt:"Fierce pirate with an eye ...",banner:"https://assets.nfprompt.io/image/D4kBygv1M8l9JRWVQkdOE27azPX3VNwQ.png",creator:{account_type:1,address:"0xFc748638c6D82E7DF99884E0808C7dEfB2e53166",avatar:"",discord_roles:[],followed:!1,is_kol:!1,is_vote_campaign_whitelist_user:!1,nickname:"",status:0}},{id:"zEbXeojG8nO56Jd2OgRBDMKavAPNmkg0",prompt:"Beautiful, serene village in Europe, ...",banner:"https://assets.nfprompt.io/image/nZDwGO2BK6v9NdVmqGrbWaxzjX1V3Lqy.png",creator:{account_type:1,address:"0x61051D5641fa4B3cE50fC9BC38609ecC256B5766",avatar:"",discord_roles:[],followed:!1,is_kol:!1,is_vote_campaign_whitelist_user:!1,nickname:"",status:0}},{id:"Bx1e4VOEmKD82nd3zZrzvljWbaXqAPYM",prompt:"Dreamy mermaid with a seashell ...",banner:"https://assets.nfprompt.io/image/m1jMNg82GoqWnrm9qNrXPVlBw7D59Q36.png",creator:{account_type:1,address:"0x2F5c3C5f387FFbb86039F139AD96BE534765ed7b",avatar:"",discord_roles:[],followed:!1,is_kol:!1,is_vote_campaign_whitelist_user:!1,nickname:"",status:0}},{id:"KxoMVBGzqEaDPde2VVmR1OgLAQ2Nkenv",prompt:"Halloween night, adorned with eerie ...",banner:"https://assets.nfprompt.io/sticker/KxoMVBGzqEaDPde2VVmR1OgLAQ2Nkenv-bkyOPN56FwMvs9Eb.png",creator:{account_type:1,address:"0x0885f0AD14ae8756470Ca039461125d2D7C4cE05",avatar:"https://assets.nfprompt.io/fileupload/91a4daa3-3001-4130-a6e0-405478ae9b40/aZeWB9YGxKAvDpjP37edoj4QOkmX85wE.webp",discord_roles:["promphet"],is_kol:!1,is_vote_campaign_whitelist_user:!1,nickname:"",status:0}},{id:"D4kBygv1M8l9JRWPvxjpOE27azPX3VNw",prompt:"bitcoin ...",banner:"https://assets.nfprompt.io/image/Dnmv061VXQKkJd5kOy9pYPjqlaNxzo92.png",creator:{account_type:1,address:"0x01FD5B7d88d2c9F947E52E23BE871719cd99bD42",avatar:"https://assets.nfprompt.io/fileupload/bf7c4621-341c-4702-a5ae-bf51661b05ef/nZDwGO2BK6v9NdV0wwnpbWaxzjX1V3Lq.webp",discord_roles:[],followed:!1,is_kol:!1,is_vote_campaign_whitelist_user:!1,nickname:"MoonFighterrr",status:0}},{id:"avOQXJDGo7lYLpQVZzxr3q8Wjx1E4wM2",prompt:"Greenfield Robot, yellow body, fly ...",banner:"https://assets.nfprompt.io/sticker/avOQXJDGo7lYLpQVZzxr3q8Wjx1E4wM2-BnElIcIzLdP4OoQ9.png",creator:{account_type:1,address:"0xD32E2CcA3f54c71FA2DA4340Bb9865FD8E811d65",avatar:"",discord_roles:[],followed:!1,is_kol:!1,is_vote_campaign_whitelist_user:!1,nickname:"",status:0}},{id:"ZjW6N3BGqyanQRJDJGDrM45JVb9o72zw",prompt:"Dragon Ball: Iconic anime sphere, ...",banner:"https://assets.nfprompt.io/image/D3Moeyq0YQEP4rNbDONrkam5OxBNbLJl.png",creator:{account_type:1,address:"0xB30ABf09d619873481e0Ffad0890Aa7FE2eD8d13",avatar:"",discord_roles:[],followed:!1,is_kol:!1,is_vote_campaign_whitelist_user:!1,nickname:"",status:0}},{id:"DQaAxLvjlXPM4RMXQGKdo0zN9JV7B53m",prompt:"Elon Musk, beautiful, cool, highly ...",banner:"https://assets.nfprompt.io/image/oQaJmNYLqDgXyr8m989delGk1Vj0ZKn9.png",creator:{account_type:1,address:"0x34fc3CA59a7cc3211b8448dcA34815C86AeAD535",avatar:"https://assets.nfprompt.io/image/ZO37bNmgGYkyBdAwN9Vpv5nMzAQxJ90o.png",discord_roles:[],followed:!1,is_kol:!1,is_vote_campaign_whitelist_user:!1,nickname:"",status:0}},{}];return(n,y)=>{const P=re,i=E;return s(),A(u(K),{class:"max-w-full swiperBanner w-320px md:w-auto",onSwiper:a,setWrapperSize:!0,centeredSlides:!0,allowTouchMove:!1,initialSlide:1,breakpoints:{300:{slidesPerView:1,spaceBetween:80},768:{slidesPerView:3,spaceBetween:-184}}},{default:b(()=>[(s(),o(v,null,w(d,(t,x)=>_(u(X),{centeredSlides:!0,class:$(["!w-320px flex-shrink-0 px-2",{"z-30":x===u(l)-1,"z-20":x===u(l),"z-10":x===u(l)+1}])},{default:b(({isActive:N,isPrev:B,isNext:S})=>{var j,O,W;return[t!=null&&t.id?H((s(),o("div",{key:0,onClick:C=>r(x,t.id),class:$(["cursor-pointer w-320px h-420px p-5 pr-100px flex-col justify-end gap-4 rounded-xl rounded-tl-140px rounded-br-140px overflow-hidden shadow",{"scale-95 mt-2":N,"scale-90 mt-4":S}]),style:V({background:`${B?"linear-gradient(180deg, rgba(65, 96, 255, 0) 0%, rgba(65, 96, 255) 100%),":""} url(${("ImageCDNFeedWrap"in n?n.ImageCDNFeedWrap:u(T))(t.banner)}) center center / cover no-repeat`})},[B?(s(),o("h1",de,f(t.prompt),1)):F("",!0),B?(s(),o("div",_e,[_(i,{to:`/profile/${(j=t==null?void 0:t.creator)==null?void 0:j.address}`},{default:b(()=>{var C;return[_(P,{url:(C=t==null?void 0:t.creator)==null?void 0:C.avatar,user:t==null?void 0:t.creator,size:"small",class:"w-10 h-10"},null,8,["url","user"])]}),_:2},1032,["to"]),e("span",me,[e("span",ge,f((O=t==null?void 0:t.creator)==null?void 0:O.nickname),1),_(i,{to:`/profile/${(W=t==null?void 0:t.creator)==null?void 0:W.address}`},{default:b(()=>{var C;return[e("span",null,f(u(U)((C=t==null?void 0:t.creator)==null?void 0:C.address)),1)]}),_:2},1032,["to"])])])):F("",!0)],14,pe)),[[ee,N||S||B]]):F("",!0)]}),_:2},1032,["class"])),64))]),_:1})}}});const R=m=>(Q("data-v-b890097d"),m=m(),Y(),m),he={class:"py-8 flex flex-col xl:flex-row items-center gap-4 xl:gap-72px"},xe={class:"flex-col items-center xl:items-start gap-8"},ve=R(()=>e("div",{class:"flex-col gap-4"},[e("span",{class:"page-title !text-66px md:!text-88px"},"AI + NFT"),e("span",{class:"page-title !h-12 !leading-12"},"Mint your Imagination")],-1)),we={class:"text-light leading-6 max-w-full text-center xl:text-left text-sm"},be=["href"],ye={class:"flex gap-11 items-center xl:items-start"},ke=["href"],Ne=R(()=>e("span",null,"Official Doc",-1)),De=[Ne],$e={class:"flex flex-col md:flex-row gap-5 items-center text-blur text-content md:border-x md:border-blue-500 md:divide-x divide-blue-500"},Pe={class:"text-5 text-white font-saira"},Be={class:"text-active font-bold"},Ce={class:"w-full !max-w-592px !h-420px mt-11 xl:mt-0"},Ae=k({__name:"Overview",setup(m){const c=D({}),l=async()=>{var r;const a=await L("/api/v1/artworks/stats");c.value=((r=a.data)==null?void 0:r.data)||{}},p=[{title:"Creators",filed:"creators"},{title:"NFTs",filed:"nfts"},{title:"Artworks",filed:"artworks"}];return I(()=>{l()}),(a,r)=>{const g=E,h=fe;return s(),o("div",he,[e("div",xe,[ve,e("span",we,[M(" NFPrompt is the first Prompt Artist Platform in Web3, which lets you mint your imagination into an AI-Generated NFT. Collectors and enthusiasts can buy/sell the NFT together with the prompt that was used to generate the image. "),e("a",{href:u(G),target:"_blank",class:"underline bg-clip-text text-transparent bg-gradient-to-r from-[#405fff] to-[#b08dff] text-active font-bold hover:text-active"}," Learn More» ",8,be)]),e("div",ye,[e("a",{class:"gradient-btn min-w-auto px-8 py-2px",href:u(G),target:"_blank"},De,8,ke),_(g,{class:"main-btn min-w-auto px-8 py-2px",to:"/explore"},{default:b(()=>[M("Explore All")]),_:1})]),e("div",$e,[(s(),o(v,null,w(p,d=>e("div",{key:d.filed,class:"flex-col items-center justify-items-center px-10"},[e("span",Pe,f(new u(te)(u(c)[d.filed]||0).toFormat()),1),e("span",Be,f(d.title),1)])),64))])]),e("div",Ce,[_(h)])])}}});const Ee=q(Ae,[["__scopeId","data-v-b890097d"]]);const Fe={class:"flex-col gap-8"},Ve=e("span",{class:"tip-title"},"Theme Campaign",-1),Se={class:"flex-col gap-7 items-center relative"},Me={class:"w-full"},je=["onClick"],Oe={key:0,class:"p-4 flex-col text-center gap-5 w-full text-white"},We={class:"text-2xl font-blod"},Ge={class:"text-xs"},ze=2500,Te=k({__name:"ThemeCampaign",setup(m){const c=D([]),l=D(),p=D(1),a=D(),r=async()=>{var i;try{const t=await L("/api/v1/campaigns/all");c.value=((i=t.data)==null?void 0:i.data)||[]}catch{}},g=i=>{l.value=i,y()},h=({realIndex:i,activeIndex:t})=>{p.value=i,clearTimeout(a.value),y()},d=(i,t)=>{const{realIndex:x}=l.value;if(i===x){J(`/acts/votes?id=${t}`);return}clearTimeout(a.value),n(i),y()},n=i=>{var x,N;const t=i>=((x=P.value)==null?void 0:x.length)?0:i;(N=l.value)==null||N.slideToLoop(t,300),p.value=t},y=()=>{a.value=setTimeout(()=>{p.value=p.value+1,n(p.value)},ze)};I(()=>{r()}),z(()=>{var i;l.value&&((i=l.value)==null||i.destroy()),clearTimeout(a.value)});const P=se(()=>{const i=ie(c.value||[]).slice(0,10);return i.length==0?[]:[i.pop()].concat(i).filter(t=>t.id)});return(i,t)=>(s(),o("div",Fe,[Ve,e("div",Se,[_(u(K),{class:"!h-360px theme-swiper",onSwiper:g,onSlideChange:h,initialSlide:1,centeredSlides:!0,loop:!0,slideVisibleClass:"z-10",slideDuplicateActiveClass:"z-30",breakpoints:{300:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:3,spaceBetween:0}}},{default:b(()=>[(s(!0),o(v,null,w(u(P),(x,N)=>(s(),A(u(X),{class:"!flex items-center justify-items-center",key:N},{default:b(({isActive:B})=>[e("div",Me,[e("div",{onClick:S=>d(N,x.id),class:$(["cursor-pointer w-full h-328px flex items-end transition-all rounded-2 overflow-hidden pb-10",{"xl:!h-360px xl:!w-960px xl:-ml-270px drop-shadow-xl":B}]),style:V({background:`linear-gradient(180deg, rgba(9, 12, 21, 0) 0%, rgba(9, 12, 21, 0.9) 100%), url(${("ImageCDNWrap"in i?i.ImageCDNWrap:u(ae))(x.ext.banner)}) center center / cover no-repeat`})},[B?(s(),o("div",Oe,[e("span",We,f(x.name),1),e("span",Ge,f(x.ext.rewardTitle),1)])):F("",!0)],14,je)])]),_:2},1024))),128))]),_:1})])]))}});const Z=m=>(Q("data-v-d966b11e"),m=m(),Y(),m),Je={class:"flex-col gap-10"},Ie=Z(()=>e("span",{class:"tip-title"},"Highlighted Gallery",-1)),Le={class:"grid grid-cols-1 lg:grid-cols-2 gap-10"},Qe={class:"panel-frame h-full justify-between"},Ye={class:"flex-col gap-2 items-center justify-between md:flex-row"},qe={class:"text-lg font-bold text-white"},Xe=Z(()=>e("div",{class:"main-btn min-w-auto"},"Create Now",-1)),Ke={class:"text-light text-content"},Re={class:"imgPanel lg:items-end"},Ze={class:"artwork lg:h-full"},He=k({__name:"HighlightedGallery",setup(m){const c=[{tag:"opBNB",desc:"Witness the remarkable creation of a super-fast Mech on the BNBChain. This stunning masterpiece, crafted with precision using NFPrompt, embodies opBNB's unwavering commitment to accelerating transactions on the blockchain.",artworks:[[{id:"EDb32G64yoBanR4jabr5qOQjzPYVg1AL",image:"2v0E7KloygB5xdwmvwmpjD1bNk4AMZ6Y.png",rowSpan:2},{id:"YgX9AojLNmv2bdlmLoRDGVB4PyE8Zekw",image:"ZO37bNmgGYkyBdALLNmrv5nMzAQxJ90o.png"},{id:"mvnoqb8gNWYZwpDKK7RD1X6aeJAzKxBM",image:"m1jMNg82GoqWnrmQ92lrXPVlBw7D59Q3.png"},{id:"ZyoJ0kn4BmAP7Rn3jGp2E1LYGzMNXV5W",image:"QkEbXnDPLJowYp0al6mrW64v72ag8M1j.png"},{id:"oQaJmNYLqDgXyr8g2xpelGk1Vj0ZKn97",image:"D4kBygv1M8l9JRWm9EkrOE27azPX3VNw.png"}]]},{tag:"Spiderverse",desc:'NFPrompt is delighted to have hosted the SpiderVerse-themed campaign, inspired by the movie "Across the SpiderVerse." This exciting event brought together AI enthusiasts and SpiderVerse fans for a captivating artistic journey. We were thrilled to witness the boundless creativity of our creators as they explored the mesmerizing world of the SpiderVerse.',artworks:[[{id:"D4kBygv1M8l9JRW4PvpOE27azPX3VNwQ",image:"Mzoe2ZDYV9AanREOybrq43P0kW8Ov576.png"},{id:"ZjW6N3BGqyanQRJae5dM45JVb9o72zwA",image:"x1e4VOEmKD82nd3BGErzvljWbaXqAPYM.png",rowSpan:2},{id:"80EgxzPlemW6Od6BJyd7LBkoYQv4aK19",image:"YXkn32E08Qx5epGgeLpaqOJDgVwZyjbl.png"},{id:"QkEbXnDPLJowYp0x2mpW64v72ag8M1je",image:"EDb32G64yoBanR4KoBd5qOQjzPYVg1AL.png"},{id:"6gaPD89L3KYlEpv31nrezqbNWxAJGn21",image:"eXE6JNDza7wKLpZ4L16djvO90boy8AM1.png"}]]},{colSpan:2,tag:"Pokémon",desc:"A spectacular tribute to the timeless universe of Pokemon, which has captivated fans since its inception in 1996. Unleash your imagination as you transform favorite characters and game props into extraordinary styles and immersive backgrounds. With NFPrompt, you can even create epic battles between your favorite character",artworks:[[{id:"EbXeojG8nO56Jd2WvbRBDMKavAPNmkg0",image:"Aaj5gqPX17O2DpzV0apLmBGKNewEoJ0Y.png",rowSpan:2},{id:"Mzoe2ZDYV9AanREewKRq43P0kW8Ov576",image:"QkEbXnDPLJowYp0alOqrW64v72ag8M1j.png"},{id:"AN8vW6LOwXqm0pYXXPRGn2kVj37gKxl4",image:"D3Moeyq0YQEP4rN5mD3pkam5OxBNbLJl.png"},{id:"QkEbXnDPLJowYp0W4mRW64v72ag8M1je",image:"DQaAxLvjlXPM4RM7MPro0zN9JV7B53me.png"},{id:"EDb32G64yoBanR4YmBp5qOQjzPYVg1AL",image:"YXkn32E08Qx5epGmJ6gdaqOJDgVwZyjb.png"}],[{id:"ZjW6N3BGqyanQRJZB5RM45JVb9o72zwA",image:"6gaPD89L3KYlEpvg7GrezqbNWxAJGn21.png",rowSpan:2},{id:"10WQ4XvlkzNjVepBKr7gnGMKLJZawbmq",image:"2v0E7KloygB5xdwmyBEpjD1bNk4AMZ6Y.png"},{id:"6gaPD89L3KYlEpvAynRezqbNWxAJGn21",image:"1EyBQZaWgKbX8rbDLKRYno2vV960OAkP.png",rowSpan:2},{id:"10WQ4XvlkzNjVepBKr7gnGMKLJZawbmq",image:"YXkn32E08Qx5epGmv0OdaqOJDgVwZyjb.png"}]]}];return(l,p)=>{const a=E;return s(),o("div",Je,[Ie,e("div",Le,[(s(),o(v,null,w(c,(r,g)=>e("div",{class:$(["panel-with-frame rounded-2",{"lg:col-span-2":r.colSpan===2}]),key:g},[e("div",Qe,[e("div",Ye,[e("span",qe,"NFPrompt x "+f(r.tag),1),_(a,{to:"/curate"},{default:b(()=>[Xe]),_:1})]),e("p",Ke,f(r.desc),1),e("div",Re,[(s(!0),o(v,null,w(r.artworks,(h,d)=>(s(),o("div",{key:d,class:$(["grid grid-cols-2 gap-3 lg:grid-cols-7 lg:gap-5 lg:h-260px xl:h-316px",{"w-full sm:grid-cols-4":g<2,"sm:grid-rows-3 lg:grid-rows-2 sm:w-1/2":g===2,"lg:w-[47%]":g===2&&d===0,"lg:flex-1 lg:grid-cols-8":g===2&&d===1}])},[(s(!0),o(v,null,w(h,(n,y)=>(s(),A(a,{to:{path:`/artwork/${n.id}`},key:y,class:$(["lg:col-span-2",{"lg:row-span-2 lg:col-span-3":(n==null?void 0:n.rowSpan)===2}])},{default:b(()=>[e("div",Ze,[e("div",{class:$(["img",{"lg:h-full  lg:!aspect-auto":(n==null?void 0:n.rowSpan)===2}]),style:V({background:`url(${("ImageCDNFeedWrap"in l?l.ImageCDNFeedWrap:u(T))(`https://assets.nfprompt.io/image/${n.image}`)}) center center / cover no-repeat`})},null,6)])]),_:2},1032,["to","class"]))),128))],2))),128))])])],2)),64))])])}}});const Ue=q(He,[["__scopeId","data-v-d966b11e"]]),et=e("img",{src:"https://static.nfprompt.io/website/nfp/home/creditsIcon.png",class:"w-60px flex-shrink-0 -ml-4 -my-2"},null,-1),tt={class:"text-white font-bold text-xl leading-none"},st={class:"text-normal text-sm text-[##C3C7D3] leading-5 h-auto xl:h-11"},at=k({__name:"CreditPanel",props:["list"],setup(m){return(c,l)=>(s(!0),o(v,null,w(m.list,(p,a)=>(s(),o("div",{class:"flex flex-col gap-3 items-start",key:a},[et,e("span",tt,f(p.title),1),e("span",st,f(p.desc),1)]))),128))}}),ot={class:"flex-col gap-8 items-center"},nt=e("span",{class:"tip-title"},"$cNFP System",-1),lt={class:"flex-col gap-5 xl:gap-10 sm:flex-row items-center sm:px-4"},rt={class:"flex-col gap-5 xl:gap-10"},it=e("div",{class:"hidden items-center relative mb-10 xl:mb-0 lg:flex flex-1 my-5 xl:m-0"},[e("img",{src:"https://static.nfprompt.io/website/nfp/home/creditsSystem.svg",class:"max-w-max shrink w-460px xl:w-563px flex-shrink-0"})],-1),ct={class:"flex-col gap-5 xl:gap-10"},pt=e("div",{class:"main-btn mt-3 xl:mt-15"},"Get More $cNFP",-1),dt=k({__name:"CreditsSystem",setup(m){const c=[[{color:"#D9AC39",icon:"",title:"Daily Check-in",desc:"Collect your daily dose of $cNFP"},{color:"#FC4D4D",icon:"",title:"Trade NFTs",desc:"Earn $cNFP by minting, buying, and selling NFTs"},{color:"#E650FF",icon:"",title:"Theme Campaign",desc:"Curate your art that fits the theme and mint as NFTs, to win an enticing prize pool of $cNFP."}],[{color:"#305DC8",icon:"",title:"Create NFTs",desc:"Only $cNFP are accepted to create art and mint as NFTs."},{color:"#3E9A4C",icon:"",title:"Vote for NFTs",desc:"The more $cNFP you accumulate, the more voting tickets you can earn to vote for featured NFTs."},{color:"#A938DE",icon:"",title:"Token Airdrop",desc:"$cNFP are the key to unlock greater airdrop rewards. It affects the number and proportion of airdrops."}]];return(l,p)=>{const a=at,r=E;return s(),o("div",ot,[nt,e("div",lt,[e("div",rt,[_(a,{list:c[0]},null,8,["list"])]),it,e("div",ct,[_(a,{list:c[1]},null,8,["list"])])]),_(r,{to:"/earn"},{default:b(()=>[pt]),_:1})])}}}),_t={class:"flex-col gap-8 items-center"},mt=e("span",{class:"tip-title"},"Newsroom",-1),gt={class:"grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5"},ut=["href"],ft={class:"h-40px flex items-center"},ht=["src","alt"],xt={class:"flex-1 text-[#C3C7D3] text-sm"},vt={class:"text-[#68718D] text-xs self-start"},wt=k({__name:"Newsroom",setup(m){const c=[{logo:"https://static.nfprompt.io/website/nfp/news/CT%20logo%20JP.svg",title:"NFPrompt: The first AI-powered NFT platform that mints your imagination on chain",date:"2023-06-12",link:"https://cointelegraph.com/press-releases/nfprompt-the-first-ai-powered-nft-platform-that-mints-your-imagination-on-chain"},{logo:"https://static.nfprompt.io/website/nfp/news/Cryptorank%20Logo.png",title:"OVO and NFP Join Forces to Unleash the Potential of AI-Generated NFTs",date:"2023-07-06",link:"https://cryptorank.io/news/feed/1f9f8-ovo-and-nfp-join-forces-to-unleash-the-potential-of-ai-generated-nfts"},{logo:"https://static.nfprompt.io/website/nfp/news/Digital-Journal.webp",title:"Breaking Ground in NFT Marketplaces: NFPrompt, the First AI-Integrated NFT Platform, Rockets to the Top of BNBChain",date:"2023-06-16",link:"https://cryptorank.io/news/feed/1f9f8-ovo-and-nfp-join-forces-to-unleash-the-potential-of-ai-generated-nfts"},{logo:"https://static.nfprompt.io/website/nfp/news/ForesightNews-small.png",title:"三分钟了解 NFPrompt：AI 驱动的艺术创作和 NFT 交易平台",date:"2023-06-21",link:"https://cryptorank.io/news/feed/1f9f8-ovo-and-nfp-join-forces-to-unleash-the-potential-of-ai-generated-nfts"},{logo:"https://static.nfprompt.io/website/nfp/news/CT%20logo%20JP.svg",title:"【NFPrompt】AIを活用した革新的な世界初のNFT作成・プロンプトプラットフォーム",date:"2023-06-14",link:"https://jp.cointelegraph.com/press-releases/nfprompt-the-worlds-first-innovative-ai-powered-nft-creation-and-prompting-platform"}];return(l,p)=>(s(),o("div",_t,[mt,e("div",gt,[(s(),o(v,null,w(c,(a,r)=>e("a",{href:a.link,target:"_blank",class:"w-full p-7 pb-6 border border-[#141929] bg-[#141929] rounded-10 rounded-tr-3 rounded-bl-3 flex flex-col justify-between gap-5",key:r},[e("div",ft,[e("img",{src:a.logo,alt:a.title,class:"w-fit h-fit max-h-40px"},null,8,ht)]),e("span",xt,f(a.title),1),e("span",vt,f(("dayjsUTC"in l?l.dayjsUTC:u(oe))(a.date).format("MMM Do, YYYY")),1)],8,ut)),64))])]))}}),bt={class:"flex-col gap-8 items-center"},yt=e("span",{class:"tip-title"},"Get Started",-1),kt={class:"flex flex-col mx-auto max-w-full gap-5 md:flex-row"},Nt={key:0,class:"mt-4 !w-420px hidden xl:block",src:"https://static.nfprompt.io/website/nfp/home/systemFeature.png"},Dt={key:1,class:"flex-col gap-5 md:gap-60px"},$t={class:"list-disc pl-5"},Pt=k({__name:"Started",setup(m){const c=[[{title:"Sign Up",color:"#AD5BDD",desc:["Seedless Experience - Effortless onboarding process for Web2 users","Gasless Experience - Encourage Web2 users to engage and explore AI on Web3","Web3 Wallet Integration - Support massive popular Web3 wallet dapps"]},{title:"Mint",color:"#48DEDD",desc:["Seamless one-click On-Chain art minting","Secure ownership verification for created art"]}],{isImg:!0},[{title:"Create",color:"#7C4CF1",desc:["Access to Professional and Premium-Level Models - MidJourney, Stable Diffusion","AI-Powered Idea Generation - Random Prompt, Prompt Association","Predefined Comprehensive Creative Styles - Pixel, Anime, Technology, and more.","Simple and user-friendly creative process"]},{title:"List",color:"#389DEC",desc:["Monetize your creations and earn","Support creators with ongoing royalty share"]}]];return(l,p)=>(s(),o("div",bt,[yt,e("div",kt,[(s(),o(v,null,w(c,a=>e("div",{class:$(["flex-col",{"shrink-0":a==null?void 0:a.isImg}])},[a!=null&&a.isImg?(s(),o("img",Nt)):(s(),o("div",Dt,[(s(!0),o(v,null,w(a,(r,g)=>(s(),o("div",{class:"flex-col gap-3 md:gap-6",key:g},[e("span",{class:"text-4xl",style:V({color:r.color})},f(r.title),5),e("ul",$t,[(s(!0),o(v,null,w(r.desc,(h,d)=>(s(),o("li",{class:"text-base text-[#68718D] leading-8 md:leading-10",key:d},f(h),1))),128))])]))),128))]))],2)),64))])]))}}),Bt={class:"flex flex-col md:flex-row gap-6 md:gap-20 xl:gap-0 mt-20"},Ct={class:"flex-col items-start"},At=e("img",{src:"https://static.nfprompt.io/website/nfp/images/logo-color.png",class:"flex-shrink-0 max-w-150px mb-8"},null,-1),Et=e("span",{class:"text-sm mt-2"},"Mint your Imagination into an exquisite masterpiece",-1),Ft={class:"md:ml-auto flex flex-col md:flex-row gap-4 md:gap-8"},Vt={class:"text-base leading-6"},St=k({__name:"Footer",setup(m){return(c,l)=>{const p=ce,a=E;return s(),o("div",Bt,[e("div",Ct,[At,_(p,{class:"gap-3 md:mt-14","icon-class":"w-6"}),Et]),e("div",Ft,[(s(!0),o(v,null,w(u(ne),(r,g)=>(s(),o("div",{class:"flex-col gap-2 md:gap-4",key:g},[e("span",Vt,f(r.title),1),(s(!0),o(v,null,w(r.links,(h,d)=>(s(),A(a,{to:h.url,target:h.url.indexOf("http")>-1?"_blank":"_self",class:"text-light",key:d},{default:b(()=>[M(f(h.label),1)]),_:2},1032,["to","target"]))),128))]))),128))])])}}}),Mt={class:"page pb-40 pt-16"},jt={class:"mt-3 flex-col gap-15 py-12"},qt=k({__name:"index",setup(m){return(c,l)=>{const p=Ee,a=Te,r=Ue,g=dt,h=wt,d=Pt,n=le;return s(),A(n,null,{default:b(()=>[e("div",Mt,[_(p),e("div",jt,[_(a),_(r),_(g),_(h),_(d)]),_(St)])]),_:1})}}});export{qt as default};