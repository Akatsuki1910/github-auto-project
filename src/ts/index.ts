// ... (Existing code)
let ans = 0;
const ansButton = document.getElementById('ans');
ansButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    display.value += ans.toString();
});
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const clearMemoryButton = document.getElementById('clear-memory');
clearMemoryButton.addEventListener('click', () => {
    memoryValue = 0;
});
const duplicateButton = document.getElementById('duplicate');
duplicateButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    display.value = display.value + display.value;
});
let history = [];
const historyButton = document.getElementById('history');
historyButton.addEventListener('click', () => {
    alert(history.join('\n'));
});
// Add history tracking to equals button
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    try {
        const display = document.getElementById('display');
        let result = eval(display.value); // Calculate the result
        ans = result; // Store the result in 'ans'
        display.value = result.toString(); // Update display
        history.push(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
});
const expm1Button = document.getElementById('expm1');
expm1Button.addEventListener('click', () => {
    const display = document.getElementById('display');
    try {
        display.value = math.expm1(eval(display.value)).toString();
    }
    catch (e) {
        display.value = "Error";
    }
});