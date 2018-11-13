import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes';

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.likeItem = this.likeItem.bind(this);
  }
  likeItem() {
    // console.log('like clicked');
    this.setState({liked: !this.state.liked});
  }
  render(){
    const text = this.state.liked ?
    'liked' : 'don\'t like';
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
          <h1>{this.props.day}</h1>
          <h3>{this.props.location}</h3>
          <h3>{this.props.hours}</h3>
          <h3>{this.props.booth}</h3>
          <p>{this.props.likes}</p>
          <Likes
            onNewLikes={this.likeItem}/>
          <p> you {text} this.</p>
        </div>
      )
  }
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
  onNewLikes: PropTypes.func
}

export default Schedule
