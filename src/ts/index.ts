// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value += '**';
    }
});
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    const currentValue = display.value;
    display.value = `sin(${currentValue || 0})`;
    // Evaluate and update display.value here or upon pressing '='.
});
const cosButton = document.getElementById('cos') as HTMLButtonElement;
cosButton.addEventListener('click', () => {
    const currentValue = display.value;
    display.value = `cos(${currentValue || 0})`;
});
// ... (Existing Code)