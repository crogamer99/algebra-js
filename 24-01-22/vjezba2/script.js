var infoNode = document.querySelector(".info");
infoNode.innerHTML = "Peta rijeka je piva.";
var h1Element = document.querySelector("h1");
h1Element.innerHTML = "Karlovac";
var span = document.querySelector("span");
var descNode = document.querySelector(".description");
var h3 = document.createElement('h3');
span.replaceWith(h3);
h3.innerHTML = "5 rijeka";
var footer = document.querySelector("footer");
var rijeke = ["Kupa", "Dobra", "Korana", "Mreznica", "Piva"];