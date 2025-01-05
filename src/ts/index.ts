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
  });

 //Added delete last char functionality
const deleteLastCharButton = document.getElementById("delete-last-char");
deleteLastCharButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// ... (Other existing button event listeners)

//Settings Button and Functionality
const openSettingsButton = document.getElementById("open-settings");
openSettingsButton.addEventListener("click", () => {
  // Implement settings functionality here. For example, open a modal, etc.
  alert("Settings functionality will be added here.");
});

const calculateSqrtButton = document.getElementById("calculate-sqrt");
calculateSqrtButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (currentValue >= 0) {
        const result = Math.sqrt(currentValue);
        display.value = result.toString();
    } else {
        display.value = "Error: Negative Input";
    }
});

// ... other functions

const calculateLnButton = document.getElementById("calculate-ln");
calculateLnButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (currentValue > 0) {
      const result = Math.log(currentValue);
      display.value = result.toString();
    } else {
      display.value = "Error: Invalid input for ln";
    }
  });

  // Left shift
  const leftShiftButton = document.getElementById("left-shift");
  leftShiftButton.addEventListener("click", () => {
    const currentValue = parseInt(display.value);
    const result = currentValue << 1; // Left shift by 1 bit
    display.value = result.toString();
  });

  // Right shift
  const rightShiftButton = document.getElementById("right-shift");
  rightShiftButton.addEventListener("click", () => {
    const currentValue = parseInt(display.value);
    const result = currentValue >> 1; // Right shift by 1 bit
    display.value = result.toString();
  });

  // Calculate e^x
  const calculateEButton = document.getElementById("calculate-e");
  calculateEButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    const result = Math.exp(currentValue);
    display.value = result.toString();
  });

// Calculate 10^x
const calculate10xButton = document.getElementById("calculate-10x");
calculate10xButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    const result = Math.pow(10, currentValue);
    display.value = result.toString();
});

// Calculate absolute value
const calculateAbsButton = document.getElementById("calculate-abs");
calculateAbsButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  const result = Math.abs(currentValue);
  display.value = result.toString();
});
//Memory Recall and Clear (MRC) functionality
let memoryRecallValue = 0;
const mrcButton = document.getElementById("mrc");
mrcButton.addEventListener("click", () =>{
    if(memoryRecallValue !== 0){
        display.value = memoryRecallValue.toString();
        memoryRecallValue = 0; // Clear the memory after recall
    } else {
        alert("Memory is empty!");
    }
});

// Floor calculation
const calculateFloorButton = document.getElementById("calculate-floor");
calculateFloorButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  display.value = Math.floor(currentValue).toString();
});

// x^y calculation
const calculatePowButton = document.getElementById("calculate-pow");
calculatePowButton.addEventListener("click", () => {
    const base = parseFloat(prompt("Enter the base (x):"));
    const exponent = parseFloat(prompt("Enter the exponent (y):"));
    if (isNaN(base) || isNaN(exponent)){
        display.value = "Invalid input";
    } else {
        display.value = Math.pow(base, exponent).toString();
    }
});

// x^3 calculation
const calculateExpButton = document.getElementById("calculate-exp");
calculateExpButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  display.value = Math.pow(currentValue, 3).toString();
});

// Sign function
const signButton = document.getElementById("sign");
signButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  display.value = Math.sign(currentValue).toString();
});

});