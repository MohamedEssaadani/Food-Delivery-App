import {
  USER_ORDER_FAIL,
  USER_ORDER_REQUEST,
  USER_ORDER_SUCCESS,
} from "../constants/orderConstants"

export const addOrderReducer = (state, action) => {
  switch (action.type) {
    case USER_ORDER_REQUEST: {
      return {}
    }
    case USER_ORDER_SUCCESS: {
      return {}
    }
    case USER_ORDER_FAIL: {
      return {
        error: action.payload,
      }
    }
    default: {
      return {}
    }
  }
}
