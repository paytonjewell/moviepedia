import React, {useEffect, useState} from 'react';
import Style from "./PersonInfo.module.scss";
import {makePosterImageUrl, makeRequest} from "../App";
import MoviePoster from "./MoviePoster";

function PersonInfo(props) {
    const {person, onClickMovie} = props;
    const photoPath = person?.profile_path;
    const imageUrl = makePosterImageUrl(photoPath);
    const url = makeRequest(`/person/${person.id}/movie_credits`);
    const [knownFor, setKnownFor] = useState([]);

    useEffect(() => {
        fetch(url).then(resp => resp.json())
            .then(credits => setKnownFor(credits?.cast?.splice(0,5)));
    }, [url]);

    return (
        <div className={Style.main}>
            <div className={Style.photo} style={{backgroundImage: `url(${photoPath ? imageUrl : "https://d3uscstcbhvk7k.cloudfront.net/static/images/slider-placeholder-2x.png"})`}}/>
            <div>
                <div>
                    <h1>{person.name}</h1>
                    <p>{person.biography}</p>
                </div>
                <div className={Style.knownFor}>
                    {knownFor?.map(movie => <MoviePoster movie={movie} size={"small"} onClick={onClickMovie} />)}
                </div>
            </div>
        </div>
    );
}

export default PersonInfo;