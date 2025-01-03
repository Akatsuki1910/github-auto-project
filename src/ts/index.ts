// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    let isDegreeMode = true; // Degree mode by default

    // ... existing code ...

// ... (rest of the code)
const degRadButton = document.getElementById("deg-rad");
degRadButton.addEventListener("click", () => {
    isDegreeMode = !isDegreeMode;
    degRadButton.textContent = isDegreeMode ? "Deg" : "Rad";
    updateHistory(`Mode: ${isDegreeMode ? "Degree" : "Radian"}`);
});

const evaluateButton = document.getElementById("evaluate");
evaluateButton.addEventListener("click", () => {
    try {
        let result = eval(display.value);
        // Degree/Radian conversion for trigonometric functions
        display.value = result;
        updateHistory(`${display.value} = ${result}`);
    } catch (error) {
        display.value = "Error";
        updateHistory(`Error: ${error.message}`);
    }
});

// ... existing code ...

// Sign function
const signButton = document.getElementById("sign");
signButton.addEventListener("click", () => {
    const value = parseFloat(display.value);
    const result = Math.sign(value);
    display.value = result;
    updateHistory(`sign(${value}) = ${result}`);
});
//Added divide functionality
const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", () => {
    display.value += "/";
});
const decimalButton = document.getElementById("decimal-point");

decimalButton.addEventListener("click", () => {
  // Check if the display already contains a decimal point
  if (!display.value.includes('.')) {
    display.value += '.';
  }
});
// Reciprocal function
const reciprocalButton = document.getElementById("reciprocal");
reciprocalButton.addEventListener("click", () => {
    const value = parseFloat(display.value);
    if (value === 0) {
        display.value = "Error: Division by zero";
    }
    else {
        const result = 1 / value;
        display.value = result;
        updateHistory(`1/${value} = ${result}`);
    }
});
//Squared functionality
const squaredButton = document.getElementById("squared");
squaredButton.addEventListener("click", () => {
    const value = parseFloat(display.value);
    const result = value * value; // Or Math.pow(value, 2)
    display.value = result;
    updateHistory(`${value}² = ${result}`);
});
    // ... (rest of the code)
});
