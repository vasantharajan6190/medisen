import React,{useState,useContext} from 'react'
import {Link,useHistory} from "react-router-dom"
import "./Login.css"
import {createcontext} from "../../App"
import {toast} from "react-toastify"
function Login(props){
    const history = useHistory()
    const main = useContext(createcontext)
    const [loggedin,setloggedin] = main.loggedin
    const [currentuser,setcurrentuser] = main.currentuser
     const [user,setuser] = useState({
         email:"",
         password:""
     })
     function onchange(e){
         setuser({...user,[e.target.name]:e.target.value})
     }
    function onsubmit(e){
        e.preventDefault()
        if(currentuser.email===user.email){
            if(currentuser.password===user.password){
            toast.success("Successfully Registered",{className:"text-center mt-4 rounded"})
            setloggedin(true)
            setcurrentuser(user)
            history.push("/homepage")
            }
            else{
                toast.error("Password doen't match",{className:"text-center mt-4 rounded"})
            }
        }
        else{
            toast.error("User Doesn't exists",{className:"text-center mt-4 rounded"})
            setuser("")
        }
      
    }
    return(
        <div className="login">
{loggedin?<p className="text-center font-weight-normal display-4">Already Logged In</p>:
        <div className="container pt-5">
        <p className="text-center font-weight-normal font-italic display-4" style={{ color:"black"}}>Login</p>
        <div className="d-flex justify-content-center">
        <form style={{width:"50%"}} onSubmit={onsubmit}>
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={e=>onchange(e)} className="form-control my-3" required/>
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={e=>onchange(e)} className="form-control my-3" required/>
        <div className="d-flex justify-content-center">
        <button className="btn font-weight-bold px-5 btn-warning">Login</button>
        </div>
        <div className="d-flex justify-content-center">
        <Link to="/signup" className="text-center text-white font-weight-bold mt-2">New User?Sign Up</Link>
        </div>
      </form>
        </div>
        </div>
    }
        </div>
    )
}

export default Login