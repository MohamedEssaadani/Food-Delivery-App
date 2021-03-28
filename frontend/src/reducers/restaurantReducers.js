import {
  RESTAURANT_DETAILS_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_LIST_FAIL,
  RESTAURANT_LIST_FILTER,
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
} from "../constants/restaurantConstants"

const restaurantListReducer = (state = { restaurants: [] }, action) => {
  switch (action.type) {
    case RESTAURANT_LIST_REQUEST:
      return { loading: true, restaurants: [] }

    case RESTAURANT_LIST_SUCCESS:
      return { loading: false, restaurants: action.payload }

    case RESTAURANT_LIST_FILTER:
      return {
        loading: false,
        restaurants: action.payload.filter(
          (item) =>
            item.name.includes(action.filter) ||
            item.description.includes(action.filter) ||
            item.address.includes(action.filter)
        ),
      }

    case RESTAURANT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

const restaurantDetailsReducer = (state = { restaurant: {} }, action) => {
  switch (action.type) {
    case RESTAURANT_DETAILS_REQUEST:
      return { loading: true, restaurant: {} }

    case RESTAURANT_DETAILS_SUCCESS:
      return { loading: false, restaurant: action.payload }

    case RESTAURANT_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export { restaurantListReducer, restaurantDetailsReducer }
