// ... (Existing code)
const mMinusButton = document.getElementById('m-minus') as HTMLButtonElement;
mMinusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryStore -= currentValue;
        console.log("Value subtracted from memory:", currentValue);
        console.log("Current memory value:", memoryStore);
    }
});