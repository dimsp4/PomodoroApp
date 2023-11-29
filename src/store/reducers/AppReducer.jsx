import {COLORS} from '../../shared/constant/Theme';

const {CHANGE_THEME, APP_ERROR} = require('../actions/AppAction');

const initialState = {
  themeColor: COLORS.RED,
  errorMessage: '',
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        themeColor: action.payload,
      };
    case APP_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
