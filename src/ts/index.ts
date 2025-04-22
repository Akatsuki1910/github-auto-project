// ... (Existing code)
const nthRootButton = document.getElementById('nthRoot');
nthRootButton?.addEventListener('click', () => {
    const input = display.value;
    const root = prompt("Enter the root value:", "2");
    if (root !== null) {
        display.value = math.nthRoot(parseFloat(input), parseFloat(root)).toString();
    }
});
const ceilButton = document.getElementById('ceil');
ceilButton?.addEventListener('click', () => {
    display.value = math.ceil(parseFloat(display.value)).toString();
});
const truncButton = document.getElementById('trunc');
truncButton?.addEventListener('click', () => {
    display.value = math.trunc(parseFloat(display.value)).toString();
});
//rest of code