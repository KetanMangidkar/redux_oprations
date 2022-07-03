import { todoAction } from "./action";

const initState = { loading: false, todos: [], error: false };

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case todoAction.GET_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case todoAction.GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case todoAction.GET_TODO_FAILURE:
      return {
        state,
        loading: false,
        error: true,
      };
      case todoAction.ADD_TODO_REQUEST:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case todoAction.ADD_TODO_SUCCESS:
        return {
          ...state,
          loading: false,
        
        };
      case todoAction.ADD_TODO_FAILURE:
        return {
          state,
          loading: false,
          error: true,
        };
    default:
      return state;
  }
};
