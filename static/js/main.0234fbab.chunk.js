(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(4),c=e.n(o),r=e(3),i=e(1),u=(e(9),e(0)),a=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",className:"".concat(t.color),children:t.name},t.id)}))})};function s(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(i.useState)(!1),d=Object(r.a)(c,2),f=d[0],l=d[1];Object(i.useEffect)((function(){f&&s().then((function(t){o(t),l(!1)}))}),[f]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){s().then((function(t){return o(t)}))},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){return o(t)}))},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){s().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return o(t)}))},children:"Load red goods"}),Object(u.jsx)(a,{goods:e})]})};c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.0234fbab.chunk.js.map