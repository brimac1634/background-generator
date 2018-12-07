var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function() {
    color1.value = randomHex()
    color2.value = randomHex()
    setGradient()
})

setGradient()
    
function randomHex() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = "#";
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
}