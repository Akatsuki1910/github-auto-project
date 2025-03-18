// ... (Existing code)
const msButton = document.getElementById('ms') as HTMLButtonElement;
let memoryStore: number = 0;
msButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryStore = currentValue;
        console.log("Value stored in memory:", memoryStore);
    }
});