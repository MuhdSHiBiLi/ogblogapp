const express = require('express');
const router = express.Router();
const users = require('../src/model/user');

router.use(express.json());

//to create signup route
router.post('/', async (req,res)=>{
    try {
        const data = req.body;
        let newUser = await users(data).save();
        console.log(newUser);
        res.status(200).send({message:"Data added"})
    } catch (error) {
        console.log(error);
        if (error.message.includes("user validation failed")) {
            res.status(400).send({ message: "Please fill all the fields" });
        }
         else if (error.message.includes("E11000 duplicate key error")) {
            res.status(400).send({ message: "Already exists User" });
          } else {
            // Handle other errors (if needed)
            res.status(500).send({ message: "Internal server error please try again later" });
          }
    }
});

//login route
router.post('/login', async (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    const findUser = await users.findOne({username:username});
    try {
        if(findUser.password == password){
            res.json({message:"Login Succesfull"})
        }else{
            res.json({message:"Login failed"})
        }
    } catch (error) {
        console.log((error));
        if(!findUser){
            res.json({message:"user not found"})
        }
    }
})

module.exports = router;
