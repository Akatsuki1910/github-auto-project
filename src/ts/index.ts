// ... (Existing code)
const gcdButton = document.getElementById('gcd') as HTMLButtonElement;
gcdButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.length < 2) {
        display.value = 'Error: Enter at least two numbers separated by commas.';
        return;
    }
    let result = gcd(numbers[0], numbers[1]);
    for (let i = 2; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
    }
    display.value = result.toString();
});
function gcd(a, b) {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
// ... (Rest of the code)