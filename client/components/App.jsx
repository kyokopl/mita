import React from 'react'
import Words from './Words'
import Home from './Home.jsx'
import {HashRouter as Router, Route} from 'react-router-dom'

import {getWords} from '../api/index.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: [],
    }
  }

    // getWords() {
    //   return request.get(wordsUrl + 'words')
    //   .then(res => {
    //     this.setState({
    //       words: res.body
    //     })
    // })}

render () {
    return (
        <Router>
          <React.Fragment>
            <div id='main' className='main-container'>
              <div className='header-container'>
              <Route path="/" component={Home} />
              <Route path="/words" component={Words} />
              </div>
            </div>
          </React.Fragment>
        </Router>
        )
      }
    }
