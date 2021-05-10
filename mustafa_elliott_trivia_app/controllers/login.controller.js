const db = require('../models/index')
exports.login_form = (req, res) => {
    res.render('login', { title: "Login" })
}
exports.loginchk = (req, res) => {
    console.log(req.body)
    const { userid, password } = req.body;
    console.log(userid, "/", password);
    try {
        db.Member.findOne({ userid: userid, password: password }, (err, user) => {
            console.log("User",user)
            // req.session.user= user;
            // console.log("Session",req.session)
            console.log(user.userid,"/",user.password)
            if (user.userid === 'admin') {
            
                console.log('admin here')
                req.session.user= user;
                console.log("Session",req.session.user)
                console.log(req.session.userid,"/",req.session.password)
                res.redirect('index/admin')
            }
            else if (user === null) {
                res.end('User does not exist')
            }
            else if (user.userid === userid && user.password === password) {
                console.log('got here to members')
                req.session.user= user;
                console.log("Session",req.session.user)
                console.log(req.session.user.userid,"/",req.session.user.password)
                res.redirect('index/member/'+req.session.user.userid)
            } else {
                res.render('error');
            }
        })

    } catch (err) {
        res.send(err)
    }
}
exports.edit_profile=(req,res)=>{
    console.log(req.params.userid);
    db.Member.findOne({userid: req.params.userid}).then(users=>{
        console.log(users)
        console.log('edit_profile form')
        res.render('edit-profile', { title: 'Edit-Profile',session: users})
    }).catch(err=>console.log(err))
}     
exports.edited_profile=async (req,res)=>{
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.params.userid)
    await db.Member.updateOne({userid :req.params.userid},{$set:req.body}).then(result=>{
      console.log('part where update is done ')
      console.log(result)
      res.redirect('/index/member/'+req.body.userid)
    }).catch(err=>console.log(err))
}
exports.logout = (req, res) => {
    req.session.destroy((err)=>{
        if(err){
            return console.log(err)
        }else{
            console.log('Destroying session');
        }
        res.redirect('/')
    });
}
// exports.redirectLogin=(req,res)=>{
//     console.log(req.session.username)
//     if(req.session.username){
//         console.log('got here')
//         db.Member.findOne({name:req.session.username}).then(user=>{
//             console.log('findone done')
//             console.log(user)
//             console.log(user.name)
//             console.log(req.session)
//             res.render('member', { title: 'MEMBERS', session: req.session, user: user })
//         })
                
//     }else{
//         console.log(err)
//     }
// }
exports.change_password_form=(req,res)=>{
 res.render('Passwordform',{title:'ChangePassword'})
}
exports.changed_password=(req,res)=>{
   
}
