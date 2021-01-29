import React from "react"
import { Card } from "react-bootstrap"

function Restaurant({ restaurant }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Card.Img
          src={restaurant.picture}
          height="140px"
          variant="top"
        ></Card.Img>
        <Card.Body>
          <Card.Title as="div">
            <strong>{restaurant.name}</strong>
          </Card.Title>
          <Card.Text as="div">{restaurant.address}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Restaurant
