// ... (Existing code)
const historyButton = document.getElementById('history');
historyButton?.addEventListener('click', () => {
    const history = localStorage.getItem('calculatorHistory');
    if (history) {
        const historyData = JSON.parse(history);
        alert(JSON.stringify(historyData, null, 2));
    } else {
        alert('No history yet.');
    }
});

const display = document.getElementById('display') as HTMLInputElement;
display.addEventListener('dblclick', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        alert('Copied to clipboard!');
    });
});

//New Feature: Store history in local storage
const equalsButton = document.querySelector('.equals');
equalsButton?.addEventListener('click', () => {
    const currentExpression = display.value;
    let history = localStorage.getItem('calculatorHistory');
    if(history) {
        let historyArray = JSON.parse(history);
        historyArray.push(currentExpression);
        localStorage.setItem('calculatorHistory', JSON.stringify(historyArray));
    } else {
        localStorage.setItem('calculatorHistory', JSON.stringify([currentExpression]));
    }
});