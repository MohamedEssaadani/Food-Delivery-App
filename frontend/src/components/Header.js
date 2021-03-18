import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listRestaurant } from "../actions/restaurantActions"
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"

function Header({ history }) {
  const dispatch = useDispatch()
  const restaurantList = useSelector((state) => state.restaurantList)
  const { restaurants } = restaurantList
  const { userInfo } = useSelector((state) => state.userLogin)
  var cities = []
  var distinctCities = []

  useEffect(() => {
    dispatch(listRestaurant())
  }, [dispatch])

  if (restaurants) {
    cities = restaurants.map((restaurant) => restaurant.ville)
    distinctCities = Array.from(new Set(cities))
  }

  const logout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <Image src="/images/logo.png" height="80px" width="80px" />
            </Navbar.Brand>
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
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <Nav.Link onClick={logout}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Nav.Link>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
