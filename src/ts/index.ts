// ... (Existing code)
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const result = math.abs(eval(display.value));
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)