import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import axios from "axios"
import Food from "../components/Food.js"

function RestaurantFoodView({ match }) {
  const [food, setFood] = useState([])

  useEffect(() => {
    const getFoodList = async () => {
      const id = match.params.id
      const { data } = await axios.get(`/api/restaurants/${id}/food`)
      setFood(data)
    }

    getFoodList()
  }, [food, match.params.id])

  return (
    <>
      <Row>
        {food.map((f) => (
          <Col key={f._id} sm={12} md={3} lg={6} xl={12}>
            <Food food={f} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default RestaurantFoodView
