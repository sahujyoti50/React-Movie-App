import React from "react";
import { Link } from "react-router-dom";
import './MovieList.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const MovieList = (props) => {
  return (
    <Swiper slidesPerView={5}
    spaceBetween={30}
    slidesPerGroup={5}
    loop={true}
    loopFillGroupWithBlank={true}
    pagination={{
      type:"bullets",
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper">
      <div className="movie-list-div">
        {props.movies.map((movie) =>{
          return (
            <SwiperSlide className="movie-list"
              key={movie.imdbID}
            >
              <li> <b>{movie.Title}</b></li>
              <li><b>{movie.Year}</b></li>
              <img src={movie.Poster}/>
              <Link className="button2" to={`/showDetails/${movie.Title}`}  onClick={()=>props.onClickDetails(movie)}>Show Details</Link>
           
            </SwiperSlide>
          );
        })}
      </div>
     </Swiper>
  );
};
export default MovieList;
