import{a as v,b as j,e as k,o as l,f as u,h as e,F as d,r as g,i as f,w as y,j as m,t as s}from"./entry.45015658.js";import{_ as x}from"./nuxt-link.2101ac05.js";const q=n=>Object.fromEntries(Object.entries(n).filter(([,o])=>o!==void 0)),C=(n,o)=>(i,a)=>(j(()=>n({...q(i),...a.attrs},a)),()=>{var t,h;return o?(h=(t=a.slots).default)==null?void 0:h.call(t):null}),M=v({name:"Title",inheritAttrs:!1,setup:C((n,{slots:o})=>{var a,t,h;return{title:((h=(t=(a=o.default)==null?void 0:a.call(o))==null?void 0:t[0])==null?void 0:h.children)||null}})}),T=v({name:"Head",inheritAttrs:!1,setup:(n,o)=>()=>{var i,a;return(a=(i=o.slots).default)==null?void 0:a.call(i)}});const A={props:{pageContent:{type:Array,required:!0}}},S={class:"navbar"};function O(n,o,i,a,t,h){const b=x;return l(),u("nav",S,[e("ul",null,[(l(!0),u(d,null,g(i.pageContent,(p,_)=>(l(),u("li",{key:_},[f(b,{to:`#${p.id}`},{default:y(()=>[m(s(p.title),1)]),_:2},1032,["to"])]))),128))])])}const I=k(A,[["render",O]]),r={pageContent:[{id:"home",title:"Home"},{id:"about",title:"About"},{id:"projects",title:"Projects"},{id:"contact",title:"Contact"}],name:"Ryan Meneses",title:"Software Engineer",tagline:"Passionate about solving problems that lead to a better world.",location:"San Francisco Bay Area",about:["Hello there! Thank you for visiting my website! My name is Ryan, and I'm a software engineer who is passionate about using technology to help solve big questions and push humanity towards our maximum potential.","Ever since I was a kid, I've been fascinated by the mysteries of the universe and the big questions that we as humans seek to answer. And as I grew older, I realized that technology could play a crucial role in helping us unravel some of these mysteries and push the boundaries of what we thought was possible.","In my career as a software engineer, I've been fortunate to work on some incredible projects with some amazing people who have only fueled my desire to work on these types of problems. One project, for instance, is all about pushing humanity closer towards becoming an interplanetary species, while another deals with humanity's ability to harness the computational power of the atomic world.","What excites me most about my work is the potential for technology to help us unlock new insights and discoveries that can push humanity towards its maximum potential. Whether we're developing new algorithms to help us understand the fundamental workings of the universe or creating tools to help us harness the power of artificial intelligence, I believe that we can make a real difference by working together to push the boundaries of what we thought was possible.","When I'm not coding, I love exploring these spaces through the lenses of those outside of my industry. I'm very curious to see the workings and ideas of those approaching these problems from different angles. I'm also very interested in hearing the kinds of impacts new technologies and discoveries might pose on humanity alike.","Overall, I'm thrilled to be a part of a community of thinkers and doers who are just as passionate as I am about using technology to make a positive impact on the world. So, let's join forces and keep pushing the boundaries together!"],quote:{text:"We are a way for the universe to know itself.",author:"Carl Sagan"},projects:[{name:"The CDJ",thumbnail:"project-4-thumbnail.png",description:["I am developing The Cognitive Distortion Journal (CDJ) as a tool to address a common challenge in cognitive-behavioral therapy (CBT): the identification and reframing of distorted thinking. Motivated by the difficulty many face in managing cognitive distortions in real-time, I created this project as a Single Page Application (SPA) using React and Material UI. This approach ensures a seamless, interactive user experience. The backend, built with Node.js and Express, interfaces with a MongoDB database through a RESTful API, offering robust data management. My aim was to provide an effective, intuitive tool for mental health interventions, leveraging modern web technologies."],ref:"https://github.com/hiyaryan/the-cdj"},{name:"My Website",thumbnail:"project-3-thumbnail.png",description:["I'm currently building my portfolio website using Vue.js and Nuxt.js, and I'm excited to share my journey with you. One of the reasons I decided to build this website publicly is that I wanted to showcase my skills and progress as a software engineer. By building this website in public, I'm able to share my coding process, learn from feedback, and connect with other developers. A new challenge I'm facing is building a website layout, style, and user experience. Overall, I'm proud of what I've accomplished so far, and I'm looking forward to sharing more updates on this project as I continue to develop and improve my skills."],ref:"https://github.com/hiyaryan/ryanmeneses"},{name:"QCS Quantum Circuits",thumbnail:"project-2-thumbnail.png",description:["At Rigetti Computing, I spearheaded a Rust-based tool that generates LaTeX-formatted quantum circuits, which are graphical representations of quantum systems used to visualize the flow of quantum information. The tool serializes Quil, the assembly language of quantum computers, into LaTeX form, and is accessible via the company's quantum cloud services (QCS). The tool provides a high-level abstraction of the structure of quantum instructions. This aids designers and researchers to analyze and design complex quantum algorithms before accessing valuable quantum computing resources."],ref:"https://github.com/rigetti/quil-rs/pull/145"},{name:"SIMOC SAM",thumbnail:"project-1-thumbnail.png",description:["At Over the Sun, I extended SIMOC, a habitat atmospheric and environmental simulation hosted on NGS, enabling citizen scientists and classrooms to access a live data feed from SAM, a real-life hermetically sealed habitat, using Vue.js for the front-end and Python for the back-end. My role involved designing and implementing features to allow users to view and analyze data from Adafruit sensors measuring CO2, humidity, temperature, pressure, and VOC levels. The project's challenge was to create a user-friendly interface with data visualization tools, and the outcome was a contribution to space exploration and education."],ref:"https://github.com/overthesun"}],contact:"Find me on ",linkedin:"https://www.linkedin.com/in/ryan-james-meneses",github:"https://github.com/hiyaryan"};const B={head(){return{title:"Ryan Meneses"}},components:{NavBar:I},beforeMount(){this.getQuote()},data(){return{pageContent:[{id:"home",title:"Home"},{id:"about",title:"About"},{id:"projects",title:"Projects"},{id:"contact",title:"Contact"}],name:r.name,title:r.title,tagline:r.tagline,location:r.location,about:r.about,quote:r.quote,projects:r.projects,contact:r.contact,linkedin:r.linkedin,github:r.github,year:new Date().getFullYear()}},methods:{getQuote(){fetch("https://type.fit/api/quotes").then(async n=>{const o=await n.json();if(!n.ok){const a=o&&o.message||n.statusText;return Promise.reject(a)}let i=this.get_random_quote(o);this.quote.text=i.text,i.author?this.quote.author=i.author:this.quote.author="Unknown"}).catch(n=>{this.errorMessage=n,console.error("Error fetching quote from https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373",n)})},get_random_quote(n){let o=Math.random()*n.length;return n[Math.ceil(o)]}}},P={class:"landing-page",id:"home"},N={class:"header"},z=["src"],H={class:"section-about",id:"about"},R=e("h2",null,"About Me",-1),E={class:"quote"},D={class:"section-projects",id:"projects"},F=e("h2",null,"Projects",-1),Q=["src"],V=["href"],W={class:"footer",id:"contact"},L=e("h2",null,"Contact",-1),U=["href"],J=["href"];function G(n,o,i,a,t,h){const b=M,p=T,_=I;return l(),u(d,null,[f(p,null,{default:y(()=>[f(b,null,{default:y(()=>[m("Ryan Meneses")]),_:1})]),_:1}),e("div",P,[f(_,{pageContent:t.pageContent},null,8,["pageContent"]),e("div",N,[e("img",{src:"/img/me.png",alt:""},null,8,z),e("h1",null,s(t.name),1),e("h2",null,s(t.title),1),e("h5",null,s(t.location),1),e("p",null,s(t.tagline),1)]),e("div",H,[R,(l(!0),u(d,null,g(t.about,c=>(l(),u("p",{key:c},s(c),1))),128))]),e("p",E,[e("i",null,'"'+s(t.quote.text)+'"',1),m(" – "+s(t.quote.author),1)]),e("div",D,[F,e("div",null,[(l(!0),u(d,null,g(t.projects,c=>(l(),u("div",{key:c.name,class:"project"},[e("img",{src:`/img/${c.thumbnail}`,alt:""},null,8,Q),e("h3",null,s(c.name),1),(l(!0),u(d,null,g(c.description,w=>(l(),u("p",{key:w},s(w),1))),128)),e("a",{href:`${c.ref}`,target:"_blank"},"See more",8,V)]))),128))])]),e("div",W,[L,e("p",null,[m(s(t.contact)+" ",1),e("a",{href:`${t.linkedin}`,target:"_blank"},"LinkedIn",8,U),m(" and "),e("a",{href:`${t.github}`,target:"_blank"},"GitHub",8,J)]),e("p",null,s(t.year),1)])])],64)}const Y=k(B,[["render",G]]);export{Y as default};