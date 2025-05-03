// ... (Existing code)
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.E.toString();
});
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.floor(Number(display.value)).toString();
});
// ... (Rest of existing code)