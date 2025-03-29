// ... (Existing code)
const oneDivXButton = document.getElementById('one-div-x') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
oneDivXButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    } else {
        display.value = "Error: Division by zero";
    }
});