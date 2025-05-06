// ... (Existing code)
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