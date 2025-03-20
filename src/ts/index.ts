// ... (Existing code)
const rndButton = document.getElementById('rnd') as HTMLButtonElement;
rndButton.addEventListener('click', () => {
    display.value = Math.random().toString();
});
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.abs(currentValue).toString();
    }
});
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.floor(currentValue).toString();
    }
});
// ... (Existing Code)