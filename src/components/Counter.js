import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/app/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
    </div>
  );
};

export default Counter;
