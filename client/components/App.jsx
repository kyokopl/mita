import React from 'react'
import Words from './Words'
import Word from './Word'
import Home from './Home.jsx'
import SearchWord from './SearchWord'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'

const wordsUrl = 'http://localhost:3000/v1/words'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordsList: [],
      result: {}

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
    console.log(maoriWord)
    if (maoriWord) {
      this.setState({result: maoriWord})
    }
  }

render () {
  console.log(this.state)
    return (
        <Router>
          <React.Fragment>
            <div id='main' className='main-container'>
              {/* <div onLoad={this.getWords}></div> */}
              <div className='header-container'>
              <Route path="/" component={Home} />
              {/* <Words words={this.state.wordsList} /> */}
              <SearchWord searchWords={this.searchWords.bind(this)}/>
              </div>
              <Word word={this.state.result}/>
            </div>
          </React.Fragment>
        </Router>
        )
      }
    }
