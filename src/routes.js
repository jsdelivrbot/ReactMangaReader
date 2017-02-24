import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MangaIndex from './components/manga_index';
import MangaShow from './components/manga_show';
import ChapterShow from './components/chapter_show';

export default (
  <Route path ="/" component={App}>
    <IndexRoute component={MangaIndex} />
    <Route path="/manga/:mangaId" component={MangaShow} />
    <Route path="/manga/:mangaId/:chapterId" component={ChapterShow} />
  </Route>
);
