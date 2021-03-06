import React, { useEffect } from "react"
import { Row, Col, Jumbotron, Container, FormControl } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { listRestaurant } from "../actions/restaurantActions"
import Restaurant from "../components/Restaurant"
import Loader from "../components/Loader"
import Message from "../components/Message"

function HomeView() {
  const dispatch = useDispatch()
  const restaurantList = useSelector((state) => state.restaurantList)
  const { loading, error, restaurants } = restaurantList

  useEffect(() => {
    dispatch(listRestaurant())
  }, [dispatch])

  return (
    <>
      <Jumbotron fluid>
        <Container>
          {/* <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
              <h3>Effectuer un recherche: </h3>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <FormControl
                type="text"
                placeholder="rechercher"
                className="mr-sm-2"
              />
            </Col>
          </Row> */}
        </Container>
      </Jumbotron>

      <h3>Casablanca Restaurants</h3>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" text={error} />
      ) : (
        <Row>
          {restaurants.map((restaurant) => (
            <Col key={restaurant._id} sm={12} md={6} lg={4} xl={3}>
              <Restaurant restaurant={restaurant}></Restaurant>
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeView
