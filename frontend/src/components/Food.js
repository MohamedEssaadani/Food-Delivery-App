import React from "react"
import { Card } from "react-bootstrap"
import Rating from "./Rating.js"
import { Link } from "react-router-dom"

function Food({ food }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Card.Img
          src={`/images/${food.image}`}
          alt={food.name}
          height="140px"
          width="140px"
          variant="top"
        ></Card.Img>
        <Card.Body>
          <Card.Title as="div">
            <strong>{food.name}</strong>
          </Card.Title>
          <Rating value={food.rating} />
          <Card.Text>Prix: ${food.price}</Card.Text>
          <Card.Text>Restaurant: {food.restaurant.name}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Food
