// ... (Existing code)
//Added Feature: Round function
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.round(parseFloat(display.value)).toString();
});