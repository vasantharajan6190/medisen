import React,{useContext} from "react"
import Displaycard from "../../components/displaycard/displaycard"
import "./Appointments.css"
import {createcontext} from "../../App"
function Appointments(props){
    const main = useContext(createcontext)
    const [appointments,setappointments] = main.appointments
    return(
        <div className="appointments pt-5">
        {
            appointments.map((res,index)=>(
                <Displaycard key ={index} res={res}/>
            ))
        }
          </div>
    )
}

export default Appointments