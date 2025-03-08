// ... (Existing code)
//Added Feature: Degree/Radian Toggle
let isDegreeMode = true;
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    isDegreeMode = !isDegreeMode;
    degRadButton.textContent = isDegreeMode ? 'Deg' : 'Rad';
});
// ... other code
// Added Feature: Factorial Calculation
const calculateFactorialButton = document.getElementById('calculateFactorial') as HTMLButtonElement;
calculateFactorialButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = factorial(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `${currentValue}! = ${result}`;
        historyArr.push(`${currentValue}! = ${result}`);
    }
});
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else if (n < 0 || !Number.isInteger(n)){
        return "undefined";
    }
    else {
        return n * factorial(n - 1);
    }
}
// ... rest of the code