// ... (Existing code)
const mPlusButton = document.getElementById('m-plus') as HTMLButtonElement;
mPlusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryStore += currentValue;
        console.log("Value added to memory:", currentValue);
        console.log("Current memory value:", memoryStore);
    }
});