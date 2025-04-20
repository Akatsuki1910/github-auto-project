// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const copyButton = document.getElementById('copy');
    if (copyButton) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(display.value).then(() => {
                // Optional: Provide feedback to the user
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 1000);
            }, (err) => {
                console.error('Failed to copy: ', err);
            });
        });
    }
    const ansButton = document.getElementById('ans');
    if (ansButton) {
        ansButton.addEventListener('click', () => {
            display.value += lastAnswer;
        });
    }
    // ... (Other existing code)
});