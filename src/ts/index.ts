// ... (Existing code)
const log10Button = document.getElementById('log10') as HTMLButtonElement;
log10Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const log10 = Math.log10(number);
    display.value = log10.toString();
});
// ... (Rest of the code)