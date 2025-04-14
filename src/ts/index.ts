// ... (Existing code)
const thirdButton = document.getElementById('third') as HTMLButtonElement;
thirdButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 3).toString();
    }
});