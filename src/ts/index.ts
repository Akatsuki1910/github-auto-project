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
// ... (rest of the code)
//atan2 functionality
const atan2Button = document.getElementById("calculate-atan2");
atan2Button.addEventListener("click", () => {
    const values = display.value.split(',');
    if (values.length === 2) {
        const y = parseFloat(values[0]);
        const x = parseFloat(values[1]);
        const result = Math.atan2(y, x);
        display.value = result;
        updateHistory(`atan2(${y}, ${x}) = ${result}`);
    }
    else {
        display.value = "Error: Enter y,x";
    }
});

const powerOfTwoButton = document.getElementById("power-of-two");
powerOfTwoButton.addEventListener("click", () => {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    const result = value * value; // Calculate square
    display.value = result;
    updateHistory(`${value}^2 = ${result}`);
  } else {
    display.value = "Error";
  }
});

const powerOfThreeButton = document.getElementById("power-of-three");
powerOfThreeButton.addEventListener("click", () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = value * value * value; // Calculate cube
        display.value = result;
        updateHistory(`${value}^3 = ${result}`);
    }
    else {
        display.value = "Error";
    }
});

const nthRootButton = document.getElementById("nth-root");
nthRootButton.addEventListener("click", () => {
    const values = display.value.split(',');
    if (values.length === 2) {
        const x = parseFloat(values[0]);
        const y = parseFloat(values[1]);
        const result = Math.pow(x, 1/y);
        display.value = result;
        updateHistory(`${y}√${x} = ${result}`);
    } else {
        display.value = "Error: Enter x,y";
    }
});
});