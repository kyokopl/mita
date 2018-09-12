import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'

// import Words from './Words'
import Word from './Word'
import Home from './Home.jsx'
import SearchWord from './SearchWord'
import WordSound from './WordSound'
// import Guide from './Guide'
// import NavBar from './NavBar'
import Place from './Place'
import CategoryButton from './CategoryButton'
import AddWord from './AddWord'
import AddPlace from './AddPlace'
import AddOwnButton from './AddOwnButton'


const wordsUrl = 'http://localhost:3000/v1/words'
const placesUrl = 'http://localhost:3000/v1/places'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placesList: [],
      wordsList: [],
      result: {},
      category: 'words',
      // add: 'words',
      // addWordVisible: false,
      // addPlaceVisible: false,
    }

    this.getWords = this.getWords.bind(this)
    this.getPlaces = this.getPlaces.bind(this)
    // this.addWord = this.addWord.bind(this)
    // this.addPlace = this.addPlace.bind(this)
  }

  componentDidMount() {
    this.getWords()
    this.getPlaces()
  }

  getWords() {
    return request.get(wordsUrl)
    .then(res => {
      this.setState({
        wordsList: res.body
      })
  })}

  getPlaces() {
    return request.get(placesUrl)
    .then(res => {
      this.setState({
        placesList: res.body
      })
  })}

  searchWords(query){
    if (!query.length){
      this.setState({result: {}})
      return
    }
    // condition to change category search result

    let result
    if (this.state.category === 'words') {
       result = this.state.wordsList.find((word) => {
        return word.maori_word.toLowerCase().includes(query.toLowerCase()) 
      });
    } else {
        result = this.state.placesList.find((place) => {
          return place.name.toLowerCase().includes(query.toLowerCase()) 
        });
      }

    // condition if there is a result, display it otherwise display nothing

    if (result) {
      this.setState({result: result})
    }
    else this.setState({result: {}})
  }

  // showAddWord () {
  //   this.setState({
  //     addWordVisible: true
  //   })
  // }

  // showAddplace () {
  //   this.setState({
  //     addPlaceVisible: true
  //   })
  // }

  // addWord(word) {
  //   const words = this.state.wordsList
  //   words.push(word)
  //   this.setState({words})
  // }

  // addPlace(place) {
  //   const places = this.state.placeList
  //   places.push(place)
  //   this.setState({places})
  // }

  render () {

    return (
        <Router>
          <React.Fragment>
            <div id='main' className='main-container'>
              <div className='header-container'>
                <Route path="/" component={Home} />
                  <div className="jumbotron">
                    <CategoryButton onChange={category => this.setState({category})} activeCategory={this.state.category}/>
                    <SearchWord searchWords={this.searchWords.bind(this)}/>
                  </div>
                  {
                    (this.state.category === 'words')
                    ? <Word word={this.state.result} />
                    : <Place place={this.state.result} />
                  }
                  <WordSound sound={this.state.result} />
                  {/* <AddOwnButton onChange={add => this.setState({add})} activeAdd={this.state.add} />
                  {
                    (this.state.add === 'words')
                    ? this.state.addWordVisible && <AddWord addWord={this.addWord}/>
                    : this.state.addPlaceVisible &&<AddPlace addPlace={this.addPlace}/>
                  } */}
              </div>
            </div>
            {/* <Route path="/Guide" component={Guide} /> */}
          </React.Fragment>
        </Router>
        )
      }
    }
