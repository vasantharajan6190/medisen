(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},33:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(10),r=a.n(o),c=a(1),m=a(4),i=a(2),s=(a(31),a(5)),d=(a(32),a(12)),u=a(8);a(33);var p=function(e){var t=Object(i.f)(),a=Object(n.useContext)(v),o=Object(c.a)(a.loggedin,2),r=o[0],p=o[1],f=Object(c.a)(a.currentuser,2),b=f[0],g=f[1],E=Object(n.useState)({email:"",password:""}),h=Object(c.a)(E,2),N=h[0],w=h[1];function x(e){w(Object(u.a)(Object(u.a)({},N),{},Object(d.a)({},e.target.name,e.target.value)))}return l.a.createElement("div",{className:"login"},r?l.a.createElement("p",{className:"text-center font-weight-normal display-4"},"Already Logged In"):l.a.createElement("div",{className:"container pt-5"},l.a.createElement("p",{className:"text-center font-weight-normal font-italic display-4",style:{color:"black"}},"Login"),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("form",{style:{width:"50%"},onSubmit:function(e){e.preventDefault(),b.email===N.email?b.password===N.password?(s.a.success("Successfully Loggedin",{className:"text-center mt-4 rounded"}),p(!0),g(N),t.push("/homepage")):s.a.error("Password doen't match",{className:"text-center mt-4 rounded"}):(s.a.error("User Doesn't exists",{className:"text-center mt-4 rounded"}),w(""))}},l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:N.email,onChange:function(e){return x(e)},className:"form-control my-3",required:!0}),l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:N.password,onChange:function(e){return x(e)},className:"form-control my-3",required:!0}),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("button",{className:"btn font-weight-bold px-5 btn-warning"},"Login")),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(m.b,{to:"/signup",className:"text-center text-white font-weight-bold mt-2"},"New User?Sign Up"))))))},f=a(16);a(41);var b=function(e){var t=Object(i.f)(),a=Object(n.useContext)(v),o=Object(c.a)(a.loggedin,2),r=o[0],p=o[1],f=Object(c.a)(a.currentuser,2),b=(f[0],f[1]),g=Object(n.useState)(!1),E=Object(c.a)(g,2),h=E[0],N=E[1],w=Object(n.useState)([]),x=Object(c.a)(w,2),j=(x[0],x[1],Object(n.useState)(!1)),O=Object(c.a)(j,2),y=O[0],C=O[1],S=Object(n.useState)(!1),k=Object(c.a)(S,2),A=k[0],q=k[1],M=Object(n.useState)({}),F=Object(c.a)(M,2),z=F[0],D=F[1];function B(e){D(Object(u.a)(Object(u.a)({},z),{},Object(d.a)({},e.target.name,e.target.value))),"doctor"===e.target.value&&(N(!0),q(!1),C(!1)),"clinic"===e.target.value&&(N(!1),q(!1),C(!0)),"patient"===e.target.value&&(N(!1),q(!0),C(!1))}return l.a.createElement("div",{className:"signup"},r?l.a.createElement("p",{className:"text-center font-weight-normal display-4"},"Already Logged In"):l.a.createElement("div",{className:"container pt-5 "},l.a.createElement("p",{className:"text-center font-italic display-4 font-weight-normal",style:{color:"black"}},"Sign Up"),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("form",{style:{width:"50%"},onSubmit:function(e){e.preventDefault(),s.a.success("Successfully Registered",{className:"text-center mt-4 rounded"}),b(z),p(!0),t.push("/homepage")}},l.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){return B(e)},className:"form-control my-3",required:!0}),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6 col-sm-3"},l.a.createElement("input",{type:"email",name:"email",onChange:function(e){return B(e)},placeholder:"Email",className:"form-control",required:!0})),l.a.createElement("div",{className:"form-group col-md-6 col-sm-3"},l.a.createElement("input",{type:"password",name:"password",onChange:function(e){return B(e)},placeholder:"Password",className:"form-control",required:!0}))),l.a.createElement("div",{className:"dropdown mr-1"},l.a.createElement("div",{className:"form-group"},l.a.createElement("select",{onChange:function(e){return B(e)},name:"sex",className:"form-control mb-3",required:!0},l.a.createElement("option",null,"Select Your Gender"),l.a.createElement("option",{value:"male"},"male"),l.a.createElement("option",{value:"female"},"Female"),l.a.createElement("option",{value:"others"},"Others")))),l.a.createElement("textarea",{cols:"10",rows:"4",placeholder:"Enter your address here...",className:"form-control",required:!0}),l.a.createElement("input",{type:"text",name:"mobile",placeholder:"Mobile no",onChange:function(e){return B(e)},className:"form-control my-3",required:!0}),l.a.createElement("div",{className:"dropdown mr-1"},l.a.createElement("div",{className:"form-group"},l.a.createElement("select",{onChange:function(e){return B(e)},name:"role",className:"form-control mb-3",required:!0},l.a.createElement("option",null,"Select Your Role"),l.a.createElement("option",{value:"doctor"},"Doctor"),l.a.createElement("option",{value:"clinic"},"Clinic"),l.a.createElement("option",{value:"patient"},"Patient")))),h?l.a.createElement("div",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputEmail4",className:"font-weight-bold"},"MCI Number"),l.a.createElement("input",{type:"text",onChange:function(e){return B(e)},className:"form-control",name:"mcino",id:"inputEmail4",placeholder:"MCI NO",required:!0})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputPassword4",className:"font-weight-bold"},"Qualifications"),l.a.createElement("input",{type:"text",onChange:function(e){return B(e)},name:"qualifications",className:"form-control",id:"inputPassword4",placeholder:"MBBS..,MD..,etc..",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputAddress",className:"font-weight-bold"},"Specialization"),l.a.createElement("input",{type:"text",onChange:function(e){return B(e)},name:"specialization",className:"form-control",id:"inputAddress",placeholder:"Cardiologist,Neuroligist,etc...",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"font-weight-bold text-center"},"Select Your Consulting Hours"),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("label",{htmlFor:"from",className:"font-weight-bold px-2"},"From:"),l.a.createElement("input",{type:"time",name:"from",onChange:function(e){return B(e)},className:"form-control",id:"from",required:!0}),l.a.createElement("label",{htmlFor:"to",className:"font-weight-bold px-2"},"To:"),l.a.createElement("input",{type:"time",name:"to",onChange:function(e){return B(e)},className:"form-control",id:"to",required:!0})))):null,y?l.a.createElement("div",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputEmail4",className:"font-weight-bold"},"Clinic Name"),l.a.createElement("input",{type:"text",onChange:function(e){return B(e)},className:"form-control",name:"clinicname",id:"inputEmail4",placeholder:"Clinic Name",required:!0})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputAddress",className:"font-weight-bold"},"Specializations Available"),l.a.createElement("input",{type:"text",onChange:function(e){return B(e)},name:"specializations",className:"form-control",id:"inputAddress",placeholder:"Cardiologist,Neuroligist,etc...",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"font-weight-bold text-center"},"Clinic Working Hours"),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("label",{htmlFor:"from",className:"font-weight-bold px-2"},"From:"),l.a.createElement("input",{type:"time",name:"from",onChange:function(e){return B(e)},className:"form-control",id:"from",required:!0}),l.a.createElement("label",{htmlFor:"to",className:"font-weight-bold px-2"},"To:"),l.a.createElement("input",{type:"time",name:"to",onChange:function(e){return B(e)},className:"form-control",id:"to",required:!0})))):null,A?l.a.createElement("div",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputEmail4",className:"font-weight-bold"},"Blood Group"),l.a.createElement("input",{type:"text",onChange:function(e){return B(e)},className:"form-control",name:"bloodgroup",id:"inputEmail4",placeholder:"O+ve,AB-ve",required:!0})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputAddress",className:"font-weight-bold"},"Blood Pressure"),l.a.createElement("input",{type:"text",onChange:function(e){return B(e)},name:"bloodpressure",className:"form-control",id:"inputAddress",placeholder:"In numbers only",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputEmail4",className:"font-weight-bold"},"Sugar Level"),l.a.createElement("input",{type:"text",onChange:function(e){return B(e)},className:"form-control",name:"sugarlevel",id:"inputEmail4",placeholder:"In numbers only",required:!0}))):null,l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement("button",{className:"btn btn-warning font-weight-bold px-5"},"Sign Up")),l.a.createElement("div",{className:"d-flex justify-content-center mb-3"},l.a.createElement(m.b,{to:"/login",className:"text-center text-white font-weight-bold mt-2"},"Already a User?Login"))))))},g=a(13);a(42);var E=function(e){var t=Object(i.g)(),a=Object(i.f)(),o=t.pathname,r=Object(n.useContext)(v),m=Object(c.a)(r.appointments,2),d=m[0],p=m[1],f=Object(n.useState)(e.res),b=Object(c.a)(f,2),E=b[0];return b[1],l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card",style:{marginBottom:"20px"}},l.a.createElement("h3",{className:"card-header font-italic font-weight-bold text-white bg-dark"},E.name),l.a.createElement("div",{className:"card-body",style:{backgroundColor:"aliceblue"}},l.a.createElement("h3",{className:"card-title font-italic  font-weight-bold"}," ",E.specialization.charAt(0).toUpperCase()+E.specialization.slice(1)),l.a.createElement("p",{className:"card-text font-weight-bold"},l.a.createElement("h5",{className:"font-italic font-weight-bold"},"Address:")," ",E.address),l.a.createElement("p",{className:"font-weight-bold"},l.a.createElement("h5",{className:"font-italic font-weight-bold"},"Contact:")," ",E.mobile),l.a.createElement("h5",{className:"font-weight-bold font-italic"},"Consulting Hours:"),l.a.createElement("div",{className:"d-flex justify-content-start mb-3"},l.a.createElement("h6",{className:"font-weight-bold"},l.a.createElement("span",{className:"font-weight-bold"},"From:")," ",E.from),l.a.createElement("h6",{className:"ml-3 font-weight-bold"},l.a.createElement("span",{className:"font-weight-bold"},"To:")," ",E.to)),E.booked?l.a.createElement("button",{className:"btn btn-sm btn-warning mr-2 font-weight-bold",onClick:function(e){return function(e){e.preventDefault(),0===d.length?(E.booked=!E.booked,E.removed=!E.removed,s.a.success("Appointment Booked",{className:"text-center mt-4 rounded"}),p([].concat(Object(g.a)(d),[Object(u.a)({},E)])),a.push(o),console.log(E)):d.map((function(e){E.name===e.name?(s.a.error("Already Booked",{className:"text-center mt-4 rounded"}),a.push(o)):(E.booked=!E.booked,E.removed=!E.removed,s.a.success("Appointment Booked",{className:"text-center mt-4 rounded"}),p([].concat(Object(g.a)(d),[Object(u.a)({},E)])),a.push(o),console.log(E))}))}(e)}},"Book Appointment"):null,E.removed?l.a.createElement("button",{onClick:function(e){return function(e){E.booked=!E.booked,E.removed=!E.removed;var t=0;s.a.success("Appointment cancelled",{className:"text-center mt-4 rounded"}),e.preventDefault(),d.map((function(e,a){e.name===E.name&&(t=a)})),d.splice(t,1),a.push(o),console.log(E)}(e)},className:"btn btn-sm btn-danger mr-2 font-weight-bold"},"Cancel Appointment"):null)))};var h=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],r=a[1],m=Object(n.useState)([]),i=Object(c.a)(m,2),s=i[0],d=i[1],p=Object(n.useContext)(v),b=Object(c.a)(p.loggedin,2),h=b[0],N=(b[1],Object(c.a)(p.currentuser,2)),w=N[0],x=(N[1],Object(c.a)(p.appointments,2)),j=(x[0],x[1],Object(c.a)(p.doctors,2)),O=j[0],y=(j[1],Object(c.a)(p.clinic,2)),C=y[0],S=(y[1],Object(c.a)(p.patients,2)),k=(S[0],S[1],Object(n.useState)(!1)),A=Object(c.a)(k,2),q=A[0],M=A[1];return l.a.createElement("div",{className:"homepage"},h?l.a.createElement("div",null,l.a.createElement("div",{className:"text-center pt-5"},l.a.createElement("h1",{className:"font-weight-normal font-italic text-white display-4"},"Welcome ",l.a.createElement(f.a,{className:"text-warning"}),w.name)),l.a.createElement("div",null,"patient"===w.role?l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex justify-content-center form-group"},l.a.createElement("form",{className:"form-inline mt-3",onSubmit:function(e){return function(e){e.preventDefault(),O.map((function(e){if(e.specialization.toLowerCase()===o.toLowerCase()){var t={name:"Dr.".concat(e.name),mobile:e.mobile,specialization:e.specialization,from:e.from,to:e.to,address:e.address,booked:!0,removed:!1};d((function(e){return[].concat(Object(g.a)(e),[Object(u.a)({},t)])}))}})),C.map((function(e){e.specializations.split(" ").map((function(t){if(t.toLowerCase()===o.toLowerCase()){var a={name:e.clinicname,mobile:e.mobile,specialization:t,from:e.from,to:e.to,address:e.address,booked:!0,removed:!1};d((function(e){return[].concat(Object(g.a)(e),[Object(u.a)({},a)])}))}}))})),M(!0)}(e)}},l.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},l.a.createElement("input",{type:"text",className:"border border-dark rounded form-control",id:"inputPassword2",name:"specsreq",onChange:function(e){return function(e){r(e.target.value),d([]),M(!1)}(e)},placeholder:"Search For Specialization"})),l.a.createElement("button",{type:"submit",className:"btn btn-warning mb-2 px-4 font-weight-bold",style:{marginLeft:"5px"}},"Search"))),q?l.a.createElement("div",null,0===s.length?l.a.createElement("p",{className:"container font-weight-bold text-warning text-center"},"Unable To Find Doctors For the specialization"):l.a.createElement("div",null,l.a.createElement("p",{className:"container font-weight-bold text-warning"},"Results For Your Specialization"),s.map((function(e,t){return l.a.createElement(E,{res:e,key:t})})))):null):null)):l.a.createElement("p",{className:"text-black text-center font-italic font-weight-normal display-4 pt-5"},"Please Log In to view Dashboard"))};a(43);var N=function(e){var t=Object(n.useContext)(v),a=Object(c.a)(t.appointments,2),o=a[0];return a[1],l.a.createElement("div",{className:"appointments pt-5"},o.map((function(e,t){return l.a.createElement(E,{key:t,res:e})})))},v=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),o=a[0],r=a[1],m=Object(n.useState)(),i=Object(c.a)(m,2),s=i[0],d=i[1],u=Object(n.useState)([]),p=Object(c.a)(u,2),f=p[0],b=p[1],g=Object(n.useState)([{name:"Vasantharajan",email:"mahaperiyavar100@gmail.com",password:"1234",gender:"male",address:"34,nadar street,vadugapatti",mobile:"9677861286",role:"Doctor",mcino:"1545gh",qualifications:"MBBS..,MD..",specialization:"cardiologist",from:"10.20AM",to:"11.50AM"},{name:"Karthi",email:"mahaperiyavar100@gmail.com",password:"1234",gender:"male",address:"34,nadar street,vadugapatti",mobile:"9677861286",role:"Doctor",mcino:"1545gh",qualifications:"MBBS..,MD..",specialization:"cardiologist",from:"10.20AM",to:"11.50AM"},{name:"Dhanasneyka",email:"dhanasneyka@gmail.com",password:"1234",gender:"female",address:"34,nadar street,vadugapatti",mobile:"9003441975",role:"Doctor",mcino:"2345gh",qualifications:"MBBS..,M.pharm..",specialization:"Neurologist",from:"11.30AM",to:"1.30PM"}]),E=Object(c.a)(g,2),h=E[0],N=E[1],w=Object(n.useState)([{name:"Santhi",email:"santhiclinic@gmail.com",password:"1234",gender:"female",address:"34,nadar street,vadugapatti",mobile:"9003441975",role:"Clinic",clinicname:"Santhi Clinic",specializations:"Neurologist Cardiologist",from:"11.30AM",to:"1.30PM"},{name:"Gopal",email:"gopalclinic@gmail.com",password:"1234",gender:"male",address:"34,nadar street,vadugapatti",mobile:"9003441975",role:"Clinic",clinicname:"Gopal clinic",specializations:"Neurologist",from:"11.30AM",to:"1.30PM"}]),x=Object(c.a)(w,2),j=x[0],O=x[1],y=Object(n.useState)([{name:"Gopal",email:"gopal@gmail.com",password:"1234",gender:"male",address:"34,nadar street,vadugapatti",mobile:"9003441975",role:"Patient",bloodpressure:120,bloodgroup:"o+ve",sugarlevel:120}]),C=Object(c.a)(y,2),S=C[0],k=C[1];return l.a.createElement(v.Provider,{value:{loggedin:[o,r],currentuser:[s,d],appointments:[f,b],doctors:[h,N],clinic:[j,O],patients:[S,k]}},e.children)};s.a.configure({autoClose:2e3});var x=function(e){var t=Object(n.useContext)(v),a=Object(c.a)(t.loggedin,2),o=a[0],r=a[1],d=Object(c.a)(t.currentuser,2),u=d[0];return d[1],l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement("div",{style:{backgroundColor:"white"}},l.a.createElement("nav",{className:"navbar navbar-expand container",style:{height:"55px"}},l.a.createElement("div",{className:"container ml-3"},l.a.createElement("div",{className:"d-flex justify-content-start"},l.a.createElement(m.b,{to:"/medisen",className:"navbar-brand font-weight-bold"},l.a.createElement(f.a,null),"MEDISEN"),o?l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/homepage",className:"nav-link font-weight-bold text-dark"},"Dashboard"))):null),l.a.createElement("div",{className:"d-flex justify-content-end mt-2"},l.a.createElement("div",{className:"float-right d-flex"},o?l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("p",{className:"pt-2 font-weight-bold"},u.email.slice(0,8),"..."),l.a.createElement(m.b,{to:"/medisen",className:"mt-1"},l.a.createElement("button",{className:"btn btn-sm btn-warning font-weight-bold ml-2 logout",onClick:function(){r(!1),s.a.success("Logged out Successfully",{className:"text-center mt-4 rounded"})}},"Log Out"))):l.a.createElement("div",{className:"d-flex"},l.a.createElement(m.b,{to:"/login"},l.a.createElement("p",{className:"font-weight-bold mr-4"},"Login")),l.a.createElement(m.b,{to:"/signup"},l.a.createElement("p",{className:"font-weight-bold "},"Sign Up")))))))),o&&"patient"===u.role?l.a.createElement("div",{className:"container"},l.a.createElement(m.b,{to:"/appointments",className:"float-right",style:{marginTop:"10px"}},l.a.createElement("button",{className:"btn btn-sm btn-warning text-center text-dark font-weight-bold"},"Your Appointments"))):null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/homepage",exact:!0,component:h}),l.a.createElement(i.a,{path:"/login",exact:!0,component:p}),l.a.createElement(i.a,{path:"/signup",exact:!0,component:b}),l.a.createElement(i.a,{path:"/appointments",exact:!0,component:N}),l.a.createElement(i.a,{path:"/medisen",exact:!0},l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"row container"},l.a.createElement("div",{style:{paddingTop:"130px"},className:"col-sm-2 col-md-5"},l.a.createElement("div",{className:"text-center text-white",style:{fontSize:"30px"}},l.a.createElement(f.b,null)),l.a.createElement("h1",{className:"text-center font-italic text-white"},"We Are Committed To Your Health"),l.a.createElement("p",{className:"text-center mt-5 font-weight-bold text-white"},"The Richest Man in the World is Person without illness"),o?null:l.a.createElement(m.b,{to:"/login",className:"justify-content-center d-flex"},l.a.createElement("button",{className:"btn btn-warning font-weight-bold rounded"},"Make an Appointment")))))))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null,l.a.createElement(x,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6edd57a6.chunk.js.map