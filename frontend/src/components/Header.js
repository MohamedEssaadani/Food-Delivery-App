import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listRestaurant } from "../actions/restaurantActions"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"

function Header() {
  const dispatch = useDispatch()
  const restaurantList = useSelector((state) => state.restaurantList)
  const { restaurants } = restaurantList
  var cities = []
  var distinctCities = []

  useEffect(() => {
    dispatch(listRestaurant())
  }, [dispatch])

  if (restaurants.length > 0) {
    cities = restaurants.map((restaurant) => restaurant.ville)
    distinctCities = Array.from(new Set(cities))
  }

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>Food delivery</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Villes" id="basic-nav-dropdown">
                {distinctCities.map((city) => {
                  return <NavDropdown.Item>{city}</NavDropdown.Item>
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
