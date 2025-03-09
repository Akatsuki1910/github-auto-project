// ... (Existing code)
//Added Feature: Absolute Value function
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.abs(parseFloat(display.value)).toString();
});