import React, { useEffect, useState } from "react"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { foodDetails } from "../actions/foodActions"
import Rating from "../components/Rating"
import Loader from "../components/Loader"
import Message from "../components/Message"

function FoodDetailsScreen({ match, history }) {
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()
  const { loading, error, food } = useSelector((state) => state.foodDetails)

  useEffect(() => {
    dispatch(foodDetails(match.params.id))
  }, [dispatch, match.params.id])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`)
  }

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
                src={`/images/${food.image}`}
                alt={food.name}
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
                    <strong>Prix: </strong> {food.price} DH
                  </ListGroup.Item>
                  {/* <ListGroup.Item>
                    <strong>Restaurant: </strong> {food.restaurant._id}
                  </ListGroup.Item> */}
                  {/* <ListGroup.Item>
                    <strong>Categorie: </strong> {food.category}
                  </ListGroup.Item> */}
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Quantity : </strong>
                      </Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          {[...Array(10).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn-block"
                      onClick={addToCartHandler}
                    >
                      Add To Cart
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
