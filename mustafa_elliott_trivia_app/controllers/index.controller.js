const express = require('express');
let app = express();
let router = express.Router();
const db=require('../models/index')
exports.admin = (req,res) => {
db.Member.findOne({userid:"admin",password:"Admin.123"})
.then(result=>{
    res.render('admin', {
        title:"Admin",result:result
    })
    console.log(result)
    
})
.catch(err=>{
  console.log(err)
})
    
}
 
exports.member = (req,res) => {
    db.Member.findOne({userid:"admin",password:"Admin.123"})
    .then(result=>{
        res.render('memeber', {
            title:"member",result:result
        })
        console.log(result)
        
    })
    .catch(err=>{
      console.log(err)
    })
}
     


exports.error = (req,res) => {
  
    res.render('error', {
        title:"Error"
    })
        
    }