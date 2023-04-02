import{a as d,b as a,e,t as s,F as p,r as h,f as c,h as _,o as n}from"./entry.86eec962.js";const v={mounted(){document.querySelectorAll("nav ul li a").forEach(o=>{o.addEventListener("click",l=>{l.preventDefault();const u=l.target.getAttribute("href"),r=document.querySelector(u).offsetTop;window.scrollTo({top:r,behavior:"smooth"})})})},data(){return{name:"Ryan Meneses",title:"Software Engineer",tagline:"Passionate about solving problems that lead to a better world.",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi.",portfolio:[{name:"SIMOC SAM",thumbnail:"project-1-thumbnail.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi."},{name:"QCS Quantum Circuits",thumbnail:"project-2-thumbnail.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi."},{name:"ryanmeneses.com",thumbnail:"project-3-thumbnail.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi."}],contact:"Find me on ",linkedin:"https://www.linkedin.com/in/ryan-meneses-5b1b4b1b3/"}}},g={class:"landing-page",id:"home"},f=_('<nav class="navbar"><ul><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#projects">Portfolio</a></li><li><a href="#contact">Contact</a></li></ul></nav>',1),b={class:"header"},S={class:"section",id:"about"},x=e("h2",null,"About Me",-1),k={class:"section",id:"projects"},L=e("h2",null,"Portfolio",-1),y={class:"portfolio"},P=["src","alt"],N={class:"footer",id:"contact"},w=e("h2",null,"Contact",-1),D=e("a",{href:"{{",linkedin:"","}}":""},"LinkedIn",-1);function E(m,o,l,u,t,r){return n(),a("div",g,[f,e("div",b,[e("h1",null,s(t.name),1),e("h2",null,s(t.title),1),e("p",null,s(t.tagline),1)]),e("div",S,[x,e("p",null,s(t.about),1)]),e("div",k,[L,e("div",y,[(n(!0),a(p,null,h(t.portfolio,i=>(n(),a("div",{key:i.name},[e("img",{src:`@/assets/img/${i.thumbnail}`,alt:i.thumbnail},null,8,P),e("h3",null,s(i.name),1),e("p",null,s(i.description),1)]))),128))])]),e("div",N,[w,e("p",null,[c(s(t.contact)+" ",1),D,c(".")])])])}const C=d(v,[["render",E]]);export{C as default};
