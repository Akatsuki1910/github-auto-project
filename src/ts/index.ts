// ... (Existing code)
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += Math.E;
});
// ... (Rest of the code)