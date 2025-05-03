// ... (Existing code)
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = Math.log(parseFloat(display.value)).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)