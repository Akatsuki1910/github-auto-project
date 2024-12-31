// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue: number | null = null;
    const history: string[] = [];
    const historyDiv = document.getElementById("history") as HTMLDivElement;

    // ドキュメントを開くボタン
    // ... (Existing Code) ...

    // 履歴クリアボタンの追加
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    clearHistoryButton.addEventListener("click", () => {
        history.length = 0; // 履歴をクリア
        historyDiv.innerHTML = ''; // 履歴表示をクリア
    });

    // ... (rest of the existing code)

    const updateHistory = (value: string) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };

    // ... (Existing ceilButton Code)

    // Duplicateボタンの追加
    // ... (Existing Duplicate Button Code)

      // ... existing fibonacciButton code

    const binaryButton = document.getElementById("binary") as HTMLButtonElement;
    binaryButton.addEventListener("click", () => {
        // ... existing binaryButton code
    });

    const octalButton = document.getElementById("octal") as HTMLButtonElement;
    octalButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        const num = parseInt(display.value);
        display.value = num.toString(8);
        updateHistory(`Octal(${num}) = ${num.toString(8)}`);
    });

    const hexadecimalButton = document.getElementById("hexadecimal") as HTMLButtonElement;
    hexadecimalButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        const num = parseInt(display.value);
        display.value = num.toString(16);
        updateHistory(`Hexadecimal(${num}) = ${num.toString(16)}`);
    });

    const sumButton = document.getElementById("sum") as HTMLButtonElement;
    sumButton.addEventListener("click", () => {
      const display = document.getElementById("display") as HTMLInputElement;
      const numbers = display.value.split('+').map(Number);
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      display.value = sum.toString();
      updateHistory(numbers.join(" + ") + " = " + sum);
    });

    const averageButton = document.getElementById("average") as HTMLButtonElement;
    averageButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        const numbers = display.value.split('+').map(Number);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const average = sum / numbers.length;
        display.value = average.toString();
        updateHistory("Average(" + numbers.join(" + ") + ") = " + average);
    });

    const medianButton = document.getElementById("median") as HTMLButtonElement;
    medianButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        const numbers = display.value.split('+').map(Number).sort((a, b) => a - b);
        const mid = Math.floor(numbers.length / 2);
        const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
        display.value = median.toString();
        updateHistory("Median(" + numbers.join(" + ") + ") = " + median);
    });
});
