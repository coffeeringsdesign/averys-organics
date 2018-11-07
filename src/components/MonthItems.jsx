import React from 'react'
import PropTypes from 'prop-types'

function MonthItems(props) {
  return (
    <div>
      <ul>
        {props.selection.map((pieceOfProduce, index) =>
          <li>{pieceOfProduce}</li>
        )}
      </ul>
    </div>
  )
}

export default MonthItems
