// ... (Existing code)
const nthRootButton = document.getElementById('nthRoot');
nthRootButton?.addEventListener('click', () => {
    const input = display.value;
    const root = prompt("Enter the root value:", "2");
    if (root !== null) {
        display.value = math.nthRoot(parseFloat(input), parseFloat(root)).toString();
    }
});
//rest of code