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

const inverseSinButton = document.getElementById("inverse-sin");
inverseSinButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    const result = isDegreeMode ? Math.asin(currentValue) * (180 / Math.PI) : Math.asin(currentValue);
    display.value = result.toString();
});

const inverseCosButton = document.getElementById("inverse-cos");
inverseCosButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  const result = isDegreeMode ? Math.acos(currentValue) * (180 / Math.PI) : Math.acos(currentValue);
  display.value = result.toString();
});

const inverseTanButton = document.getElementById("inverse-tan");
inverseTanButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    const result = isDegreeMode ? Math.atan(currentValue) * (180 / Math.PI) : Math.atan(currentValue); 
    display.value = result.toString();
});
});