import React,{useState,useContext} from 'react'
import "./Homepage.css"
import { FaHandHoldingHeart } from 'react-icons/fa';
import {createcontext} from "../../App"
import Displaycard from "../../components/displaycard/displaycard"
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
        <div className="text-center pt-5">
        <h1 className="font-weight-normal font-italic text-white display-4">Welcome <FaHandHoldingHeart className="text-warning"/>{currentuser.name}</h1>
        </div>
        {/*Patients*/}
        <div>
        {currentuser.role==="patient"?
        <div>
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
</div>
        :
        <p className="text-black text-center font-italic font-weight-normal display-4 pt-5">Please Log In to view Dashboard</p>
}
        </div>
    )
}

export default Homepage