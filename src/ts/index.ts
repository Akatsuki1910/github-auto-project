// ... (Existing code)
const gcdButton = document.getElementById('gcd');
const display = document.getElementById('display') as HTMLInputElement;
gcdButton?.addEventListener('click', () => {
    const num1 = parseInt(prompt('Enter the first number:') || '0');
    const num2 = parseInt(prompt('Enter the second number:') || '0');
    let result = gcd(num1, num2);
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
// ... (Rest of the existing code)