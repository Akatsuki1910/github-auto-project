// ... (Existing code)
const calculateMedianButton = document.getElementById('calculate-median') as HTMLButtonElement;
calculateMedianButton.addEventListener('click', () => {
    // ... (median calculation logic)
});

// ... other code ...

const currentMinuteButton = document.getElementById('current-minute') as HTMLButtonElement;

currentMinuteButton.addEventListener('click', () => {
    const currentDate = new Date();
    const currentMinute = currentDate.getMinutes();
    display.value = currentMinute.toString();
});

const currentHourButton = document.getElementById('current-hour') as HTMLButtonElement;

currentHourButton.addEventListener('click', () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    display.value = currentHour.toString();
});

const currentSecondsButton = document.getElementById('current-seconds') as HTMLButtonElement;
currentSecondsButton.addEventListener('click', () => {
    display.value = Math.floor(Date.now() / 1000).toString();
});
const currentMillisecondsButton = document.getElementById('current-milliseconds') as HTMLButtonElement;
currentMillisecondsButton.addEventListener('click', () => {
    display.value = Date.now().toString();
});
const currentTimezoneButton = document.getElementById('current-timezone') as HTMLButtonElement;
currentTimezoneButton.addEventListener('click', () => {
    const currentDate = new Date();
    display.value = currentDate.toLocaleDateString(undefined, { timeZoneName: 'long' }).split(', ')[1];

});
const currentDayOfWeekButton = document.getElementById('current-day-of-week') as HTMLButtonElement;
currentDayOfWeekButton.addEventListener('click', () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    display.value = days[dayOfWeek];
});
const currentWeekNumberButton = document.getElementById('current-week-number') as HTMLButtonElement;
currentWeekNumberButton.addEventListener('click',()=>{
    const currentDate=new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));

    const weekNumber = Math.ceil(days / 7);
    display.value = weekNumber.toString();
});
const currentTimestampButton = document.getElementById('current-timestamp') as HTMLButtonElement;
currentTimestampButton.addEventListener('click', () => {
    display.value = Date.now().toString();
});

// ... (Rest of the code)