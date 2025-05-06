// ... (Existing code)
const currentSecondsButton = document.getElementById('current-seconds') as HTMLButtonElement;
currentSecondsButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const seconds = now.getSeconds();
    display.value = seconds.toString();
});
// ... (Rest of existing code)