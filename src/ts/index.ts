// ... (Existing code)
const doubleButton = document.getElementById('double') as HTMLButtonElement;
doubleButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const result = number * 2;
    display.value = result.toString();
});
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const result = number / 100;
    display.value = result.toString();
});
// ... (Rest of the code)