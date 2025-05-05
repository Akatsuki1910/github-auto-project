// ... (Existing code)
let memoryValue = 0;
const mrcButton = document.getElementById('mrc') as HTMLButtonElement;
mrcButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value === '') {
        display.value = memoryValue.toString();
    }
    else {
        memoryValue = parseFloat(display.value);
        display.value = '';
    }
});
const mPlusButton = document.getElementById('m-plus') as HTMLButtonElement;
mPlusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue += parseFloat(display.value);
    display.value = '';
});
const mMinusButton = document.getElementById('m-minus') as HTMLButtonElement;
mMinusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue -= parseFloat(display.value);
    display.value = '';
});
const mcButton = document.getElementById('mc') as HTMLButtonElement;
mcButton.addEventListener('click', () => {
    memoryValue = 0;
});
const msButton = document.getElementById('ms') as HTMLButtonElement;
msButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue = parseFloat(display.value);
    display.value = '';
});
// ... (Rest of existing code)
const exportHistoryButton = document.getElementById('export-history') as HTMLButtonElement;
exportHistoryButton.addEventListener('click', () => {
  // Implement export history functionality here. For example, you can
  // copy the history to the clipboard or download it as a file.
  alert('Export history functionality will be added soon!');
});
