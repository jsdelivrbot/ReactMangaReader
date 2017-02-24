import axios from 'axios';

const API_KEY = '87JBCEcBbtmshR4C06Ckygfu8Tp3p1gj5cWjsnpaingo9FzCNU';
const ROOT_URL = `https://doodle-manga-scraper.p.mashape.com/mangareader.net`;

export const SEARCH_MANGA = 'SEARCH_MANGA';
export const GET_MANGA = 'GET_MANGA';
export const GET_CHAPTER = 'GET_CHAPTER';

export function searchManga(manga) {
  const url = `${ROOT_URL}/search?q=${manga}&l=10&cover=1`;
  const request = axios.get(url, {
    headers: { "X-Mashape-Key": API_KEY }
  });

  console.log('searchMangaRequest:', request);

  return {
    type: SEARCH_MANGA,
    payload: request
  };
}

export function getManga(mangaId) {
  const url = `${ROOT_URL}/manga/${mangaId}`;
  const request = axios.get(url, {
    headers: {'X-Mashape-Key': API_KEY}
  });

  console.log('getMangaRequest:', request);

  return {
    type: GET_MANGA,
    payload: request
  };
}

export function getChapter(mangaId, chapterId) {
  const url = `${ROOT_URL}/manga/${mangaId}/${chapterId}`;
  const request = axios.get(url, {
    headers: {'X-Mashape-Key': API_KEY}
  });

  console.log('getChapterRequest:', request);

  return {
    type: GET_CHAPTER,
    payload: request
  };
}
