import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeView from "./views/HomeView"
import RestaurantDetailsView from "./views/RestaurantDetailsView"

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeView} />
          <Route path="/restaurant/:id" component={RestaurantDetailsView} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
