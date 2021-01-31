import React from "react"
import { Navbar, Container } from "react-bootstrap"

function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>Food Delivery</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
