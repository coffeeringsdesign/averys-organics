import React from 'react'
import PropTypes from 'prop-types'
import MonthItems from './MonthItems'

function ProduceMonth(props) {
  return (
    <div>
      <style jsx>{`
        div {
          margin-left: 30px;
          padding: 30px;
          margin-top: 30px;
          border: 3px solid #3d6042;
          width: 10%;
          border-radius: 10px;
          font-family: Montserrat;
          height: 300px;
          overflow: scroll;
        }
        h2 {
          text-align: center;
        }
      `}</style>
      <h2>{props.month}</h2>
      <MonthItems selection={props.selection}/>
    </div>
  )
}

ProduceMonth.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
  keyDate: PropTypes.number.isRequired
}

export default ProduceMonth
