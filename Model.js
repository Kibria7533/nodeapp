const mongoose=require('mongoose');

const Tscheama=mongoose.Schema;

const Cscheama=new Tscheama({
    name:{
        type:String
    },
    village:{
        type:String
    }
})
const tb=mongoose.model('Sm',Cscheama)
module.exports=tb;