import React from 'react';
import PropTypes from 'prop-types';

function Likes(props) {
  function handleNewLikes(event) {
    event.preventDefault();
    console.log(props);
    props.onNewLikes();
  }

  return(
    <div>
      <button onClick={handleNewLikes}>Like!</button>
    </div>
  );
}

Likes.propTypes = {
  onNewLikes: PropTypes.func.isRequired
}

export default Likes;
