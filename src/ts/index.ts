// ... (Existing code)
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.floor(number).toString();
});