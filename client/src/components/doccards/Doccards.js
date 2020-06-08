import React,{useContext} from "react"
import {toast} from "react-toastify"
import {useHistory,useLocation} from "react-router-dom"
import { FaHandHoldingHeart,FaCheck } from 'react-icons/fa';
import {createcontext} from "../../App"
function Doccards({res}){
    const history = useHistory()
    const location = useLocation()
    const routename = location.pathname
    const main = useContext(createcontext)
    const [docappointments,setdocappointments] = main.docappointments
    function onclick(e){
        e.preventDefault()
        let indexto= 0
        docappointments.map((result,index)=>{
            if(result.name===res.name){
                indexto=index
            }
        })
        docappointments.splice(indexto,1)
        toast.success("Completed the appointment",{className:"text-center font-weight-bold font-italic mt-5 rounded"})
        history.push(routename)
    }
    return(
        <div className="container">
        <div className="card" style={{marginBottom:"20px"}}>
        <h3 className="card-header font-italic font-weight-bold text-white bg-dark">
          {res.name}
        </h3>
        <div className="card-body" style={{backgroundColor:"aliceblue"}}>
          <h5 className="card-title  font-italic  font-weight-bold">Age : {res.age}</h5>
          <p className="card-text font-weight-bold"><h5 className="font-italic font-weight-bold">Address : </h5>{res.address}</p>
          <div className="d-flex justify-content-start mb-3">
          <h6 className="font-weight-bold"><span className="font-weight-bold font-italic">Blood Pressure : </span>{res.bloodpressure}</h6>
          <h6 className="ml-3 font-weight-bold"><span className="font-weight-bold font-italic">Sugar Level : </span>{res.sugarlevel}</h6>
          <h6 className="ml-3 font-weight-bold"><span className="font-weight-bold font-italic">Blood Group : </span>{res.bloodgroup}</h6>
          </div>
          <button onClick={e=>onclick(e)} className="btn btn-warning font-weight-bold border border-dark" style={{borderRadius:"10px"}}><FaCheck/> Completed</button>
        </div>
      </div>
        </div>
    )
}

export default Doccards