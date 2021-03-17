import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return {
        loading: true,
        userInfo: action.payload,
      }
    }
    case USER_LOGIN_SUCCESS: {
      return {
        loading: false,
        userInfo: action.payload,
      }
    }
    case USER_LOGIN_FAIL: {
      return {
        loading: false,
        error: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
