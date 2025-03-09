// ... (Existing code)
//Added Feature: Ceil
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    display.value += 'Math.ceil('; // Ceil function (rounds up to nearest integer)
    currentExpression += 'ceil('; // Display on current expression
    currentExpressionDisplay.textContent = currentExpression;
});

//Added Feature: Random Number
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value += randomNumber;
    currentExpression += randomNumber;
    currentExpressionDisplay.textContent = currentExpression;
});

// ... (Rest of the existing code)