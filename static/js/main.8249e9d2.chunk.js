(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(82),r=a.n(o),l=(a(92),a(93),a(86)),s=(a(94),a(18)),c=a(8),m={scale:[0,1]},h={ease:"easeIn",duration:2};var d=function(e){var t=e.title,a=e.description,o=e.bgColor,r=e.image,d=e.viewName,u=e.link,p={panel:{backgroundImage:"url(".concat(r,")"),backgroundColor:o}},g=Object(n.useState)(!1),f=Object(l.a)(g,2),v=f[0],b=f[1];return i.a.createElement(c.b.div,{className:"panel",onClick:function(e){e.preventDefault(),u?window.location.assign(d):b(!0)},style:p.panel,animate:m,transition:h,exit:{opacity:0}},v?i.a.createElement(s.a,{push:!0,to:"/".concat(d)}):null,i.a.createElement("div",{className:"description"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"title"},i.a.createElement("h1",null," ",t," ")))};a(99);var u=function(){return i.a.createElement("div",{className:"dashboard"},i.a.createElement("div",{className:"about"},i.a.createElement(d,{title:"About Me",bgColor:"rgb(187,61,32, .8)",description:"Welcome to my portfolio website! Click here to learn more about me and my interests.",image:"".concat("","/images/me.jpeg"),viewName:"About"})),i.a.createElement("div",{className:"projects"},i.a.createElement(d,{title:"Projects",bgColor:"rgb(23,134,68, .9)",description:"This section is where I showcase both my active and previous work in more detail than on github. If you'd like to learn more about specific projects click here!",image:"".concat("","/images/streak.svg"),viewName:"Projects"})),i.a.createElement("div",{className:"articles"},i.a.createElement(d,{title:"Articles",bgColor:"rgb(24,89,118, .9)",description:"My articles can be found on my medium page. This section gives a high level overview of the articles and the inspiration behind each of them.",viewName:"Articles"})),i.a.createElement("div",{className:"diy"},i.a.createElement(d,{title:"DIY",bgColor:"rgb(255,135,0, .9)",description:"This section is still under construction. (No pun intended.) This will be where I showcase the various crafts I make myself.",viewName:""})))},p=a(26);a(100);var g=function(e){var t=e.name;return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,t)),i.a.createElement("div",{className:"return"},i.a.createElement(c.b.button,{animate:{x:[100,0]},transitions:{ease:"easeIn",duration:3}},i.a.createElement(p.b,{to:"/"},i.a.createElement("img",{src:"".concat("","/icons/chevron.svg"),alt:"return"})))))};a(101),a(102);var f={duration:1,ease:[.43,.13,.23,.96]},v={exit:{y:"50%",opacity:0,transition:f},enter:{y:"0%",opacity:1,transition:f}};var b=function(){return i.a.createElement(c.b.div,{className:"art",initial:"exit",animate:"enter",exit:"exit",variants:v},i.a.createElement("div",{className:"heading"},i.a.createElement(g,{name:"Articles"})),i.a.createElement(d,{title:"Solving Mazes",bgColor:"rgb(0,0,0, .8)",description:"Solving Mazes with DFS is the first big article that I've written. The article looks at the general structure of a maze and breaks down how that structure can be represented as a graph. From that point, I go through a step by step explanation showing how the algorithm works. I give an overview of adding elements to the stack, removing them and explain backtracking a bit.",viewName:"https://medium.com/swlh/solving-mazes-with-depth-first-search-e315771317ae",link:"true"}),i.a.createElement(d,{title:"Prefix Trees",bgColor:"rgb(0,0,0, .8)",description:"This is an article that I thought would be fun to write and it was! Here I talk about Prefix Trees (aka Tries) and how I implemented them into my Relevant for Reddit project in an attempt to save database space. I still need to benchmark my implementation against hashmaps but thats a milestone set for Relevant v1.5 :)",viewName:"https://medium.com/@ablades/would-you-like-some-tries-with-that-afbc87e56eab",link:"true"}),i.a.createElement(d,{title:"Relevant",bgColor:"rgb(0,0,0, .8)",description:"ON DECK: This is an article I'm actively writing. In depth on my experience building a web application for reddit using React/Redux, Golang, MongoDB and Docker. I'll talk about some of the things I learned, things I wished I did differently and what I gained out of the entire experience. I've had a blast working on this project and I hope some of that passion will come through in this article.",viewName:"/",link:"true"}))},w=(a(50),{duration:1,ease:[.43,.13,.23,.96]}),y={exit:{y:"50%",opacity:0,transition:w},enter:{y:"0%",opacity:1,transition:w}};var E=function(){return i.a.createElement(c.b.div,{className:"abt",initial:"exit",animate:"enter",exit:"exit",variants:y},i.a.createElement(g,{name:"About Me"}),i.a.createElement("h1",null,"My Background..."),i.a.createElement("p",null," Hi! My name is Audaris Blades. The pronuciation probably isn't what you expect though, (Ow-Dar-Reese Blah-dez) but you can just call me Audi."),i.a.createElement("p",null," I'm currently a Computer Science student at Dominican University of Calfornia. Though I grew up in Nashville, Tennessee where I spent a lot of time tinkering with anything and everything I could get my hands on. When I finally got my first computer at the tail end of middle school, I was hooked. I was amazed by all the things that could be done. A simple click to open an application, the tactile feedback from a keyboard. All of that and more made me want to learn about how to use and create some of the cool things this little box could do. So I researched, read and learned all I could. Starting out with the more basic stuff like what are the components that make a computer, eventually moving on up to how those compontents talk/work togther. That's how my passion for computers and techonology came to be and to this day I still have that fire. Every day I feel like I can learn something new, expand my knowledge, learn different approaches, tradeoffs to certain algorithms, libraries, implementations, the areas are endless. For that reason alone I knew I wanted to have a career in techonology. It's one that I know I'll never be bored with."),i.a.createElement("h1",null,"My Ambtions..."),i.a.createElement("p",null," As I mentioned a bit earlier, I'm currently finishing up my C.S. Degree going into my senior year. Right out of school, I really want to be a software developer here in the Greater Nashville Area, near all my family and friends, that works on creating and implementing Microservices (ideally written in Golang but I'm not picky) into a company's prexisting infrastrcture. Why Microservices? Well I think Microservices have a lot of benefits when utilized properly. This first one that comes to mind is that microservices can help replace and speed up certain aspects of legacy hardware without requiring a full on rewrite and the disruption of many services. At the end of the day though I'd be content with any sort of Software Development role where I can commit to codebase and feel like I'm contributing to some sort of end goal. I'd also like to have an application with a small size userbase that I maintain in my freetime. I think my Relevant for Reddit project has a lot of potential in that regard but we'll see. As for future career, I'd like to move up to a senior development role and after being in that position for awhile, I'd potentially like to either get my MBA or try and start my own venture but that's all super far out thinking. :)"),i.a.createElement("h1",null,"Closing Notes..."),i.a.createElement("p",null,"Thanks for dropping by my page. Please feel free to check out any of my projects and if any of what I've said is of interest to you please don't hesitate to reach out. You can reach me at audaris@gmail.com."))};var k=function(){return console.log("I was displayed!"),i.a.createElement("div",null,"Projects")};a(103);var I=function(e){var t=e.name,a=e.location,n=e.alt,o=e.href;return i.a.createElement(c.b.button,{className:"iconbutton",onClick:function(){return window.open(o)},animate:{scale:[0,1]},transitions:{ease:"easeIn",duration:3},whileHover:{scale:1.3,rotate:360,duration:10}},i.a.createElement("img",{src:"".concat("").concat(a),alt:n}),t?i.a.createElement("span",null,t):"")};a(104);var N=function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"name"},i.a.createElement("h1",null,"Audaris 'Audi' Blades - Aspiring Software Developer ")),i.a.createElement(c.b.div,{className:"icons",transition:{staggerChildren:.5}},i.a.createElement(I,{location:"icons/medium-icon.svg",alt:"medium",href:"https://medium.com/@ablades"}),i.a.createElement(I,{location:"icons/github-icon.svg",alt:"github",href:"https://github.com/ablades"}),i.a.createElement(I,{location:"icons/linkedin-icon.svg",alt:"linkedin",href:"https://linkedin.com/in/ablades"}),i.a.createElement(I,{location:"icons/resume-icon.svg",alt:"resume",href:"".concat("","resume.pdf"),name:"resume"})))},x=a(85),A=a.n(x);var C=function(){return i.a.createElement("div",{style:{position:"absolute",width:"100%",height:"110%",top:0,bottom:0,left:0,right:0,overflow:"hidden",zIndex:0,backgroundColor:"black"}},i.a.createElement(A.a,{height:window.outerHeight,params:{particles:{number:{value:100},size:{value:4}},interactivity:{events:{}}}}))};var T=function(){return i.a.createElement(p.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(N,null),i.a.createElement(s.b,{render:function(e){var t=e.location;return i.a.createElement(c.a,{exitBeforeEnter:!0,initial:!1},i.a.createElement(s.d,{location:t,key:t.pathname},i.a.createElement(s.b,{exact:!0,path:"/",component:u}),i.a.createElement(s.b,{path:"/about",component:E}),i.a.createElement(s.b,{path:"/projects",component:k}),i.a.createElement(s.b,{path:"/articles",component:b})))}})),i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){},87:function(e,t,a){e.exports=a(316)},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.8249e9d2.chunk.js.map