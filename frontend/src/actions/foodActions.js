import axios from "axios"
import {
  FOOD_DETAILS_FAIL,
  FOOD_DETAILS_REQUEST,
  FOOD_DETAILS_SUCCESS,
} from "../constants/foodConstants"

const listRestaurantFood = (id) => async (dispatch) => {
  try {
    dispatch({ type: "RESTAURANT_FOOD_LIST_REQUEST" })

    const { data } = await axios.get(`/api/restaurants/${id}/foods`)

    //if there is food for the restaurant (check length of the array)
    if (data.length > 0) {
      dispatch({
        type: "RESTAURANT_FOOD_LIST_SUCCESS",
        payload: data,
      })
    } else {
      dispatch({
        type: "RESTAURANT_FOOD_LIST_FAIL",
        payload: "No food for this restaurant :).",
      })
    }
  } catch (error) {
    dispatch({
      type: "RESTAURANT_FOOD_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

const foodDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: FOOD_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/foods/${id}`)

    dispatch({
      type: FOOD_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FOOD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export { listRestaurantFood, foodDetails }
