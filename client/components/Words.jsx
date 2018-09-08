import React from 'react'
import ReactDOM from 'react-dom'
import Word from './Word'

export default class Words extends React.Component {
  constructor(props){
    super(props) 
  }

  render() {
    return (
      <div className="word-list">
      <h2>Maori Words</h2>
        {this.props.words.map(word => {
          return (
            <ul style={{listStyle: 'none'}}>
            <li>{word.maori_word} {word.pronunciation} {word.filename}</li>
              {/* <Word word={word} /> */}
            </ul>
            )
          })}
      </div>
    )
  }
}