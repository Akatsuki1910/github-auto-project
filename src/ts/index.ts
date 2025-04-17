// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const nthrootButton = document.getElementById('nthroot');
    if (nthrootButton) {
        nthrootButton.addEventListener('click', () => {
            // Implement nth root logic. This is a placeholder.
            const currentValue = parseFloat(display.value);
            const root = prompt("Enter the root value:", "2"); // Default to square root
            if (root !== null && !isNaN(parseInt(root))){
                const nthrootValue = Math.pow(currentValue, 1/parseInt(root));
                display.value = nthrootValue.toString();
                console.log(`nth root calculated: ${nthrootValue}`);
            }
        });
    }
});