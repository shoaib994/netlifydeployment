const express=require('express')
const cors= require('cors')
const app=express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.listen(5000,()=>console.log("Server is running on 5000"))

app.use('/',require('./routes/user'))