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

// ... (rest of code)

// Reciprocal Calculation
const calculateReciprocalButton = document.getElementById("calculate-reciprocal");
calculateReciprocalButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    } else {
        display.value = "Error: Division by zero";
    }
});

// Factorial Calculation
const calculateFactorialButton = document.getElementById("calculate-factorial");
calculateFactorialButton.addEventListener("click", () => {
    const currentValue = parseInt(display.value);
    if (currentValue >= 0) {
        let result = 1;
        for (let i = 2; i <= currentValue; i++) {
            result *= i;
        }
        display.value = result.toString();
    } else {
        display.value = "Error: Negative Input";
    }
});

const openNewTabButton = document.getElementById("open-new-tab");
openNewTabButton.addEventListener("click", () => {
    window.open("https://www.example.com", "_blank");
});

});
