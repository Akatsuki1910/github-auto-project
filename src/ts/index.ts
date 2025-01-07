// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const copyButton = document.getElementById("copy");

       // ... (Existing event listeners)

    copyButton.addEventListener("click", () => {
        const displayValue = display.value;
        navigator.clipboard.writeText(displayValue)
            .then(() => {
                // Optional: Provide feedback to the user that the copy was successful
                console.log("Copied to clipboard:", displayValue);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    });
    // ... (rest of the existing code)
});