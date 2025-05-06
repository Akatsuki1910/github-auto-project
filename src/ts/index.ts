// ... (Existing code)
const currentDateTimeISOButton = document.getElementById('current-date-time-iso') as HTMLButtonElement;
currentDateTimeISOButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toISOString();
});
// ... (Rest of existing code)