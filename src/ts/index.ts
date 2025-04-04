// ... (Existing code)
const fourthButton = document.getElementById('fourth') as HTMLButtonElement;
fourthButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue * currentValue * currentValue * currentValue).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)