import React, { useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { listRestaurantFood } from "../actions/foodActions"
import Food from "../components/Food.js"
import Loader from "../components/Loader"
import Message from "../components/Message"

function RestaurantFoodView({ match }) {
  const dispatch = useDispatch()
  const { loading, error, foodList } = useSelector(
    (state) => state.restaurantFood
  )

  useEffect(() => {
    dispatch(listRestaurantFood(match.params.id))
  }, [dispatch, match.params.id])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" text={error} />
      ) : (
        <Row>
          {foodList.map((food) => (
            <Col key={food._id} sm={12} md={6} lg={4} xl={3}>
              <Food food={food} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default RestaurantFoodView
