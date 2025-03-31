// ... (Existing code)
const deleteLastCharButton = document.getElementById('delete-last-char') as HTMLButtonElement;
deleteLastCharButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
// ... (Rest of the code)