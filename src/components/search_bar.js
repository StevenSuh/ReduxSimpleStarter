import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // BAD
    // this.state.term = event.target.value
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })} />
      </div>
    );
  }

}

export default SearchBar;
