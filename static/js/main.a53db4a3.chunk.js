(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(40)},28:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=a(2),m=a(6),s=a(1),i=(a(28),a(8)),u=(a(29),a(11)),d=a(12);a(30);var p=function(e){var t=Object(s.f)(),a=Object(n.useContext)(b),r=Object(o.a)(a.loggedin,2),c=r[0],p=r[1],f=Object(o.a)(a.currentuser,2),E=f[0],g=f[1],h=Object(n.useState)({email:"",password:""}),N=Object(o.a)(h,2),v=N[0],x=N[1];function w(e){x(Object(d.a)(Object(d.a)({},v),{},Object(u.a)({},e.target.name,e.target.value)))}return l.a.createElement("div",{className:"login"},c?l.a.createElement("p",{className:"text-center font-weight-normal display-4"},"Already Logged In"):l.a.createElement("div",{className:"container pt-5"},l.a.createElement("p",{className:"text-center font-weight-normal font-italic display-4",style:{color:"black"}},"Login"),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("form",{style:{width:"50%"},onSubmit:function(e){e.preventDefault(),E.email===v.email?E.password===v.password?(i.a.success("Successfully Loggedin",{className:"text-center mt-4 rounded"}),p(!0),g(v),t.push("/homepage")):i.a.error("Password doen't match",{className:"text-center mt-4 rounded"}):(i.a.error("User Doesn't exists",{className:"text-center mt-4 rounded"}),x(""))}},l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:v.email,onChange:function(e){return w(e)},className:"form-control my-3",required:!0}),l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:v.password,onChange:function(e){return w(e)},className:"form-control my-3",required:!0}),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("button",{className:"btn font-weight-bold px-5 btn-warning"},"Login")),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(m.b,{to:"/signup",className:"text-center text-white font-weight-bold mt-2"},"New User?Sign Up"))))))},f=a(18);a(38);var E=function(e){var t=Object(s.f)(),a=Object(n.useContext)(b),r=Object(o.a)(a.loggedin,2),c=r[0],p=r[1],f=Object(o.a)(a.currentuser,2),E=(f[0],f[1]),g=Object(n.useState)(!1),h=Object(o.a)(g,2),N=h[0],v=h[1],x=Object(n.useState)([]),w=Object(o.a)(x,2),y=(w[0],w[1],Object(n.useState)(!1)),j=Object(o.a)(y,2),O=j[0],C=j[1],S=Object(n.useState)(!1),q=Object(o.a)(S,2),F=q[0],A=q[1],k=Object(n.useState)({}),I=Object(o.a)(k,2),L=I[0],P=I[1];function D(e){P(Object(d.a)(Object(d.a)({},L),{},Object(u.a)({},e.target.name,e.target.value))),"doctor"===e.target.value&&(v(!0),A(!1),C(!1)),"clinic"===e.target.value&&(v(!1),A(!1),C(!0)),"patient"===e.target.value&&(v(!1),A(!0),C(!1))}return l.a.createElement("div",{className:"signup"},c?l.a.createElement("p",{className:"text-center font-weight-normal display-4"},"Already Logged In"):l.a.createElement("div",{className:"container pt-5 "},l.a.createElement("p",{className:"text-center font-italic display-4 font-weight-normal",style:{color:"black"}},"Sign Up"),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("form",{style:{width:"50%"},onSubmit:function(e){e.preventDefault(),i.a.success("Successfully Registered",{className:"text-center mt-4 rounded"}),E(L),p(!0),t.push("/homepage")}},l.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){return D(e)},className:"form-control my-3",required:!0}),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6 col-sm-3"},l.a.createElement("input",{type:"email",name:"email",onChange:function(e){return D(e)},placeholder:"Email",className:"form-control",required:!0})),l.a.createElement("div",{className:"form-group col-md-6 col-sm-3"},l.a.createElement("input",{type:"password",name:"password",onChange:function(e){return D(e)},placeholder:"Password",className:"form-control",required:!0}))),l.a.createElement("div",{className:"dropdown mr-1"},l.a.createElement("div",{className:"form-group"},l.a.createElement("select",{onChange:function(e){return D(e)},name:"sex",className:"form-control mb-3",required:!0},l.a.createElement("option",null,"Select Your Gender"),l.a.createElement("option",{value:"male"},"male"),l.a.createElement("option",{value:"female"},"Female"),l.a.createElement("option",{value:"others"},"Others")))),l.a.createElement("textarea",{cols:"10",rows:"4",placeholder:"Enter your address here...",className:"form-control",required:!0}),l.a.createElement("input",{type:"text",name:"mobile",placeholder:"Mobile no",onChange:function(e){return D(e)},className:"form-control my-3",required:!0}),l.a.createElement("div",{className:"dropdown mr-1"},l.a.createElement("div",{className:"form-group"},l.a.createElement("select",{onChange:function(e){return D(e)},name:"role",className:"form-control mb-3",required:!0},l.a.createElement("option",null,"Select Your Role"),l.a.createElement("option",{value:"doctor"},"Doctor"),l.a.createElement("option",{value:"clinic"},"Clinic"),l.a.createElement("option",{value:"patient"},"Patient")))),N?l.a.createElement("div",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputEmail4",className:"font-weight-bold"},"MCI Number"),l.a.createElement("input",{type:"text",onChange:function(e){return D(e)},className:"form-control",name:"mcino",id:"inputEmail4",placeholder:"MCI NO",required:!0})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputPassword4",className:"font-weight-bold"},"Qualifications"),l.a.createElement("input",{type:"text",onChange:function(e){return D(e)},name:"qualifications",className:"form-control",id:"inputPassword4",placeholder:"MBBS..,MD..,etc..",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputAddress",className:"font-weight-bold"},"Specialization"),l.a.createElement("input",{type:"text",onChange:function(e){return D(e)},name:"specialization",className:"form-control",id:"inputAddress",placeholder:"Cardiologist,Neuroligist,etc...",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"font-weight-bold text-center"},"Select Your Consulting Hours"),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("label",{htmlFor:"from",className:"font-weight-bold px-2"},"From:"),l.a.createElement("input",{type:"time",name:"from",onChange:function(e){return D(e)},className:"form-control",id:"from",required:!0}),l.a.createElement("label",{htmlFor:"to",className:"font-weight-bold px-2"},"To:"),l.a.createElement("input",{type:"time",name:"to",onChange:function(e){return D(e)},className:"form-control",id:"to",required:!0})))):null,O?l.a.createElement("div",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputEmail4",className:"font-weight-bold"},"Clinic Id"),l.a.createElement("input",{type:"text",onChange:function(e){return D(e)},className:"form-control",name:"clinincid",id:"inputEmail4",placeholder:"Clinic ID",required:!0})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputAddress",className:"font-weight-bold"},"Specializations Available"),l.a.createElement("input",{type:"text",onChange:function(e){return D(e)},name:"specializations",className:"form-control",id:"inputAddress",placeholder:"Cardiologist,Neuroligist,etc...",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"font-weight-bold text-center"},"Clinic Working Hours"),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("label",{htmlFor:"from",className:"font-weight-bold px-2"},"From:"),l.a.createElement("input",{type:"time",name:"from",onChange:function(e){return D(e)},className:"form-control",id:"from",required:!0}),l.a.createElement("label",{htmlFor:"to",className:"font-weight-bold px-2"},"To:"),l.a.createElement("input",{type:"time",name:"to",onChange:function(e){return D(e)},className:"form-control",id:"to",required:!0})))):null,F?l.a.createElement("div",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputEmail4",className:"font-weight-bold"},"Blood Group"),l.a.createElement("input",{type:"text",onChange:function(e){return D(e)},className:"form-control",name:"bloodgroup",id:"inputEmail4",placeholder:"O+ve,AB-ve",required:!0})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputAddress",className:"font-weight-bold"},"Blood Pressure"),l.a.createElement("input",{type:"text",onChange:function(e){return D(e)},name:"Blood Pressure",className:"form-control",id:"inputAddress",placeholder:"In numbers only",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputEmail4",className:"font-weight-bold"},"Sugar Level"),l.a.createElement("input",{type:"text",onChange:function(e){return D(e)},className:"form-control",name:"sugarlevel",id:"inputEmail4",placeholder:"In numbers only",required:!0}))):null,l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement("button",{className:"btn btn-warning font-weight-bold px-5"},"Sign Up")),l.a.createElement("div",{className:"d-flex justify-content-center mb-3"},l.a.createElement(m.b,{to:"/login",className:"text-center text-white font-weight-bold mt-2"},"Already a User?Login"))))))};a(39);var g=function(e){var t=Object(n.useContext)(b),a=Object(o.a)(t.loggedin,2),r=a[0],c=(a[1],Object(o.a)(t.currentuser,2)),m=c[0];return c[1],l.a.createElement("div",{className:"homepage"},r?l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",null,"Dashboard"),l.a.createElement("p",{className:"text-center font-weight-normal "},"Signed in as ",m.role)):l.a.createElement("p",{className:"text-black text-center font-italic font-weight-normal display-4 pt-5"},"Please Log In to view Dashboard"))},b=Object(n.createContext)(),h=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(),s=Object(o.a)(m,2),i=s[0],u=s[1];return l.a.createElement(b.Provider,{value:{loggedin:[r,c],currentuser:[i,u]}},e.children)};i.a.configure({autoClose:2e3});var N=function(e){var t=Object(n.useContext)(b),a=Object(o.a)(t.loggedin,2),r=a[0],c=a[1],u=Object(o.a)(t.currentuser,2),d=u[0];return u[1],l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement("div",{style:{backgroundColor:"white"}},l.a.createElement("nav",{className:"navbar navbar-expand container",style:{height:"55px"}},l.a.createElement("div",{className:"container ml-3"},l.a.createElement("div",{className:"d-flex justify-content-start"},l.a.createElement(m.b,{to:"/medisen",className:"navbar-brand font-weight-bold"},l.a.createElement(f.a,null),"MEDISEN"),r?l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/homepage",className:"nav-link font-weight-bold text-dark"},"Dashboard"))):null),l.a.createElement("div",{className:"d-flex justify-content-end mt-2"},l.a.createElement("div",{className:"float-right d-flex"},r?l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("p",{className:"pt-2 font-weight-bold"},d.email.slice(0,8),"..."),l.a.createElement(m.b,{to:"/medisen",className:"mt-1"},l.a.createElement("button",{className:"btn btn-sm btn-warning font-weight-bold ml-2 ",onClick:function(){c(!1),i.a.success("Logged out Successfully",{className:"text-center mt-4 rounded"})}},"Log Out"))):l.a.createElement("div",{className:"d-flex"},l.a.createElement(m.b,{to:"/login"},l.a.createElement("p",{className:"font-weight-bold mr-4"},"Login")),l.a.createElement(m.b,{to:"/signup"},l.a.createElement("p",{className:"font-weight-bold "},"Sign Up")))))))),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/homepage",exact:!0,component:g}),l.a.createElement(s.a,{path:"/login",exact:!0,component:p}),l.a.createElement(s.a,{path:"/signup",exact:!0,component:E}),l.a.createElement(s.a,{path:"/medisen",exact:!0},l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"row container"},l.a.createElement("div",{style:{paddingTop:"130px"},className:"col-sm-2 col-md-5"},l.a.createElement("div",{className:"text-center text-white",style:{fontSize:"30px"}},l.a.createElement(f.b,null)),l.a.createElement("h1",{className:"text-center font-italic text-white"},"We Are Committed To Your Health"),l.a.createElement("p",{className:"text-center mt-5 font-weight-bold text-white"},"The Richest Man in the World is Person without illness"),r?null:l.a.createElement(m.b,{to:"/login",className:"justify-content-center d-flex"},l.a.createElement("button",{className:"btn btn-warning font-weight-bold rounded"},"Make an Appointment")))))))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null,l.a.createElement(N,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a53db4a3.chunk.js.map