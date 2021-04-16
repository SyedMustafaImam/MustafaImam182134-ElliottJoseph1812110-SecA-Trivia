exports.login_form=(req,res)=>{
    res.render('login',{title:"Login"})
}
exports.loginchk=(req,res)=>{
    console.log(req.body)
    const {email,password}=req.body;
    console.log(email,"/",password);
    // try{
    //     db.Registeration.findOne({emailAddress:email, password:password},(err, user)=>{
    //         console.log(user.firstname)
    //         if(user===null){
    //             res.end('User does not exist')
    //         }else if(user.emailAddress===email && user.password===password){
    //             req.session.username=user.firstname;
    //             res.render('dashboard',{title:"DashBoard", session:req.session})                
    //         }else{
    //             res.end('Wrong credentials provided.');
    //         }
    //     })

    // }catch(err){
    //     res.send(err)
    // }
    
}
exports.logout=(req,res)=>{
    req.session.destroy((err) => {//destroy all sessions
                if(err) {
                    return console.log(err);
                }else{
                    console.log('Destroying session');
                }
            res.redirect('/');
            });            
}