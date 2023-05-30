const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/hi",function(req,res){
    //res.send(req.body);
    var myData1 = req.body.mydata;
    res.send(myData1);
})
app.get("/about",function(req,res){
    res.send("About")
})

app.get("/joke",function(req, res){
    const url = "https://v2.jokeapi.dev/joke/Any"
    https.get(url, function(response){
        response.on("data", function(data){
            var myD = JSON.parse(data);
            console.log(myD);
        })
    })
    res.send("Server OK");
})

app.get("/chimp",function(req,res){
    res.sendFile(__dirname+"/chimp.html")
})
app.post("/chimp",function(req,res){
    var firstname = req.body.firstName;
    var lastname = req.body.lastName;
    var email = req.body.email;
    const data = {
        firstName: firstname,
        lastName: lastname
    }
    const jsonData = JSON.stringify(data);

    const url = " ";
    const options = {
        method:"POST",
        auth:"angel:dsaffadsf"
    }
    // const request = https.request(url,options,function(response){
    //     if(response.statusCode==200){
    //         res.sendFile("")
    //     }
    //     response.on("data",function(data){
    //         console.log(JSON.parse(data));
    //     })
    // })
    res.send(jsonData);
    console.log(jsonData);
})

app.listen(3000, function(){
    console.log("Server started");
})