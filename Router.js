const express = require('express')
const Router = express.Router();
const Sch = require('./Model');
var cors = require('cors')

Router.post('/save',cors(), async (req, res) => {
    
    try {
        const k = new Sch(req.body);
        k.save();
       res.json(k);
    } catch (error) {
        console.log(error)

    }

})

.get('/show',cors(),async(req,res)=>{
    try {
         const kk= await Sch.find();
    res.json(kk);
    } catch (error) {
        
    }
   
})
.delete('/delete/:id',async(req,res)=>{
    try {
      const data=await  Sch.remove({_id:req.params.id});
      res.json(data)

    } catch (error) {
        console.log(error)
        
    }
   
})
.get('/showone/:id',async(req,res)=>{
    try {
        const data=await Sch.findById({_id:req.params.id});
        res.json(data);
        
    } catch (error) {
        
    }
})
.patch('/update/:id',async(req,res)=>{
    try {
        const data= await Sch.updateOne({_id:req.params.id},req.body);
        res.json(data);
    } catch (error) {
        
    }
})

module.exports = Router;