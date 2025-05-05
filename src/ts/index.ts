// ... (Existing code)
let memoryValue = 0;
const mrcButton = document.getElementById('mrc') as HTMLButtonElement;
mrcButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value === '') {
        display.value = memoryValue.toString();
    } else {
        memoryValue = parseFloat(display.value);
        display.value = '';
    }
});
// ... (Rest of existing code)