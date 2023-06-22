import { useState } from "react";

import "./App.css";
import { Clock } from "./components/Clock/Clock";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Analog Clock</h1>
      <Clock />
      <Footer />
    </>
  );
}

export default App;
