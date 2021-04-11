import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetSearchMovie } from '../actions/movieActions'
import { Section, NavBar } from '../styles/HeaderStyle'
import { GiPopcorn } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [newSearch, setNewSearch] = useState([]);
    const showModal = () => setModalOpen(!modalOpen);
    const searchResults = useSelector(state => state.SearchMovie);

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
                <input
                    className="search__input"
                    placeholder="Type a movie title!"
                    value={query}
                    onChange={onChangeHandler}
                ></input>
                {query && (
                    <div>
                        {searchResults.data.map((movie) => (
                            <div key={movie.id}>
                                <h1>{movie.title}</h1>
                            </div>
                        ))}

                    </div>
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
