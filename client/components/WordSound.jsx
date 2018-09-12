import React from 'react';
 

export default class WordSound extends React.Component {

  render() {
    if (!this.props.sound.filename) {

      return null
    }
    // console.log(this.props.sound.filename)
    return (

  <audio controls className="justify-content-center" ref="audio" >
    <source src={this.props.sound.filename} ref="audio" type="audio/mpeg" />
  </audio>
    );
  }
}