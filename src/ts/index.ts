// ... (Existing code)
const msButton = document.getElementById('ms') as HTMLButtonElement;
const mrButton = document.getElementById('mr') as HTMLButtonElement;
let memoryStore: number = 0;
msButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryStore = currentValue;
        console.log("Value stored in memory:", memoryStore);
    }
});
mrButton.addEventListener('click', () => {
    display.value = memoryStore.toString();
    console.log("Value recalled from memory:", memoryStore);
});