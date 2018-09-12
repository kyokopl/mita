import React from 'react'
import { Col, FormGroup } from 'reactstrap';

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
      <div className="row">
      <div className="input-field">
      <form onSubmit={this.onSubmit}>
      <FormGroup>
      <Col><input onChange={this.updateDetails} className="btn btn-light" type="text" name="name" placeholder="Place" /></Col>
      <Col><input onChange={this.updateDetails} className="btn btn-light" type="text" name="pronunciation" placeholder="Pronunciation" /></Col>
      <Col><input onChange={this.updateDetails} className="btn btn-light" type="text" name="filename" placeholder="Sound File" /></Col>
      <Col><input className="btn btn-light" type="submit" /></Col>
      </FormGroup>
      </form>
      </div>
      </div>
    )
  }
}