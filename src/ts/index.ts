// ... (Existing code)
const calculateSecantButton = document.getElementById('calculate-secant') as HTMLButtonElement;
calculateSecantButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (1 / Math.cos(number)).toString();
});