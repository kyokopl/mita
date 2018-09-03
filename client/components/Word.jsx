import React from 'react'
import Words from './Words'

function Word (props) {

  return (
    <div>
      <h1 className="title">{props.word.word} goes here!</h1>
    </div>
    )
}

export default Word