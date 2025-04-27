// ... (Existing code)
const lcmButton = document.getElementById('lcm');
const display = document.getElementById('display') as HTMLInputElement;
lcmButton?.addEventListener('click', () => {
    const num1 = parseInt(prompt('Enter the first number:') || '0');
    const num2 = parseInt(prompt('Enter the second number:') || '0');
    const result = lcm(num1, num2);
    display.value = result.toString();
});
function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}
// ... (Rest of the existing code)