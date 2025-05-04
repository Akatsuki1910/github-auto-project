// ... (Existing code)
const powerOfTenButton = document.getElementById('power_of_ten') as HTMLButtonElement;

powerOfTenButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const result = Math.pow(10, parseFloat(display.value));
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)