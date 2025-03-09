// ... (Existing code)
//Added Feature: Sign function
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.sign(num).toString();
});