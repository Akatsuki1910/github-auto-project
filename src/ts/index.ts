// ... (Existing code)
const mrcValue: string[] = [];
let msValue: string = '0'; // Initialize msValue
const mrcButton = document.getElementById('mrc');
const msButton = document.getElementById('ms');
const mrButton = document.getElementById('mr');
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
if (mrButton) {
    mrButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            display.value = msValue;
        }
    });
}