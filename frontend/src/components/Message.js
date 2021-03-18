import React from "react"
import { Alert } from "react-bootstrap"

function Message({ variant, text }) {
  return (
    <Alert variant={variant}>
      <p>{text}</p>
    </Alert>
  )
}

Message.defaultProps = {
  variant: "success",
  //text: "Everything is good :)",
}

export default Message
