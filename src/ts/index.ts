// ... (Existing code)
const calculateLog1pButton = document.getElementById('calculate-log1p') as HTMLButtonElement;
calculateLog1pButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = math.log1p(value).toString();
    }
});
// ... (Rest of the code)