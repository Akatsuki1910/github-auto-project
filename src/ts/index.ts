// ... (Existing code)
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
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

// ... (Rest of existing code)