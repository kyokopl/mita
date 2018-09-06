import React from 'react'
import Words from './Words'
import Home from './Home.jsx'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'
import {getWords} from '../api/index.js'

const wordsUrl = 'http://localhost:3000/v1/words'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: [],
    }
    this.getWords = this.getWords.bind(this)
  }

    getWords() {
      return request.get(wordsUrl)
      .then(res => {
        // console.log(res);
        
        this.setState({
          words: res.body
        })
        console.log(this.state);
        
    })}

render () {
    return (
        <Router>
          <React.Fragment>
            <div id='main' className='main-container'>
              <button onClick={this.getWords}>Get some words</button>
              <div className='header-container'>
              <Route path="/" component={Home} />
              <Words words={this.state.words} />
              </div>
            </div>
          </React.Fragment>
        </Router>
        )
      }
    }
