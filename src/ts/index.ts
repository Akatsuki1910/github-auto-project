// ... (Existing code)
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.sign(number).toString();
});