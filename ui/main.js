var button = document.getElementById('counter');
button.onclick = function() {
    //request the counter end point
    
    //capture the response & store it in a variable.
    
    //render the variable to the correct span
    counter = counter + 1
    var span = document.getElementById('count');
    span.innerHTML = counter
    
};