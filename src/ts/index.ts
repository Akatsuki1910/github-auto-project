// ... (Existing code)
const mrcValue: string[] = [];
const mrcButton = document.getElementById('mrc');
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