import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen"
import RestaurantFoodScreen from "./screens/RestaurantFoodScreen"
import LoginScreen from "./screens/LoginScreen"
import SignupScreen from "./screens/SignupScreen"
import ProfileScreen from "./screens/ProfileScreen"
import FoodDetailsScreen from "./screens/FoodDetailsScreen"
import CartScreen from "./screens/CartScreen"
import CheckoutScreen from "./screens/CheckoutScreen"
import OrderScreen from "./screens/OrderScreen"
import UsersListScreen from "./screens/AdminScreens/UsersListScreen"
import RestaurantsScreen from "./screens/AdminScreens/RestaurantsScreen"

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/signup" exact component={SignupScreen} />
          <Route path="/profile" exact component={ProfileScreen} />
          <Route path="/admin/users" exact component={UsersListScreen} />
          <Route
            path="/admin/restaurants"
            exact
            component={RestaurantsScreen}
          />
          <Route
            path="/restaurant/:id"
            exact
            component={RestaurantDetailsScreen}
          />
          <Route path="/restaurant/:id/food" component={RestaurantFoodScreen} />
          <Route path="/foods/:id" component={FoodDetailsScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/checkout" component={CheckoutScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
