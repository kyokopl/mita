import React from 'react'
import ReactDOM from 'react-dom'

import Place from './Place'

export default class Places extends React.Component {
  constructor(props){
    super(props) 
    this.state = {}
  }

  render() {
    return (
      <div className="place-list">
      <h2>Maori Place Names</h2>
        {this.props.places.map(place => {
          return (
            <ul className="listing" style={{listStyle: 'none'}}>
              <Place place={place} />
            </ul>
            )
          })}
      </div>
    )
  }
}
