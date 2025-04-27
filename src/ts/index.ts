// ... (Existing code)
const lcmButton = document.getElementById('lcm');
const display = document.getElementById('display') as HTMLInputElement;
const expButton = document.getElementById('exp');
const roundButton = document.getElementById('round');
lcmButton?.addEventListener('click', () => {
    const num1 = parseInt(prompt('Enter the first number:') || '0');
    const num2 = parseInt(prompt('Enter the second number:') || '0');
    const result = lcm(num1, num2);
    display.value = result.toString();
});
expButton?.addEventListener('click', () => {
    const num = parseFloat(prompt('Enter the number:') || '0');
    const result = Math.exp(num);
    display.value = result.toString();
});
roundButton?.addEventListener('click', () => {
    const num = parseFloat(prompt('Enter the number:') || '0');
    const result = Math.round(num);
    display.value = result.toString();
});
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
// ... (Rest of the existing code)