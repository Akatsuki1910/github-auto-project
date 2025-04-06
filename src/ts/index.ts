// ... (Existing code)
const lcmButton = document.getElementById('lcm') as HTMLButtonElement;
lcmButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Error';
        return;
    }
    const gcd = (a: number, b: number): number => {
        return b === 0 ? a : gcd(b, a % b);
    };
    const lcm = (a: number, b: number): number => {
        return (a * b) / gcd(a, b);
    };
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
    }
    display.value = result.toString();
});
// ... (Rest of the code)