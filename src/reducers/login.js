import {LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from '../action/actionTypes';

const initialState = {
  isLoggin: false,
  login: undefined,
  uncorrect: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {uncorrect: false, login: action.payload, isLoggin: true};
    case LOGIN_FAILED:
      return {...state, uncorrect: true};
    case LOGOUT:
      return {uncorrect: false, login: undefined, isLoggin: false};
    default:
      return state;
  }
};

export default login;
