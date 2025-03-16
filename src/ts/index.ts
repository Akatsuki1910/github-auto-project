// ... (Existing code)
const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click', () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    display.value = dateString;
});
const currentDayButton = document.getElementById('current-day') as HTMLButtonElement;
currentDayButton.addEventListener('click', () => {
    const now = new Date();
    const day = now.getDay();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    display.value = weekdays[day];
});
const currentYearButton = document.getElementById('current-year') as HTMLButtonElement;
currentYearButton.addEventListener('click', () => {
    const now = new Date();
    const year = now.getFullYear();
    display.value = year.toString();
});
