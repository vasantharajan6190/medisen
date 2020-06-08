import React,{useState,createContext,useContext} from 'react';
import {Switch,Route,BrowserRouter,Link} from "react-router-dom"
import './App.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./containers/Login/Login"
import { FaHandHoldingHeart,FaHeartbeat } from 'react-icons/fa';
import Signup from "./containers/Signup/Signup"
import Homepage from "./containers/Homepage/Homepage"
import Appointments from "./containers/Appointments/Appointments"
export const createcontext = createContext()
export const Contextvariables = (props)=>{
  const [loggedin,setloggedin] = useState(false)
  const [currentuser,setcurrentuser] = useState()
  const [appointments,setappointments] = useState([])
  const [docappointments,setdocappointments] =useState([
    {
      name:"Kaviya",
      age:"20",
      address:"20,Bharathiyar street,Erode",
      bloodpressure:"210",
      sugarlevel:"100",
      bloodgroup:"O+ve"
    },
    {
      name:"Gokul",
      age:"40",
      address:"330/A,2nd street,Erode",
      bloodpressure:"110",
      sugarlevel:"90",
      bloodgroup:"AB+ve"
    }
  ])
  const [doctors,setdoctors] = useState([
    {
      name:"Vasantharajan",
      email:"mahaperiyavar100@gmail.com",
      password:"1234",
      gender:"male",
      address:"34,nadar street,vadugapatti",
      mobile:"9677861286",
      role:"Doctor",
      mcino:"1545gh",
      qualifications:"MBBS..,MD..",
      specialization:"cardiologist",
      from:"10.20AM",
      to:"11.50AM"
    },
    {
      name:"Karthi",
      email:"mahaperiyavar100@gmail.com",
      password:"1234",
      gender:"male",
      address:"34,nadar street,vadugapatti",
      mobile:"9677861286",
      role:"Doctor",
      mcino:"1545gh",
      qualifications:"MBBS..,MD..",
      specialization:"cardiologist",
      from:"10.20AM",
      to:"11.50AM"
    },
    {
      name:"Dhanasneyka",
      email:"dhanasneyka@gmail.com",
      password:"1234",
      gender:"female",
      address:"34,nadar street,vadugapatti",
      mobile:"9003441975",
      role:"Doctor",
      mcino:"2345gh",
      qualifications:"MBBS..,M.pharm..",
      specialization:"Neurologist",
      from:"11.30AM",
      to:"1.30PM"
    }
  ])
  const [clinic,setclinic] = useState([
    {
      name:"Santhi",
      email:"santhiclinic@gmail.com",
      password:"1234",
      gender:"female",
      address:"34,nadar street,vadugapatti",
      mobile:"9003441975",
      role:"Clinic",
      clinicname:"Santhi Clinic",
      specializations:"Neurologist Cardiologist",
      from:"11.30AM",
      to:"1.30PM"
    },
    {
      name:"Gopal",
      email:"gopalclinic@gmail.com",
      password:"1234",
      gender:"male",
      address:"34,nadar street,vadugapatti",
      mobile:"9003441975",
      role:"Clinic",
      clinicname:"Gopal clinic",
      specializations:"Neurologist",
      from:"11.30AM",
      to:"1.30PM"
    }
  ])
  const [patients,setpatients] = useState([
    {
      name:"Gopal",
      email:"gopal@gmail.com",
      password:"1234",
      gender:"male",
      address:"34,nadar street,vadugapatti",
      mobile:"9003441975",
      role:"Patient",
      bloodpressure:120,
      bloodgroup:"o+ve",
      sugarlevel:120
    }
  ])
  return(
    <createcontext.Provider value={{
      loggedin : [loggedin,setloggedin],
      currentuser:[currentuser,setcurrentuser],
      appointments:[appointments,setappointments],
      doctors:[doctors,setdoctors],
      clinic:[clinic,setclinic],
      patients:[patients,setpatients],
      docappointments:[docappointments,setdocappointments]
    }}>
    {props.children}
    </createcontext.Provider>
  )
}
toast.configure({autoClose:2000});
function App(props) {
  
  const main = useContext(createcontext)
  const [loggedin,setloggedin] = main.loggedin
  const [currentuser,setcurrentuser] = main.currentuser
  let bool = false
  if(loggedin===true){
    bool=true
  }
  function onclick(){
    setloggedin(false)
    toast.success("Logged out Successfully",{className:"text-center mt-4 rounded"})
  }
  return (
    <React.Fragment>
    <BrowserRouter>
    <div style={{backgroundColor:"white"}}>
    <nav className="navbar navbar-expand container" style={{height:"55px"}}>
    <div className="container ml-3">
    <div className="d-flex justify-content-start">
    <Link to="/medisen" className="navbar-brand font-weight-bold"><FaHandHoldingHeart/>MEDISEN</Link>
    {loggedin?
    <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/homepage" className="nav-link font-weight-bold text-dark">Dashboard</Link>
    </li>
    </ul>:null
    }
    </div>
  <div className="d-flex justify-content-end mt-2">
  <div className="float-right d-flex">
  {loggedin?
    <div className="d-flex justify-content-between">
    <p className="pt-2 font-weight-bold">{currentuser.email.slice(0,5)}...</p>
    <Link to="/medisen" className="mt-1"><button className="btn btn-sm btn-warning font-weight-bold ml-2 logout" onClick={onclick}>Log Out</button></Link>
    </div>
    :
    <div className="d-flex">
  <Link to="/login"><p className="font-weight-bold mr-4">Login</p></Link>
  <Link to="/signup"><p className="font-weight-bold ">Sign Up</p></Link>
  </div>
  }
  </div>
  </div>
    </div>
   </nav>
   </div>
   {loggedin && currentuser.role==="patient"?
   <div className="container">
   <Link to="/appointments" className="float-right" style={{marginTop:"10px"}}><button className="btn btn-sm btn-warning text-center text-dark font-weight-bold">Your Appointments</button></Link>
   </div>:null
   } 
   <Switch>
    <Route path="/homepage" exact component={Homepage}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={Signup}/>
    <Route path="/appointments" exact component={Appointments}/>
    <Route path="/medisen" exact>
    <div className="app">
    <div className="row container">
    <div style={{paddingTop:"130px"}} className="col-sm-2 col-md-5">
    <div className="text-center text-white" style={{fontSize:"30px"}}><FaHeartbeat/></div>
    <h1 className="text-center font-italic text-white">We Are Committed To Your Health</h1>
    <p className="text-center mt-5 font-weight-bold text-white">The Richest Man in the World is Person without illness</p>
    {loggedin?
      null:
      <Link to="/login" className="justify-content-center d-flex"><button className="btn btn-warning font-weight-bold rounded">Make an Appointment</button></Link>
      }
    </div>
    </div>
    </div>
    </Route>
    
    </Switch>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
