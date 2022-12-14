const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/',require('./routes'));

// setup view engine
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        // console.log('error: ',err);
        console.log(`Error : ${err}`)
    }
    console.log(`Server is running in ${port}`);
})