// ... (Existing code)
const calculateParallelogramAreaButton = document.getElementById('calculate-parallelogram-area') as HTMLButtonElement;
calculateParallelogramAreaButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter the base of the parallelogram:') || '0');
    const height = parseFloat(prompt('Enter the height of the parallelogram:') || '0');
    display.value = (base * height).toString();
});