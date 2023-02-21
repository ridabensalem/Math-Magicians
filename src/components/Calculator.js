import '../calculator.css';

const Calculator = () => (
  <main className="calculator">
    <header className="calc-output">0</header>

    <div className="calc-grid">
      <section className="calc-numbers">
        <button id="btn-ac" className="btn" type="button">
          AC
        </button>
        <button id="btn-minus-plus" className="btn" type="button">
          +/-
        </button>
        <button id="btn-percentage" className="btn" type="button">
          %
        </button>
        <button id="btn-one" className="btn" type="button">
          1
        </button>
        <button id="btn-two" className="btn" type="button">
          2
        </button>
        <button id="btn-three" className="btn" type="button">
          3
        </button>
        <button id="btn-four" className="btn" type="button">
          4
        </button>
        <button id="btn-five" className="btn" type="button">
          5
        </button>
        <button id="btn-six" className="btn" type="button">
          6
        </button>
        <button id="btn-seven" className="btn" type="button">
          7
        </button>
        <button id="btn-eight" className="btn" type="button">
          8
        </button>
        <button id="btn-nine" className="btn" type="button">
          9
        </button>
        <button id="btn-zero" className="btn" type="button">
          0
        </button>
        <button id="btn-period" className="btn" type="button">
          .
        </button>
      </section>

      <section className="calc-operators">
        <button id="btn-four" className="btn" type="button">
          /
        </button>
        <button id="btn-four" className="btn" type="button">
          *
        </button>
        <button id="btn-four" className="btn" type="button">
          -
        </button>
        <button id="btn-four" className="btn" type="button">
          +
        </button>
        <button id="btn-four" className="btn" type="button">
          =
        </button>
      </section>
    </div>
  </main>
);

export default Calculator;
