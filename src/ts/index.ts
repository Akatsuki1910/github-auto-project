// ... (Existing code)
const currentDayPeriodButton = document.getElementById('current-day-period') as HTMLButtonElement;
currentDayPeriodButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleString('en-US', { dayPeriod: 'long' });
});
// ... (Rest of existing code)