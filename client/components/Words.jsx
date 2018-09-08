import React from 'react'
import ReactDOM from 'react-dom'

import Word from './Word'

export default class Words extends React.Component {
  constructor(props){
    super(props) 
    this.state = {}
  }

  render() {
    return (
      <div className="word-list">
      <h2>Maori Words</h2>
        {this.props.words.map(word => {
          return (
            <ul className="listing" style={{listStyle: 'none'}}>
              <Word word={word} />
            </ul>
            )
          })}
      </div>
    )
  }
}

