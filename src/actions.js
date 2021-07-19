export const RAISE_ACTION = "RAISE_ACTION";
export const LOWER_ACTION = "LOWER_ACTION";

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
