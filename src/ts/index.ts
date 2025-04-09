// ... (Existing code)
const calculatePercentChangeButton = document.getElementById('calculate-percent-change') as HTMLButtonElement;
calculatePercentChangeButton.addEventListener('click', () => {
    const originalValueString = prompt('Enter the original value:');
    const newValueString = prompt('Enter the new value:');
    if (originalValueString && newValueString) {
        const originalValue = Number(originalValueString);
        const newValue = Number(newValueString);
        const percentChange = ((newValue - originalValue) / originalValue) * 100;
        display.value = percentChange.toString() + '%';
    }
});
// ... (Rest of the code)