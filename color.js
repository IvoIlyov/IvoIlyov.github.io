//ctrl + shift + r - hard reset for chrome!!

//all variables:
var numberOfSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

initial();

function initial() {
    setButtonListeners();
    setSquares();
    reset();
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
        return colors[random];
}

function generateRandColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randColor());
    }

    return arr;
}

function randColor() {
    var r = Math.floor(Math.random() * 256);  //ot 0 do 255
    var g = Math.floor(Math.random() * 256);  //ot 0 do 255
    var b = Math.floor(Math.random() * 256);  //ot 0 do 255
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    colors = generateRandColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    displayMessage.textContent = "";
}


function setButtonListeners() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            for (var j = 0; j < modeButtons.length; j++) { modeButtons[j].classList.remove("selected"); }
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    };
    resetButton.addEventListener("click", function () {
        reset();
    });
}

function setSquares() {
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                resetButton.textContent = "Try Again";
                displayMessage.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                displayMessage.textContent = "Try again!";
            }
        });
    }
}