!function(){"use strict";const e=-1!==window.location.search.indexOf("adsdebug=1"),t=(t,o="log")=>{e&&t&&console[o]("%cFondikAds","display: inline-block; color: #fff; background: indigo; padding: 1px 4px; border-radius: 3px;",t)},o=()=>{const e=window.location.href;return!!e.includes("?")&&e.split("?")[1]};var n;!function(e){e[e.LEADERBOARD=0]="LEADERBOARD",e[e.BRANDING=1]="BRANDING",e[e.RECTANGLE=2]="RECTANGLE",e[e.RECTANGLE2=3]="RECTANGLE2",e[e.SKY_SCRAPER=4]="SKY_SCRAPER",e[e.TOP_SPONZOR=5]="TOP_SPONZOR",e[e.MOBILE_TOP=6]="MOBILE_TOP",e[e.MOBILE_MID=7]="MOBILE_MID",e[e.MOBILE_BOT=8]="MOBILE_BOT",e[e.MOBILE_SMR=9]="MOBILE_SMR"}(n||(n={}));const s=new Map([[n.LEADERBOARD,{zoneId:320126,width:970,height:210,id:"ssp-zone-118559"}],[n.TOP_SPONZOR,{zoneId:320129,id:"ssp-zone-118564",width:300,height:300}],[n.SKY_SCRAPER,{zoneId:320132,id:"ssp-zone-118569",width:300,height:600}],[n.RECTANGLE,{zoneId:320138,id:"ssp-zone-118579",width:970,height:310}],[n.RECTANGLE2,{zoneId:320135,id:"ssp-zone-118574",width:111,height:111}],[n.MOBILE_TOP,{zoneId:320141,id:"ssp-zone-118584",width:480,height:480}],[n.MOBILE_MID,{zoneId:320144,id:"ssp-zone-118589",width:480,height:480}],[n.MOBILE_BOT,{zoneId:320150,id:"ssp-zone-118594",width:480,height:480}],[n.MOBILE_SMR,{zoneId:320147,id:"ssp-zone-320147",width:111,height:111}]]);class i{scriptSrc;scriptTag=null;scriptLoaded=!1;appendRootScript(){this.scriptTag=document.createElement("script"),this.scriptTag.src=this.scriptSrc,this.scriptTag.addEventListener("load",(()=>this.scriptLoaded=!0)),document.head.appendChild(this.scriptTag)}prepareBody(){}executeQueue(){}initializeAds(){this.prepareBody(),this.executeQueue(),t("Ads initialised")}callAds(){this.scriptTag&&(this.scriptLoaded?this.initializeAds():this.scriptTag.addEventListener("load",this.initializeAds.bind(this)))}}const d=(e,t)=>(2e3===e.width&&(()=>{const e=document.querySelector(".leaderboardwrapper"),t=document.querySelector(".post-content-text"),o=document.querySelector(".post-content"),n=document.querySelector(".top"),s=document.querySelector(".go-up-section"),i=document.getElementById("ssp-zone-118579"),d=[document.querySelector(".dropdown-section-1"),document.querySelector(".dropdown-section-2"),document.querySelector(".dropdown-section-3")];if(d.forEach((e=>{e.style.marginTop="0",e.style.position="",e.parentElement.style.opacity="0"})),document.querySelectorAll("[data-ix^='show-dropdown-']").forEach(((e,t)=>{e.addEventListener("click",(()=>{d.forEach((e=>{e.parentElement.style.opacity="0",setTimeout((()=>{e.style.position=""}),200)})),"block"!=d[t].style.display&&setTimeout((()=>{d[t].parentElement.style.opacity="1",d[t].style.position="relative"}),200)}))})),o?(o.parentElement.style.width="1100px",o.style.marginTop="180px"):document.querySelectorAll(".post-content-text").forEach((function(e){const t=e.parentElement;t.style.width="1060px",t.style.margin="180px auto"})),document.querySelectorAll(".post-content-text").length>1){const e=document.querySelectorAll(".post-content-text")[1];e.style.top="180px",e.style.background="white",e.style.paddingLeft="25px"}e.style.display="none",t.style.background="white",n.style.width="1060px",n.style.margin="auto",n.style.transform="translateY(226px)",s.style.padding="30px",s.style.width="1060px",s.style.margin="auto",s.style.background="white",i.style.transform="translateX(-20px)"})(),document.getElementById("ssp-zone-118559").style.display="block",window.sssp.writeAd(e,t)),a=()=>{const e=document.getElementsByClassName("leaderboardwrapper");e&&e.length>0&&(e[0].style.display="block");const t=document.getElementsByClassName("leaderboard");t&&t.length>0&&(t[0].style.display="block"),Array.prototype.slice.call(document.querySelectorAll("[class^='dropdown-section']"),0).forEach((e=>{e.style.marginTop="350px"}))},l=()=>new Map(Array.from(s,(([e,t])=>[e,document.getElementById(t.id)])));class c extends i{zoneList=[];constructor(){super(),this.scriptSrc="https://ssp.seznam.cz/static/js/ssp.js",this.appendRootScript()}addZone(e){const o=s.get(e);if(e==n.LEADERBOARD)return a(),window.innerWidth>=1366?(this.zoneList.push((document.body.insertAdjacentHTML("afterbegin",'<div id="ssp-branding-118559"></div>'),{zoneId:320126,width:2e3,id:"ssp-branding-118559",callback:d,elements:[{id:"ssp-zone-118559",width:970},{id:"ssp-branding-118559",width:2e3,height:1400}]})),this):(this.zoneList.push(o),this);if(e==n.RECTANGLE){const t=l().get(e);t.className="bottomrectangle",t.style.display="block",t.style.height="auto"}if(e==n.RECTANGLE2){const t=l().get(e);t.className="textadblock",t.style.display="block",t.style.height="auto"}if(e==n.MOBILE_MID&&(async e=>{if(!e)return void t("MOVE MID MOBILE - no ad elem");const o=document.getElementsByClassName("rich-text-block");if(!o||0===o.length)return void t("MOVE MID MOBILE - No element");const n=o[0],s=Array.from(n.children).filter((e=>"P"===e.tagName));if(!s||s.length<5)return void t("MOVE MID MOBILE - not enough paragraphs");const i=s[3];t({message:"MOVE MID MOBILE - target",target:i}),i.parentNode.insertBefore(e,i.nextSibling)})(l().get(e)),e==n.MOBILE_SMR){const e=document.getElementsByClassName("post-content-text");if(!e||!e.length)return this;const{id:i,height:d}=s.get(n.MOBILE_SMR),a=document.createElement("div");a.id=i,a.style.width="100%",a.style.height=d+"px",e[0].after(a),t({message:"Added MOBILE_SMR",zoneData:o,target:e[0],zoneElem:a})}return this.zoneList.push(o),this}executeQueue(){window.sssp.getAds(this.zoneList)}setupMobileSection(){const e=document.getElementsByClassName("content-section");if(!e||!e.length)return!1;const t=e[0].getElementsByClassName("flex-wrapper");if(!t||!t.length)return!1;const o=Array.from(t);console.log(o);const i=s.get(n.MOBILE_TOP),d=s.get(n.MOBILE_MID),a=s.get(n.MOBILE_BOT);if(o.length<=3){const e=document.createElement("div");e.id=i.id,e.style.margin="auto",o[0].after(e)}if(o.length>3){const e=document.createElement("div");e.id=i.id,e.style.margin="auto",o[2].after(e)}if(o.length>5){const e=document.createElement("div");e.id=d.id,e.style.margin="auto",o[4].after(e)}if(o.length>7){const e=document.createElement("div");e.id=a.id,e.style.margin="auto",o[6].after(e)}return!0}homepageDesktop(){const e=document.getElementsByClassName("fondik-doporucuje");if(e&&e[0]){const t=s.get(n.TOP_SPONZOR),o=document.createElement("div");o.id=t.id,e[0].parentNode.insertBefore(o,e[0]),this.addZone(n.TOP_SPONZOR),e[0].remove()}const t=document.getElementsByClassName("side-posts-block");if(t&&2===t.length){const e=s.get(n.SKY_SCRAPER),o=document.createElement("div");o.id=e.id,t[1].parentNode.insertBefore(o,t[1]),this.addZone(n.SKY_SCRAPER)}const o=document.querySelector("body > div.content-section > div:nth-child(2)");if(o){const e=s.get(n.RECTANGLE),t=document.createElement("div");t.id=e.id,o.insertAdjacentElement("beforebegin",t),this.addZone(n.RECTANGLE)}this.addZone(n.LEADERBOARD),this.callAds()}homepageMobile(){const e=document.getElementsByClassName("posts-block hp-bottom");if(e&&e[0]){const t=s.get(n.MOBILE_TOP),o=document.createElement("div");o.id=t.id,o.style.marginBottom="20px",e[0].parentNode.insertBefore(o,e[0]),this.addZone(n.MOBILE_TOP)}const t=document.getElementsByClassName("collection-list-2 w-dyn-items");if(t[0]&&t[0].children){const e=t[0].children;if(e.length>3){const t=s.get(n.MOBILE_MID),o=document.createElement("div");o.id=t.id,e[2].parentNode.insertBefore(o,e[2]),this.addZone(n.MOBILE_MID)}if(e.length>6){const t=s.get(n.MOBILE_BOT),o=document.createElement("div");o.id=t.id,e[4].parentNode.insertBefore(o,e[4]),this.addZone(n.MOBILE_BOT)}}this.callAds()}moveRectangleToBottom(){const e=document.getElementsByClassName("content-section")[0];if(!e)return;const t=l().get(n.RECTANGLE);e.insertAdjacentElement("afterend",t)}}const r=e=>`div-gpt-ad-7337230-${e}`,p=new Map([[n.RECTANGLE,{code:2,name:"desktop_article_1bottom_300x250",sizes:[[250,250],[300,250],[336,280],[750,100],[750,200],[750,300]]}],[n.RECTANGLE2,{code:4,name:"desktop_article_2bottom_300x250",sizes:[[250,250],[300,250],[336,280],[750,100],[750,200],[750,300]]}],[n.SKY_SCRAPER,{code:5,name:"desktop_article_2sidebar_300x250",sizes:[[250,250],[300,250]]}],[n.TOP_SPONZOR,{code:3,name:"desktop_article_1sidebar_300x250",sizes:[[250,250],[300,250]]}]]);class h extends i{zoneElementMap;adCodes=p;callbackList=[];bodyAppendList=[];constructor(){super(),this.scriptSrc="https://securepubads.g.doubleclick.net/tag/js/gpt.js",this.appendRootScript(),this.zoneElementMap=l()}appendAd(e,t){if(t.innerHTML)return;const{code:o}=e,n=document.createElement("div"),s=document.createElement("script"),i=r(o);n.id=i,s.type="text/javascript",s.text=`googletag.cmd.push(function(){googletag.display('${i}')});`,this.bodyAppendList.push((()=>{n.appendChild(s),t.appendChild(n),t.style.display="block"})),this.addToQueue(e)}addToQueue(e){const{code:t,sizes:o,name:n}=e;this.callbackList.push((()=>{var e;window.googletag.defineSlot((e=n,`/22754793592/${e}`),o,r(t)).addService(window.googletag.pubads())}))}executeQueue(){let e=0;const t=window.setTimeout((()=>{window.googletag?(this.executeQueueWhenReady(),window.clearTimeout(t)):(e++,e>10&&window.clearTimeout(t))}),100)}executeQueueWhenReady(){window.googletag.cmd.push((()=>{this.callbackList.map((e=>e())),window.googletag.pubads().enableSingleRequest(),window.googletag.enableServices()})),this.bodyAppendList.map((e=>e()))}addZone(e){const o=this.zoneElementMap.get(e);return o?(e==n.LEADERBOARD&&a(),e==n.RECTANGLE2&&(o.style.width=window.innerWidth<1135?"600px":"750px"),this.appendAd(this.adCodes.get(e),o),this):(t(`Could not get zone ${e}`),this)}}const u=990;var m;!function(e){e.LEFT="left",e.RIGHT="right"}(m||(m={}));const g="sticky-sky-holder",E={top:325,bot:600,side:m.RIGHT,width:300,height:600,stickyTopSponsor:!1},y=e=>{if(document.getElementById(g))return void t("Sticky sky already present, exiting");const o={...E,...e},n=document.createElement("div"),s=document.createElement("div");n.id=g,((e,t)=>{const o=document.querySelector(".post-content-text");o&&(t.side==m.RIGHT?o.style.padding="20px 325px 0 25px":o.style.padding="20px 0 0 365px",o.appendChild(e))})(n,o),((e,t,o)=>{e.appendChild(t),e.style.position="absolute",e.style.top=o.top+"px",e.style.width=`${o.width}px`,e.style.bottom="0",o.side==m.LEFT?e.style.left="0":e.style.right="0",t.style.position="absolue",t.style.width=`${o.width}px`,t.style.height=`${o.height}px`;const n=document.createElement("div");if(n.id="ssp-zone-118569",n.style.height="600px",t.appendChild(n),o.stickyTopSponsor){const e=document.getElementById("ssp-zone-118564");e.style.marginBottom="25px",e.style.height="300px",t.prepend(e)}})(n,s,o);const i=(e=>{const{height:t}=e;return()=>{const e=document.getElementById(g);if(!e)return;const o=e.firstChild;if(!o)return;const n=e.getBoundingClientRect();n.bottom>t&&n.top<0?(o.style.position="fixed",o.style.top="25px",o.style.bottom=""):n.bottom<=600?(o.style.position="absolute",o.style.top="",o.style.bottom="0"):n.top>=0&&(o.style.position="absolute",o.style.top="25px",o.style.bottom="")}})(o);window.addEventListener("scroll",i),t("Set scroll event listener")},O="style",w="data-ad-slot",L="data-ad-format",A="data-full-width-responsive",R=new Map([[n.RECTANGLE,[[O,"display:block"],[w,"5471762845"],[L,"auto"],[A,"true"]]],[n.RECTANGLE2,[[O,"display:block"],[w,"1511518294"],[L,"auto"],[A,"true"]]],[n.SKY_SCRAPER,[[O,"display:block"],[w,"2102545239"],[L,"auto"],[A,"true"]]],[n.TOP_SPONZOR,[[O,"display:inline-block;width:300px;height:300px"],[w,"9201387779"]]],[n.LEADERBOARD,[[O,"display:inline-block;width:970px;height:210px"],[w,"5429663725"]]],[n.MOBILE_TOP,[[O,"display:block"],[w,"2999181162"],[L,"auto"],[A,"true"]]],[n.MOBILE_MID,[[O,"display:block"],[w,"5537235662"],[L,"auto"],[A,"true"]]],[n.MOBILE_BOT,[[O,"display:block"],[w,"1390941241"],[L,"auto"],[A,"true"]]]]);class B extends i{zoneElementMap;adCount=0;constructor(){super(),this.scriptSrc="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",this.appendRootScript(),this.zoneElementMap=l()}appendRootScript(){this.scriptTag=document.createElement("script"),this.scriptTag.dataset.adClient="ca-pub-1062420095711039",this.scriptTag.async=!0,this.scriptTag.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",this.scriptTag.addEventListener("load",(()=>this.scriptLoaded=!0)),document.head.appendChild(this.scriptTag)}appendAd(e,t){const o=document.createElement("ins"),n=document.createElement("script");for(const[t,n]of e)o.setAttribute(t,n);o.setAttribute("class","adsbygoogle"),o.setAttribute("data-ad-client","ca-pub-1062420095711039"),n.src=this.scriptSrc,t.style.display="block",t.appendChild(o),t.appendChild(n),this.adCount++}addZone(e){const t=this.zoneElementMap.get(e);return e==n.LEADERBOARD&&a(),e==n.RECTANGLE2&&(t.style.width=window.innerWidth<1135?"600px":"750px"),this.appendAd(R.get(e),t),this}executeQueue(){for(let e=0;e<this.adCount;e++)(window.adsbygoogle||[]).push({})}}(()=>{(()=>{const e=o();if(!e)return null;const t=(e=>e.split("&"))(e);let n="";if(t.forEach(((e,t,o)=>{(e.includes("utm_source=")||e.includes("utm_medium="))&&(n=n.concat(e),t!=o.length-1&&(n=n.concat("&")))})),!n)return null;document.querySelectorAll("a").forEach((e=>{const t=e.href;t.includes("www.fondik.cz")&&(t.includes("?")?e.href=t+"&"+n:e.href=t+"?"+n)}))})();const e=window.location.pathname,i=o();if(i&&-1!==i.indexOf("utm_source=www.seznam.cz")){const o=new c;if("/"===e)return void(window.innerWidth>=u?(t("seznam desktop ads - HOMEPAGE"),o.homepageDesktop()):(t("seznam mobile ads - HOMEPAGE"),o.homepageMobile()));if(e.startsWith("/kategorie/")){if(window.innerWidth>=u){t("seznam desktop ads - SECTION"),y({top:0});const e=s.get(n.RECTANGLE2),i=s.get(n.RECTANGLE),d=document.getElementById(e.id);d&&(d.id=i.id,d.style.width=i.width+"px",d.style.height=i.height+"px"),o.moveRectangleToBottom(),o.addZone(n.LEADERBOARD).addZone(n.RECTANGLE).addZone(n.SKY_SCRAPER).callAds()}else t("seznam mobile ads - SECTION"),o.setupMobileSection()&&o.addZone(n.MOBILE_TOP).addZone(n.MOBILE_MID).addZone(n.MOBILE_BOT).callAds();return}window.innerWidth>=u?(t("seznam desktop ads"),y(),o.addZone(n.LEADERBOARD).addZone(n.TOP_SPONZOR).addZone(n.SKY_SCRAPER).addZone(n.RECTANGLE).addZone(n.RECTANGLE2).callAds()):(t("seznam mobile ads"),o.addZone(n.MOBILE_TOP).addZone(n.MOBILE_MID).addZone(n.MOBILE_BOT).addZone(n.MOBILE_SMR).callAds())}else window.innerWidth>=u?(t("google desktop ads"),y({top:0,stickyTopSponsor:!0}),(new h).addZone(n.TOP_SPONZOR).addZone(n.SKY_SCRAPER).addZone(n.RECTANGLE).addZone(n.RECTANGLE2).callAds()):(t("google mobile ads"),(new B).addZone(n.MOBILE_TOP).addZone(n.MOBILE_MID).addZone(n.MOBILE_BOT).callAds())})()}();