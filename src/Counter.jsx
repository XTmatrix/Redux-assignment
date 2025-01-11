import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => dispatch(increment())}
        style={{
          padding: "10px 20px",
          margin: "10px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{
          padding: "10px 20px",
          margin: "10px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
