
import React from 'react'

import Word from './Word'

export default function Words (props) {
  const words = props.words
  return (
    <div>
      {words.map((word, i) => <Word word={word} />)}
    </div>
  )
}