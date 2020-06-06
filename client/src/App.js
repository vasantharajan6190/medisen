import React,{useState,createContext,useContext} from 'react';
import {Switch,Route,BrowserRouter,Link} from "react-router-dom"
import './App.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./containers/Login/Login"
import { FaHandHoldingHeart,FaHeartbeat } from 'react-icons/fa';
import Signup from "./containers/Signup/Signup"
import Homepage from "./containers/Homepage/Homepage"

export const createcontext = createContext()
export const Contextvariables = (props)=>{
  const [loggedin,setloggedin] = useState(false)
  const [currentuser,setcurrentuser] = useState()
  return(
    <createcontext.Provider value={{
      loggedin : [loggedin,setloggedin],
      currentuser:[currentuser,setcurrentuser]
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
    <p className="pt-2 font-weight-bold">{currentuser.email.slice(0,8)}...</p>
    <Link to="/medisen" className="mt-1"><button className="btn btn-sm btn-warning font-weight-bold ml-2 " onClick={onclick}>Log Out</button></Link>
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
    <Switch>
    <Route path="/homepage" exact component={Homepage}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={Signup}/>
    
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
