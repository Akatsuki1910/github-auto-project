// ... (Existing code)
const absoluteButton = document.getElementById('absolute') as HTMLButtonElement;
absoluteButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = Math.abs(currentValue);
        display.value = ans.toString();
        history.push(`abs(${currentValue}) = ${ans}`);
    }
});
// ... (rest of the code)