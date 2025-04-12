// ... (Existing code)
const calculateLogButton = document.getElementById('calculate-log') as HTMLButtonElement;
calculateLogButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter the value:') || '0');
    const base = parseFloat(prompt('Enter the base (optional, default 10):') || '10');
    display.value = Math.log(value) / Math.log(base).toString();
});