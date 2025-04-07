// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        // 既存の値に100で割った余りを計算
        display.value = (currentValue % 100).toString();
    }
    catch (e) {
        display.value = 'Error';
    }
});
const doubleButton = document.getElementById('double') as HTMLButtonElement;
doubleButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue * 2).toString();
    }
    catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)