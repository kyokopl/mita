import React from 'react'
import WordSound from './WordSound'

export default class Word extends React.Component {

  render() { 
    // console.log(this.props)
    return (


       <div className="wordDetail">
       <p>{this.props.word.maori_word}</p>
       <p>{this.props.word.pronunciation}<br/></p>
       </div>
      
    )
  }
  }