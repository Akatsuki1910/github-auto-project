// ... (Existing code)
//Added Feature: Logarithm
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    display.value += 'Math.log10('; // Using base-10 logarithm
    currentExpression += 'log('; // Displaying 'log' on current expression
    currentExpressionDisplay.textContent = currentExpression;
});

// Added Feature: Exponential
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    display.value += 'Math.exp('; // Exponential function
    currentExpression += 'exp('; // Displaying 'exp' on current expression
    currentExpressionDisplay.textContent = currentExpression;
});
//Added Feature: Absolute Value
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    display.value += 'Math.abs('; // Absolute value function
    currentExpression += 'abs('; // Displaying abs on current expression
    currentExpressionDisplay.textContent = currentExpression;
});
//Added Feature: Round
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    display.value += 'Math.round('; // Rounding function
    currentExpression += 'round('; // Displaying round on current expression
    currentExpressionDisplay.textContent = currentExpression;
});
//Added Feature: Sign
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    display.value += 'Math.sign('; // Sign function
    currentExpression += 'sign('; // Displaying sign on current expression
    currentExpressionDisplay.textContent = currentExpression;
});
//Added Feature: Cube Root
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    display.value += 'Math.cbrt('; //Cube root function
    currentExpression += 'cbrt('; // Displaying cbrt on current expression
    currentExpressionDisplay.textContent = currentExpression;
});
//Added Feature: Floor
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    display.value += 'Math.floor('; // Floor function
    currentExpression += 'floor('; // Displaying floor on current expression
    currentExpressionDisplay.textContent = currentExpression;
});

// ... (Rest of the existing code)