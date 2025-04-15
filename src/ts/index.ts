// ... (Existing code)
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = Math.ceil(currentValue);
        display.value = ans.toString();
        history.push(`ceil(${currentValue}) = ${ans}`);
    }
});