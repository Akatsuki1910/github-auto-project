// ... (Existing code)
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
currentTimeButton.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    display.value = timeString;
});
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
const sqrtButton = document.getElementById('sqrt') as HTMLButtonElement;
sqrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0) {
        display.value = Math.sqrt(currentValue).toString();
    }
    else {
        display.value = 'Error';
    }
});
const powButton = document.getElementById('pow') as HTMLButtonElement;
powButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 2).toString();
    }
    else {
        display.value = 'Error';
    }
});