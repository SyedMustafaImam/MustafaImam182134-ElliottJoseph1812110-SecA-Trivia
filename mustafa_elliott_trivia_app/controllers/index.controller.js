const express = require('express');
const db=require('../models/index')
exports.admin = (req,res) => {

    console.log(req.session)

    req.session.name = "Admin";
    req.session.gender = "Male";
    
    if(req.session.password==="Admin.1234567" && req.session.username==='Admin')
{
    res.render('admin', {
        title:"Admin",
        session: req.session,  
    })
}else{
    res.render('error')
}
    
}
 
exports.member = (req,res) => {
    // db.Member.findOne({userid:"admin",password:"Admin.123"})
    // .then(result=>{
    //     res.render('memeber', {
    //         title:"member",result:result
    //     })
    //     console.log(result)
        
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
    res.render('member',{title:'member'})
}
     


exports.error = (req,res) => {
  
    res.render('error', {
        title:"Error"
    })
        
    }