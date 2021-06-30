import React, {useEffect, useState} from 'react';
import Style from "./MovieModal.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {makeBackdropImageUrl, makeRequest} from "../App";
import MovieInfo from "./MovieInfo";

function MovieModal(props) {
    const {movie, onCloseModal, onClickCastCard} = props;
    const backdrop = movie.backdrop_path;
    const bgUrl = makeBackdropImageUrl(backdrop);
    const url = makeRequest(`/movie/${movie.id}`);
    const [movieInternal, setMovieInternal] = useState({});

    useEffect(() => {
        fetch(url).then(resp => resp.json())
            .then(movie => setMovieInternal(movie));
    }, [url]);

    const style = {
        backgroundImage: `url(${bgUrl})`
    }

    return (
        <div className={Style.main}>
            <div className={Style.card} style={style}>
                <div>
                    <div className={Style.closeIcon} onClick={onCloseModal}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <MovieInfo movie={movieInternal} onClickCastCard={onClickCastCard}/>
                </div>
            </div>
        </div>
    );
}

export default MovieModal;