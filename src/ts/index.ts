// ... (Existing code)
const tripleButton = document.getElementById('triple') as HTMLButtonElement;
tripleButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = (num * 3).toString();
    }
});