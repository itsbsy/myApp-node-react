const express = require('express');
const router = express.Router();
const User = require('../model/users');
const { join } = require('node:path');

router.get('/socket', (req, res) =>{
    res.sendFile(join(__dirname, '../index.html'));
  })
  

router.get('/users', async(req, res) =>{
    try {
        const users = await User.find();
        if (typeof window !== "undefined" && typeof console !== "undefined") {
            console.log("console on both....");
          }
        
          // Log to the Node.js terminal if running in a Node.js environment
          if (typeof window === "undefined" && typeof console !== "undefined") {
            console.log("console on both....");
          }
        
        res.send(users)
        
    } catch (error) {
        console.log(error)
    }
})
router.get('/user', async(req, res) =>{
    try {
        let id = req.query.id
        console.log(id)
        const user = await User.findById(id);
        res.send(user)
        
    } catch (error) {
        console.log(error)
    }
})
router.patch('/updateuser', async (req, res) => {
   try {
    let params = req.query.id
    let dataToBeUpdated = req.body 
    console.log(dataToBeUpdated)
    const result = await User.updateOne({ _id: params }, { $set: dataToBeUpdated });
    res.json(result)
    
   } catch (error) {
     console.log(error)
   }
});
router.delete('/deleteuser', async (req, res) => {
    try {
     let params = req.query.id
     const result = await User.deleteOne({ _id: params });
     res.json(result)
     
    } catch (error) {
      console.log(error)
    }
 });

router.post('/user', async (req, res) => {
    try {
    let params = req.body
    const newData = await User.create(params);
     res.json(newData)
     
    } catch (error) {
      console.log(error)
    }
 })
module.exports = router;