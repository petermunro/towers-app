import { createStore } from "redux";
import { towersReducer } from "./towersReducer";

export const store = createStore(
  towersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
