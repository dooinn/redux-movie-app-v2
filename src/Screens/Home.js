import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetNowPlayingMovie, GetPopularMovie, GetTopRatedMovie, GetLatestMovie } from '../actions/movieActions'
import { Section } from '../styles/HomeStyle';
import { Link } from 'react-router-dom';

const Home = () => {


    const dispatch = useDispatch();
    const nowPlayingMovie = useSelector(state => state.NowPlayingMovie);
    const popularMovie = useSelector(state => state.PopularMovie);
    const topRatedMovie = useSelector(state => state.TopRatedMovie);


    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetNowPlayingMovie())
            dispatch(GetPopularMovie())
            dispatch(GetTopRatedMovie())
        }
        fetchAPI();
    }, [])

    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <Section>

            <div className="movie__container">
                {nowPlayingMovie.data.map(movie => {
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
