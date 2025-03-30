// ... (Existing code)
let memoryValue = 0;
let ans = 0;
// ... (Memory buttons event listeners)
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    display.value = ans.toString();
});
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
        ans = result;
    }
    catch (error) {
        display.value = 'Error';
    }
});
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    display.value += display.value;
});
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    try {
        const result = 1 / math.evaluate(display.value);
        display.value = result.toString();
        ans = result;
    }
    catch (error) {
        display.value = 'Error';
    }
});