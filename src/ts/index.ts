// ... (Existing code)
const cubedButton = document.getElementById('cubed') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
cubedButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue * currentValue).toString();
    }
});
//...(rest of the code)