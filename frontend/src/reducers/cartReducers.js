import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      //get the item to add
      const item = action.payload
      //get the item if already exist in the cartItems
      const existItem = state.cartItems.find((i) => i.food === item.food)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.food === existItem.food ? item : i
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.food !== action.payload),
      }
    default:
      return state
  }
}
