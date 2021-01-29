import HomeView from "./views/HomeView"
import { Container } from "react-bootstrap"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeView></HomeView>
        </Container>
      </main>
    </>
  )
}

export default App
