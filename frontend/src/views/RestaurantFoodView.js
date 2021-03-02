import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import axios from "axios"
import Food from "../components/Food.js"

function RestaurantFoodView({ match }) {
  const [foodList, setFoodList] = useState([])

  useEffect(() => {
    const getFoodList = async () => {
      const id = match.params.id
      const { data } = await axios.get(`/api/restaurants/${id}/food`)
      setFoodList(data)
    }

    getFoodList()
  }, [foodList, match.params.id])

  return (
    <>
      <Row>
        {foodList.map((food) => (
          <Col key={food._id} sm={12} md={6} lg={4} xl={3}>
            <Food food={food} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default RestaurantFoodView
