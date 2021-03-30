import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  restaurantListReducer,
  restaurantDetailsReducer,
} from "./reducers/restaurantReducers"

import { restaurantFoodListReducer } from "./reducers/foodReducers"

import {
  userLoginReducer,
  userSignUpReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers"

const reducer = combineReducers({
  restaurantList: restaurantListReducer,
  restaurantDetails: restaurantDetailsReducer,
  restaurantFood: restaurantFoodListReducer,
  userLogin: userLoginReducer,
  useRegister: userSignUpReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
