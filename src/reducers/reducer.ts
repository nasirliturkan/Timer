import { combineReducers } from "redux";

import { actionTypes } from "../type";

const initialState = { isRunning: false, reset: false,  };

const timer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.START:
      return { ...state, isRunning: true };
    case actionTypes.STOP:
      return { ...state, isRunning: false };
    case actionTypes.RESET:
      return { ...state, isRunning: false, reset: true };
    default:
      return state;
  }
};

const rootReducers = combineReducers({ timer });

export default rootReducers;
