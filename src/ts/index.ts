// ... (Existing code)
const cubedButton = document.getElementById('cubed') as HTMLButtonElement;
cubedButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue * currentValue * currentValue).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)