// ... (Existing code)
let history: string[] = [];
const historyButton = document.getElementById('history') as HTMLButtonElement;
historyButton.addEventListener('click', () => {
    alert(history.join('\n'));
});
ansButton.addEventListener('click', () => {
    display.value = ans.toString();
    history.push(`Ans = ${ans}`);
});
expm1Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = math.expm1(currentValue);
        display.value = ans.toString();
        history.push(`expm1(${currentValue}) = ${ans}`);
    }
});
// ... (rest of the code)