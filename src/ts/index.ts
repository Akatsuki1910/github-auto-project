// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables
    // ... existing code
 // Add factorial button
    // ... existing functions

// Add factorial button
// ... (Existing factorial function)

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;

function addToHistory(expression: string) {
    history.push(expression);
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

// ... other existing buttons

// ... existing negate button code ...

// ... existing multiply, divide, remainder buttons and event listeners

// ... existing e button code ...

// ... existing ans button code ...

// ... existing floor button code ...

// ... existing ceil button code ...

// ... existing random button code ...

// ... existing duplicate button code ...

// ... existing swap button code ...

// ... existing ln button code ...

// ... existing mod button code ...

//Inverse Functionality
// ... existing inverse button code ...

// Sum Functionality
// ... existing sum button code ...

// Average Functionality
// ... existing Average button code ...

// Add Clear All functionality
// ... existing Clear All button code ...

// Min Functionality
// ... existing Min button code ...

// Max Functionality
// ... max button code ...

// Add 10 to the power of x button
// ... existing 10^x button code ...
const display = document.getElementById("display") as HTMLInputElement;
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
let currentExpression = "";
// Squared Functionality
// ... existing Squared Functionality

const percentBtn = document.getElementById("percent") as HTMLButtonElement;
percentBtn.addEventListener("click", () => {
    // ... existing percentBtn code
});

const signChangeBtn = document.getElementById("signChange") as HTMLButtonElement;
signChangeBtn.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        const newValue = -currentValue;
        display.value = newValue.toString();
        lastAnswer = newValue;
        addToHistory(`${currentValue} * -1 = ${newValue}`);
        currentExpression = "";
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
    }
});

const deleteBtn = document.getElementById("delete") as HTMLButtonElement;
deleteBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

});

//Existing Pow Button Code...

//Existing Square Root Button Code...

//Existing Cube Root Button Code...
