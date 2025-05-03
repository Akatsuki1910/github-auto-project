// ... (Existing code)
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.ceil(Number(display.value)).toString();
});
// ... (Rest of existing code)