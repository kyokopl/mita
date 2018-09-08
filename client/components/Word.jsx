import React from 'react'
import WordSound from './WordSound'

export default class Word extends React.Component {

  render() { 
    // console.log(this.props)
    return (


       <div className="wordDetail">
       <h2>{this.props.word.maori_word}</h2>
        {this.props.word.pronunciation}<br/>
       </div>
      
    )
  }
  }