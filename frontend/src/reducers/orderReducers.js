import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  ORDER_DETAIL_FAIL,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
} from "../constants/orderConstants"

export const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST: {
      return {
        loading: true,
      }
    }
    case CREATE_ORDER_SUCCESS: {
      return {
        loading: false,
        success: true,
        order: action.payload,
      }
    }
    case CREATE_ORDER_FAIL: {
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

export const orderDetailReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAIL_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ORDER_DETAIL_SUCCESS: {
      return {
        loading: false,
        order: action.payload,
      }
    }
    case ORDER_DETAIL_FAIL: {
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
