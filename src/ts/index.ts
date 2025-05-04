// ... (Existing code)
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
let memoryValue: number | null = null;

memoryStoreButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        memoryValue = parseFloat(display.value);
    }
});

memoryRecallButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (memoryValue !== null) {
        display.value = memoryValue.toString();
    }
});

memoryClearButton.addEventListener('click', () => {
    memoryValue = null;
});

memoryPlusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        const currentValue = parseFloat(display.value);
        if (memoryValue !== null) {
            memoryValue += currentValue;
        } else {
            memoryValue = currentValue;
        }
    }
});

// ... (Rest of existing code)