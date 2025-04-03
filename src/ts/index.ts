// ... (Existing code)
const currentTimeLocalButton = document.getElementById('current-time-local') as HTMLButtonElement;
currentTimeLocalButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.toLocaleTimeString();
});
// ... (Rest of the code)