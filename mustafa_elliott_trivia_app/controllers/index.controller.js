const db=require('../models/index')
exports.admin = (req,res) => {

    console.log("we got here")
    console.log(req.session)
    
//     req.session.name = "Admin";
//     req.session.gender = "Male";
    
    if(req.session.user)
{
    res.render('admin', {
        title:"Admin",
        session: req.session.user,  
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
    // res.render('member',{title:'member'})
    console.log("Parameter",req.params)
    console.log("we got here")
    console.log(req.session)
    if(req.session.user)
{
    res.render('member', {
        title:"member",
        session: req.session.user,  
    })
}else{
    res.redirect('/')
}
}
     


exports.error = (req,res) => {
  
    res.render('error', {
        title:"Error"
    })
        
    }