// ... (Existing code)
const currentTimezoneButton = document.getElementById('current-timezone') as HTMLButtonElement;
currentTimezoneButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const timezone = now.toLocaleDateString(undefined, {timeZoneName: 'long' }).split(', ')[1];
    display.value = timezone; 
});
// ... (Rest of existing code)