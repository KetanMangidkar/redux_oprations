import { appAction } from "./action";


const initState = { count: 0 };
export const countReducer = (state= initState, action) => {
  switch (action.type) {
    case appAction.INCREAMENT_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case appAction.DECREAMENT_COUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

