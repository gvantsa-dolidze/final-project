
import Button from "../../components/elements/Button";

interface CounterProps {
  add: () => void,
  remove: () => void,
  value: number
}

export function Counter({ add, remove, value }: CounterProps) {
  return (
    <div className="flex gap-5 items-center justify-center border w-24 h-10 rounded-md">
      <Button label="-" variant="link" onClick={remove} />
      <h1 className="w-3">{value}</h1>
      <Button label="+" variant="link" onClick={add} />
    </div>
  );
}
