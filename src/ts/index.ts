// ... (Existing code)
const clearDisplayButton = document.getElementById('clear-display');
if (clearDisplayButton) {
    clearDisplayButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = '';
    });
}
const doubleButton = document.getElementById('double');
if (doubleButton) {
    doubleButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display && display.value) {
            display.value = (parseFloat(display.value) * 2).toString();
        }
    });
}
const tripleButton = document.getElementById('triple');
if (tripleButton) {
    tripleButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display && display.value) {
            display.value = (parseFloat(display.value) * 3).toString();
        }
    });
}
const halfButton = document.getElementById('half');
if (halfButton) {
    halfButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display && display.value) {
            display.value = (parseFloat(display.value) / 2).toString();
        }
    });
}
// ... (Existing code)