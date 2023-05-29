const express = require ("express");
const bodyParser = require ("body-parser");

const app = express ();
app.use (bodyParser.urlencoded ({extended: true}));

app.get ("/bmicalculator" , function (request , response) {
    response.sendFile (__dirname + "/bmiCalculator.html");
});

app.post ("/bmicalculator" , function (request , response) {

    var weight = Number (request.body.weight);
    var height = Number (request.body.height);

    var result = weight * height;

    response.send ("Your BMI is " + result);
});


app.listen (3000 , function () {
    console.log ("Server is running on port 3000");
});