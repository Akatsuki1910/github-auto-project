// ... (Existing code)
const expm1Button = document.getElementById('expm1');
if (expm1Button) {
    expm1Button.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.expm1(currentValue).toString();
    });
}
// ... (Existing code)