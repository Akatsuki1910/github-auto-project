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
    const degRadButton = document.getElementById("deg-rad");
    const memoryStoreButton = document.getElementById("memory-store");
    const memoryRecallButton = document.getElementById("memory-recall");
    const memoryClearButton = document.getElementById("memory-clear");

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
    // ... (Existing Code)
     // Natural Logarithm functionality (Base e)
    // ... (Existing Code)

    degRadButton.addEventListener("click", () => {
        isDegreeMode = !isDegreeMode;
        degRadButton.textContent = isDegreeMode ? "DEG" : "RAD";
    });

    memoryStoreButton.addEventListener("click", () => {
        memoryValue = parseFloat(display.value);
    });

    memoryRecallButton.addEventListener("click", () => {
        if (memoryValue !== null) {
            display.value = memoryValue.toString();
            currentExpression += memoryValue;
            currentExpressionDisplay.textContent = currentExpression;
        }
    });

    memoryClearButton.addEventListener("click", () => {
        memoryValue = null;
    });


    // ... (rest of the existing code)
});
