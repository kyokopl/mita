import React from 'react'
import Words from './Words'
import Home from './Home.jsx'
import SearchWord from './SearchWord'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'

const wordsUrl = 'http://localhost:3000/v1/words'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: [],
    }
    this.getWords = this.getWords.bind(this)
  }

  componentDidMount() {
    this.getWords()
  }

    getWords() {
      return request.get(wordsUrl)
      .then(res => {
        this.setState({
          words: res.body
        })
    })}

    searchWords(query){
      console.log("Our App knows the query: " + query)
    }
  
render () {
    return (
        <Router>
          <React.Fragment>
            <div id='main' className='main-container'>
              {/* <div onLoad={this.getWords}></div> */}
              <div className='header-container'>
              <Route path="/" component={Home} />
              {/* <Words words={this.state.words} /> */}
              <SearchWord searchWords={this.searchWords.bind(this)}/>
              </div>
            </div>
          </React.Fragment>
        </Router>
        )
      }
    }
