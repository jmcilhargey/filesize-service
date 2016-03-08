"use strict";

function showFile() {
    
  var input = document.getElementById("fileinput");
  var output = document.getElementById("fileoutput");
  var start = input.value.lastIndexOf("\\") + 1;
  output.value = input.value.substring(start);
};
/*
function fileUpload(event) {
  
  event.stopPropagation();
  event.preventDefault();
  
  var file = [];
  
  var http = new XMLHttpRequest();
  var form = new FormData();
  
  form.append("upload", file[0], file.name);
  
  http.open("POST", "/upload", true);
  
  http.onreadystatechange = function() {
    console.log(http.responseText);
    console.log(http.statusText);
  };
  
  http.send(form);
  
};
*/