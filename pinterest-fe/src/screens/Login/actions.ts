import { LoginForm } from '.';
import { LOGIN_FAILED, LOGIN_SUCCESS } from './reducers';
import { AUTH_LOGIN } from './../../redux-saga/actions';

export const login = (payload: LoginForm, componentId?: string) => ({
  type: AUTH_LOGIN,
  response: {
    success: {
      type: LOGIN_SUCCESS,
    },
    failure: {
      type: LOGIN_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});