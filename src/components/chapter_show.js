import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { getChapter } from '../actions/index';
import { Link } from 'react-router';

class ChapterShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.getChapter(this.props.params.mangaId, this.props.params.chapterId);
  }

  renderPages(pages) {
    return (
      <img src={pages.url}/>
    )
  }

  render() {
    const pages = this.props.pages;
    if(!pages) {
      return (<div>Loading...</div>)
    }
    return (
      <div>
        <Link to={"/manga/" + this.props.params.mangaId}>Back to List of chapters</Link>
        {pages.map(this.renderPages)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state:', state);
  return  { pages: state.manga.pages.pages };
}

export default connect(mapStateToProps, { getChapter })(ChapterShow);
