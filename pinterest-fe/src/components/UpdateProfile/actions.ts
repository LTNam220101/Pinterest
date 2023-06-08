import { UPDATE_PROFILE } from "./../../redux-saga/actions";
import { UPDATE_PROFILE_FAILED, UPDATE_PROFILE_SUCCESS } from "./reducers";

export const updateProfile = (payload?: any, componentId?: string) => ({
    type: UPDATE_PROFILE,
    response: {
      success: {
        type: UPDATE_PROFILE_SUCCESS,
      },
      failure: {
        type: UPDATE_PROFILE_FAILED,
      },
    },
    payload,
    componentId,
    loading: true,
  });