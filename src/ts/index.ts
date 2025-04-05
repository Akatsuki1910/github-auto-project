// ... (Existing code)
const degToRadButton = document.getElementById('degToRad') as HTMLButtonElement;
degToRadButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = parseFloat(display.value);
        const result = math.unit(value, 'deg').to('rad');
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)