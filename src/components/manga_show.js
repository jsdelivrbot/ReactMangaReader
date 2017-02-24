import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { getManga } from '../actions/index';
import { Link } from 'react-router';

class MangaShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  renderChapters(chapter, name) {
    const chapterId = chapter.chapterId;
    const chapterName = chapter.name;
    return (
      <tr key={chapterId}>
        <td>
          {chapterId}
        </td>
        <td>
          <Link to={"/manga/"+name+"/"+ chapterId}>
            {chapterName}
          </Link>
        </td>
      </tr>
    );
  }

  componentWillMount() {
    console.log('this:', this);
    this.props.getManga(this.props.params.mangaId);
  }

  render() {
    const manga = this.props.manga;
    if(!manga) {
      return (<div>Loading...</div>)
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{manga.name}</h3>
        <h6>Description: {manga.info}</h6>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Chapter #</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {manga.chapters.map((c) => this.renderChapters(c, manga.href))}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return  { manga: state.manga.manga };
}

export default connect(mapStateToProps, { getManga })(MangaShow);
