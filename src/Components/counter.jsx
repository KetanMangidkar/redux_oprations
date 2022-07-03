import { useDispatch, useSelector } from "react-redux";
import { countAction } from "../Redux/Counter/action";

export const Conuter = () => {
  const count = useSelector((state)=> state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
        <h1>count:{count}</h1>
      <button onClick={() => dispatch(countAction(1))}>Increment</button>
      <button onClick={() => dispatch(countAction(-1))}>Decrement</button>
    </div>
  );
};
