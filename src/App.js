import { useState } from "react";
import "./App.css";
import Column from "./components/Column";

const defaultHeight = 7;
const columnHeightLimit = 12;

function getClampedHeight(height) {
  return Math.max(Math.min(height, columnHeightLimit), 0);
}

function App() {
  let [height, setHeight] = useState(defaultHeight);

  function raise() {
    setHeight((height) => getClampedHeight(height + 1));
  }

  function lower() {
    setHeight((height) => getClampedHeight(height - 1));
  }

  return (
    <div className="App">
      <Column onRaise={raise} onLower={lower} height={height} />
    </div>
  );
}

export default App;
