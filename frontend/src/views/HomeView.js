import React from "react"
import { Row, Col } from "react-bootstrap"
import Restaurant from "../components/Restaurant"

function HomeView() {
  const restaurants = [
    {
      name: "Coin Sandwich",
      description:
        " Integer viverra lacus sit amet ex elementum, eget facilisis nulla sagittis. Nam commodo lacus sem. Vestibulum eleifend nunc sed molestie pharetra.",
      picture: "/images/coin_sandwich.jpg",
      address: "Casablanca oulfa",
      ville: "Casablanca",
      phone: "0599885943",
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Amine Restaurant",
      description:
        " Integer viverra lacus sit amet ex elementum, eget facilisis nulla sagittis. Nam commodo lacus sem. Vestibulum eleifend nunc sed molestie pharetra.",
      picture: "/images/amine_restaurant.jpg",
      address: "Casablanca Oulfa Chahdia",
      ville: "Casablanca",
      phone: "+212566557766",
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "Fish Place",
      description:
        " Integer viverra lacus sit amet ex elementum, eget facilisis nulla sagittis. Nam commodo lacus sem. Vestibulum eleifend nunc sed molestie pharetra.",
      picture: "/images/fish_place.jpg",
      address: "Safi XXXX",
      ville: "Safi",
      phone: "+212533443344",
      rating: 3.5,
      numReviews: 22,
    },
  ]

  return (
    <>
      <Row>
        {restaurants.map((restaurant) => (
          <Col key={restaurant.name} sm={12} md={6} lg={4} xl={3}>
            <Restaurant restaurant={restaurant}></Restaurant>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeView
