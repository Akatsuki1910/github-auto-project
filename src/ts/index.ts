// ... (Existing code)
const expm1Button = document.getElementById('exp-m1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.expm1(currentValue).toString();
    }
});