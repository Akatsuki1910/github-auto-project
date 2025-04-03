// ... (Existing code)
const toggleFontSizeButton = document.getElementById('toggle-font-size') as HTMLButtonElement;
let fontSize = 16;
toggleFontSizeButton.addEventListener('click', () => {
    fontSize += 2;
    if (fontSize > 24) {
        fontSize = 16;
    }
    document.body.style.fontSize = fontSize + 'px';
});

const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click', () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = dateString;
});

const currentYearButton = document.getElementById('current-year') as HTMLButtonElement;
currentYearButton.addEventListener('click', () => {
    const today = new Date();
    const year = today.getFullYear();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = year.toString();
});
const currentMonthButton = document.getElementById('current-month') as HTMLButtonElement;
currentMonthButton.addEventListener('click', () => {
    const today = new Date();
    const month = today.getMonth() + 1; // getMonth()は0から始まる
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = month.toString();
});
const currentDayButton = document.getElementById('current-day') as HTMLButtonElement;
currentDayButton.addEventListener('click', () => {
    const today = new Date();
    const day = today.getDate();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = day.toString();
});
const currentWeekButton = document.getElementById('current-week') as HTMLButtonElement;
currentWeekButton.addEventListener('click', () => {
  const today = new Date();
  const week = today.getDay();
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = week.toString();
});
// ... (Rest of the code)