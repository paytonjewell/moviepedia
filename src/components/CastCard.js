import React from 'react';
import Style from "./CastCard.module.scss";
import {makePosterImageUrl} from "../App";

function CastCard(props) {
    const {person, onClickCastCard} = props;
    const photoPath = person?.profile_path;
    const imageUrl = makePosterImageUrl(photoPath);

    return (
        <div className={Style.main} onClick={() => onClickCastCard(person)}>
            <div className={Style.poster} style={{backgroundImage: `url(${photoPath ? imageUrl : "https://d3uscstcbhvk7k.cloudfront.net/static/images/slider-placeholder-2x.png"})`}} />
            <div className={Style.textInfo}>
                <h4>{person.name}</h4>
                <p>{person.character}</p>
            </div>
        </div>
    );
}

export default CastCard;