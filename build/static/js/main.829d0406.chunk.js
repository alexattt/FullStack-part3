(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(15),s=n.n(r),a=(n(20),n(3)),o=n(0),i=function(e){var t=e.filterName,n=e.setFilter;return Object(o.jsxs)("div",{className:"filterContainer",children:["Filter by name: ",Object(o.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})]})},u=n(6),l=n(4),j=n.n(l),b="/api/persons",d=function(){return j.a.get(b).then((function(e){return e.data}))},m=function(e){return j.a.post(b,e)},f=function(e){return j.a.delete("".concat(b,"/").concat(e))},h=function(e,t){return j.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},O=function(e){var t=e.persons,n=e.setPersons,c=e.newName,r=e.setNewName,s=e.newPhoneNumber,a=e.setNewPhoneNumber,i=e.setNotificationMessage,l=e.setErrorMessage;return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var o={name:c,number:s};if(t.some((function(e){return e.name===c}))){if(window.confirm("".concat(c," is already in the phonebook, replace the old number with a new one?"))){var j=t.find((function(e){return e.name===c})),b=Object(u.a)(Object(u.a)({},j),{},{number:s});return void h(j.id,b).then((function(e){n(t.map((function(t){return t.id!==j.id?t:e})))})).catch((function(e){l("".concat(b.name," was already deleted from the server!")),setTimeout((function(){l(null)}),5e3)}))}}else r(e.target.value),m(o).then((function(e){i("Added ".concat(o.name)),setTimeout((function(){i(null)}),5e3),n(t.concat(e.data)),r(""),a("")})).catch((function(e){console.log(e.response.data.error),l("".concat(e.response.data.error)),setTimeout((function(){l(null)}),5e3)}))},children:[Object(o.jsxs)("div",{className:"personInputForm",children:["Name: ",Object(o.jsx)("input",{value:c||"",onChange:function(e){r(e.target.value)}}),Object(o.jsx)("br",{}),"Number: ",Object(o.jsx)("input",{value:s||"",onChange:function(e){a(e.target.value)}})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"addPersonBtn",type:"submit",children:"Add"})})]})},p=function(e){var t=e.persons,n=e.setPersons,c=e.filterName;return Object(o.jsx)("div",{className:"personListContainer",children:Object(o.jsx)("ul",{children:t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())||""===c})).map((function(e){return Object(o.jsxs)("div",{className:"personRow",children:[Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:e.name})}),Object(o.jsx)("p",{className:"personNumber",children:e.number}),Object(o.jsx)("button",{className:"deleteBtn",type:"button",onClick:function(){return c=e.id,r=e.name,void f(c).then((function(){window.confirm("Delete ".concat(r,"?"))&&n(t.filter((function(e){return e.id!==c})))}));var c,r},children:"Delete"})]},e.id)}))})})},N=function(e){var t=e.message;return null===t?null:Object(o.jsx)("div",{className:"notification",children:t})},v=function(e){var t=e.message;return null===t?null:Object(o.jsx)("div",{className:"error",children:t})},x=(n(40),function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),u=Object(a.a)(s,2),l=u[0],j=u[1],b=Object(c.useState)(""),m=Object(a.a)(b,2),f=m[0],h=m[1],x=Object(c.useState)(""),w=Object(a.a)(x,2),g=w[0],P=w[1],C=Object(c.useState)(null),k=Object(a.a)(C,2),S=k[0],y=k[1],E=Object(c.useState)(null),F=Object(a.a)(E,2),M=F[0],T=F[1];return Object(c.useEffect)((function(){console.log("effect"),d().then((function(e){r(e)}))}),[]),Object(o.jsxs)("div",{className:"mainContainer",children:[Object(o.jsx)(N,{message:S}),Object(o.jsx)(v,{message:M}),Object(o.jsx)("p",{className:"phonebookTitle",children:"Phonebook"}),Object(o.jsx)(i,{filterName:g,setFilter:P}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(p,{persons:n,setPersons:r,filterName:g}),Object(o.jsx)("h2",{children:"Add new contact"}),Object(o.jsx)(O,{persons:n,setPersons:r,newName:l,setNewName:j,newPhoneNumber:f,setNewPhoneNumber:h,setNotificationMessage:y,setErrorMessage:T})]})});s.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.829d0406.chunk.js.map