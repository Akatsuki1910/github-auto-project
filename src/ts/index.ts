// ... (Existing code)
const lcmButton = document.getElementById('lcm') as HTMLButtonElement;
lcmButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const values = display.value.split(',').map(Number);
        if (values.length < 2) {
            display.value = 'Error: Enter at least two numbers separated by commas';
            return;
        }
        const result = values.reduce((a, b) => math.lcm(a, b));
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)