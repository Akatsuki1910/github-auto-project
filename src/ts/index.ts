// ... (Existing code)
const lcmButton = document.getElementById('lcm') as HTMLButtonElement;

lcmButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const num = parseInt(display.value);
            const num2 = parseInt(prompt('Enter second number:') || '0');
            const result = math.lcm(num, num2);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)