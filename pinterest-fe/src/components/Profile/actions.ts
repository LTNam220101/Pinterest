import {
  FOLLOW_USER_FAILED,
  FOLLOW_USER_SUCCESS,
  GET_BOARDS_FAILED,
  GET_BOARDS_PROFILE_FAILED,
  GET_BOARDS_PROFILE_SUCCESS,
  GET_BOARDS_SUCCESS,
  GET_FOLLOWERS_FAILED,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_USER_FAILED,
  GET_FOLLOWERS_USER_SUCCESS,
  GET_FOLLOWINGS_FAILED,
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_USER_FAILED,
  GET_FOLLOWINGS_USER_SUCCESS,
  GET_PINS_USER_FAILED,
  GET_PINS_USER_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  UN_FOLLOW_USER_FAILED,
  UN_FOLLOW_USER_SUCCESS
} from "./reducers"
import {
  FOLLOW_USER,
  GET_BOARDS,
  GET_BOARDS_PROFILE,
  GET_FOLLOWERS,
  GET_FOLLOWERS_USER,
  GET_FOLLOWINGS,
  GET_FOLLOWINGS_USER,
  GET_PINS_USER,
  GET_PROFILE,
  UN_FOLLOW_USER
} from "./../../redux-saga/actions"

export const getBoards = (payload: any, componentId?: string) => ({
  type: GET_BOARDS,
  response: {
    success: {
      type: GET_BOARDS_SUCCESS
    },
    failure: {
      type: GET_BOARDS_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const getProfile = (payload?: any, componentId?: string) => ({
  type: GET_PROFILE,
  response: {
    success: {
      type: GET_PROFILE_SUCCESS
    },
    failure: {
      type: GET_PROFILE_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const getBoardsProfile = (payload: any, componentId?: string) => ({
  type: GET_BOARDS_PROFILE,
  response: {
    success: {
      type: GET_BOARDS_PROFILE_SUCCESS
    },
    failure: {
      type: GET_BOARDS_PROFILE_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const getFollowers = (payload: any, componentId?: string) => ({
  type: GET_FOLLOWERS,
  response: {
    success: {
      type: GET_FOLLOWERS_SUCCESS
    },
    failure: {
      type: GET_FOLLOWERS_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const getFollowings = (payload: any, componentId?: string) => ({
  type: GET_FOLLOWINGS,
  response: {
    success: {
      type: GET_FOLLOWINGS_SUCCESS
    },
    failure: {
      type: GET_FOLLOWINGS_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const followUser = (payload: any, componentId?: string) => ({
  type: FOLLOW_USER,
  response: {
    success: {
      type: FOLLOW_USER_SUCCESS
    },
    failure: {
      type: FOLLOW_USER_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const unFollowUser = (payload: any, componentId?: string) => ({
  type: UN_FOLLOW_USER,
  response: {
    success: {
      type: UN_FOLLOW_USER_SUCCESS
    },
    failure: {
      type: UN_FOLLOW_USER_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const getFollowersUser = (payload?: any, componentId?: string) => ({
  type: GET_FOLLOWERS_USER,
  response: {
    success: {
      type: GET_FOLLOWERS_USER_SUCCESS
    },
    failure: {
      type: GET_FOLLOWERS_USER_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const getFollowingsUser = (payload?: any, componentId?: string) => ({
  type: GET_FOLLOWINGS_USER,
  response: {
    success: {
      type: GET_FOLLOWINGS_USER_SUCCESS
    },
    failure: {
      type: GET_FOLLOWINGS_USER_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})

export const getPinsUser = (payload: any, componentId?: string) => ({
  type: GET_PINS_USER,
  response: {
    success: {
      type: GET_PINS_USER_SUCCESS
    },
    failure: {
      type: GET_PINS_USER_FAILED
    }
  },
  payload,
  componentId,
  loading: true
})
