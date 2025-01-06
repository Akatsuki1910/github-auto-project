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
    let currentExpression = ''; // Store the current expression
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay");

    // Clear button functionality
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
        display.value = '';
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
    });


    // ... existing code ...

// ... (rest of the code)

 //Added delete last char functionality


    //Settings Button and Functionality


    // ... other functions

    // ... (rest of code)

// Reciprocal Calculation

// Factorial Calculation

// Add keyboard support

// ... (Other existing button event listeners)

// ... (Existing functions)

// ... existing code

// ... (Rest of the code)

// ... (Existing code)

// History Toggle Functionality
const historyButton = document.getElementById("show-history");
historyButton.addEventListener("click", () => {
  if (historyDiv.style.display === "none") {
    historyDiv.style.display = "block";
    historyDiv.innerHTML = history.map(item => `<p>${item.expression} = ${item.result}</p>`).join('');
  } else {
    historyDiv.style.display = "none";
  }
});

});