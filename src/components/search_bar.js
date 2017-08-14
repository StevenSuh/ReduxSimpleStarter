import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  onEnterPress(e) {
    if (e.key === 'Enter') {
      this.props.onSearchTermChange(e.target.value);
    }
  }

  render() {
    // BAD
    // this.state.term = event.target.value
    return (
      <div className="search-bar">
        <input
          id="search"
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) }
          // onKeyPress={ event => this.onEnterPress(event) }
        />
      </div>
    );
  }

}

export default SearchBar;
