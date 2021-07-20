import "./App.css";
import Column from "./components/Column";
import { useDispatch, useSelector } from "react-redux";
import {
  createRaiseAction,
  createLowerAction,
  createSetHeightAction,
} from "./actions";

function App() {
  const dispatch = useDispatch();
  const height = useSelector((state) => state.height);

  function raise() {
    dispatch(createRaiseAction());
  }

  function lower() {
    dispatch(createLowerAction());
  }

  function setHeight(requestedHeight) {
    dispatch(createSetHeightAction(requestedHeight));
  }

  return (
    <div className="App">
      <Column
        onRaise={raise}
        onLower={lower}
        onSetHeight={setHeight}
        height={height}
      />
    </div>
  );
}

export default App;
