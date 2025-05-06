// ... (Existing code)
const currentTimestampButton = document.getElementById('current-timestamp') as HTMLButtonElement;
currentTimestampButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const timestamp = Date.now();
    display.value = timestamp.toString();
});
// ... (Rest of existing code)