"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[956],{8026:function(n,e,r){r.d(e,{Bc:function(){return m},c1:function(){return l},lX:function(){return c},yt:function(){return d}});var t,o,i,a,u=r(168),s=r(1242),c=s.ZP.label(t||(t=(0,u.Z)(["\n    display: block;\n    text-align: center;\n    color: ",";\n    font-weight: 600;\n"])),(function(n){return n.theme.darkGrey})),d=s.ZP.input(o||(o=(0,u.Z)(["\n    display: block;\n    width: 340px;\n    height: 24px;\n     margin-bottom: 24px;\n     margin-top: 8px;\n     padding-left: 8px;\n    border: 1px solid ",";\n    border-radius: 5px;\n    \n"])),(function(n){return n.theme.darkBlue})),l=s.ZP.button(i||(i=(0,u.Z)(["\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 148px;\n    height: 40px;\n    border-style: solid;\n    border-radius: 5px;\n    border-width: 2px;\n    border-color: ",";\n    background-color: ",";\n    color: white;\n    font-size: 16px;\n    cursor: pointer;\n    transition-property: transform;\n  transition-duration: 500ms;\n\n    &:hover {\n       transform: scale(1.08);\n    }\n"])),(function(n){return n.theme.darkBlue}),(function(n){return n.theme.darkBlue})),m=s.ZP.div(a||(a=(0,u.Z)(["\n   margin-bottom: 12px;\n    font-weight: 400;\n    font-size: 12px;\n    width: 340px;\n    color: red;\n    text-align: left;\n"])))},6781:function(n,e){e.Z={darkBlue:"#0c005a",red:"#bc2525",green:"#00420b",darkGrey:"#323643",lightGray:"#787675"}},1956:function(n,e,r){r.r(e),r.d(e,{default:function(){return tn}});var t,o,i,a,u,s,c,d,l,m,h,x,p,b=r(1413),f=r(885),g=r(5705),j=r(968),Z=j.Ry({name:j.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"* Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore").required("* Required"),number:j.Z_().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,"* Phone number must be digits and can contain spaces, dashes, parentheses in country code and can start with +").required("* Required")}),y=r(5048),k=r(8026),v=r(721),P=r(7909),w=r(3329),C=function(){var n=(0,y.v9)(P.LP),e=(0,v.Tn)(),r=(0,f.Z)(e,1)[0],t=(0,v.wY)(n,{skip:null===n}).data;return(0,w.jsx)(g.J9,{initialValues:{name:"",number:""},validationSchema:Z,onSubmit:function(e,o){return function(e,o){var i=o.resetForm;if(t.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))return i(),alert("".concat(e.name," is already in contacts"));r({token:n,name:e.name,number:e.number}),i()}(e,o)},children:function(n){return(0,w.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,w.jsxs)(k.lX,{htmlFor:"name",children:["Name",(0,w.jsx)(k.yt,(0,b.Z)({id:"name",name:"name",type:"text"},n.getFieldProps("name"))),n.touched.name&&n.errors.name?(0,w.jsx)(k.Bc,{children:n.errors.name}):null]}),(0,w.jsxs)(k.lX,{htmlFor:"number",children:["Number",(0,w.jsx)(k.yt,(0,b.Z)({id:"number",name:"number",type:"text"},n.getFieldProps("number"))),n.touched.number&&n.errors.number?(0,w.jsx)(k.Bc,{children:n.errors.number}):null]}),(0,w.jsx)(k.c1,{type:"submit",children:"Add contact"})]})}})},B=r(2791),F=r(3762),S=function(){var n=(0,y.I0)();return(0,w.jsxs)(k.lX,{children:["Find contacts by name",(0,w.jsx)(k.yt,{autoComplete:"off",type:"text",name:"filter",onChange:function(e){n((0,F.m)(e.currentTarget.value))},required:!0})]})},z=r(168),L=r(1242),_=L.ZP.div(t||(t=(0,z.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),N=L.ZP.label(o||(o=(0,z.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 8px;\n    align-items: center;\n    font-size: 14px;\n    color: #323643;\n    font-weight: 600;\n"]))),q=L.ZP.input(i||(i=(0,z.Z)(["\n    width: 268px;\n    height: 20px;\n    padding-left: 6px;\n    border: 0.5px solid ",";\n    border-radius: 5px;\n"])),(function(n){return n.theme.darkBlue})),A=L.ZP.div(a||(a=(0,z.Z)(["\n     margin-left: 74px;\n     margin-bottom: 16px;\n"]))),$=L.ZP.button(u||(u=(0,z.Z)(["\n    margin-right: 8px;\n    border: 0.5px solid ",";\n    border-radius: 5px;\n    background-color: transparent;\n    color: ",";\n    cursor: pointer;\n    \n"])),(function(n){return n.theme.red}),(function(n){return n.theme.red})),G=L.ZP.button(s||(s=(0,z.Z)(["\n  \n    border: 0.5px solid ",";\n    border-radius: 5px;\n    background-color: transparent;\n    color: ",";\n    cursor: pointer;\n"])),(function(n){return n.theme.green}),(function(n){return n.theme.green})),X=function(n){var e=n.id,r=n.onClose,t=(0,v.i)(),o=(0,f.Z)(t,1)[0],i=(0,y.v9)(P.LP),a=(0,v.wY)(i,{skip:null===i}).data.find((function(n){return n.id===e}));return a&&(0,w.jsx)(g.J9,{initialValues:{name:a.name,number:a.number},validationSchema:Z,onSubmit:function(n){return function(n){o({contactId:e,token:i,name:n.name,number:n.number}),r()}(n)},children:function(n){return(0,w.jsxs)("form",{onSubmit:n.handleSubmit,autoComplete:"off",children:[(0,w.jsxs)(_,{children:[(0,w.jsxs)(N,{htmlFor:"name",children:["Name",(0,w.jsx)(q,(0,b.Z)({id:"name",name:"name",type:"text"},n.getFieldProps("name")))]}),(0,w.jsx)("div",{children:n.touched.name&&n.errors.name?(0,w.jsx)(k.Bc,{children:n.errors.name}):null}),(0,w.jsxs)(N,{htmlFor:"number",children:["Number",(0,w.jsx)(q,(0,b.Z)({id:"number",name:"number",type:"text"},n.getFieldProps("number")))]}),(0,w.jsx)("div",{children:n.touched.number&&n.errors.number?(0,w.jsx)(k.Bc,{children:n.errors.number}):null})]}),(0,w.jsxs)(A,{children:[(0,w.jsx)($,{type:"button",onClick:r,children:"Cancel"}),(0,w.jsx)(G,{type:"submit",children:"Confirm"})]})]})}})},Y=r(828),I=r(3853),J=r(9983),M=L.ZP.li(c||(c=(0,z.Z)(["\n  list-style-type: none;\n  width: 340px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n    font-size: 16px;\n    color: ",";\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.theme.darkBlue})),R=L.ZP.button(d||(d=(0,z.Z)(["\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  :not(:first-child) {\nmargin-left: 8px;\n  }\n"]))),O=L.ZP.div(l||(l=(0,z.Z)(["\n  display: flex;\n"]))),T=function(n){var e=n.id,r=n.name,t=n.phone,o=(0,B.useState)(!1),i=(0,f.Z)(o,2),a=i[0],u=i[1],s=(0,v.Nt)(),c=(0,f.Z)(s,1)[0],d=(0,y.v9)(P.LP);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(M,{id:e,children:[r,": ",t,(0,w.jsxs)(O,{children:[(0,w.jsx)(J.Pd.Provider,{value:{color:"#00420b",size:"18px"},children:(0,w.jsx)(R,{type:"button",onClick:function(){return u(!0)},children:(0,w.jsx)(I.vPQ,{})})}),(0,w.jsx)(J.Pd.Provider,{value:{color:"#bc2525",size:"18px"},children:(0,w.jsx)(R,{type:"button",onClick:function(){return c({contactId:e,token:d})},children:(0,w.jsx)(Y.ZCS,{})})})]})]},e),a&&(0,w.jsx)("div",{children:(0,w.jsx)(X,{onClose:function(){return u(!1)},id:e})})]})},V=L.ZP.ul(m||(m=(0,z.Z)(["\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0px;\n"]))),E=function(){var n=(0,y.v9)(F.B8),e=(0,y.v9)(P.LP),r=(0,v.wY)(e,{skip:null===e}),t=r.data,o=r.isSuccess,i=function(){if(o)return t.filter((function(e){return e.name.toLowerCase().includes(n.trim().toLowerCase())}))}();return(0,w.jsx)(V,{children:i&&i.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,w.jsx)(T,{id:e,name:r,phone:t},e)}))})},Q=L.ZP.p(h||(h=(0,z.Z)(["\n    text-align: center;\n    font-weight: 600;\n    color: ",";\n"])),(function(n){return n.theme.darkGrey})),W=L.ZP.span(x||(x=(0,z.Z)(["\nmargin-bottom: 8px;\n    font-size: 18px;\n    display: block;\n    color: ",";\n\n"])),(function(n){return n.theme.darkBlue})),D=L.ZP.button(p||(p=(0,z.Z)(["\nmargin-bottom: 30px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    border: 0.5px solid ",";\n    border-radius: 5px;\n    background-color: transparent;\n    color: ",";\n    cursor: pointer;\n"])),(function(n){return n.theme.red}),(function(n){return n.theme.red})),H=r(8824),K=function(){var n=(0,y.v9)(P.vW),e=(0,y.v9)(P.LP),r=(0,H.$n)(),t=(0,f.Z)(r,1)[0];return(0,w.jsxs)("div",{children:[(0,w.jsx)(D,{onClick:function(){t(e)},children:"LogOut"}),(0,w.jsxs)(Q,{children:[(0,w.jsxs)(W,{children:[n,","]}),"welcome to your"]})]})},U=r(6781),nn=r(7169),en=r.n(nn),rn=r(4519),tn=function(){var n=(0,y.v9)(P.LP),e=(0,y.v9)(P.M7),r=(0,v.wY)(n,{skip:null===n}),t=r.data,o=r.isFetching,i=r.isError,a=r.isSuccess;return(0,w.jsx)(L.f6,{theme:U.Z,children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(rn.$0,{children:[e&&(0,w.jsx)(K,{}),(0,w.jsx)(rn.Mw,{children:"Phonebook"}),(0,w.jsx)(C,{})]}),(0,w.jsxs)(rn.$0,{children:[(0,w.jsx)(rn.Ct,{children:"Contacts"}),(0,w.jsx)(S,{}),i&&(0,w.jsx)(rn.jC,{children:"Oops! Something went wrong..."}),o&&(0,w.jsx)(rn.jC,{children:(0,w.jsx)(en(),{color:U.Z.darkBlue,loading:!0,size:10,margin:2})}),a&&0===t.length&&(0,w.jsx)(rn.jC,{children:"No contacts here"}),a&&(0,w.jsx)(E,{})]})]})})}}}]);
//# sourceMappingURL=956.5537aa8f.chunk.js.map