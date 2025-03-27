// ... (Existing code)
const parenthesesButton = document.getElementById('parentheses');
if (parenthesesButton) {
    parenthesesButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            if (!display.value.includes('(')) {
                display.value += '(';
            }
            else if (display.value.includes('(') && !display.value.includes(')')) {
                display.value += ')';
            }
            else if (display.value.includes('(') && display.value.includes(')')) {

                display.value += '(';

            }
        }
    });
}