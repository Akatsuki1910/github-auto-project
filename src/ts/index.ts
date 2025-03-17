// ... (Existing code)
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    if (display.value) {
        display.value = Math.floor(parseFloat(display.value)).toString();
    }
});