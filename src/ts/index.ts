// ... (Existing code)
const avgButton = document.getElementById('avg') as HTMLButtonElement;
avgButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.length < 1) {
        display.value = 'Error: Enter at least one number separated by commas.';
        return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    display.value = (sum / numbers.length).toString();
});

const maxButton = document.getElementById('max') as HTMLButtonElement;
maxButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.length < 2) {
        display.value = 'Error: Enter at least two numbers separated by commas.';
        return;
    }
    display.value = Math.max(...numbers).toString();
});

const minButton = document.getElementById('min') as HTMLButtonElement;
minButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.length < 2) {
        display.value = 'Error: Enter at least two numbers separated by commas.';
        return;
    }
    display.value = Math.min(...numbers).toString();
});

const lcmButton = document.getElementById('lcm') as HTMLButtonElement;
lcmButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.length < 2) {
        display.value = 'Error: Enter at least two numbers separated by commas.';
        return;
    }
    let result = lcm(numbers[0], numbers[1]);
    for (let i = 2; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
    }
    display.value = result.toString();
});
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function gcd(a, b) {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
// ... (Rest of the code)