// ... (Existing code)
const truncButton = document.getElementById('trunc') as HTMLButtonElement;
truncButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.trunc(currentValue).toString();
    } else {
        display.value = "Error: Invalid input";
    }
});
// ... (Rest of existing code)