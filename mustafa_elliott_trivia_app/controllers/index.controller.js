const express = require('express');
let app = express();
let router = express.Router();
 
exports.admin = (req,res) => {
  
res.render('admin', {
    title:"Admin"
})
    
}
 
exports.member = (req,res) => {
  
    res.render('member', {
        title:"Member"
    })
        
    }
     


exports.error = (req,res) => {
  
    res.render('error', {
        title:"Error"
    })
        
    }