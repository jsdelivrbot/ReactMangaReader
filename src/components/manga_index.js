import React, {Component} from 'react';
import SearchBar from '../containers/search_bar'
import MangaList from '../containers/manga_list'

class MangaIndex extends Component {
  render() {
    return(
      <div>
        <SearchBar />
        <MangaList />
      </div>
    )
  }
}

export default MangaIndex;
