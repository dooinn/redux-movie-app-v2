import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMovieDetail } from '../actions/movieActions'

const Detail = ({ match }) => {

    const dispatch = useDispatch();
    const movieDetail = useSelector(state => state.DetailMovie)
    let params = match.params;
    const { loading, error, movie } = movieDetail;

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(GetMovieDetail(params.id))
        }
        fetchAPI();
    }, [params.id])


    return (
        <div>
            <h1>Movie Detail</h1>

        </div>
    )
}

export default Detail
