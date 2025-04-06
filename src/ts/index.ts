// ... (Existing code)
const sumButton = document.getElementById('sum') as HTMLButtonElement;
sumButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Error';
        return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    display.value = sum.toString();
});
const avgButton = document.getElementById('average') as HTMLButtonElement;
avgButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Error';
        return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    display.value = average.toString();
});
// ... (Rest of the code)