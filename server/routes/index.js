const router = require("express").Router()
const bcrypt = require("bcrypt")
const Doctor  = require("../models/doctor")
const Patient = require("../models/patient")
const Clinic = require("../models/clinic")

//Signup routes
//doc signup
router.post("/signupdoc",async (req,res)=>{
     const {name,email,password,age,gender,address,mobile,role,mcino,qualifications,specializations,from,to} = req.body
     try{
        const ans = await Doctor.findAll({where:{email}})
    if(ans.length>0){
        return res.json("false")
    }
    else{
        if(mobile.length!==10){
            return res.json("error")
        }
        else{
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt)
       const user = await Doctor.create({email,name,password:hashedpassword,age,gender,address,mobile,role,mcino,qualifications,specializations,from,to})
       res.json(user)
        }
    }
}
catch(error){
   return res.send("Server Error "+error)
}
})
//patient signup
router.post("/signuppat",async (req,res)=>{
    const {name,email,password,age,gender,address,mobile,role,bloodpressure,bloodgroup,sugarlevel} = req.body
    try{
       const ans = await Patient.findAll({where:{email}})
   if(ans.length>0){
       return res.json("false")
   }
   else{
       if(mobile.length!==10){
           return res.json("error")
       }
       else{
       const salt = await bcrypt.genSalt(10);
       const hashedpassword = await bcrypt.hash(password,salt)
      const user = await Patient.create({email,name,password:hashedpassword,age,gender,address,mobile,role,bloodpressure,bloodgroup,sugarlevel})
      res.json(user)
       }
   }
}
catch(error){
  return res.send("Server Error "+error)
}
})
//client signup
router.post("/signupcli",async (req,res)=>{
    const {name,email,password,age,gender,address,mobile,role,clinicname,specializations,from,to} = req.body
    try{
       const ans = await Clinic.findAll({where:{email}})
   if(ans.length>0){
       return res.json("false")
   }
   else{
       if(mobile.length!==10){
           return res.json("error")
       }
       else{
       const salt = await bcrypt.genSalt(10);
       const hashedpassword = await bcrypt.hash(password,salt)
      const user = await Clinic.create({email,name,password:hashedpassword,age,gender,address,mobile,role,clinicname,specializations,from,to})
      res.json(user)
       }
   }
}
catch(error){
  return res.send("Server Error "+error)
}
})
//login route
router.post("/login",async(req,res)=>{
   const {role,email,password} = req.body
   try {
       if(role==="patient"){
        const ans = await Patient.findAll({where:{email}})
        if(ans.length>0){
           const dbpassword = ans[0].password
           const passwordverify = await bcrypt.compare(password,dbpassword)
           if(passwordverify){
            return res.json(ans)
           }
           else{
               return res.json("incorrect")
           }
        }
        else{
             return res.json("false")
        }
       }
       else if(role==="doctor"){
        const ans = await Doctor.findAll({where:{email}})
        if(ans.length>0){
           const dbpassword = ans[0].password
           const passwordverify = await bcrypt.compare(password,dbpassword)
           if(passwordverify){
            return res.json(ans)
           }
           else{
               return res.json("incorrect")
           }
        }
        else{
             return res.json("false")
        }
       }
       else if(role==="clinic"){
        const ans = await Clinic.findAll({where:{email}})
        if(ans.length>0){
           const dbpassword = ans[0].password
           const passwordverify = await bcrypt.compare(password,dbpassword)
           if(passwordverify){
            return res.json(ans)
           }
           else{
               return res.json("incorrect")
           }
        }
        else{
             return res.json("false")
        }
       }
} catch (error) {
    return res.send(error)
}
})
//get all doctors
router.get("/doc",async(req,res)=>{
    const docs = await Doctor.findAll()
    res.json(docs)
})
//get all clinics
router.get("/clinics",async(req,res)=>{
    const clinics = await Clinic.findAll()
    res.json(clinics)
})
//update timings
router.put("/updatetime",async(req,res)=>{
    const {from,to,id,role} = req.body
    try {
       if(role==="doctor"){
         const ans = await Doctor.update({from,to},{where:{doc_id:id}})
         res.json(ans)
       }
       else if(role==="clinic"){
        const ans =await  Clinic.update({from,to},{where:{cli_id:id}})
        res.json(ans)
       }
    } catch (error) {
        res.json(error)
    }
})
module.exports = router