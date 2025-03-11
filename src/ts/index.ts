// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

//Added M+ button functionality
const mPlusButton = document.getElementById('m-plus') as HTMLButtonElement;
mPlusButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(currentExpression);
        memoryValue += currentValue;
    } catch (error) {
        console.error("Invalid input for M+");
    }
});
// Added plus/minus button functionality
// ... other code