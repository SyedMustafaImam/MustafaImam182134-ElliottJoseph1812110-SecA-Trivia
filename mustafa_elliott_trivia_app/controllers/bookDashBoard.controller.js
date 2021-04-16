const { Book } = require('../models/index');
const db=require('../models/index');

let bookid=0;


exports.getBookId = (req,res,next) =>{
    db.Book.find().limit(1).sort({$natural:-1}).then(result=>{
    console.log('book id from db>>',result[0].bookid);
           if(result==null){
           bookid = 1;
           console.log('null bookid', result);
          }else{
            console.log(result[0].bookid);
            bookid=result[0].bookid + 1;
            next()
          }
    }).catch(err=>{
        console.log(err)
    })
}

exports.addbook = (req,res) =>{
    res.render('add-book', { title: 'Add Book' , bookid:bookid});
}


exports.addNewBook=function(req,res, next){
   console.log('req.body >> ',req.body);
//    console.log('bookId = ', book_id);
    let book=new db.Book({
        bookid : bookid,
        name: req.body.bookname,
        author: req.body.bookauthor,
        year:req.body.bookyear
    });

    book.save().then(result =>{
        console.log('Saved in db >> ', result);
    }).catch(err => console.log(err))

    res.redirect('/admin')

}


exports.book_list=function(req,res){
    Book.find(function(err, book){
        res.render('list-book',{page:'Show All books', title:'list', book:book});
    });
};

exports.book_delete=function(req,res){
    Book.findByIdAndRemove(req.params.id, function(err){
        if(err) return next(err);
        res.redirect('/admin/book-list');
    })
};

exports.update_book=function(req,res){
    Book.findById(req.params.id,function(err, book){
        if (err) return next(err);
        res.render('update_book',{title:"Update Book"});
    })
};

exports.bookupdate_post=function(req,res){
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, book) {
        if (err) return next(err);
        res.redirect('/book/list');
    });
};