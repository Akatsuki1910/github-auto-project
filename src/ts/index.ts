// ... (Existing code)
const nrootButton = document.getElementById('nroot') as HTMLButtonElement;
nrootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const root = parseFloat(prompt('Enter the root:') || '2');
    if(isNaN(root)){
        display.value = 'Invalid root';
        return;
    }
    display.value = Math.pow(currentValue, 1/root).toString();
});