// ... (Existing code)
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
let memoryValue: number | null = null;

memoryStoreButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        memoryValue = parseFloat(display.value);
    }
});

// ... (Rest of existing code)