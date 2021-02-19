import React from "react"
import PropTypes from "prop-types"

function Rating({ color, value, text }) {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{ color }} className="fa fa-star"></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span> {text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: "#f8e825",
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Rating
