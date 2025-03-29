// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let memory = 0;
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
const modulusButton = document.getElementById('modulus') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    memory += parseFloat(display.value);
    console.log("Memory:", memory);
});
memoryRecallButton.addEventListener('click', () => {
    display.value = memory.toString();
    console.log("Memory recalled:", memory);
});
memoryClearButton.addEventListener('click', () => {
    memory = 0;
    console.log("Memory cleared");
});
modulusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});