export const RAISE_ACTION = "RAISE_ACTION";
export const LOWER_ACTION = "LOWER_ACTION";
export const SET_HEIGHT_ACTION = "SET_HEIGHT_ACTION";

export function createRaiseAction() {
  return {
    type: RAISE_ACTION,
  };
}

export function createLowerAction() {
  return {
    type: LOWER_ACTION,
  };
}

export function createSetHeightAction(requestedHeight) {
  return {
    type: SET_HEIGHT_ACTION,
    requestedHeight,
  };
}
