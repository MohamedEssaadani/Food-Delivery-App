import React, { useEffect } from "react"
import { Row, Col, Carousel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { listRestaurant } from "../actions/restaurantActions"
import Restaurant from "../components/Restaurant"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Search from "../components/Search"

function HomeView() {
  const dispatch = useDispatch()
  const restaurantList = useSelector((state) => state.restaurantList)
  var { loading, error, restaurants } = restaurantList

  useEffect(() => {
    dispatch(listRestaurant())
  }, [dispatch])

  const handleSearch = (e) => {
    const search = e.target.value
    dispatch(listRestaurant(search))
  }

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="\images\slide1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Chiese Food Pasta</h3>
            <p>
              This recipe for Perfect Chinese Noodles is an example of how you
              make your own delicious, healthy and fresh Chinese meal right in
              your own kitchen.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="\images\slide2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Pizza</h3>
            <p>
              Pizza, dish of Italian origin consisting of a flattened disk of
              bread dough topped with some combination of olive oil, oregano,
              tomato, olives, mozzarella or other cheese, and many other
              ingredients, baked quickly—usually, in a commercial setting, using
              a wood-fired oven heated to a very high temperature—and served hot
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="\images\la-nourriture-des-fast-food-modifie-nos-genes.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Healthy Food</h3>
            <p>
              Healthy foods are those that provide you with the nutrients you
              need to sustain your body's well-being and retain energy. Water,
              carbohydrates, fat, protein, vitamins, and minerals are the key
              nutrients that make up a healthy, balanced diet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Search handleSearch={handleSearch} />

      <h3>Restaurants</h3>

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
