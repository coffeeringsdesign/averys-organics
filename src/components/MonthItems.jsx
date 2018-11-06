import React from 'react'
import PropTypes from 'prop-types'

function MonthItems(props) {
  return (
    <ul>
      {props.selection.map((pieceOfProduce, index) =>
        <li>{pieceOfProduce}</li>
      )}
    </ul>
  )
}

export default MonthItems
