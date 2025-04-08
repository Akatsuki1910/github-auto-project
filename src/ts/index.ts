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

// ... (Rest of the code)