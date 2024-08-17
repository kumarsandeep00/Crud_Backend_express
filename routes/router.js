const express = require("express");
const users = require("../model/userSchems");
const router = express.Router();


// router.get("/",(req,res)=>{
//     console.log("connect");
// })

// Register user
router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,work,address,description} = req.body;

    if(!name || !email || !age || !mobile || !work ||! address || !description){
        res.status(404).json("Pla fill the data");
    }
    try{
        const presuser = await users.findOne({email:email});
        console.log(presuser);
        if(presuser){
            res.status(404).json(error);
        }else{
            const adduser = new users({
                name,email,age,mobile,work,address,description
            })
            await adduser.save()
            res.status(200).json(adduser)
            console.log(adduser);
         
        }


    }catch(error){
        res.status(404).json(error);

    }
});

// Get userdata
router.get("/getdata",async(req,res)=>{
    try{
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    }catch(error){
        res.status(404).json(error);
    }
})

// Get individual user
router.get("/getuser/:id", async(req,res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;
        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(200).json(userindividual);
    }catch(error){
        res.status(404).json(error);
    }
})

// update user data
router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const{id} = req.params;
        const updateuser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updateuser);
        res.status(201).json(updateuser);

    }catch(error){
        res.status(422).json(error);

    }
})

// Delete user
router.delete("/deleteuser/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteuser = await users.findByIdAndDelete({_id:id});
        console.log(deleteuser);
        res.status(201).json(deleteuser);
    }catch(error){
        res.status(422).json(error);
    }
})

module.exports = router;