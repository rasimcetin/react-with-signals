import { count } from "./count-signal";

function CountIncrementor() {
  return (
    <div>
      <button onClick={() => count.value++}>Increment</button>
    </div>
  );
}

export default CountIncrementor;
