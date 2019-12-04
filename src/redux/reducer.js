import { Type } from "./action";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case Type.ADD_BUDGET:
      return state + action.payload;
    default:
      return state;
  }
};

export default reducer;
