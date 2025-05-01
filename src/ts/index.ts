// ... (Existing code)
const powerOfTwoButton = document.getElementById('power_of_two') as HTMLButtonElement;
powerOfTwoButton.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        try {
            const result = math.pow(2, Number(currentValue));
            display.value = result.toString();
        }
        catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)