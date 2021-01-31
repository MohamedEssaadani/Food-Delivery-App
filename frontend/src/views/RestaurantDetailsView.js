import React, { useEffect, useState } from "react"
import axios from "axios"

function RestaurantDetails({ match }) {
  const [restaurant, setRestaurant] = useState({})

  useEffect(() => {
    const fetchRestaurant = async () => {
      const id = match.params.id
      const { data } = await axios.get(`/api/restaurants/${id}`)
      setRestaurant(data)
    }

    fetchRestaurant()
  })

  return (
    <>
      <h3>{restaurant.name} Details </h3>
    </>
  )
}

export default RestaurantDetails
