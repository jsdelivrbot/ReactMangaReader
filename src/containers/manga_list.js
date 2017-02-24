import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MangaList extends Component {
  renderManga(mangaData) {
    const mangaId = mangaData.mangaId;
    const name = mangaData.name;
    const cover = mangaData.cover;

    return (
      <tr key={mangaId}>
        <td>
          <img className="media-object" src={cover} />
        </td>
        <td>
          <Link to={"/manga/"+ mangaId}>
            {name}
          </Link>
        </td>
      </tr>
    );
  }

    render() {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Cover</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.manga.results.map(this.renderManga)}
          </tbody>
        </table>
      );
    }
}

function mapStateToProps({ manga }) {
  return { manga };
}

export default connect(mapStateToProps)(MangaList);
