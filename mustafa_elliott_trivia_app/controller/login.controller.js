const db=require('../models/index')
exports.login_form=(req,res)=>{
    res.render('login',{title:"Login"})
}
exports.loginchk=(req,res)=>{
    console.log(req.body)
    const {userid,password}=req.body;
    console.log(userid,"/",password);
    try{
        db.Member.findOne({userid:userid, password:password},(err, user)=>{
            console.log(user)
            if(userid==="admin" && password==="Admin.123"){
<<<<<<< HEAD
                console.log('admin here')
                res.redirect('index/admin')
=======
                res.redirect('/admin')
>>>>>>> dadc570418f890ee674c80f9b7df9e798bbb0ee1
            }
            else if(user===null){
                res.end('User does not exist')
            }
            else if(user.userid===userid && user.password===password){
                req.session.username=user.firstname;
                res.render('member',{title:'members', session:req.session})                
            }else{
                res.end('Wrong credentials provided.');
            }
        })

    }catch(err){
        res.send(err)
    }
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