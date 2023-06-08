import { RegisterForm } from '.';
import { REGISTER_FAILED, REGISTER_SUCCESS } from './reducers';
import { AUTH_REGISTER } from './../../redux-saga/actions';

export const register = (payload: RegisterForm, componentId?: string) => ({
  type: AUTH_REGISTER,
  response: {
    success: {
      type: REGISTER_SUCCESS,
    },
    failure: {
      type: REGISTER_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});