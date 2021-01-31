import React from "react"
import { Alert } from "react-bootstrap"

function Message({ color, text }) {
  return (
    <Alert variant={color}>
      <p>{text}</p>
    </Alert>
  )
}

Message.defaultProps = {
  color: "success",
  text: "Everything is good :)",
}

export default Message
