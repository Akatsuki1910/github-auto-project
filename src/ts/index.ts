// ... (Existing code)
const halfButton = document.getElementById('half') as HTMLButtonElement;
halfButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num * 0.5).toString();
});
const doubleButton = document.getElementById('double') as HTMLButtonElement;
doubleButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num * 2).toString();
});
const isOddButton = document.getElementById('isOdd') as HTMLButtonElement;
isOddButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseInt(display.value);
    if (isNaN(num)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num % 2 !== 0).toString();
});
const tripleButton = document.getElementById('triple') as HTMLButtonElement;
tripleButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num * 3).toString();
});
// ... (Rest of the code)