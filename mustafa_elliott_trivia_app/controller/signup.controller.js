const db=require('../models/index')
exports.register_form=(req,res)=>{
    res.render('signup',{title:"signupform"})
}

exports.register=(req,res)=>{
    console.log(req.body)
    let reg=new db.Member({
        userid:req.body.userid,
        password:req.body.password,
        name:req.body.name,
        Gender:req.body.Gender,
        address:req.body.address,
        city:req.body.city,
        country:req.body.country,
    })
    reg.save().then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    }
    )
    res.redirect('/')
}
