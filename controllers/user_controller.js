module.exports.profile = function(req,res){
    res.end('<h1>user profile</h1>')
}


module.exports.sign_up = function(req,res){
    res.render('sign_up.ejs',{
        title: "Sign Up"
    })
}

module.exports.sign_in = function(req,res){
    res.render('sign_in.ejs',{
        title: "Sign in"
    })
}

// sign up data
module.exports.create = function(req,res){

}
// sign in 
module.exports.create_session = function(req,res){

}