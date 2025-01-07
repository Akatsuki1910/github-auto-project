// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    let isDegreeMode = true; 
    let currentExpression = ''; 
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay");

    //Clear button
    // ... (Existing Code)

    // Exponent functionality
    // ... (Existing Code)

       // Evaluate button functionality (Modified)
    // ... (Existing Code)

     //sin button
    // ... (Existing Code)

        // Cosine functionality
    // ... (Existing Code)

    // Tangent functionality
    // ... (Existing Code)

     // Logarithm functionality (Base 10)
    const logButton = document.getElementById("log");
    logButton.addEventListener("click", () => {
        currentExpression += 'Math.log10('; // Add log function to expression
        currentExpressionDisplay.textContent = currentExpression;
        display.value = ''; // Clear the display
    });
     // Natural Logarithm functionality (Base e)
    const lnButton = document.getElementById("ln");
    lnButton.addEventListener("click", () => {
        currentExpression += 'Math.log('; // Add ln function to expression
        currentExpressionDisplay.textContent = currentExpression;
        display.value = '';
    });


    // ... (rest of the existing code)
});
