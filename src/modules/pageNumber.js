const INCREASE = "pageNumber/INCREASE";
const DECREASE = "pageNumber/DECREASE";

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  number: 16,
};

export default function pageNumber(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}
