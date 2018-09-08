import React from 'react'
import ReactDOM from 'react-dom'

import Word from './Word'

export default class Words extends React.Component {
  constructor(props){
    super(props) 
    this.state = {}
  }
  //     showJobId: null,
  //     data: this.props.data
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  //   console.log(this.state.data);
    
  // }

  // handleClick(showJobId){
  //   this.setState(prevState => ({
  //     showJobId: prevState.showJobId == showJobId ? null : showJobId
  //   }));
  // }

  render() {
    return (
      <div className="word-list">
      <h2>Maori Words</h2>
        {this.props.words.map(word => {
          return (
            <ul className="listing" style={{listStyle: 'none'}}>
              <Word word={word} />
            </ul>
            )
          })}
      </div>
    )
  }
}


          //  {this.props.data.body.map(jobInfo => {
          //   return (
          //     <div className="listings">
          //       <li><img className="logo" src={jobInfo.company_logo}></img><a onClick={() => this.handleClick(jobInfo.id)}>{jobInfo.title}</a>
          //       {this.state.showJobId == jobInfo.id && <Job key={jobInfo.id} job={jobInfo}/>}</li>
