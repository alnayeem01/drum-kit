var place = document.querySelectorAll("button");

for (var i = 0; i < place.length; i++) {
    place[i].addEventListener("click", function() { // FUNCTION TO DETECT CLICK
        var buttonInnerHTML = this.innerHTML;  // Corrected this.innerHTML

    makeSound(buttonInnerHTML); // Passed the key
    buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function(event) { //FUNTION USED TO DETECT KEYBOARD PRESS
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":  // Assuming you want another case for "l"
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log("this.innerHTML");  // For handling any other characters
    }
}
 
function buttonAnimation(currentKey){
    var active= document.querySelector("."+ currentKey);
    active.classList.add("pressed");
    setTimeout(function (){
        active.classList.remove("pressed");
    },100);
}