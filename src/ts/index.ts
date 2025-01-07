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
    const showHistoryButton = document.getElementById("show-history");
    const randomButton = document.getElementById("random");
    const eButton = document.getElementById("e");

    //Clear button
    // ... (Existing Code)

    // Exponent functionality
    // ... (Existing Code)

       // Evaluate button functionality (Modified)
    // ... (Existing Code)
     // After evaluating the expression:
        lastAnswer = parseFloat(display.value); 
        history.push(currentExpression + " = " + lastAnswer);
        displayHistory();

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

    showHistoryButton.addEventListener("click", () => {
        const historyDiv = document.getElementById("history");
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
          historyDiv.style.display = "block";
        } else {
          historyDiv.style.display = "none";
        }
      });
      const displayHistory = () => {
        if (historyDiv) {
          historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
        }
      };

    randomButton.addEventListener("click", () => {
        const randomNumber = Math.random();
        display.value = randomNumber.toString();
        currentExpression += randomNumber;
        currentExpressionDisplay.textContent = currentExpression;
    });
eButton.addEventListener("click", () => {
        const eValue = Math.E;
        display.value = eValue.toString();
        currentExpression += eValue;
        currentExpressionDisplay.textContent = currentExpression;
    });

    // ... (rest of the existing code)
});
