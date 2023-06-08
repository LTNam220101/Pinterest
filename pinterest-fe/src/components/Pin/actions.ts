import {
  GET_PIN_FAILED,
  GET_PIN_SUCCESS,
  DELETE_PIN_SUCCESS,
  DELETE_PIN_FAILED,
  GET_BOARDS_HAS_PIN_SUCCESS,
  GET_BOARDS_HAS_PIN_FAILED,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILED,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILED,
} from "./reducers"
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_PIN,
  GET_BOARDS_HAS_PIN,
  GET_PIN,
  UPDATE_COMMENT
} from "./../../redux-saga/actions"

export const getPin = (payload: any, componentId?: string) => ({
  type: GET_PIN,
  response: {
    success: {
      type: GET_PIN_SUCCESS
    },
    failure: {
      type: GET_PIN_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const deletePin = (payload: any, componentId?: string) => ({
  type: DELETE_PIN,
  response: {
    success: {
      type: DELETE_PIN_SUCCESS
    },
    failure: {
      type: DELETE_PIN_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const getBoardsHasPin = (payload: any, componentId?: string) => ({
  type: GET_BOARDS_HAS_PIN,
  response: {
    success: {
      type: GET_BOARDS_HAS_PIN_SUCCESS
    },
    failure: {
      type: GET_BOARDS_HAS_PIN_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const addComment = (payload: any, componentId?: string) => ({
  type: ADD_COMMENT,
  response: {
    success: {
      type: ADD_COMMENT_SUCCESS
    },
    failure: {
      type: ADD_COMMENT_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const updateComment = (payload: any, componentId?: string) => ({
  type: UPDATE_COMMENT,
  response: {
    success: {
      type: UPDATE_COMMENT_SUCCESS
    },
    failure: {
      type: UPDATE_COMMENT_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const deleteComment = (payload: any, componentId?: string) => ({
  type: DELETE_COMMENT,
  response: {
    success: {
      type: DELETE_COMMENT_SUCCESS
    },
    failure: {
      type: DELETE_COMMENT_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})