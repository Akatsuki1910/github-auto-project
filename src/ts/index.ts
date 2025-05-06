// ... (Existing code)
const currentDateTimeMediumButton = document.getElementById('current-date-time-medium') as HTMLButtonElement;
currentDateTimeMediumButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'medium' });
});
// ... (Rest of existing code)