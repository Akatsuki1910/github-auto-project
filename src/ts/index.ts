// ... (Existing code)
const xRootYButton = document.getElementById('x-root-y') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
xRootYButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        // Implement x root y logic. This is a placeholder.
        // You'll need to get another value for 'y'
        // Perhaps use a prompt or another input field.
        // Example with prompt (replace with your logic):
        const y = parseFloat(prompt('Enter the root (y):', '2') || '2'); // Default to 2 if no input
        if(!isNaN(y)){
            display.value = Math.pow(currentValue, 1/y).toString();
        }
    }
});
//...(rest of the code)