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
const toFixedButton = document.getElementById('toFixed');
toFixedButton?.addEventListener('click', () => {
    const input = display.value;
    const digits = prompt("Enter the number of digits to appear after the decimal point:", "2");
    if (digits !== null) {
    display.value = parseFloat(input).toFixed(parseInt(digits));
    }
});
//rest of code