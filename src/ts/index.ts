// ... (Existing code)
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = Math.floor(currentValue);
        display.value = ans.toString();
        history.push(`floor(${currentValue}) = ${ans}`);
    }
});
// ... (rest of the code)