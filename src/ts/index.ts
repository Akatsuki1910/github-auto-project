// ... (Existing code)
let lastAnswer: number | null = null;
const calculateLastAnswerButton = document.getElementById('calculate-last-answer') as HTMLButtonElement;

calculateLastAnswerButton.addEventListener('click', () => {
    if (lastAnswer !== null) {
        display.value = lastAnswer.toString();
    }
});

// ... (In the equals button event listener)
        lastAnswer = result;
// ... (Rest of the code)
const parenthesesOpenButton = document.getElementById('parentheses-open') as HTMLButtonElement;
const parenthesesCloseButton = document.getElementById('parentheses-close') as HTMLButtonElement;

parenthesesOpenButton.addEventListener('click', () => {
    display.value += '(';
});

parenthesesCloseButton.addEventListener('click', () => {
    display.value += ')';
});

const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression = '';

// Update display with current expression
const updateCurrentExpressionDisplay = () => {
    currentExpressionDisplay.textContent = currentExpression;
};

// Example: Modify the number button event listeners
document.querySelectorAll('.digit, .operator, .decimal, parentheses-open, parentheses-close').forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = (button as HTMLButtonElement).textContent;
    currentExpression += buttonText;
    display.value += buttonText;
    updateCurrentExpressionDisplay();
  });
});