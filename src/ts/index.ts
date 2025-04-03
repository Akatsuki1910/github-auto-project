// ... (Existing code)
const currentTimestampButton = document.getElementById('current-timestamp') as HTMLButtonElement;
currentTimestampButton.addEventListener('click', () => {
    const timestamp = Date.now();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = timestamp.toString();
});
const currentMillisecondButton = document.getElementById('current-millisecond') as HTMLButtonElement;
currentMillisecondButton.addEventListener('click', () => {
    const today = new Date();
    const millisecond = today.getMilliseconds();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = millisecond.toString();
});
const timezoneButton = document.getElementById('current-timezone') as HTMLButtonElement;
timezoneButton.addEventListener('click', () => {
    const today = new Date();
    const timezoneOffset = today.getTimezoneOffset();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = timezoneOffset.toString();
});
const currentDayOfWeekButton = document.getElementById('current-day-of-week') as HTMLButtonElement;
currentDayOfWeekButton.addEventListener('click', () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = dayOfWeek.toString();
});
// ... (Rest of the code)