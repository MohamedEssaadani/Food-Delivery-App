import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Restaurant from "../components/Restaurant"
import axios from "axios"

function HomeView() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await axios.get("/api/restaurants")
      setRestaurants(data)
    }

    fetchRestaurants()
  }, [restaurants])

  return (
    <>
      <Row>
        {restaurants.map((restaurant) => (
          <Col key={restaurant._id} sm={12} md={6} lg={4} xl={3}>
            <Restaurant restaurant={restaurant}></Restaurant>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeView
