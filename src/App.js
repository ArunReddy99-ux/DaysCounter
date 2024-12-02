import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [slidervalue, setSlidervalue] = useState(1);
  const [count, setCount] = useState(0);

  function handlencount() {
    setCount(count + slidervalue);
  }
  function handlepcount() {
    setCount(count - slidervalue);
  }
  function handlereset() {
    setCount(0);
    setSlidervalue(1);
  }
  const date = new Date("October 30 2024");
  date.setDate(date.getDate() + count);
  return (
    <div classsName="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={slidervalue}
          onChange={(e) => setSlidervalue(Number(e.target.value))}
        />
        <span>{slidervalue}</span>
      </div>
      <div>
        <button onClick={handlencount}>+</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handlepcount}>-</button>
        <p>
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${Math.abs(count)} days from today is `
              : `${Math.abs(count)}days ago was`}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
      {count !== 0 || slidervalue !== 1 ? (
        <div>
          <button onClick={handlereset}>RESET</button>
        </div>
      ) : null}
    </div>
  );
}
