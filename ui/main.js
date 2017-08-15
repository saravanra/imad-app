console.log('Loaded!');
      
alert('Hi, this is executed from main.js');

var element = document.getElementById("main-text");
element.innerHTML = "New value from .js file";

var img = document.getElementById("xtra");
img.onclick = function () {
    img.style.marginLeft = "100px";
};