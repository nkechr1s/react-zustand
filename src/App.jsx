import "./App.css";
import { useStore } from "./store";
const App = () => {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  return (
    <div>
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>one up</button>
      <button style={{ marginLeft: "10px" }} onClick={decreasePopulation}>
        one down
      </button>
    </div>
  );
};

export default App;
