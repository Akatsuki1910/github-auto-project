// ... (Existing code)
//Added Feature: Floor function
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.floor(num).toString();
});