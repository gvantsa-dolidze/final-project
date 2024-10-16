
import Button from "../../components/elements/Button";
import { useAppSelector, useAppDispatch } from "../hooks";
import { decrement, increment } from "./counterSlice";

interface CounterProps {
  itemId: string; // or number, depending on your implementation
}

export function Counter({ itemId }: CounterProps) {
  const count = useAppSelector((state) => state.counter.items[itemId]?.quantity || 0); // Adjust to access the correct item
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-5 items-center justify-center border w-24 h-10 rounded-md">
      <Button label="-" variant="link" onClick={() => dispatch(decrement(itemId))} />
      <h1 className="w-3">{count}</h1>
      <Button label="+" variant="link" onClick={() => dispatch(increment(itemId))} />
    </div>
  );
}
