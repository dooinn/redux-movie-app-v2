import Axios from 'axios';

import {
    MOVIE_SEARCH_REQUEST,
    MOVIE_SEARCH_SUCCESS,
    MOVIE_SEARCH_FAIL,

    MOVIE_NOWPLAYING_REQUEST,
    MOVIE_NOWPLAYING_SUCCESS,
    MOVIE_NOWPLAYING_FAIL,

    MOVIE_POPULAR_REQUEST,
    MOVIE_POPULAR_SUCCESS,
    MOVIE_POPULAR_FAIL,

    MOVIE_TOPRATED_REQUEST,
    MOVIE_TOPRATED_SUCCESS,
    MOVIE_TOPRATED_FAIL,

    MOVIE_LATEST_REQUEST,
    MOVIE_LATEST_SUCCESS,
    MOVIE_LATEST_FAIL,

    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_SUCCESS,
    MOVIE_DETAIL_FAIL

} from '../constants/movieConstants'

const API_KEY = '74af3496125e04547854e2abd22ebe6f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const GetSearchMovie = (keyword) => async dispatch => {
    try {
        dispatch({
            type: MOVIE_SEARCH_REQUEST
        });
        const res = await Axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${keyword}`)
        dispatch({
            type: MOVIE_SEARCH_SUCCESS,
            payload: res.data,

        })
        console.log('serch', res.data.results)

    } catch (e) {
        dispatch({
            type: MOVIE_SEARCH_FAIL,
        })
    }
}

export const GetNowPlayingMovie = () => async dispatch => {
    try {
        dispatch({
            type: MOVIE_NOWPLAYING_REQUEST
        });
        const res = await Axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        console.log(res.data)
        dispatch({
            type: MOVIE_NOWPLAYING_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: MOVIE_NOWPLAYING_FAIL,
        })
    }

}

export const GetPopularMovie = () => async dispatch => {
    try {
        dispatch({
            type: MOVIE_POPULAR_REQUEST
        });
        const res = await Axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        console.log(res.data)
        dispatch({
            type: MOVIE_POPULAR_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: MOVIE_POPULAR_FAIL,
        })
    }

}

export const GetTopRatedMovie = () => async dispatch => {
    try {
        dispatch({
            type: MOVIE_TOPRATED_REQUEST
        });
        const res = await Axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        console.log(res.data)
        dispatch({
            type: MOVIE_TOPRATED_SUCCESS,
            payload: res.data

        })
    } catch (e) {
        dispatch({
            type: MOVIE_TOPRATED_FAIL,
        })
    }

}

export const GetLatestMovie = () => async dispatch => {
    try {
        dispatch({
            type: MOVIE_LATEST_REQUEST
        });
        const res = await Axios.get(`${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US&page=1`)
        console.log(res.data)
        dispatch({
            type: MOVIE_LATEST_SUCCESS,
            payload: res.data

        })
    } catch (e) {
        dispatch({
            type: MOVIE_LATEST_FAIL,
        })
    }

}

export const GetMovieDetail = (id) => async dispatch => {
    try {
        dispatch({
            type: MOVIE_DETAIL_REQUEST
        });
        const res = await Axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
        dispatch({
            type: MOVIE_DETAIL_SUCCESS,
            payload: res.data
        })
        console.log('detail', res.data)
    } catch (e) {
        dispatch({
            type: MOVIE_DETAIL_FAIL,
        })
    }
}

