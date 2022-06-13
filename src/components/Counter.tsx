import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/slices/counterSlice";

export const Counter = () => {
  const count = useAppSelector((store) => store.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="counter">
      <h3>counter {count.value}</h3>
      <button onClick={() => dispatch(increment())}> +1</button>
      <br />
      <button onClick={() => dispatch(decrement())}> -1</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}> +5</button>
    </div>
  );
};
