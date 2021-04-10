import Axios from 'axios';

import {
    MOVIE_NOWPLAYING_REQUEST,
    MOVIE_NOWPLAYING_SUCCESS,
    MOVIE_NOWPLAYING_FAIL,

    MOVIE_SEARCH_REQUEST,
    MOVIE_SEARCH_SUCCESS,
    MOVIE_SEARCH_FAIL
} from '../constants/movieConstants'

const API_KEY = '74af3496125e04547854e2abd22ebe6f';
const BASE_URL = 'https://api.themoviedb.org/3';



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