import React,{useState,useContext} from 'react'
import "./Homepage.css"
import {createcontext} from "../../App"
function Homepage(props){
    const main = useContext(createcontext)
    const [loggedin,setloggedin] = main.loggedin
    const [currentuser,setcurrentuser] = main.currentuser
    return(
        <div className="homepage">
        {loggedin?
        <div className="text-center">
        <h1>Dashboard</h1>
        <p className="text-center font-weight-normal ">Signed in as {currentuser.role}</p>
        </div>:
        <p className="text-black text-center font-italic font-weight-normal display-4 pt-5">Please Log In to view Dashboard</p>
        }
        </div>
    )
}

export default Homepage