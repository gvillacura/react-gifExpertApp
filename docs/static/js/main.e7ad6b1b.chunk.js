(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),u=n(9),s=n(0),o=function(t){var e=t.setCategory,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(u.a)(t))})),o(""))},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),p=function(t){var e=t.title,n=t.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},d=n(6),b=n.n(d),f=n(8),l=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,r,c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"y&limit=10&api_key=nJd8p5oIHzpkmLpyCNUpDwoKjy1XZt16"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){l(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c},h=function(t){var e=t.category,n=O(e),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[c&&Object(s.jsx)("p",{children:"Cargando..."}),Object(s.jsx)("h3",{children:e}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(s.jsx)(p,Object(j.a)({},t),t.id)}))})]})},m=function(){var t=Object(r.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)("hr",{}),Object(s.jsx)(o,{setCategory:c}),n.map((function(t){return Object(s.jsx)(h,{category:t},t)}))]})};n(17);a.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e7ad6b1b.chunk.js.map