// ... (Existing code)
const currentDateISOButton = document.getElementById('current-date-iso') as HTMLButtonElement;
currentDateISOButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.toISOString();
});
// ... (Rest of the code)