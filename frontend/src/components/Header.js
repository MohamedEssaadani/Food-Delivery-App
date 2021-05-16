import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import { listRestaurant } from "../actions/restaurantActions"
import { logout } from "../actions/userActions"

function Header({ history }) {
  const dispatch = useDispatch()

  //for drop down cities
  const restaurantList = useSelector((state) => state.restaurantList)
  const { restaurants } = restaurantList
  var cities = []
  var distinctCities = []

  //for sign in / logout & show user name at header
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(listRestaurant())
  }, [dispatch])

  if (restaurants) {
    cities = restaurants.map((restaurant) => restaurant.ville)
    distinctCities = Array.from(new Set(cities))
  }

  const logoutHandler = () => {
    dispatch(logout())
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
              <NavDropdown title="Cities" id="cities">
                {distinctCities.map((city) => {
                  return <NavDropdown.Item key={city}>{city}</NavDropdown.Item>
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
                <>
                  <NavDropdown
                    title={
                      <>
                        <i className="fas fa-user"> </i> {userInfo.name}
                      </>
                    }
                    id="username"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>
                        <i className="fas fa-user" /> Profile
                      </NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}>
                      <i className="fas fa-sign-out-alt"></i> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown
                  title={
                    <>
                      <i className="fas fa-user"> </i> {"Admin"}
                    </>
                  }
                  id="adminMenu"
                >
                  {" "}
                  <LinkContainer to="/admin/users">
                    <NavDropdown.Item>
                      <i className="fas fa-user" /> Users
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/restaurants">
                    <NavDropdown.Item>
                      <i class="fas fa-utensils"></i> Restaurants
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/:restaurantId/food">
                    <NavDropdown.Item>
                      <i class="fas fa-hamburger"></i> Food
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orders">
                    <NavDropdown.Item>
                      <i className="fas fa-list" /> Orders
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
