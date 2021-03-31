import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/foods/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      food: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantity,
    },
  })

  //get the cart from the state & save it to localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
