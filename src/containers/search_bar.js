import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchManga } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchManga(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        className="form-control"
        placeholder="Search for a manga"
        value={this.state.term}
        onChange={this.onInputChange} />
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    );
  }
}

function mapDispacthToProps(dispatch) {
  return bindActionCreators({ searchManga }, dispatch);
}

export default connect(null, mapDispacthToProps)(SearchBar);
