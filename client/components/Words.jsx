
import React from 'react'

import Word from './Word'

function Words (props) {
const words = props.words
    return (
    
    <div className="words">
      {words.map((word, i) => <Word word={word} />)}
    </div>
  )
}

export default Words