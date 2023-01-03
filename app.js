const express = require("express");
const { Server } = require("http");
const app = express();
const body_parser = require("body-parser");
const path = require('path')
const { response } = require("express");
const {check, validationResult} = require("express-validator");
const { body } = require('express-validator');

let urlencoded = body_parser.urlencoded({extended: false});
app.use(body_parser.json());
app.use(urlencoded);
app.use(express.static("public"));

// homepage router 
app.get("/" , (req , res) => {
    
    res.sendFile(__dirname + "/index.html")
});

app.post("/formData" , [
    check('email')
    .not().isEmpty().withMessage("Name cannot be empty")
    .isEmail().withMessage("Invalid Email") ,

     
    check('password')
    .not().isEmpty().withMessage("password cannot be empty") ,

    check('otp')
    .isInt().withMessage('OTP is only digits')
    
    ],
    //  body('email').custom(value => {
    //     const targetEmail = "Bernard231@gmail.com" ;
    // }),
    
    (req , res) => {
        const { email , passwword , otp } = req.body ;
       
   
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return res.status(422).json({
            errors : errors.array()
        })
      }

      res.status(202).json({
        success:'Okay Good'
      })
     
         
});

app.post("/", (req , res)=> {
    
   
})

app.listen(3000 , () => {
    console.log (" Server is now live");
})


