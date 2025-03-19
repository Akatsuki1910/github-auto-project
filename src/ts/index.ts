// ... (Existing code)
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = Math.log10(num).toString();
    }
});