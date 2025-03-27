// ... (Existing code)
const mrcValue: string[] = [];
const msValue: string = '0'; // Initialize msValue
const mrcButton = document.getElementById('mrc');
const msButton = document.getElementById('ms');
if (mrcButton) {
    mrcButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            if (mrcValue.length === 0) {
                mrcValue.push(display.value);
                display.value = '';
            } else {
                display.value = mrcValue.pop() || '';
            }
        }
    });
}
if (msButton) {
    msButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            msValue = display.value;
        }
    });
}