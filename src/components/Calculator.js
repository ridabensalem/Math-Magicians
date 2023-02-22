import '../calculator.css';

const Calculator = () => (
  <main className="calculator">
    <header className="calc-output">0</header>

    <div className="calc-grid">
      <section className="calc-numbers">
        <button id="btn-ac" className="button_calculator" type="button">
          AC
        </button>
        <button id="btn-minus-plus" className="button_calculator" type="button">
          +/-
        </button>
        <button id="btn-percentage" className="button_calculator" type="button">
          %
        </button>
        <button id="btn-one" className="button_calculator" type="button">
          1
        </button>
        <button id="btn-two" className="button_calculator" type="button">
          2
        </button>
        <button id="btn-three" className="button_calculator" type="button">
          3
        </button>
        <button id="btn-four" className="button_calculator" type="button">
          4
        </button>
        <button id="btn-five" className="button_calculator" type="button">
          5
        </button>
        <button id="btn-six" className="button_calculator" type="button">
          6
        </button>
        <button id="btn-seven" className="button_calculator" type="button">
          7
        </button>
        <button id="btn-eight" className="button_calculator" type="button">
          8
        </button>
        <button id="btn-nine" className="button_calculator" type="button">
          9
        </button>
        <button id="btn-zero" className="button_calculator" type="button">
          0
        </button>
        <button id="btn-period" className="button_calculator" type="button">
          .
        </button>
      </section>

      <section className="calc-operators">
        <button id="btn-four" className="button_calculator" type="button">
          /
        </button>
        <button id="btn-four" className="button_calculator" type="button">
          *
        </button>
        <button id="btn-four" className="button_calculator" type="button">
          -
        </button>
        <button id="btn-four" className="button_calculator" type="button">
          +
        </button>
        <button id="btn-four" className="button_calculator" type="button">
          =
        </button>
      </section>
    </div>
  </main>
);

export default Calculator;
