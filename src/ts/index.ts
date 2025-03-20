// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value += '**';
    }
});
// ... (Existing Code)