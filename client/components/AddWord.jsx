import React from 'react'

export default class AddWord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maori_word: '',
      pronunciation: '',
      filename: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  updateDetails(e) {

    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit (e) {
    e.preventDefault() //dont do the default
    const word = this.state
    this.props.addWord(word) //send the cat up to App.jsx
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input onChange={this.updateDetails} className={`input ${this.state.maori_word.length > 5 ? 'is-success' : 'is-danger'}`} type="text" name="maori_word" placeholder="Word" />
        <input onChange={this.updateDetails} className="input" type="text" name="pronunciation" placeholder="Pronunciation" />
        <input onChange={this.updateDetails} className="input" type="text" name="filename" placeholder="Sound File" />
        <input className="button is-success" type="submit" />
      </form>
      </div>
    )
  }
}