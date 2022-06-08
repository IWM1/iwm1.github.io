
//1. ceating express server
const express = require('express');
const app = express();
const path = require("path")


app.listen(3000)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let formData;
let pagehits = 0;

app.get("", (req,res,next) =>{
    ++pagehits;
    res.sendFile(path.join(__dirname+"/index.html"))
})


// 2. Show the Html developed in DOM Assignment when path is '/add'
app.get("/add", (req,res,next) =>{
    ++pagehits;
    res.sendFile(path.join(__dirname+"/index.html"))
})

// 3. Submit the data entered by the User to the same url. 

//           a. Store all the User entered information locally(in the server page)

app.post("/add", (req,res,next) =>{
    ++pagehits;
    formData = req.body;//form data is captured in object format

    let mySelectedCheckbox = formData.course;
    let values = "<div>"
    for(let i = 0; i< mySelectedCheckbox.length; i++){
        values += mySelectedCheckbox[i] + " "
    }
    values += "</div>"
    res.send("<div>"+formData.textfield+"</div>"+
    "<div>"+formData.degree+"</div>"+
    "<div>"+values+"</div>"+
    "<div>"+formData.sellist+"</div>"+
    "<div>"+formData.txtArea+"</div>"

    )
})

// 3b. Redirect the Post to new route, '/view' page.


app.get(("/view"), (req, res, next) =>{
    ++pagehits;
    let mySelectedCheckbox = formData.course;
    let values = "<div>"
    for(let i = 0; i< mySelectedCheckbox.length; i++){
        values += mySelectedCheckbox[i] + " "
    }
    values += "</div>"
    res.send("<div>"+formData.textfield+"</div>"+
    "<div>"+formData.degree+"</div>"+
    "<div>"+values+"</div>"+
    "<div>"+formData.sellist+"</div>"+
    "<div>"+formData.txtArea+"</div>"

    )
})

//6 - pagehits

app.get(("/pagehits"), (req,res,next) =>{
    res.send("<div> The total number of "+ pagehits +"</div>")
    
})

// 5. Create 404 page, so whenever User types in the path that is not found, this 404 is shown. 
app.use((req,res,next) =>{
    ++pagehits;
    res.sendFile(path.join(__dirname+"/404.html"))
})