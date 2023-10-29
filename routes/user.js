const express=require('express')
const {User}=require('../Controller/user')
const router=express();

router.get("/",User)
router.post("/",User)

module.exports=router