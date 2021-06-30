import React from 'react';
import Style from "./MoviePoster.module.scss";
import {makePosterImageUrl} from "../App";
import {classNames} from "../App";

function MoviePoster(props) {
    const {movie, onClick, size, className, hover} = props;
    const posterPath = movie?.poster_path;
    const imageUrl = makePosterImageUrl(posterPath);
    const releaseYear = movie?.release_date?.slice(0, 4);

    return (
        <div className={classNames(Style.main, className)} onClick={() => onClick(movie)}>
            <div className={classNames(Style.poster, size && Style[size], hover && Style.hover)}
                 style={{backgroundImage: `url(${posterPath ? imageUrl : "https://critics.io/img/movies/poster-placeholder.png"})`}}/>
            {!size &&
            <div>
                <p className={Style.title}>{movie.title}</p>
                <p>{releaseYear}</p>
            </div>
            }
        </div>
    );
}

export default MoviePoster;