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

// ... other functions ...

const floorButton = document.getElementById("calculate-floor");
floorButton.addEventListener("click", () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = Math.floor(value);
        display.value = result;
        updateHistory(`floor(${value}) = ${result}`);
    } else {
        display.value = "Error";
    }
});

//Ceil Functionality
const ceilButton = document.getElementById("calculate-ceil");
ceilButton.addEventListener("click", () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      const result = Math.ceil(value);
      display.value = result;
      updateHistory(`ceil(${value}) = ${result}`);
    }
    else {
        display.value = "Error";
    }
});

//Cbrt Functionality
const cbrtButton = document.getElementById("calculate-cbrt");
cbrtButton.addEventListener("click", () => {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    const result = Math.cbrt(value);
    display.value = result;
    updateHistory(`cbrt(${value}) = ${result}`);
  } else {
    display.value = "Error";
  }
});

// 10^x functionality
const exp10Button = document.getElementById("exp-10");
exp10Button.addEventListener("click", () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = Math.pow(10, value);
        display.value = result;
        updateHistory(`10^${value} = ${result}`);
    } else {
        display.value = "Error";
    }
});
// x^n functionality
const xToTheNthButton = document.getElementById("x-to-the-nth");
xToTheNthButton.addEventListener("click", () => {
    const values = display.value.split(',');
    if (values.length === 2) {
        const x = parseFloat(values[0]);
        const n = parseFloat(values[1]);
        const result = Math.pow(x, n);
        display.value = result;
        updateHistory(`${x}^${n} = ${result}`);
    }
    else {
        display.value = "Error: Enter x,n";
    }
});
});
