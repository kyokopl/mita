import React from 'react';

class SearchWord extends React.Component {

  handleSearch(event) {
    this.props.searchWords(event.target.value)
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input placeholder="Rapua..." type="text" onClick={this.handleSearch.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default SearchWord;