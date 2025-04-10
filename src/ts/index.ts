// ... (Existing code)
const calculateLog2Button = document.getElementById('calculate-log2') as HTMLButtonElement;
calculateLog2Button.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = math.log2(value).toString();
    }
});
// ... (Rest of the code)