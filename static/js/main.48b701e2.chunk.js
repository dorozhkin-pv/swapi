(this.webpackJsonpswapi=this.webpackJsonpswapi||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/star-ship.6f011147.jpg"},50:function(e,t,a){e.exports=a(62)},55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(55),a(5)),m=a(14),s=a(67),u=a(69),i=a(71),E=a(11),p=a(65),d=a(64),f=a(42),h=a(70),g=Object(n.createContext)(),v=function(e,t){return t.findIndex((function(t){return t.id===e}))},b=function(e,t){return-1!==v(e,t)},_=a(18),O=a.n(_),N=function(e){var t,a=e.ship,l=Object(n.useContext)(g),c=l.compareArr,o=l.add,s=l.remove;return t=b(a.id,c)?r.a.createElement(d.a,{variant:"danger",onClick:function(){return s(a.id)}},"Remove"):r.a.createElement(d.a,{variant:"primary",onClick:function(){return o(a.id)}},"Add to compare"),r.a.createElement(f.a,{xs:12,md:6,xl:4,className:"mb-4"},r.a.createElement(h.a,null,r.a.createElement(h.a.Img,{variant:"top",src:O.a}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,a.name),r.a.createElement(h.a.Text,null,r.a.createElement("span",null,r.a.createElement("strong",null,"Model:")," ",a.model),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"Manufacturer:")," ",a.manufacturer),r.a.createElement("br",null)),r.a.createElement(m.b,{to:P("sw-ship",{id:a.id})},"Get more...")),t))},j=Object(n.createContext)(),x=a(66),C=function(e){var t=e.children;return r.a.createElement("tbody",{className:"table__body"},t)},y=function(e){var t=e.data,a=Object(n.useContext)(g).remove;return r.a.createElement("tr",{className:"table__row"},r.a.createElement("td",{className:"table__col"},t.name," ",r.a.createElement(d.a,{variant:"danger",onClick:function(){return a(t.id)}},"\xd7")),r.a.createElement("td",{className:"table__img"},r.a.createElement("img",{className:"table__image",src:O.a,alt:"logo"})),r.a.createElement("td",{className:"table__col"},t.model),r.a.createElement("td",{className:"table__col"},t.manufacturer),r.a.createElement("td",{className:"table__col"},t.cost_in_credits),r.a.createElement("td",{className:"table__col"},t.length),r.a.createElement("td",{className:"table__col"},t.max_atmosphering_speed),r.a.createElement("td",{className:"table__col"},t.crew),r.a.createElement("td",{className:"table__col"},t.passengers),r.a.createElement("td",{className:"table__col"},t.cargo_capacity),r.a.createElement("td",{className:"table__col"},t.consumables),r.a.createElement("td",{className:"table__col"},t.hyperdrive_rating),r.a.createElement("td",{className:"table__col"},t.MGLT),r.a.createElement("td",{className:"table__col"},t.starship_class))},A=function(e){var t=e.tableData.map((function(e){return r.a.createElement(y,{data:e,key:e.id})}));return r.a.createElement("div",{className:"overflow"},r.a.createElement(x.a,{className:"table",striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement(C,null,t)))},w=[{name:"home",path:"/",component:function(){var e,t=Object(n.useState)([]),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useContext)(j).getDataFromAPI;return Object(n.useEffect)((function(){o().then((function(e){var t=e.map((function(e){return r.a.createElement(N,{ship:e,key:e.name})}));c(t)}))}),[o]),e=l.length?r.a.createElement(p.a,null,l):r.a.createElement("h4",null,"Loading..."),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"StarShips list"),r.a.createElement("hr",null),e)}},{name:"sw-ship",path:"/sw-ship/:id",component:function(e){var t,a=+e.match.params.id,l=Object(n.useState)([]),c=Object(E.a)(l,2),o=c[0],m=c[1],s=Object(n.useContext)(j).getDataFromAPI,u=Object(n.useContext)(g),i=u.compareArr,p=u.add,f=u.remove;if(Object(n.useEffect)((function(){s().then((function(e){return m(e)}))}),[s]),o.length){var h,_=o[v(a,o)];h=b(_.id,i)?r.a.createElement(d.a,{variant:"danger",onClick:function(){return f(_.id)}},"Remove"):r.a.createElement(d.a,{variant:"primary",onClick:function(){return p(_.id)}},"Add to compare"),t=r.a.createElement("div",{className:"ship"},r.a.createElement("div",{className:"ship__content"},r.a.createElement("div",{className:"ship__logo"},r.a.createElement("img",{className:"ship__img",src:O.a,alt:"ship"}),h),r.a.createElement("div",{className:"ship__params"},r.a.createElement("h1",null,_.name),r.a.createElement("p",null,r.a.createElement("strong",null,"model: "),_.model),r.a.createElement("p",null,r.a.createElement("strong",null,"manufacturer: "),_.manufacturer),r.a.createElement("p",null,r.a.createElement("strong",null,"cost: "),_.cost_in_credits),r.a.createElement("p",null,r.a.createElement("strong",null,"length: "),_.length," meters"),r.a.createElement("p",null,r.a.createElement("strong",null,"max atmosphering speed: "),_.max_atmosphering_speed),r.a.createElement("p",null,r.a.createElement("strong",null,"crew: "),_.crew),r.a.createElement("p",null,r.a.createElement("strong",null,"passengers: "),_.passengers),r.a.createElement("p",null,r.a.createElement("strong",null,"cargo: "),_.cargo_capacity),r.a.createElement("p",null,r.a.createElement("strong",null,"consumables: "),_.consumables),r.a.createElement("p",null,r.a.createElement("strong",null,"hyperdrive rating: "),_.hyperdrive_rating),r.a.createElement("p",null,r.a.createElement("strong",null,"MGLT: "),_.MGLT),r.a.createElement("p",null,r.a.createElement("strong",null,"starship class: "),_.starship_class))))}else t=r.a.createElement("h4",null,"Loading...");return r.a.createElement(r.a.Fragment,null,t)}},{name:"compare",path:"/compare",component:function(){var e,t=Object(n.useState)([]),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useContext)(j).getDataFromAPI,s=Object(n.useContext)(g).compareArr;if(Object(n.useEffect)((function(){o().then((function(e){return c(e)}))}),[o]),l.length){var u=s.map((function(e){return l[v(e.id,l)]}));e=u.length?r.a.createElement(A,{tableData:u}):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h4",null,"There is nothing to compare"),r.a.createElement("p",null,"Add star-ships from the form above or ",r.a.createElement(m.b,{to:"/"},"home page")," home page"))}else e=r.a.createElement("h4",null,"Loading...");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Compare ships"),r.a.createElement("hr",null),e)}},{path:"**",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Page not found 404"))},exact:!1}],k={};function P(e,t){if(e in k){var a=k[e];for(var n in t)a=a.replace(":".concat(n),t[n]);return a}}w.forEach((function(e){"name"in e&&(k[e.name]=e.path)}));var D,M=a(68),F=a(47),S=a(72),I=function(e){var t=e.cliclHandler,a=e.item;return r.a.createElement(S.a.Item,{className:"search__list-item",onClick:function(){return t(a.id)}},a.name)},L=function(e){var t,a=e.found,n=e.cliclHandler;return t=a.map((function(e){return r.a.createElement(I,{key:e.id,item:e,cliclHandler:n})})),r.a.createElement(S.a,{className:"search__list"},t)},R=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(E.a)(c,2),m=o[0],s=o[1],u=Object(n.useContext)(j).getDataFromAPI,i=Object(n.useContext)(g),p=i.compareArr,d=i.add;Object(n.useEffect)((function(){u().then((function(e){return s(e)}))}),[u]);var f;m.length&&(f=m.filter((function(e){return!p.some((function(t){return t.id===e.id}))})).filter((function(e){return t=e.name.toLowerCase(),n=a.trim().toLowerCase(),-1!==t.indexOf(n);var t,n})));return r.a.createElement(M.a,{inline:!0,className:"search"},r.a.createElement(F.a,{type:"text",placeholder:"Search to compare",className:"mr-sm-2",value:a,onChange:function(e){return function(e){l(e.target.value)}(e)}}),a&&r.a.createElement(L,{found:f,cliclHandler:function(e){d(e),l("")}}))},T=function(){return r.a.createElement(u.a,{collapseOnSelect:!0,expand:"lg",className:"navbar",bg:"primary",variant:"dark"},r.a.createElement(s.a,null,r.a.createElement(u.a.Brand,null,r.a.createElement(m.b,{className:"logo",to:"/"},"SWAPI")),r.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"toggle"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav",className:"toggle"},r.a.createElement(i.a,{className:"mr-auto ml-5"},r.a.createElement(m.c,{exact:!0,to:k.home,className:"nav-link",activeClassName:"active"},"Home"),r.a.createElement(m.c,{to:k.compare,className:"nav-link",activeClassName:"active"},"Compare")),r.a.createElement(R,null))))},H=function(e){return fetch(e).then((function(e){return e.json()}))},B=function(e){var t=e.children;return r.a.createElement(j.Provider,{value:{getDataFromAPI:function(){return H("https://swapi.dev/api/films/2/").then((function(e){var t=[];return e.starships.forEach((function(e){var a=e.replace("http","https");t.push(H(a))})),Promise.all(t).then((function(e){return e.map((function(e,t){return e.id=t,e}))}))}))}}},t)},G=a(33),W=a(38),J=(D={},Object(G.a)(D,"ADD_COMPARE",(function(e,t){var a=t.payload;return[].concat(Object(W.a)(e),Object(W.a)(a))})),Object(G.a)(D,"REMOVE_COMPARE",(function(e,t){var a=t.payload;return e.filter((function(e){return e.id!==a}))})),Object(G.a)(D,"DEFAULT",(function(e){return e})),D),U=function(e,t){return(J[t.type]||J.DEFAULT)(e,t)},V=function(e){var t=e.children,a=Object(n.useReducer)(U,[]),l=Object(E.a)(a,2),c=l[0],o=l[1];return r.a.createElement(g.Provider,{value:{add:function(e){o({type:"ADD_COMPARE",payload:[{id:e}]})},remove:function(e){o({type:"REMOVE_COMPARE",payload:e})},compareArr:c}},t)};var $=function(){var e=w.map((function(e){return r.a.createElement(o.a,{key:e.path,path:e.path,component:e.component,exact:!("exact"in e)||e.exact})}));return r.a.createElement(B,null,r.a.createElement(V,null,r.a.createElement(m.a,null,r.a.createElement(T,null),r.a.createElement(s.a,null,r.a.createElement(o.c,null,e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.48b701e2.chunk.js.map