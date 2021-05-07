const db = require('../models/index')
exports.login_form = (req, res) => {
    res.render('login', { title: "Login" })
}
exports.loginchk = (req, res) => {
    console.log(req.body)
    const { userid, password } = req.body;
    console.log(userid, "/", password);
    try {
        req.session.name = "Admin";
        req.session.gender = "Male";
        
        db.Member.findOne({ userid: userid, password: password }, (err, user) => {
            // user.name='Admin';
            
            if (userid === "admin" && password === "Admin.1234567") {
                console.log('admin here')
                req.session.username = "Admin";
                // console.log(user.name)
                req.session.password="Admin.1234567";
                console.log(req.session)
                // res.render('admin', { title: 'ADMIN', session: req.session})
        
                res.redirect('index/admin')
            }
            else if (user === null) {
                res.end('User does not exist')
            }
            else if (user.userid === userid && user.password === password) {
                console.log('got here')
                req.session.username = user.name;
                console.log(user.name)
                console.log(req.session)
                res.render('member', { title: 'MEMBERS', session: req.session, user: user })
            } else {
                res.end('Wrong credentials provided.');
            }
        })

    } catch (err) {
        res.send(err)
    }
}
exports.edit_profile=(req,res)=>{
    console.log(req.session);
    db.Member.findOne({name: req.session.username}).then(users=>{
        console.log(users)
        console.log('edit_profile form')
        res.render('edit-profile', { title: 'Edit-Profile',session: req.session, user: users })
    }).catch(err=>console.log(err))
}
exports.edited_profile=async (req,res)=>{
    console.log(req.body)
    console.log(req.body.name)
    await db.Member.updateOne({userid :req.body.userid},{$set:req.body}).then(result=>{
      console.log('part where update is done ')
      req.session.username = req.body.name;
      console.log(result)
      res.redirect('/login')
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
exports.redirectLogin=(req,res)=>{
    console.log(req.session.username)
    if(req.session.username){
        console.log('got here')
        db.Member.findOne({name:req.session.username}).then(user=>{
            console.log('findone done')
            console.log(user)
            console.log(user.name)
            console.log(req.session)
            res.render('member', { title: 'MEMBERS', session: req.session, user: user })
        })
                
    }else{
        console.log(err)
    }
}
exports.change_password_form=(req,res)=>{
 
}
exports.changed_password=(req,res)=>{

}
