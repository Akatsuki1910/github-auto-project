// ... (Existing code)
const exp2Button = document.getElementById('exp2') as HTMLButtonElement;
exp2Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const result = Math.pow(2, number);
    display.value = result.toString();
});
// ... (Rest of the code)