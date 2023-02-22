import '../calculator.css';
import Big from 'big.js';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  const handleEquals = () => {
    const { total, next, operation } = state;
    if (total && next && operation) {
      const result = operate(Big(total), Big(next), operation);
      setState({ total: result.toString(), next: null, operation: null });
    }
  };

  const { total, next, operation } = state;
  return (
    <main className="calculator">
      <header className="calc-output">
        {total}
        {' '}
        {operation}
        {next}
      </header>

      <div className="calc-grid">
        <section className="calc-numbers">
          <button id="btn-ac" className="button_calculator" type="button" onClick={() => handleClick('AC')}>
            AC
          </button>
          <button id="btn-minus-plus" className="button_calculator" type="button" onClick={() => handleClick('+/-')}>
            +/-
          </button>
          <button id="btn-percentage" className="button_calculator" type="button" onClick={() => handleClick('%')}>
            %
          </button>
          <button id="btn-one" className="button_calculator" type="button" onClick={() => handleClick('1')}>
            1
          </button>
          <button id="btn-two" className="button_calculator" type="button" onClick={() => handleClick('2')}>
            2
          </button>
          <button id="btn-three" className="button_calculator" type="button" onClick={() => handleClick('3')}>
            3
          </button>
          <button id="btn-four" className="button_calculator" type="button" onClick={() => handleClick('4')}>
            4
          </button>
          <button id="btn-five" className="button_calculator" type="button" onClick={() => handleClick('5')}>
            5
          </button>
          <button id="btn-six" className="button_calculator" type="button" onClick={() => handleClick('6')}>
            6
          </button>
          <button id="btn-seven" className="button_calculator" type="button" onClick={() => handleClick('7')}>
            7
          </button>
          <button id="btn-eight" className="button_calculator" type="button" onClick={() => handleClick('8')}>
            8
          </button>
          <button id="btn-nine" className="button_calculator" type="button" onClick={() => handleClick('9')}>
            9
          </button>
          <button id="btn-zero" className="button_calculator" type="button" onClick={() => handleClick('0')}>
            0
          </button>
          <button id="btn-period" className="button_calculator" type="button" onClick={() => handleClick('.')}>
            .
          </button>
        </section>

        <section className="calc-operators">
          <button id="btn-divide" className="button_calculator" type="button" onClick={() => handleClick('/')}>
            /
          </button>
          <button id="btn-multiply" className="button_calculator" type="button" onClick={() => handleClick('x')}>
            *
          </button>
          <button id="btn-subtract" className="button_calculator" type="button" onClick={() => handleClick('-')}>
            -
          </button>
          <button id="btn-add" className="button_calculator" type="button" onClick={() => handleClick('+')}>
            +
          </button>
          <button id="btn-equals" className="button_calculator" type="button" onClick={() => handleEquals()}>
            =
          </button>
        </section>
      </div>
    </main>
  );
};

export default Calculator;
