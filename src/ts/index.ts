// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const dropButton = document.getElementById('drop') as HTMLButtonElement;
dropButton.addEventListener('click', () => {
    if (display.value) {
        display.value = display.value.slice(0, -1);
    }
});