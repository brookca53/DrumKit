/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I GOT CLICKED!");
}
*/

/*
document.querySelector("button").addEventListener("click", function handleClick() {
    alert("You Clicked the 'w'!");
});

document.querySelectorAll("button")[1].addEventListener("click", function handleClick() {
    alert("You Clicked the 'a'!");
});

document.querySelectorAll("button")[2].addEventListener("click", function handleClick() {
    alert("You Clicked the 's'!");
});

document.querySelectorAll("button")[3].addEventListener("click", function handleClick() {
    alert("You Clicked the 'd'!");
});

document.querySelectorAll("button")[4].addEventListener("click", function handleClick() {
    alert("You Clicked the 'j'!");
});

document.querySelectorAll("button")[5].addEventListener("click", function handleClick() {
    alert("You Clicked the 'k'!");
});

document.querySelectorAll("button")[6].addEventListener("click", function handleClick() {
    alert("You Clicked the 'l'!");
});
*/

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        checkLetter(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert("Cleaning in progress");
    }
}

var HouseKeeper1 = new HouseKeeper(12, "James", ["bedroom"]);
// HouseKeeper1.clean();


document.addEventListener("keydown", function(event) {
    // alert("Key was pressed!");
    // console.log("KEY: " + event.key);
    // console.log(event);
    checkLetter(event.key);
    buttonAnimation(event.key);
});

function checkLetter(letter) {

    switch(letter) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() { activeButton.classList.remove("pressed"); }, 100);
}

