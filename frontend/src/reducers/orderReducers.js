import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  ORDER_DETAIL_FAIL,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  USER_ORDERS_FAIL,
  USER_ORDERS_REQUEST,
  USER_ORDERS_SUCCESS,
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

export const userOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case USER_ORDERS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case USER_ORDERS_SUCCESS: {
      return {
        loading: false,
        orders: action.payload,
      }
    }
    case USER_ORDERS_FAIL: {
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
