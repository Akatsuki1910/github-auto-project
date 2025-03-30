// ... (Existing code)
const truncButton = document.getElementById('trunc') as HTMLButtonElement;
truncButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.trunc(number).toString();
});