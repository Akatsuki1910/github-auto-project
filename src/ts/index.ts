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
        if (isDegreeMode && typeof result === 'number' && !isNaN(result)) {
          const toRadians = (degrees) => degrees * (Math.PI / 180);
          result = toRadians(result);
          display.value = result;
          updateHistory(`${display.value} = ${result} (radians)`);  
      } else {
          display.value = result;
        updateHistory(`${display.value} = ${result}`);
      }
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

    // ... (rest of the code)
});
