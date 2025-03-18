// ... (Existing code)
const lcmButton = document.getElementById('lcm') as HTMLButtonElement;
lcmButton.addEventListener('click', () => {
    const num1 = parseInt(prompt('Enter the first number:') || '0');
    const num2 = parseInt(prompt('Enter the second number:') || '0');
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Invalid input';
        return;
    }
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    const gcd = (a: number, b: number): number => {
        while (b) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
    display.value = lcm(a, b).toString();
});