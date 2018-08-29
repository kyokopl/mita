import React from 'react'

export default function Word (props) {
  return (
    <div>
      <h1 className="title">{props.word.name} goes here!</h1>
    </div>
  )
}