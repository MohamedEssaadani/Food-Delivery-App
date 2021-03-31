import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  restaurantListReducer,
  restaurantDetailsReducer,
} from "./reducers/restaurantReducers"

import {
  restaurantFoodListReducer,
  foodDetailsReducer,
} from "./reducers/foodReducers"

import {
  userLoginReducer,
  userSignUpReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers"
import { cartReducer } from "./reducers/cartReducers"

const reducer = combineReducers({
  restaurantList: restaurantListReducer,
  restaurantDetails: restaurantDetailsReducer,
  restaurantFood: restaurantFoodListReducer,
  foodDetails: foodDetailsReducer,
  userLogin: userLoginReducer,
  useRegister: userSignUpReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  cart: cartReducer,
})

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  cart: { cartItems: cartItemsFromLocalStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
