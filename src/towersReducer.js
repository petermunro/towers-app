import { RAISE_ACTION, LOWER_ACTION, SET_HEIGHT_ACTION } from "./actions";

const defaultHeight = 7;
const columnHeightLimit = 12;

const initialState = {
  height: defaultHeight,
};

function getClampedHeight(height) {
  return Math.max(Math.min(height, columnHeightLimit), 0);
}

export function towersReducer(state = initialState, action) {
  switch (action.type) {
    case RAISE_ACTION:
      return {
        ...state,
        height: getClampedHeight(state.height + 1),
      };
    case LOWER_ACTION:
      return {
        ...state,
        height: getClampedHeight(state.height - 1),
      };
    case SET_HEIGHT_ACTION:
      return {
        ...state,
        height: getClampedHeight(action.requestedHeight),
      };
    default:
      return state;
  }
}
