

// const express = require("express");
// const app = express();
// const multer = require("multer");
const express = require('express');
const path = require("path");
const bodyparser = require("body-parser");
const multer = require("multer");

let filePath;
 
const app = express()
const PORT = 5100;
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({extended:true, limit: '50mb'}));

app.use(express.static(__dirname + "/images"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    /*Appending extension with original name*/
var seconds = new Date().getTime() / 1000;

    filePath = `localhost:5100/images/${seconds}${file.originalname}`
    cb(null, seconds + file.originalname);
  }
})

var upload = multer({ storage: storage,limits: {  fileSize: 1000000}, });

app.post('/upload-pic', upload.single('upload'), (req, res) => {
  res.send(`localhost:5100/${req.file.filename}`)
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
  })




// app.use(errHandler);
app.listen(5100, () => {
    console.log("server up and running");
})