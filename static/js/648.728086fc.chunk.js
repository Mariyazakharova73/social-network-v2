"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[648],{7284:function(e,t,n){n.d(t,{D:function(){return d}});var r=n(1413),s=n(5987),a=(n(2791),n(7689)),i=n(3585),o=n(8687),u=n(184),c=["isAuth"],l=function(e){return{isAuth:e.authReducer.isAuth}};function d(e){return(0,o.$j)(l)((function(t){var n=t.isAuth,o=(0,s.Z)(t,c);return n?(0,u.jsx)(e,(0,r.Z)({},o)):(0,u.jsx)(a.Fg,{to:i.wm})}))}},7648:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(8687),s=n(9439),a=n(2791),i=n(1087),o=n(9900),u=n(5021),c=n(653),l=n(3044),d=n(6278),m=n(3250),f=n(184),x=function(e){var t=e.item,n=e.index,r=e.selectedIndex,s=e.handleListItemClick;return(0,f.jsx)(u.ZP,{selected:r===n,onClick:function(){return s(n)},children:(0,f.jsx)(i.OL,{to:"".concat(t.id),className:m.Z.link,children:(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(c.Z,{children:(0,f.jsx)(l.Z,{alt:t.name,src:"/static/images/avatar/1.jpg"})}),(0,f.jsx)(o.Z,{primary:t.name})]})})})},g=function(e){var t=e.message,n=e.index;return(0,f.jsxs)(u.ZP,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",borderRadius:5,m:3,p:2},children:[(0,f.jsx)(c.Z,{children:(0,f.jsx)(l.Z,{alt:n%2===0?"":"M",src:"/static/images/avatar/1.jpg"})}),(0,f.jsx)(o.Z,{children:t})]})},Z=n(6314),h=n(4721),j=n(493),v=n(4554),p=n(6151),w=n(1686),I=n(2506),y=n(7491),b=n(7460),M=function(e){var t=e.addNewMessage;return(0,f.jsx)(I.J9,{initialValues:{newMessageBody:""},onSubmit:function(e,n){var r=n.resetForm;t(e.newMessageBody),r()},validationSchema:y.f8,validateOnBlur:!0,children:function(e){e.values,e.handleChange;var t=e.errors,n=e.touched,r=e.dirty;return(0,f.jsxs)(I.l0,{children:[(0,b.Gr)("newMessageBody",null,n,t,"text","medium",!0,"Enter your message","filled",!0),(0,f.jsx)(v.Z,{mt:2,sx:{textAlign:"end"},children:(0,f.jsx)(p.Z,{variant:"contained",type:"submit",endIcon:(0,f.jsx)(w.Z,{}),disabled:!r||!!t.newMessageBody,children:"Send"})})]})}})},S=function(e){var t=e.sendMessage,n=e.dialogsPage,r=a.useState(0),i=(0,s.Z)(r,2),o=i[0],u=i[1],c=n.messages,l=n.dialogs,d=function(e){u(e)};return(0,f.jsxs)(Z.Z,{direction:"row",spacing:2,divider:(0,f.jsx)(h.Z,{orientation:"vertical",flexItem:!0}),children:[(0,f.jsx)(j.Z,{children:l.map((function(e,t){return(0,f.jsx)(x,{handleListItemClick:d,item:e,index:t,selectedIndex:o},e.id)}))}),(0,f.jsxs)(v.Z,{children:[(0,f.jsx)(j.Z,{children:c.map((function(e,t){return(0,f.jsx)(g,{message:e.message,index:t},t)}))}),(0,f.jsx)(M,{addNewMessage:function(e){t(e)}})]})]})},k=n(7284),A=n(8157),C=(0,n(7781).qC)((0,r.$j)((function(e){return{dialogsPage:e.dialogsReducer}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:A.w,newMessageBody:e}}(t))}}})),k.D)(S)},653:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(3366),s=n(7462),a=n(2791),i=n(8182),o=n(4419),u=n(6199),c=n(6934),l=n(1402),d=n(5878),m=n(1217);function f(e){return(0,m.Z)("MuiListItemAvatar",e)}(0,d.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var x=n(184),g=["className"],Z=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,s.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),h=a.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiListItemAvatar"}),c=n.className,d=(0,r.Z)(n,g),m=a.useContext(u.Z),h=(0,s.Z)({},n,{alignItems:m.alignItems}),j=function(e){var t=e.alignItems,n=e.classes,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,o.Z)(r,f,n)}(h);return(0,x.jsx)(Z,(0,s.Z)({className:(0,i.Z)(j.root,c),ownerState:h,ref:t},d))}))},5987:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(3366);function s(e,t){if(null==e)return{};var n,s,a=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}}}]);
//# sourceMappingURL=648.728086fc.chunk.js.map