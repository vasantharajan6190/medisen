import React,{useState,useContext} from 'react'
import "./Homepage.css"
import { FaHandHoldingHeart,FaCheck } from 'react-icons/fa';
import {createcontext} from "../../App"
import Displaycard from "../../components/displaycard/displaycard"
import Doccards from "../../components/doccards/Doccards"

function Homepage(props){
    let display = false
    let unknown = false
    const [search,setsearch] = useState("")
    const [searchresult,setsearchresult] = useState([])
    const main = useContext(createcontext)
    const [loggedin,setloggedin] = main.loggedin
    const [currentuser,setcurrentuser] = main.currentuser
    const [appointments,setappointments] = main.appointments
    const [doctors,setdoctors] = main.doctors
    const [clinic,setclinic] = main.clinic
    const [docappointments,setdocappointments] = main.docappointments
    const [patients,setpatients] = main.patients
    const [clicked,setclicked] = useState(false)
    let unable=true
    function onchange(e){
        setsearch(e.target.value)
        setsearchresult([])
        setclicked(false)
    }
   
    function onsubmit(e){
        e.preventDefault()
        doctors.map(res=>{
            if(res.specialization.toLowerCase()===search.toLowerCase()){
                const doc = {name:`Dr.${res.name}`,mobile:res.mobile,specialization:res.specialization,from:res.from,to:res.to,address:res.address,booked:true,removed:false}
                  setsearchresult(prev=>[...prev,{...doc}])
            }
        })
        clinic.map(res=>{
            const separate = res.specializations.split(" ")
            separate.map(ans=>{
                if(ans.toLowerCase()===search.toLowerCase()){
                    const cli = {name:res.clinicname,mobile:res.mobile,specialization:ans,from:res.from,to:res.to,address:res.address,booked:true,removed:false}
                    setsearchresult(prev=>[...prev,{...cli}])
                }
            })
        })
        setclicked(true)
    }
    return(
        <div className="homepage">
     {loggedin?
        <div>
        {/*Patients*/}
        <div>
        {currentuser.role==="patient"?
        <div>
        <div className="text-center pt-5">
        <h1 className="font-weight-normal font-italic text-white display-4">Welcome <FaHandHoldingHeart className="text-warning"/>{currentuser.name}</h1>
        </div>
        <div className="d-flex justify-content-center form-group">
        <form className="form-inline mt-3" onSubmit={e=>onsubmit(e)}>
        <div className="form-group mx-sm-3 mb-2">
          <input type="text" className="border border-dark rounded form-control" id="inputPassword2" name="specsreq" onChange={e=>onchange(e)} placeholder="Search For Specialization"/>
        </div>
        <button type="submit" className="btn btn-warning mb-2 px-4 font-weight-bold" style={{marginLeft:"5px"}}>Search</button>
      </form>
        </div>
       {clicked? 
        <div>
        {searchresult.length===0? <p className="container font-weight-bold text-warning text-center">Unable To Find Doctors For the specialization</p>: 
        <div>
        <p className="container font-weight-bold text-warning">Results For Your Specialization</p>
        {
         searchresult.map((res,index)=>(
             <Displaycard res={res} key={index}/>
         ))
        }
         </div>
     }
        </div>:null
    }
    </div>:null
}
</div>

{/*Doctor*/}
<div>
{(currentuser.role==="doctor"|| currentuser.role ==="clinic")?
<div>
<div className="text-center pt-5">
<h1 className="font-weight-normal font-italic text-white display-4">Welcome <FaHandHoldingHeart className="text-warning"/>{currentuser.role==="doctor"?<span>Dr.{currentuser.name.charAt(0).toUpperCase()+currentuser.name.slice(1)}</span>:<span>{currentuser.name.charAt(0).toUpperCase()+currentuser.name.slice(1)}</span>} </h1>
</div>
{docappointments.length===0?<h5 className="text-center mt-5 font-weight-bold font-italic">You have no appointments</h5>:
<div className="container">
<h4 className="mt-5 container font-weight-bold font-italic mb-3">Your appointments : </h4>
{
    docappointments.map((res,index)=>{
      return  (
        <Doccards res={res} key={index}/>  
        )
    })
}
</div>
}
</div>
:
null
}
</div>

</div>
        :
        <p className="text-black text-center font-italic font-weight-normal display-4 pt-5">Please Log In to view Dashboard</p>
}
        </div>
    )
}

export default Homepage