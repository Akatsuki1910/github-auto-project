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