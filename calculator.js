const { response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//grab data from an HTML form then send to a server
app.use(bodyParser.urlencoded({extended: true}));

//send file to root directory
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    //console.log(__dirname);
});


//simple calculator on root
app.post("/", function (req, res) {
    //parsed version of http request
    console.log(req.body.num1);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

//bmi calculator
app.get("/bmicalculator", function (req, res) {
    //send file to bmiCalculator page
    res.sendFile(__dirname + "/bmiCalculator.html");
});

//post for bmiCalculator. Calculate user entered values and post to /bmiCalculator URL
app.post("/bmicalculator", function(req, res){
    var weight = req.body.weightNum;
    var height = req.body.heightNum;

    var bmi = (weight / Math.pow(height,2));

    res.send("The entered BMI is " + bmi);

});


//notifies us that the server started on localhost:3000
app.listen(3000, function () {
    console.log("Server started on port 3000");
});