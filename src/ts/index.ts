// ... (Existing code)
const toFixedButton = document.getElementById('toFixed') as HTMLButtonElement;
toFixedButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const fixedNum = Number(display.value).toFixed(2);
    display.value = fixedNum;
});
// ... (Rest of existing code)