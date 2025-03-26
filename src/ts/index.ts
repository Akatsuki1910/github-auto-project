// ... (Existing code)
const percentageButton = document.getElementById('percentage');
if (percentageButton) {
    percentageButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display && display.value) {
            display.value = (parseFloat(display.value) / 100).toString();
        }
    });
}