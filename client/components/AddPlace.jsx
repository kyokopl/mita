import React from 'react'

export default class AddPlace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
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
    const place = this.state
    this.props.addPlace(place) //send the place up to App.jsx
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.updateDetails} className={`input ${this.state.name.length > 5 ? 'is-success' : 'is-danger'}`} type="text" name="name" placeholder="Place" />
        <input onChange={this.updateDetails} className="input" type="text" name="pronunciation" placeholder="Pronunciation" />
        <input onChange={this.updateDetails} className="input" type="text" name="filename" placeholder="Sound File" />
        <input className="button is-success" type="submit" />
      </form>
    )
  }
}