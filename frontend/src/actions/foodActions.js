import axios from "axios"

const listRestaurantFood = (id) => async (dispatch) => {
  try {
    dispatch({ type: "RESTAURANT_FOOD_LIST_REQUEST" })

    const { data } = await axios.get(`/api/restaurants/${id}/food`)

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

export { listRestaurantFood }
