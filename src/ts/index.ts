// ... (Existing code)
const powerOfTenButton = document.getElementById('power-of-ten') as HTMLButtonElement;
powerOfTenButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = Math.pow(10, currentValue);
        display.value = ans.toString();
        history.push(`10^(${currentValue}) = ${ans}`);
    }
});
// ... (rest of the code)