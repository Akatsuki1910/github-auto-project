// ... (Existing code)
const currentDateTimeNumericButton = document.getElementById('current-date-time-numeric') as HTMLButtonElement;
currentDateTimeNumericButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZoneName: 'longOffset' });
});
// ... (Rest of existing code)