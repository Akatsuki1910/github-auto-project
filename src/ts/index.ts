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
});
