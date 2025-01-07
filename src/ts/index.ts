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


    // ... (rest of the existing code)
});

