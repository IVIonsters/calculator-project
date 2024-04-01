// Calc Program

const display = document.getElementById("display");

// Function for appending value to display
function appendtoDisplay(input) {
    display.value += input;
}



// Function for clearing the display
function clearDisplay() {
    display.value = "";
}



// Function for calculating the result
function calculate() {
    try {
    display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}
















