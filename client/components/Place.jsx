import React from 'react'

export default class Place extends React.Component {

  render() { 
    return (

      <div className="placeDetail">
        <div className="title-place">
          <h4>{this.props.place.name}</h4>
        </div>
        <div className="phonetic-word">
          <h4>{this.props.place.pronunciation}<br/></h4>
        </div>
      </div>  
    )
  }
}