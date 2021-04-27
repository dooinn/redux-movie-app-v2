import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetSearchMovie } from '../actions/movieActions'
import { GetPeopleSearch } from '../actions/personActions'
import { Section, SearchResultContainer, NavBar } from '../styles/HeaderStyle'
import { GiPopcorn } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { LoadingBox } from './LoadingBox';

const Header = () => {

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [searchSwitch, setSearchSwitch] = useState(false);
    const [movieQuery, setMovieQuery] = useState("");
    const [personQuery, setPersonQuery] = useState("");
    const [newMovieSearch, setNewMovieSearch] = useState([]);
    const [newPersonSearch, setNewPersonSearch] = useState([]);
    const movieSearchResults = useSelector(state => state.SearchMovie);
    const personSearchResults = useSelector(state => state.SearchPerson);
    const favorites = useSelector(state => state.Favorite);
    const showModal = () => setModalOpen(!modalOpen);
    const showSearch = () => setSearchSwitch(!searchSwitch);
    // const { loading, error, movies } = movieSearchResults;

    const onChangeMovieHandler = async (e) => {
        e.preventDefault();
        setMovieQuery(e.target.value)
        setNewMovieSearch(await dispatch(GetSearchMovie(e.target.value)))
    }

    const onChangePersonHandler = async (e) => {
        e.preventDefault();
        setPersonQuery(e.target.value)
        setNewPersonSearch(await dispatch(GetPeopleSearch(e.target.value)))
    }

    useEffect(() => {
        dispatch(GetSearchMovie())
        dispatch(GetPeopleSearch())
    }, [])


    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <Section>
            <div className={modalOpen ? "modal active" : "modal"} >
                <AiOutlineClose className="close__btn" onClick={() => showModal()} />
                {
                    searchSwitch ?
                        <h1 className="search__title">Search Any Movie Stars</h1>
                        :
                        <h1 className="search__title" >Search Any Movies</h1>

                }
                <button className="searchSwitch__btn" onClick={() => showSearch()}>
                    {searchSwitch ? <p className="switch__btn">Search Movie</p> : <p className="switch__btn">Search People</p>}
                </button>
                {searchSwitch ?
                    <input
                        className="search__input"
                        placeholder="Type a person name"
                        value={personQuery}
                        onChange={onChangePersonHandler}
                    /> :
                    <input
                        className="search__input"
                        placeholder="Type a movie title!"
                        value={movieQuery}
                        onChange={onChangeMovieHandler}
                    />

                }
                {
                    searchSwitch ?
                        <>
                            {personSearchResults.loading ? (
                                <LoadingBox></LoadingBox>
                            ) : personSearchResults.error ? (
                                <p>Error!</p>
                            ) : (
                                <>
                                    {personQuery && (
                                        <SearchResultContainer>
                                            {personSearchResults.data.map((person) => (
                                                <Link key={person.id} to={`/person/${person.id}`} onClick={() => showModal()}>
                                                    {person.profile_path ?
                                                        <img className="movie__poster" src={posterUrl + person.profile_path} alt={person.name}></img>
                                                        : <p className="movie__poster">{person.name}</p>
                                                    }
                                                </Link>
                                            ))}
                                        </SearchResultContainer>
                                    )}
                                </>
                            )}
                        </> :
                        <>

                            {movieSearchResults.loading ? (
                                <LoadingBox></LoadingBox>
                            ) : movieSearchResults.error ? (
                                <p>Error!</p>
                            ) : (
                                <>
                                    {movieQuery && (
                                        <SearchResultContainer>
                                            {movieSearchResults.movies.map((movie) => (
                                                <Link key={movie.id} to={`/movie/${movie.id}`} onClick={() => showModal()}>
                                                    {movie.poster_path ?
                                                        <img className="movie__poster" src={posterUrl + movie.poster_path} alt={movie.title}></img>
                                                        : <p className="movie__poster">{movie.title}</p>
                                                    }
                                                </Link>
                                            ))}
                                        </SearchResultContainer>
                                    )}
                                </>
                            )}
                        </>


                }
            </div>
            <NavBar>
                <div className="logo__container">
                    <GiPopcorn className="logo__assets" style={{ color: "white", fontSize: "2rem", marginRight: "0.5rem" }} />
                    <Link to="/">
                        <h1 className="logo__assets" style={{ fontSize: "1.5rem" }}>About Movie</h1>
                    </Link>
                </div>
                <div className="search__container">
                    <div className="search__box" onClick={() => showModal()}>
                        <p style={{ marginRight: "2em" }}>Start your search here</p>
                        <div className="search__icon">
                            <BiSearch style={{ fontSize: "1.5rem" }} />
                        </div>
                    </div>
                </div>
                <div className="category__container">
                    <div className="search__icon__sm" onClick={() => showModal()}>
                        <BiSearch style={{ fontSize: "1.5rem" }} />
                    </div>
                    <Link to="/favorites">My Favorites({favorites.length})</Link>
                </div>
            </NavBar>
        </Section>
    )
}

export default Header
