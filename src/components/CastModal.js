import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import MovieInfo from "./MovieInfo";
import Style from "./CastModal.module.scss";
import {makeRequest} from "../App";
import PersonInfo from "./PersonInfo";

function CastModal(props) {
    const {person, onCloseModal, onClickMovie} = props;
    const [personInternal, setPersonInternal] = useState({});
    const url = makeRequest(`/person/${person?.id}`);

    useEffect(() => {
        fetch(url).then(resp => resp.json())
            .then(person => setPersonInternal(person));
    }, [url]);

    return (
        <div className={Style.main}>
            <div className={Style.card}>
                <div>
                    <div className={Style.closeIcon} onClick={onCloseModal}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <PersonInfo person={personInternal} onClickMovie={onClickMovie}/>
                </div>
            </div>

        </div>
    );
}

export default CastModal;