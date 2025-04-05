import { useState } from "react";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello world</h2>
      <Body />
    </div>
  );
}

export default App;
