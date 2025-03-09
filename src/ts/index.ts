// ... (Existing code)
//Added Feature: Exponential function
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.exp(num).toString();
});