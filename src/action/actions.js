import {LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from './actionTypes';
import axios from 'axios';

export const logIn = (login, password) => dispatch => {
  axios
    .post('http://192.168.0.106/login.php', {
      login: login,
      password: password,
    })
    .then(function(response) {
      if (response.data === true) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: login,
        });
      } else {
        dispatch({
          type: LOGIN_FAILED,
        });
      }
    })
    .catch(function(error) {
      console.log('err');
    });
};

export const logOut = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};
