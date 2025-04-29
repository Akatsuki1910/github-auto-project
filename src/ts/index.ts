// ... (Existing code)
let memoryValue = 0;
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue = parseFloat(display.value);
});
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = memoryValue.toString();
});
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue += parseFloat(display.value);
});
const memoryMinusButton = document.getElementById('memory-minus') as HTMLButtonElement;
memoryMinusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue -= parseFloat(display.value);
});

const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = Number(display.value);
        const result = math.expm1(value);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)