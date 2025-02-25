const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
app.use(express.json());
// app.use(cors());

app.use(
  cors({
    origin: '*',
    methods:'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Content-Type-Options",
      "Accept",
      "X-Requested-With",
      "Origin",
      "Access-Control-Request-Method",
      "Access-Control-Request-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Headers",
    ],
  })
);




app.get("/",(req,res)=>{
    res.send("Hello..")
})
app.use('/uploads', express.static(__dirname + "/uploads"));
mongoose.connect('mongodb+srv://admin:admin@cluster0.sq5y45n.mongodb.net/Blog-application?retryWrites=true&w=majority&appName=Cluster0').then(
    ()=>{
        console.log("Sucessfully connected to the dataBase ")
    }
).catch(
    (err)=>{
        console.log("Error occured while connecting to data base..",err)
    }
)

app.use("/",require('./routers/Routes'))
app.listen(3000,()=>{console.log("Server is running  3000...")})
