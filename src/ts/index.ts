// ... (Existing code)
const truncateButton = document.getElementById('truncate') as HTMLButtonElement;
truncateButton.addEventListener('click', () => {
    if (display.value) {
        display.value = Math.trunc(parseFloat(display.value)).toString();
    }
});