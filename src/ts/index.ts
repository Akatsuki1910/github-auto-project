// ... (Existing code)
let ans = 0;
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    display.value = ans.toString();
});
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = math.expm1(currentValue);
        display.value = ans.toString();
    }
});