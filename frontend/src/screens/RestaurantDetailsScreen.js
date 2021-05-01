import React, { useEffect } from "react"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { restaurantDetails } from "../actions/restaurantActions"
import Rating from "../components/Rating"
import Loader from "../components/Loader"
import Message from "../components/Message"

function RestaurantDetails({ match, history }) {
  const dispatch = useDispatch()
  const { loading, error, restaurant } = useSelector(
    (state) => state.restaurantDetails
  )
  useEffect(() => {
    dispatch(restaurantDetails(match.params.id))
  }, [dispatch, match.params.id])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" text={error} />
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image
                src={restaurant.picture}
                alt={restaurant.name}
                fluid
                rounded
              />
              <br />
              <Button
                className="btn brn-dark  my-3"
                onClick={() => history.goBack()}
              >
                Back
              </Button>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{restaurant.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={restaurant.rating}
                    text={`${restaurant.numReviews} avis`}
                  ></Rating>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Description: </strong> {restaurant.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Ville: </strong> {restaurant.ville}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Adresse: </strong> {restaurant.address}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Téléphone: </strong> {restaurant.phone}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <LinkContainer to={`/restaurant/${restaurant._id}/food`}>
                      <Button type="button" className="btn-block">
                        See Menu
                      </Button>
                    </LinkContainer>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default RestaurantDetails
