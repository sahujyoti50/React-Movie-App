import './ShowDetails.css';

const ShowDetails=(props)=>{
return (
    <div className="movie-display">
        <ul className="movie-details-ul">
        <img className="movie-details-img" src={props.movieDetails.Poster}/>
        <li> Movie Title -<b>{props.movieDetails.Title}</b></li>
        <li>Movie id -<b>{props.movieDetails.imdbID}</b></li>
        
        <li>Release Year -<b>
          {props.movieDetails.Year}</b>
        </li>
        <li>Type -<b>{props.movieDetails.Type}</b></li>
        </ul>
    </div>
)
}
export default ShowDetails;