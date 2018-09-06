import React from 'react'

export default class Word extends React.Component {
  constructor(props){
    super(props) 
  }

  render() {
    const {id, maori_word} = this.props.words

  return (
    <React.Fragment>
      <div className="word-list-item" key={id}>
        <h1> {maori_word} goes here!</h1>
      </div>
    </React.Fragment>
    )
  }
}

