// ... (Existing code)
//Added Feature: Degree/Radian Toggle
let isDegreeMode = true;
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    isDegreeMode = !isDegreeMode;
    degRadButton.textContent = isDegreeMode ? 'Deg' : 'Rad';
});
const tanhButton = document.getElementById('tanh') as HTMLButtonElement;
tanhButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.tanh(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `tanh(${currentValue}) = ${result}`;
    }
});
//Added Feature: calculation history
const historyDisplay = document.getElementById('history-display');
const historyButton = document.getElementById('history');
const historyArr = [];
historyButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = ''; // Clear previous history
        historyArr.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item;
            historyDisplay.appendChild(p);
        });
    }
    else {
        historyDisplay.style.display = 'none';
    }
});