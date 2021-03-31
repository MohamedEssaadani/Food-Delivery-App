import React, { useEffect } from "react"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
// import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { foodDetails } from "../actions/foodActions"
import Rating from "../components/Rating"
import Loader from "../components/Loader"
import Message from "../components/Message"

function FoodDetailsScreen({ match }) {
  const dispatch = useDispatch()
  const { loading, error, food } = useSelector((state) => state.foodDetails)
  useEffect(() => {
    dispatch(foodDetails(match.params.id))
  }, [dispatch, match.params.id])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" text={error} />
      ) : (
        <>
          <Link className="btn btn-dark my-3" to="/">
            Back
          </Link>
          <Row>
            <Col md={6}>
              <Image
                src={`/images/${food.image}`}
                alt={food.name}
                fluid
                rounded
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{food.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={food.rating}
                    text={`${food.numReviews} avis`}
                  ></Rating>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Description: </strong> {food.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Restaurant: </strong> {food.restaurant}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Prix: </strong> {food.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Categorie: </strong> {food.category}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button type="button" className="btn-block">
                      Ajouter au panier
                    </Button>
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

export default FoodDetailsScreen
