const express = require("express");
const app = express();

// const ejs = require('ejs');

app.set("view engine", "ejs");
app.use(express.static("public")); //Taking it to public folder.so we can use our CSS.


// Changing the default delimiters used by Ejs from <% %> to custom delimiters <? ?>.
app.set('view options', {delimiter: '?'});


// Below setting used to remove all whitespace from the generated HTML output.
app.locals.rmWhitespace = true;


// The cache option is used to enable caching of compiled templates. When this option is set to true, 
// Ejs will cache the compiled template in memory, which can improve performance when rendering the same template multiple times.
app.set("view cache" , true);


// The "debug" option is used to enable or disable the debugging of the EJS template engine. When this option is enabled, 
// EJS will output additional information to the console to help you diagnose issues with your templates."debug" option in production is not recommended, 
// because it expose sensitive information only used during development and testing.
// app.set('view options', { debug: true });


// app.locals is an object that contains local variables that are available to the views rendered by the Express application.
// app.locals.client = true is simply a way to let your EJS templates know that they should expect the data to be rendered on the client-side, rather than the server-side. 
app.locals.client = true;

app.get("/", (req,res)=>{
    const name = "Muhammad Harris";
    const msg = "My Name is Muhammad Harris";

    res.render('index.ejs', { name: name , msg:msg});

});

app.listen("3000", () => {
    console.log("Server running at port 3000");
});
