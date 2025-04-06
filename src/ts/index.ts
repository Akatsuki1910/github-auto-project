// ... (Existing code)
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    display.value = Math.ceil(number).toString();
});
// ... (Rest of the code)