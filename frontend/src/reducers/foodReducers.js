import {
  RESTAURANT_FOOD_LIST_FAIL,
  RESTAURANT_FOOD_LIST_REQUEST,
  RESTAURANT_FOOD_LIST_SUCCESS,
} from "../constants/foodConstants"

const restaurantFoodListReducer = (state = { foodList: [] }, action) => {
  switch (action.type) {
    case RESTAURANT_FOOD_LIST_REQUEST:
      return { loading: true, foodList: [] }
    case RESTAURANT_FOOD_LIST_SUCCESS:
      return { loading: false, foodList: action.payload }
    case RESTAURANT_FOOD_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export { restaurantFoodListReducer }
