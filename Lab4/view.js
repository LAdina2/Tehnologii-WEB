const View = (() => {
  const elements = {
    display: document.getElementById('display-value'),
    expression: document.getElementById('expression')
  };

  function render(state) {
    elements.display.textContent = state.displayValue;
    elements.expression.textContent = state.expression;
  }

  function bindButtonPress(handler) {
    document.querySelector('.buttons').addEventListener('click', e => {
      const btn = e.target.closest('.btn');
      if (btn) handler(btn.dataset.action, btn.dataset.value);
    });
  }

  return { render, bindButtonPress };
})();