import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetNowPlayingMovie, GetPopularMovie, GetTopRatedMovie, GetLatestMovie } from '../actions/movieActions'

const Home = () => {


    const dispatch = useDispatch();
    const nowPlayingMovie = useSelector(state => state.NowPlayingMovie);
    const popularMovie = useSelector(state => state.PopularMovie);
    const topRatedMovie = useSelector(state => state.TopRatedMovie);
    const latestMovie = useSelector(state => state.LatestMovie);

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetNowPlayingMovie())
            dispatch(GetPopularMovie())
            dispatch(GetTopRatedMovie())
            dispatch(GetLatestMovie())
        }
        fetchAPI();
    }, [])

    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <div>

            <div>
                {nowPlayingMovie.data.map(el => {
                    return (
                        <div key={el.id}>
                            {/* <img src={posterUrl + el.backdrop_path} /> */}



                        </div>


                    )
                })}
            </div>


        </div>
    )
}

export default Home
