// ... (Existing code)
//Added Feature: Cosine function
const cosButton = document.getElementById('cos') as HTMLButtonElement;
cosButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.cos(parseFloat(display.value)).toString();
});