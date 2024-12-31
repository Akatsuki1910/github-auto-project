// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue: number | null = null;
    const history: string[] = [];
    const historyDiv = document.getElementById("history") as HTMLDivElement;
    const display = document.getElementById("display") as HTMLInputElement;

    // ドキュメントを開くボタン
    // ... (Existing Code) ...

    // 履歴クリアボタンの追加
    // ... existing clearHistoryButton code ...


    const updateHistory = (value: string) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };

    // ... (Existing Code)

    const clearEntryButton = document.getElementById("clear-entry") as HTMLButtonElement;
    clearEntryButton.addEventListener("click", () => {
        display.value = "0";
    });

    // ... (Existing Duplicate Button Code)

      // ... existing fibonacciButton code

    // ... (Existing Code)
     // ... existing copyHistoryButton code ...

     // ... existing maxButton code ...

     // ... existing minButton code ...

    // ... existing sumHistoryButton code ...

     // ... existing allClearButton Code

        // ... existing historyReverseButton code ...

    // ... existing percentageButton code ...

    // ... existing plusMinusButton code ...

    // ... existing sqrtButton code ...

    const lnButton = document.getElementById("ln") as HTMLButtonElement;
    lnButton.addEventListener("click", () => {
      const currentValue = parseFloat(display.value);
      if (!isNaN(currentValue) && currentValue > 0) {
        const result = Math.log(currentValue);
        display.value = result.toString();
        updateHistory(`ln(${currentValue}) = ${result}`);
      } else {
        display.value = "Error";
      }
    });

     const exp10Button = document.getElementById("exp-10") as HTMLButtonElement;
    exp10Button.addEventListener("click", () => {
      const currentValue = parseFloat(display.value);
      if (!isNaN(currentValue)) {
        const result = 10 ** currentValue;
        display.value = result.toString();
        updateHistory(`10^(${currentValue}) = ${result}`);
      } else {
        display.value = "Error";
      }
    });
//M+ボタン
const memoryAddButton = document.getElementById("memory-add") as HTMLButtonElement;
memoryAddButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = (memoryValue || 0) + currentValue;
        updateHistory(`M+ ${currentValue}`);
    }
});

//M-ボタンの追加
const memorySubtractButton = document.getElementById("memory-subtract") as HTMLButtonElement;
memorySubtractButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = (memoryValue || 0) - currentValue;
        updateHistory(`M- ${currentValue}`);
    }
});

    const operators = ['+', '-', '*', '/'];
    for(const operator of operators){
        const button = document.getElementById(operator) as HTMLButtonElement;
        button.addEventListener('click', () =>{
            display.value += operator;
        });
    }

    const equalsButton = document.getElementById("equals") as HTMLButtonElement;
    equalsButton.addEventListener('click', () => {
    try {
      const result = eval(display.value);
      display.value = result.toString();
      updateHistory(`${display.value} = ${result}`);
    } catch (error) {
      display.value = "Error";
    }
  });

    // Number buttons
    for (let i = 0; i <= 9; i++) {
        const numberButton = document.getElementById(i.toString()) as HTMLButtonElement;
        numberButton.addEventListener("click", () => {
            if (display.value === "0") {
                display.value = i.toString();
            } else {
                display.value += i.toString();
            }
        });
    }
});
