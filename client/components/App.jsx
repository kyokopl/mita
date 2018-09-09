import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'

import Words from './Words'
import Word from './Word'
import Home from './Home.jsx'
import SearchWord from './SearchWord'
import WordSound from './WordSound'
import Guide from './Guide'
import NavBar from './NavBar'


const wordsUrl = 'http://localhost:3000/v1/words'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordsList: [],
      result: {},
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
        wordsList: res.body
      })
  })}

  searchWords(query){
    if (!query.length){
      this.setState({result: {}})
      return
    }
    let maoriWord = this.state.wordsList.find((word) => {
      return word.maori_word.toLowerCase().includes(query.toLowerCase()) 

    });
    if (maoriWord) {
      this.setState({result: maoriWord})
    }
  }

  render () {

    return (
        <Router>
          <React.Fragment>
            <div id='main' className='main-container'>
              <div className='header-container'>
                <Route path="/" component={Home} />
                  <div className="jumbotron">
                    <SearchWord searchWords={this.searchWords.bind(this)}/>
                  </div>
                  <Word word={this.state.result} />
                  <WordSound word={this.state.result} />
              </div>
            </div>
            <Route path="/Guide" component={Guide} />
          </React.Fragment>
        </Router>
        )
      }
    }
