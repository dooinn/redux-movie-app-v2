import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetSearchMovie } from '../actions/movieActions'
import { Section, SearchResultContainer, NavBar } from '../styles/HeaderStyle'
import { GiPopcorn } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { LoadingBox } from './LoadingBox';

const Header = () => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [newSearch, setNewSearch] = useState([]);
    const showModal = () => setModalOpen(!modalOpen);
    const searchResults = useSelector(state => state.SearchMovie);
    const { loading, error, movies } = searchResults;

    const onChangeHandler = async (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        setNewSearch(await dispatch(GetSearchMovie(e.target.value)))

    }

    useEffect(() => {
        dispatch(GetSearchMovie())
    }, [])

    // const useLockBodyScroll = () => {
    //     useLayoutEffect(() => {
    //         const originalStyle = window.getComputedStyle(document.body).overflow;
    //         document.body.style.overflow = "hidden";
    //         return () => (document.body.style.overflow = originalStyle);
    //     }, []);
    // }


    // if (modalOpen) {
    //     return useLockBodyScroll();
    // }
    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <Section>
            <div className={modalOpen ? "modal active" : "modal"}  >
                <AiOutlineClose className="close__btn" onClick={() => showModal()} />
                <h1 style={{ fontSize: "3rem", color: "white", marginBottom: "2rem" }}>Searh Any Movies!</h1>
                <input
                    className="search__input"
                    placeholder="Type a movie title!"
                    value={query}
                    onChange={onChangeHandler}
                ></input>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <p></p>
                ) : (
                    <>
                        {query && (
                            <SearchResultContainer>
                                {movies.map((movie) => (
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
            </div>
            <NavBar>
                <div className="logo__container">
                    <GiPopcorn style={{ color: "white", fontSize: "2rem", marginRight: "0.5rem" }} />
                    <Link to="/">
                        <h1 style={{ fontSize: "1.5rem" }}>About Movie</h1>
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
                    <Link to="/favorites">My Favorites</Link>
                </div>
            </NavBar>
        </Section>
    )
}

export default Header
