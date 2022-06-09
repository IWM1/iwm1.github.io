
// 1. Store all the data submitted by the User in the cookies. 

// Use all kinds of data, arrays, strings, object, arrays of objects.

// 2. Create a new html, display page, with the Labels and the values submitted the User in the form.

// 3. Add a new html , login page with fields, Username and Password.

    // a. If the Username/Password is incorrect, redirect to Login Page. If Username/Password is correct, redirect to the form Page.
    // b. Generate a key from the Username and Password and store the key in Cookie

// 5. Every request to the Server should check for that key in cookie, if it is not present, redirect to login page. 

// 6. Use MVC Pattern, all the handler methods move to the Controller

const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const ejs = require("ejs")
const path = require("path")
const { dirname } = require("path")

const app = express()
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(cookieParser())

//read input from body
app.use(bodyParser.urlencoded({extended:false}))
// app.bodyParser(urlencoded({extended:false}))


app.listen(3000, ()=>{
    console.log("working")
})

//send the page when needed 
app.get("/login", (req,res,next) =>{
    res.sendFile(path.join(__dirname, "views/login.html"))
})

//handle form 

app.post("/login", (req,res,next) =>{
    // 1. Store all the data submitted by the User in the cookies. (two steps -A/B)

    let myInputs = req.body
    let isCorrect = validate(myInputs.username, myInputs.password)
    //A) all input data that is sent to the server will be stored first in myInputs locally then to "loginData" in cookies
    // res.cookie("loginData" , myInputs)
    if(isCorrect){
    //B) after saving the user input we need to either save or redirect 
    // ("/views/index.html")
    res.sendFile(path.join(__dirname,"views/index.html"))
    res.cookie("loginKey", generateKey(myInputs.username, myInputs.password))
    }
    else{
        res.sendFile(path.join(__dirname,"views/login.html"))
    }
    // console.log(myInputs);
})

app.get("/form",(req,res,next)=>{
    console.log(req.cookies.loginKey);

    let isAuthorized = decryptValidateKey(req.cookies.loginKey)

    if(isAuthorized){
    res.sendFile(path.join(__dirname,"views/index.html"))
    }
    else{
        res.sendFile(path.join(__dirname,"views/login.html"))
    }

})

// check the user input against the stored values
function validate(username, password){
    if(username == "iyosiyas" && password == "iyosiyas"){
        return true;
    }
        return false;
}

// we generate a key using some method to store inside the cookie
function generateKey(username, password){
    return username + "," + password;
}

// checking if the cookie is valid or not
function decryptValidateKey(input){
    if(input == null){
        return false;
    }
    let myArray = input.split(",")
    let userName = myArray[0];
    let password = myArray[1];
    return validate(userName, password);
}


  

    app.post("/add", (req, res, next) => {
        
            res.cookie("resultCookie", req.body);
            res.sendFile(path.join(__dirname,"views/display.html"))
   
    });
    
    app.get("/display", (req, res, next) => {

            res.render("display", {resultCookie: req.cookies.resultCookie});

    });
    console.log(__dirname)

