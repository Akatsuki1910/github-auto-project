// ... (Existing code)
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = Math.round(currentValue);
        display.value = ans.toString();
        history.push(`round(${currentValue}) = ${ans}`);
    }
});
// ... (rest of the code)