import { USER_ORDER_REQUEST } from "../constants/orderConstants"

export const addOrder = (order) => async (dispatch) => {
  dispatch(USER_ORDER_REQUEST)

}
