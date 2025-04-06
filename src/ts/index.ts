// ... (Existing code)
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

const squaredButton = document.getElementById('squared') as HTMLButtonElement;
squaredButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const result = number * number;
    display.value = result.toString();
});
const cuberootButton = document.getElementById('cuberoot') as HTMLButtonElement;
cuberootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const result = Math.cbrt(number);
    display.value = result.toString();
});
const inverseSquaredButton = document.getElementById('inverse-squared') as HTMLButtonElement;
inverseSquaredButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number) || number === 0) {
        display.value = 'Error';
        return;
    }
    const result = 1 / (number * number);
    display.value = result.toString();
});
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number) || !Number.isInteger(number) || number < 0) {
        display.value = 'Error';
        return;
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    display.value = result.toString();
});
// ... (Rest of the code)