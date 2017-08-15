console.log('Loaded!');
      
alert('Hi, this is executed from main.js');

var element = document.getElementById("main-text");
element.innerHTML = "New value from .js file";

var img = document.getElementById("xtra");
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function () {    
    var interval = setinterval(moveRight, 100)
//    img.style.marginLeft = "100px";
};