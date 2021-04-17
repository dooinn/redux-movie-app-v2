import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetNowPlayingMovie, GetPopularMovie, GetTopRatedMovie, GetLatestMovie } from '../actions/movieActions'
import { Section } from '../styles/HomeStyle'

import { Link } from 'react-router-dom';


const Home = () => {


    const dispatch = useDispatch();
    const popularMovie = useSelector(state => state.PopularMovie);
    const topRatedMovie = useSelector(state => state.TopRatedMovie);
    const nowPlaying = useSelector(state => state.NowPlayingMovie);



    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetPopularMovie())
            dispatch(GetTopRatedMovie())
            dispatch(GetNowPlayingMovie())
        }
        fetchAPI();
    }, [])


    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <Section>
            <img style={{ height: "20rem", width: "100%" }} src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />

            <div className="movie__container">
                {popularMovie.data.map(movie => {
                    return (
                        <div className="movie__wrap" key={movie.id}>
                            <Link to={"/movie/" + movie.id}>
                                <img className="movie__poster" src={posterUrl + movie.poster_path} />
                            </Link>

                        </div>
                    )
                })}
            </div>
            <div className="movie__container">
                {topRatedMovie.data.map(movie => {
                    return (
                        <div className="movie__wrap" key={movie.id}>
                            <Link to={"/movie/" + movie.id}>
                                <img className="movie__poster" src={posterUrl + movie.poster_path} />
                            </Link>
                        </div>


                    )
                })}
            </div>





        </Section>



    )
}

export default Home
