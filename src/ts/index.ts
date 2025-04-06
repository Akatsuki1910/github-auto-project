// ... (Existing code)
const nthrtButton = document.getElementById('nthrt') as HTMLButtonElement;
nthrtButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const n = prompt("Enter the root (n):");
    if (n === null || isNaN(Number(n))) {
        display.value = 'Invalid root';
        return;
    }
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const result = Math.pow(number, 1 / Number(n));
    display.value = result.toString();
});
// ... (Rest of the code)