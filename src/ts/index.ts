// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});
const historyButton = document.getElementById('history');
historyButton?.addEventListener('click', () => {
    const history = localStorage.getItem('calculatorHistory');
    if (history) {
        const historyData = JSON.parse(history);
        alert(JSON.stringify(historyData, null, 2));
    }
    else {
        alert('No history yet.');
    }
});
const display = document.getElementById('display');
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
    if (history) {
        let historyArray = JSON.parse(history);
        historyArray.push(currentExpression);
        localStorage.setItem('calculatorHistory', JSON.stringify(historyArray));
    }
    else {
        localStorage.setItem('calculatorHistory', JSON.stringify([currentExpression]));
    }
    // New Feature: Display last answer
    try {
        const result = math.evaluate(currentExpression);
        display.value = result.toString();
        localStorage.setItem('lastAnswer', result.toString());
    }
    catch (error) {
        display.value = 'Error';
    }
});
const clearHistoryButton = document.getElementById('clear-history');
clearHistoryButton?.addEventListener('click', () => {
    localStorage.removeItem('calculatorHistory');
    alert('History cleared!');
});
const ansButton = document.getElementById('ans');
ansButton?.addEventListener('click', () => {
    const lastAnswer = localStorage.getItem('lastAnswer');
    if (lastAnswer) {
        display.value += lastAnswer;
    }
});