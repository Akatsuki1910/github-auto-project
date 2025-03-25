// ... (Existing code)
const cosButton = document.getElementById('cos');
if (cosButton) {
    cosButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.cos(currentValue).toString();
    });
}
// ... (Existing code)