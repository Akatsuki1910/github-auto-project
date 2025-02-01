// ... (Existing Code)

// Add negate button functionality

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

let memoryValue = 0; // Initialize memory value

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
    lastAnswer = parseFloat(result); // Store the last answer
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
const display = document.getElementById("display") as HTMLInputElement;
// ... other existing button declarations
// ... existing event listeners
// ... (rest of the existing code)

// ... existing functions ...

// Add event listeners for open and close parenthesis buttons
const openParenthesisButton = document.getElementById('open-parenthesis') as HTMLButtonElement;
const closeParenthesisButton = document.getElementById('close-parenthesis') as HTMLButtonElement;

openParenthesisButton.addEventListener('click', () => {
  display.value += '(';
  currentExpression += '(';
  currentExpressionDisplay.textContent = currentExpression;
});

closeParenthesisButton.addEventListener('click', () => {
  display.value += ')';
  currentExpression += ')';
  currentExpressionDisplay.textContent = currentExpression;
});

    // ... existing reciprocal button code
// Squared functionality
// ... existing squared button code

//Cubed Functionality (New Feature)
// ... existing cubed button code

// ...existing max function


// ...existing avg function

//Calculating average of numbers
// ... existing averageButton code

// Summation Function (New Feature Implementation)
// ... existing sumButton code

// Add Geometric Mean button functionality
// ... existing geoMeanButton code

// Calculate Expression Button (New Feature)
// ... existing calculateExpressionButton

//Parentheses Button
// ... existing parenthesisButton code

// ... existing fibonacciButton

// ... existing timeButton

// ... existing exp2Button

// ... existing backspace2Button

// ... existing randomNumberButton

// ... existing roundToDecimalButton

//New Feature: Absolute Value Button
// ... Existing absButton code

// ... existing signButton code

//New Feature: Logarithm button (base 10)
// ... (existing logButton code)

// New Feature: Natural Logarithm button (base e)
// ... existing lnButton code

// ... existing expButton code

//New Feature: sin button 
// ... existing sinButton code

//New Feature: cos button
// ... existing cosButton code

// New Feature: tan button
// ... existing tanButton code

// ... existing roundButton code

// ... existing randomButton code

//New Feature: Floor button
// ... existing floorButton code

// Adding Euler's number (e) functionality
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
  display.value += Math.E;
});

// ... existing modButton code

//New Feature: Cube Root button
// ... existing cubeRootButton code

// New Feature: Nth Root button
// ... existing nthRootButton code

// New Feature: Inverse Sine button
// ... existing inverseSinButton code

// ... existing duplicate button code

// ... existing inverse button code

// ... existing ceil button code

// ... existing percentage button code
// ... existing max button code
// ... existing min button code
// ... existing medianButton code

//Mode button
// ... existing mode button code

// ... existing Standard Deviation button code

// ... existing expm1Button code

//Combination (nCr)
// ... existing comboButton code

// ... existing percentageChangeButton

//New Feature: Base Conversion
// ... existing baseConversionButton code

// Ans Button (New Feature)
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    display.value += lastAnswer.toString();
});

//Exit Button (New Feature): Clears the display
const exitButton = document.getElementById('exit') as HTMLButtonElement;
exitButton.addEventListener('click', () => {
  display.value = ''; // Clear the display value
  currentExpression = '';
  currentExpressionDisplay.textContent = '';
});

// Toggle Scientific Calculator Buttons
const scientificButtons = document.querySelectorAll('.scientific') as NodeListOf<HTMLButtonElement>;
const toggleScientificButton = document.getElementById('toggleScientific') as HTMLButtonElement;

let isScientificMode = false;

toggleScientificButton.addEventListener('click', () => {
  isScientificMode = !isScientificMode;
  scientificButtons.forEach(button => {
    button.style.display = isScientificMode ? 'inline-block' : 'none';
  });
});

//New Feature: Generate Random Integer
const randIntButton = document.getElementById('rand-int') as HTMLButtonElement;
randIntButton.addEventListener('click', () => {
    const min = parseInt(prompt("Enter minimum value:") || "0"); // Default to 0 if no input
    const max = parseInt(prompt("Enter maximum value:") || "100"); // Default to 100 if no input

    if (isNaN(min) || isNaN(max)) {
        alert("Invalid input. Please enter numbers.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    display.value = randomNumber.toString();
});

});
