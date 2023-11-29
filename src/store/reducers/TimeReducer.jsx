import {CHANGE_FOCUS} from '../actions/TimeAction';

const initialState = {
  focusTime: 1,
  shortRestTime: 1,
  longRestTime: 1,
  allPomodoro: 8,
  donePomodoro: 0,
};

const TimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FOCUS: {
      return {
        ...state,
        focusTime: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default TimeReducer;
