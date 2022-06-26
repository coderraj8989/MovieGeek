import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const [movieList, updateMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [info, setInfo]=useState({});

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;
    const fetchData = async () => {
      const res = await fetch(url);
      return res.json();
    }

    fetchData()
      .then((data) => {
        updateMovieList(data.results);
      });
    
  }, [page]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} setSearchResult={setSearchResult} updateMovieList={updateMovieList} />

      <Routes>
        <Route exact path="/" element={<MovieList movieList={movieList} page={page} setPage={setPage} searchResult={searchResult} setInfo={setInfo} />} />
        <Route exact path="/details" element={<Details info={info} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;

