// ... (Existing code)
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const result = math.ceil(eval(display.value));
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)