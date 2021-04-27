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

    MOVIE_UPCOMING_REQUEST,
    MOVIE_UPCOMING_SUCCESS,
    MOVIE_UPCOMING_FAIL,

    MOVIE_LATEST_REQUEST,
    MOVIE_LATEST_SUCCESS,
    MOVIE_LATEST_FAIL,

    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_SUCCESS,
    MOVIE_DETAIL_FAIL,

    MOVIE_VIDEO_REQUEST,
    MOVIE_VIDEO_SUCCESS,
    MOVIE_VIDEO_FAIL,

    MOVIE_CASTS_REQUEST,
    MOVIE_CASTS_SUCCESS,
    MOVIE_CASTS_FAIL,

    MOVIE_SIMILAR_REQUEST,
    MOVIE_SIMILAR_SUCCESS,
    MOVIE_SIMILAR_FAIL,

    ADD_MOVIE_TO_FAVORITE

} from '../constants/movieConstants'

const API_KEY = '74af3496125e04547854e2abd22ebe6f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const GetSearchMovie = (keyword) => async dispatch => {
    try {
        dispatch({ type: MOVIE_SEARCH_REQUEST });
        const res = await Axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${keyword}`)
        dispatch({ type: MOVIE_SEARCH_SUCCESS, payload: res.data })
    } catch (e) {
        dispatch({ type: MOVIE_SEARCH_FAIL })
    }
}

export const GetNowPlayingMovie = () => async dispatch => {
    try {
        dispatch({ type: MOVIE_NOWPLAYING_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        dispatch({ type: MOVIE_NOWPLAYING_SUCCESS, payload: res.data })
    } catch (e) {
        dispatch({ type: MOVIE_NOWPLAYING_FAIL })
    }
}

export const GetPopularMovie = () => async dispatch => {
    try {
        dispatch({ type: MOVIE_POPULAR_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        dispatch({ type: MOVIE_POPULAR_SUCCESS, payload: res.data })
    } catch (e) {
        dispatch({ type: MOVIE_POPULAR_FAIL })
    }

}

export const GetTopRatedMovie = () => async dispatch => {
    try {
        dispatch({ type: MOVIE_TOPRATED_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        dispatch({ type: MOVIE_TOPRATED_SUCCESS, payload: res.data })
    } catch (e) {
        dispatch({ type: MOVIE_TOPRATED_FAIL })
    }

}

export const GetUpcomingMovie = () => async dispatch => {
    try {
        dispatch({ type: MOVIE_UPCOMING_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        dispatch({ type: MOVIE_UPCOMING_SUCCESS, payload: res.data })
        console.log('upcoming', res.data)
    } catch (e) {
        dispatch({ type: MOVIE_UPCOMING_FAIL })
    }

}

export const GetLatestMovie = () => async dispatch => {
    try {
        dispatch({ type: MOVIE_LATEST_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US&page=1`)
        dispatch({ type: MOVIE_LATEST_SUCCESS, payload: res.data })
    } catch (e) {
        dispatch({ type: MOVIE_LATEST_FAIL })
    }

}

export const GetMovieDetail = (id) => async dispatch => {
    try {
        dispatch({ type: MOVIE_DETAIL_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
        dispatch({ type: MOVIE_DETAIL_SUCCESS, payload: res.data })
    } catch (e) {
        dispatch({ type: MOVIE_DETAIL_FAIL })
    }
}

export const GetMovieVideo = (id) => async dispatch => {
    try {
        dispatch({ type: MOVIE_VIDEO_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
        dispatch({ type: MOVIE_VIDEO_SUCCESS, payload: res.data.results[0] })
    } catch (e) {
        dispatch({ type: MOVIE_VIDEO_FAIL })
    }
}


export const GetMovieCasts = (id) => async dispatch => {
    try {
        dispatch({ type: MOVIE_CASTS_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        dispatch({ type: MOVIE_CASTS_SUCCESS, payload: res.data.cast })

    } catch (e) {
        dispatch({ type: MOVIE_CASTS_FAIL })
    }
}

export const GetSimilarMovie = (id) => async dispatch => {
    try {
        dispatch({ type: MOVIE_SIMILAR_REQUEST });
        const res = await Axios.get(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        dispatch({ type: MOVIE_SIMILAR_SUCCESS, payload: res.data })

    } catch (e) {
        dispatch({ type: MOVIE_SIMILAR_FAIL })
    }

}



export const AddToFavorite = (item) => (
    { type: ADD_MOVIE_TO_FAVORITE, item });


