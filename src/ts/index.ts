// ... (Existing code)
const currentOrdinalDateButton = document.getElementById('current-date-ordinal') as HTMLButtonElement;
currentOrdinalDateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    display.value = dayOfYear.toString();
});
// ... (Rest of existing code)