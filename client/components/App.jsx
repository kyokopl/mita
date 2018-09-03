import React from 'react'

import Words from './Words'
import Home from './Home.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: [
        {
            word: "Kia ora",
            pronunciation: "Key-ah-orr-rah",
            file_name: "sound clip"
        },
        {
            word: "Haere mai",
            pronunciation: "Hi-reh-my",
            file_name: "sound clip"
        }]
    }
     }
render () {
    const {words} = this.state
    return (
          <div id='main' className='main-container'>
            <div className='header-container'>
              <Home />
            </div>
            <div className='content-routing'>
              <Words words={words}/>
            </div>
            {/* <Footer /> */}
          </div>
        )
      }
    }


export default App
