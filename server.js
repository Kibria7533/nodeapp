const express = require('express');
const cors = require('cors')
const path=require('path');
const app = express();

const mongoose=require('mongoose')
const bodyParser=require("body-parser")

const Router=require('./Router');

const MONGODB_URL='mongodb+srv://kibria:bikal3ta@cluster0.ak8uw.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL || 'mongodb://localhost:27017/ytv', { useNewUrlParser: true,useUnifiedTopology: true })
app.use(bodyParser.json())

mongoose.connection.once('open',()=>{
    console.log('db connected')
}).then('eorre',(eorre)=>{
    console.log('hi error occur');
})
app.use(cors())
app.use('/api' ,Router);

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.join('client','build','index.html'));
  })
}

const port =process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);