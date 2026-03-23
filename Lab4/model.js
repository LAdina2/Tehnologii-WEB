const Model = (() => {
  let state = {
    displayValue: '0',
    firstOperand: null,
    operator: null,
    waitingForSecond: false,
    expression: '',
    hasError: false
  };

  function getState() { return { ...state }; }

  function inputDigit(digit) {
    if (state.waitingForSecond) {
      state.displayValue = digit;
      state.waitingForSecond = false;
    } else {
      state.displayValue = state.displayValue === '0' ? digit : state.displayValue + digit;
    }
  }

  function deleteLastDigit() {
    if (state.waitingForSecond || state.displayValue === '0') return;
    state.displayValue = state.displayValue.length > 1 ? state.displayValue.slice(0, -1) : '0';
  }

  function chooseOperator(op) {
    const current = parseFloat(state.displayValue);
    state.firstOperand = current;
    state.operator = op;
    state.waitingForSecond = true;
    state.expression = `${current} ${op}`;
  }

  function calculate() {
    if (!state.operator) return;
    const second = parseFloat(state.displayValue);
    let result = 0;
    
    if (state.operator === '/' && second === 0) {
      state.displayValue = "Eroare";
      state.hasError = true;
    } else {
      if (state.operator === '+') result = state.firstOperand + second;
      if (state.operator === '-') result = state.firstOperand - second;
      if (state.operator === '*') result = state.firstOperand * second;
      if (state.operator === '/') result = state.firstOperand / second;
      state.displayValue = String(Number(result.toFixed(8)));
    }
    state.operator = null;
    state.expression = "";
  }

  function reset() {
    state = { displayValue: '0', firstOperand: null, operator: null, waitingForSecond: false, expression: '', hasError: false };
  }

  function inputDecimal() {
    if (state.waitingForSecond) {
      state.displayValue = '0.';
      state.waitingForSecond = false;
      return;
    }

    if (!state.displayValue.includes('.')) {
      state.displayValue += '.';
    }
  }

  function toggleSign() {
    // Dacă este afișată o eroare, nu facem nimic
    if (state.hasError) return;
    
    // Transformăm string-ul în număr, îi schimbăm semnul și îl facem înapoi string
    const currentVal = parseFloat(state.displayValue);
    if (!isNaN(currentVal) && currentVal !== 0) {
      state.displayValue = (currentVal * -1).toString();
    }
  }

  // Actualizează return-ul de la finalul model.js
  return { 
    getState, 
    inputDigit, 
    deleteLastDigit, 
    chooseOperator, 
    calculate, 
    reset,
    inputDecimal,
    toggleSign
  };
})();