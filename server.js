"use strict";

var express = require("express");
var multer = require("multer");
var upload = multer({ 
                dest: "./uploads",
                limits: { fileSize: 10000000, files: 1 }
              });

var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.sendfile(process.cwd() + "/index.html")
});

app.post("/upload", upload.single("upload"), function(req, res) {
  
  res.json(req.file)
  
});

app.listen(process.env.PORT, function() {
  console.log("Listening on port " + process.env.PORT)
});