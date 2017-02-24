import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import MangaList from '../containers/manga_list';

export default class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
