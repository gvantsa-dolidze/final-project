import Button from "../../components/elements/Button";
import { useAppSelector, useAppDispatch } from "../hooks";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic
  return (
    <div className="flex gap-5 items-center justify-center border w-24 h-10 rounded-md">
      <Button label="-" variant="link" onClick={() => dispatch(decrement())} />
      <h1 className="w-3">{count}</h1>
      <Button label="+" variant="link" onClick={() => dispatch(increment())} />
    </div>
  );
}
