import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetNowPlayingMovie } from '../actions/movieActions'

const Home = () => {

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const dispatch = useDispatch();
    const nowPlaying = useSelector(state => state.NowPlaying);

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetNowPlayingMovie())
        }
        fetchAPI();
    }, [])

    return (
        <div>
            <h1>MCCCC</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>
            <h1>MovieClone</h1>

            <div>
                {nowPlaying.data.map(el => {
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
