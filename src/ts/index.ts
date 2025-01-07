// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    //2のx乗ボタンの要素を取得
    const twoToThePowerOfXButton = document.getElementById("two-to-the-power-of-x");

       // ... (Existing event listeners)
       //2のx乗ボタンのクリックイベントリスナー
       twoToThePowerOfXButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(2, currentValue).toString();
        currentExpression += '2^' + currentValue;
        currentExpressionDisplay.textContent = currentExpression;        
    });
    // ... (rest of the existing code)
});