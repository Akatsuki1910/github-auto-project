// ... (Existing code)
const toggleDisplayButton = document.getElementById('toggle-display') as HTMLButtonElement;
const displayInput = document.getElementById('display') as HTMLInputElement;
toggleDisplayButton.addEventListener('click', () => {
    if (displayInput.style.display === 'none') {
        displayInput.style.display = 'block';
    }
    else {
        displayInput.style.display = 'none';
    }
});
// ... (Rest of the code)