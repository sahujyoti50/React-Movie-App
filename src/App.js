import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import SearchBox from './components/SearchBox/SearchBox';
import ShowDetails from './components/ShowDetails/ShowDetails';
import SortBox from './components/SortBox/SortBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);
  const [sortState, setSortState] = useState("DEFAULT");
  const [sortedMovies, setSortedMovies] = useState([]);

  const fetchMovies = async () => {
    const url = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
    const response = await fetch(url);
    const responseJson = await response.json();
   
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const onClickDetails=(movie)=>{
   setMovieDetails(movie);
  }
  //Search Input Handler
  const onSearchInputChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  //Sort Input Handler
  const onSortInputChangeHandler = (e) => {
    setSortState(e.target.value);
  };
  //Searching
  useEffect(() => {
    let filterMovies = [...movies];
    if (searchText.trim().length > 0) {
      const searchTextInLowercase = searchText.trim().toLowerCase();
      filterMovies = filterMovies.filter((movie) => {
        return movie.Title.toLowerCase().includes(searchTextInLowercase);
      });
    }
    setFilterMovies(filterMovies);
  }, [movies, searchText]);
//Sorting
useEffect(() => {
  const sortMethods = {
    DEFAULT: { method: (a, b) => null },
    ByYear: { method: (a, b) => ( +a.Year < +b.Year ? -1 : 1) },
  };

  const sortedMovies = [...filterMovies].sort(sortMethods[sortState].method);
  setSortedMovies(sortedMovies);
}, [filterMovies, sortState]);

  return (
    <div>
      <>
     
        <Route path="/" exact>
           <SortBox onSortInputChangeHandler={onSortInputChangeHandler}/>
           <SearchBox searchText={searchText} onSearchInputChangeHandler={onSearchInputChangeHandler} movies={sortedMovies}/>
           <MovieList movies={sortedMovies} onClickDetails={onClickDetails}/>
        </Route>
        <Route path="/showDetails">
          <ShowDetails movieDetails={movieDetails}/>
        </Route>
      </>
    </div>
  );
}

export default App;
