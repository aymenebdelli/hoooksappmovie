import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Data from './components/Data/Data'
import MovieList from './components/Movielist/MovieList';
import ModalMovie from './components/Modal/ModalMovie'

function App() {

  const [ratingSearch, setRatingSearch] = useState(0)
  const getRatingSearch = (input) => {
    setRatingSearch(input)
  }
  const [titleSearch, setTitleSearch] = useState('')
  const getTitleSearch = (input) => {
    setTitleSearch(input)
  }

  const [MoviesListData, setMoviesListData] = useState(Data)
  const getMoviesListData = (input) => {

    setMoviesListData([...MoviesListData, input])
  }

  return (
    <div className='App'>
      <Navigation getRatingSearch={getRatingSearch}
        getTitleSearch={getTitleSearch} />
      <MovieList movies={MoviesListData} titleSearch={titleSearch} ratingSearch={ratingSearch} />
      <ModalMovie getMoviesListData={getMoviesListData} />
    </div>
  );
}

export default App;
