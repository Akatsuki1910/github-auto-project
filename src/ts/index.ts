// ... (Existing code)
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
currentTimeButton.addEventListener('click', () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    navigator.clipboard.writeText(currentTime).then(() => {
        alert('Current time copied to clipboard: ' + currentTime);
    }, () => {
        alert('Failed to copy time to clipboard.');
    });
});

const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click', () => {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    navigator.clipboard.writeText(currentDate).then(() => {
        alert('Current date copied to clipboard: ' + currentDate);
    }, () => {
        alert('Failed to copy date to clipboard.');
    });
});

const dateTimeDisplayButton = document.getElementById('toggle-date-time-display') as HTMLButtonElement;
const dateTimeDisplay = document.getElementById('date-time-display') as HTMLDivElement;
dateTimeDisplayButton.addEventListener('click', () => {
    if (dateTimeDisplay.style.display === 'none' || dateTimeDisplay.style.display === '') {
        dateTimeDisplay.style.display = 'block';
        const now = new Date();
        dateTimeDisplay.innerText = now.toLocaleString();
    } else {
        dateTimeDisplay.style.display = 'none';
    }
});
// ... (Rest of existing code)