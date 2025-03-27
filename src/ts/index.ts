// ... (Existing code)
const duplicateButton = document.getElementById('duplicate');
duplicateButton?.addEventListener('click', () => {
    const display = document.getElementById('display');
    if (display) {
        navigator.clipboard.writeText(display.value).then(() => {
            alert('Display value duplicated to clipboard!');
        });
    }
});