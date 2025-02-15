// ... (Existing code)
// 符号反転
document.getElementById('sign-change')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (-num).toString();
        display.value = currentInput;
    }
});
//DEL機能追加
let display = document.getElementById('display') as HTMLInputElement;
let currentInput = '';
document.getElementById('delete')?.addEventListener('click',()=>{
  currentInput = currentInput.slice(0,-1);
  display.value = currentInput;
});
//リセット機能追加
document.getElementById('reset')?.addEventListener('click', () => {
    currentInput = '';
    display.value = currentInput;
});
//e^x-1
document.getElementById('exp-minus-one')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (Math.exp(num) - 1).toString();
        display.value = currentInput;
    }
});
//10のx乗
document.getElementById('ten-to-the-x')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(10, num).toString();
        display.value = currentInput;
    }
});