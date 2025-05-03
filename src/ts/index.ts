// ... (Existing code)
let memoryRecallValue: number | null = null;
let memoryPlusValue: number = 0;
const mrcButton = document.getElementById('mrc') as HTMLButtonElement;
mrcButton.addEventListener('click', () => {
    if (memoryRecallValue !== null) {
        display.value = memoryRecallValue.toString();
    }
});
const mPlusButton = document.getElementById('m-plus') as HTMLButtonElement;
mPlusButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        memoryPlusValue += currentValue;
    } catch (error) {
        display.value = "Invalid input";
    }
});
const mMinusButton = document.getElementById('m-minus') as HTMLButtonElement;
mMinusButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        memoryPlusValue -= currentValue;
    }
    catch (error) {
        display.value = "Invalid Input";
    }
});
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
        memoryRecallValue = result; // Store the result for MRC
    } catch (error) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)