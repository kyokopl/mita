import React from 'react'
// import WordSound from './WordSound'

export default class Word extends React.Component {

  render() { 
    return (

      <div className="wordDetail">
        <div className="title-word">
          <h4>{this.props.word.maori_word}</h4>
        </div>
        <div className="phonetic-word">
          <h4>{this.props.word.pronunciation}<br/></h4>
        </div>
      </div>  
    )
  }
}