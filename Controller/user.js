const express=require('express')

exports.User=async(req,res,next)=>{

    const {name,phone}=req.body

    return res.json({
        success:true,
        data:req.body
    })
}