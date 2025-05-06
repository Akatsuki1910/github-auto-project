// ... (Existing code)
const currentDateTimeLongButton = document.getElementById('current-date-time-long') as HTMLButtonElement;
currentDateTimeLongButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'long' });
});
// ... (Rest of existing code)