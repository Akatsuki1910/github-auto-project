// ... (Existing code)
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        ans = 1 / currentValue;
        display.value = ans.toString();
        history.push(`1/${currentValue} = ${ans}`);
    }
});
// ... (rest of the code)