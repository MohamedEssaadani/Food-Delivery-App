const restaurantListReducer = (state = { restaurants: [] }, action) => {
  switch (action.type) {
    case "RESTAURANT_LIST_REQUEST":
      return { loading: true, restaurants: [] }

    case "RESTAURANT_LIST_SUCCESS":
      return { loading: false, restaurants: action.payload }

    case "RESTAURANT_LIST_FAIL":
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export { restaurantListReducer }
