import React from 'react'
import PropTypes from 'prop-types'

function Schedule(props) {
  return (
    <div>
      <style jsx>{`
        div {
          margin-left: 30px;
          padding: 20px;
          margin-top: 30px;
          border: 3px solid #3d6042;
          width: 20%;
          border-radius: 10px;
          font-family: Montserrat;
        }
        h1 {
          color: #2e4831;
        }
      `}</style>
      <h1>{props.day}</h1>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <h3>{props.booth}</h3>
    </div>
  )
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}

export default Schedule
