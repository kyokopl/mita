import React from 'react'

import Words from './Words'


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
  render() {
    const {words} = this.state
    return (
      <div className='app-container section'>
        <h1>MITA - M&amacr;ori Pronunciation</h1>
        <Words words={words} />
      </div>
    )
  }
}

export default App