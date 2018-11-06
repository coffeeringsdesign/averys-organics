import React from 'react'
import PropTypes from 'prop-types'
import MonthItems from './MonthItems'

function ProduceMonth(props) {
  return (
    <div>
      <h2>{props.month}</h2>
      <MonthItems selection={props.selection}/>
    </div>
  )
}

ProduceMonth.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default ProduceMonth
