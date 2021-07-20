import { useState } from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

export default function Column({ onRaise, onLower, onSetHeight, height }) {
  const [requestedHeight, setRequestedHeight] = useState(height);

  function clickHandler() {
    onSetHeight(requestedHeight);
  }

  function heightChangeHandler(e) {
    setRequestedHeight(parseInt(e.target.value));
  }

  const cells = Array.from(new Array(height), (x, i) => (
    <Cell key={i + 1}>{i + 1}</Cell>
  ));

  return (
    <div className="column">
      <div className="cell-container">{cells}</div>
      <div>
        <button onClick={onLower} className="lower">
          Lower
        </button>
        <button onClick={onRaise} className="raise">
          Raise
        </button>
      </div>
      <div className="set-height">
        <input
          type="number"
          min="0"
          max="12"
          value={requestedHeight}
          className="set-height"
          onChange={heightChangeHandler}
        />
        <button onClick={clickHandler}>Set</button>
      </div>
    </div>
  );
}

Column.propTypes = {
  length: PropTypes.number,
};
