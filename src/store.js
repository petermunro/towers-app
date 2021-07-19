import { createStore } from "redux";
import { towersReducer } from "./towersReducer";

export const store = createStore(towersReducer);
