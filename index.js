//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key){

        switch (key) {
            case "A":
                var tom1 = new Audio("sounds/tom1.mp3");
                tom1.play();
                break;

            case "B":
                var tom2 = new Audio("sounds/tom2.mp3");
                tom2.play();
                break;

            case "H":
                var tom3 = new Audio("sounds/tom3.mp3");
                tom3.play();
                break;

            case "I":
                var tom4 = new Audio("sounds/tom4.mp3");
                tom4.play();
                break;
    
            case "N":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
    
            case "P":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "V":
                var kickbass = new Audio("sounds/kickbass.mp3");
                kickbass.play();
                break;   
        
            default: console.log(key);
        }
    }

    function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey);
      
        activeButton.classList.add("pressed");
      
        setTimeout(function() {
          activeButton.classList.remove("pressed");
        }, 100);
      
      }