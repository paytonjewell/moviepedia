import React, {useState, useEffect} from 'react';
import Style from "./TopBar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {makeRequest} from "../App";
import {classNames} from "../App";

function TopBar(props) {
    const {onSearchMovies} = props;
    const [searching, setSearching] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const baseUrl = makeRequest("/search/movie");
    const url = `${baseUrl}&query=${search}`;

    useEffect(() => {
        if (searchResults) {
            onSearchMovies(searchResults);
        }
    }, [searchResults, onSearchMovies]);

    useEffect(() => {
        if (search) {
            fetch(url).then(resp => resp.json())
                .then(search => setSearchResults(search.results));
        } else {
            setSearchResults([]);
        }
    }, [url, search]);

    return (
        <div className={Style.main}>
            <h1><span className={Style.abbr}>mp</span><span className={Style.full}>moviepedia</span></h1>
           <div>
               <FontAwesomeIcon icon={faSearch} onClick={() => setSearching(!searching)}/>
               <div className={classNames(Style.search, searching && Style.searching)}>
                   <input type={"text"} value={search} onChange={(e) => setSearch(e.target.value)} />
                   <FontAwesomeIcon icon={faTimes} onClick={() => {
                       setSearch("");
                       setSearching(false);
                   }} />
               </div>
           </div>
        </div>
    );
}

export default TopBar;