const Controller = (() => {
  function init() {
    View.render(Model.getState());
    View.bindButtonPress(_handleAction);
  }

  function _handleAction(action, value) {
    if (action === 'digit') Model.inputDigit(value);
    if (action === 'delete') Model.deleteLastDigit();
    if (action === 'operator') Model.chooseOperator(value);
    if (action === 'equals') Model.calculate();
    if (action === 'clear') Model.reset();
    if (action === 'decimal') Model.inputDecimal();
    if (action === 'sign') Model.toggleSign();
    
    View.render(Model.getState());
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', Controller.init);