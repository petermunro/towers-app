import "./App.css";
import Column from "./components/Column";
import { useDispatch, useSelector } from "react-redux";
import { createRaiseAction, createLowerAction } from "./actions";

function App() {
  const dispatch = useDispatch();
  const height = useSelector((state) => state.height);

  function raise() {
    dispatch(createRaiseAction());
  }

  function lower() {
    dispatch(createLowerAction());
  }

  return (
    <div className="App">
      <Column onRaise={raise} onLower={lower} height={height} />
    </div>
  );
}

export default App;
