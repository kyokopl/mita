import React from 'react'
import ReactDOM from 'react-dom'
import Word from './Word'

const words = require('../api/index.js')

export default class Words extends React.Component {
  constructor(props){
    super(props) 
  }

  render() {
    return (
      <div className="word-list">
      <h2>Maori Words</h2>
        {words.map(word => {
          return (
            <ul style={{listStyle: 'none'}}>
              <Word word={word} />
            </ul>
            )
          })}
      </div>
    )
  }
}