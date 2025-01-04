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
//Cubed functionality
const cubedButton = document.getElementById("cubed");
cubedButton.addEventListener("click", () => {
    const value = parseFloat(display.value);
    const result = value * value * value; // Or Math.pow(value, 3)
    display.value = result;
    updateHistory(`${value}³ = ${result}`);
});
// Nth root functionality
const nthRootButton = document.getElementById("n-th-root");
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

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const gcdButton = document.getElementById("calculate-gcd");
gcdButton.addEventListener("click", () => {
  const values = display.value.split(',');
  if (values.length === 2) {
    const num1 = parseInt(values[0]);
    const num2 = parseInt(values[1]);
    const result = gcd(num1, num2);
    display.value = result;
    updateHistory(`gcd(${num1}, ${num2}) = ${result}`);
  }
  else {
    display.value = "Error: Enter two numbers separated by a comma";
  }
});

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const lcmButton = document.getElementById("calculate-lcm");
lcmButton.addEventListener("click", () => {
    const values = display.value.split(',');
    if (values.length === 2) {
        const num1 = parseInt(values[0]);
        const num2 = parseInt(values[1]);
        const result = lcm(num1, num2);
        display.value = result;
        updateHistory(`lcm(${num1}, ${num2}) = ${result}`);
    }
    else {
        display.value = "Error: Enter two numbers separated by a comma";
    }
});

function permutation(n, r) {
    if (n < 0 || r < 0 || n < r) {
        return "Error: Invalid input for permutation";
    }
    let result = 1;
    for (let i = 0; i < r; i++) {
        result *= (n - i);
    }
    return result;
}

const permutationButton = document.getElementById("calculate-permutation");
permutationButton.addEventListener("click", () => {
    const values = display.value.split(',');
    if (values.length === 2) {
        const n = parseInt(values[0]);
        const r = parseInt(values[1]);
        const result = permutation(n, r);
        display.value = result;
        updateHistory(`P(${n}, ${r}) = ${result}`);
    } else {
        display.value = "Error: Enter n,r";
    }
});

function combination(n, r) {
    if (n < 0 || r < 0 || n < r) {
        return "Error: Invalid input for combination";
    }
    return permutation(n, r) / factorial(r);
}
function factorial(n) {
    if (n < 0) {
        return "Error: Invalid input for factorial";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
const combinationButton = document.getElementById("calculate-combination");
combinationButton.addEventListener("click", () => {
    const values = display.value.split(',');
    if (values.length === 2) {
        const n = parseInt(values[0]);
        const r = parseInt(values[1]);
        const result = combination(n, r);
        display.value = result;
        updateHistory(`C(${n}, ${r}) = ${result}`);
    } else {
        display.value = "Error: Enter n,r";
    }
});
//Added log10 functionality
const log10Button = document.getElementById("calculate-log10");
log10Button.addEventListener("click", () => {
  const num = parseFloat(display.value);
  if(isNaN(num)){
    display.value = "Error: Invalid Input";
  } else{
  const result = Math.log10(num);
  display.value = result;
    updateHistory(`log10(${num}) = ${result}`);
  }
});
//Added log2 functionality
const log2Button = document.getElementById("calculate-log2");
log2Button.addEventListener("click", () => {
  const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Error: Invalid Input";
    } else {
        const result = Math.log2(num);
        display.value = result;
        updateHistory(`log2(${num}) = ${result}`);
    }
});
// Added ln functionality
const lnButton = document.getElementById("calculate-ln");
lnButton.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Error: Invalid Input";
    } else if (num <= 0) {
        display.value = "Error: Input must be positive for ln";
    }
    else {
        const result = Math.log(num);
        display.value = result;
        updateHistory(`ln(${num}) = ${result}`);
    }
});
//Memory Add functionality
const memoryAddButton = document.getElementById("memory-add");
memoryAddButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = (memoryValue || 0) + currentValue;
        updateHistory(`M+ ${currentValue} (Memory: ${memoryValue})`);
    }
});
const eulerButton = document.getElementById('e');

eulerButton.addEventListener('click', () => {
    display.value += Math.E;
});
    // ... (rest of the code)
});
