exports.register_form=(req,res)=>{
    res.render('signup',{title:"signupform"})
}

exports.register=(req,res)=>{
    console.log(req.body)
    // console.log(req.body)
    // let reg=new db.Registeration({
    //     userid:user+1,
    //     firstname:req.body.firstname,
    //     lastname:req.body.lastname,
    //     gender:req.body.gender,
    //     age:req.body.age,
    //     emailAddress:req.body.emailAddress,
    //     password:req.body.password,
    //     confmPassword:req.body.confmPassword
    // })
    // reg.save().then(result=>{
    //     console.log(result)
    //     res.redirect('/')
    // }).catch(err=>{
    //     console.log(err)
    // }
    // )
}
