// ... (Existing code)
const truncButton = document.getElementById('trunc') as HTMLButtonElement;
truncButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.trunc(parseFloat(display.value)).toString();
});
// ... (Rest of existing code)