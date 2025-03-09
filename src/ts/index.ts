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
//Added Feature: Max
const maxButton = document.getElementById('max') as HTMLButtonElement;
maxButton.addEventListener('click', () => {
    display.value += 'Math.max('; // Max function
    currentExpression += 'max('; // Displaying max on current expression
    currentExpressionDisplay.textContent = currentExpression;
});
// Added Feature: Min
const minButton = document.getElementById('min') as HTMLButtonElement;
minButton.addEventListener('click', () => {
    display.value += 'Math.min('; // Min function
    currentExpression += 'min('; // Displaying min on current expression
    currentExpressionDisplay.textContent = currentExpression;
});

//Added Feature: 10 to the power of x
const pow10Button = document.getElementById('pow10') as HTMLButtonElement;
pow10Button.addEventListener('click', () => {
  display.value += '10**';
  currentExpression += '10^';
  currentExpressionDisplay.textContent = currentExpression;
});
//Added Euler's number
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value += Math.E;
    currentExpression += 'e';
    currentExpressionDisplay.textContent = currentExpression;
});
//Added Natural Logarithm
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    display.value += 'Math.log('; //Natural log
    currentExpression += 'ln('; //Displaying ln on current expression
    currentExpressionDisplay.textContent = currentExpression;
});
// ... (Rest of the existing code)