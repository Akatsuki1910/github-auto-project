// ... (Existing code)
const percentButton = document.getElementById('percent') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
percentButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (currentValue / 100).toString();
});