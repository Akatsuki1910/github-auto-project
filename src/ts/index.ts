// ... (Existing code)
const signButton = document.getElementById('sign');
const display = document.getElementById('display') as HTMLInputElement;
const logButton = document.getElementById('log');
signButton?.addEventListener('click', () => {
    const num = parseFloat(prompt('Enter the number:') || '0');
    const result = Math.sign(num);
    display.value = result.toString();
});
logButton?.addEventListener('click', () => {
    const num = parseFloat(prompt('Enter the number:') || '0');
    const result = Math.log10(num);
    display.value = result.toString();
});
// ... (Rest of the existing code)