// ... (Existing code)
const calculateFibonacciButton = document.getElementById('calculate-fibonacci') as HTMLButtonElement;
calculateFibonacciButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
        let a = 0, b = 1, temp;
        for (let i = 0; i < n; i++) {
            temp = b;
            b = a + b;
            a = temp;
        }
        display.value = a.toString();
    } else {
        display.value = "Invalid input for fibonacci";
    }
});
const gcdButton = document.getElementById('gcd') as HTMLButtonElement;
gcdButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for GCD";
        return;
    }
    const gcd = (a, b) => {
        while (b) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
    }
    display.value = result.toString();
});
// ... (Rest of existing code)