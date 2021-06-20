"use strict";

let counter = document.getElementById("counter");
let text = document.querySelector("div > p");

let id = setInterval(() => {
    counter.innerText = +counter.innerText + 1;
    if(counter.innerText == 10) {
      clearInterval(id);
      //window.location.href = "https://google.com";
    } 
    if(counter.innerText == 8) text.innerText = "Redirecting"; 
}, 1000);

