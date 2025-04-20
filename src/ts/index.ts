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
    const memoryStoreButton = document.getElementById('memory-store');
    if (memoryStoreButton) {
        memoryStoreButton.addEventListener('click', () => {
            memoryValue = parseFloat(display.value);
        });
    }
    const memoryRecallButton = document.getElementById('memory-recall');
    if (memoryRecallButton) {
        memoryRecallButton.addEventListener('click', () => {
            display.value += memoryValue;
        });
    }
    const memoryClearButton = document.getElementById('memory-clear');
    if (memoryClearButton) {
        memoryClearButton.addEventListener('click', () => {
            memoryValue = 0;
            // Optional: Provide feedback
        });
    }
    const percentageButton = document.getElementById('percentage');
    if (percentageButton) {
        percentageButton.addEventListener('click', () => {
            display.value = (parseFloat(display.value) / 100).toString();
        });
    }
    // ... (Other existing code)
});