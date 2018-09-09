import React from 'react';
 

export default class WordSound extends React.Component {

  render() {
    if (!this.props.word.filename) {
      return null
    }

    return (

  <audio controls className="justify-content-center">
    <source src={this.props.word.filename} type="audio/mpeg" />
  </audio>
    );
  }
}

