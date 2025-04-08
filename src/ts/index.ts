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

// ... (Rest of the code)