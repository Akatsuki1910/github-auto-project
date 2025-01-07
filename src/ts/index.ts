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
    const lastAnswerButton = document.getElementById("last-answer");
     const openParenthesisButton = document.getElementById("open-parenthesis");
    const closeParenthesisButton = document.getElementById("close-parenthesis");

    //Clear button
    // ... (Existing Code)

    // Exponent functionality
    // ... (Existing Code)

       // Evaluate button functionality (Modified)
    // ... (Existing Code)
     // After evaluating the expression:
        lastAnswer = parseFloat(display.value); 

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

    lastAnswerButton.addEventListener("click", () => {
        if (lastAnswer !== null) {
            display.value = lastAnswer.toString();
            currentExpression += lastAnswer;
            currentExpressionDisplay.textContent = currentExpression;
        }
    });
    openParenthesisButton.addEventListener("click", () => {
        currentExpression += "(";
        currentExpressionDisplay.textContent = currentExpression;    
    });

    closeParenthesisButton.addEventListener("click", () => {
        currentExpression += ")";
        currentExpressionDisplay.textContent = currentExpression;    
    });

    // ... (rest of the existing code)
});
