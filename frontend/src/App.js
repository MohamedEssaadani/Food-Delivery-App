import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen"
import RestaurantFoodScreen from "./screens/RestaurantFoodScreen"
import LoginScreen from "./screens/LoginScreen"

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route
            path="/restaurant/:id"
            exact
            component={RestaurantDetailsScreen}
          />
          <Route path="/restaurant/:id/food" component={RestaurantFoodScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
