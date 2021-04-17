import Axios from 'axios';

import {
    PERSON_SEARCH_REQUEST,
    PERSON_SEARCH_SUCCESS,
    PERSON_SEARCH_FAIL,

    PERSON_DETAIL_REQUEST,
    PERSON_DETAIL_SUCCESS,
    PERSON_DETAIL_FAIL,

    PERSON_CREDITS_REQUEST,
    PERSON_CREDITS_SUCCESS,
    PERSON_CREDITS_FAIL
} from '../constants/personConstants'

const API_KEY = '74af3496125e04547854e2abd22ebe6f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const GetPeopleSearch = (keyword) => async dispatch => {
    try {
        dispatch({ type: PERSON_SEARCH_REQUEST });
        const res = await Axios.get(`${BASE_URL}/search/person?api_key=${API_KEY}&language=en-US&page=1&query=${keyword}`)
        dispatch({ type: PERSON_SEARCH_SUCCESS, payload: res.data })
    } catch (e) {
        dispatch({ type: PERSON_SEARCH_FAIL })
    }
}

export const GetPersonDetail = (id) => async dispatch => {
    try {
        dispatch({ type: PERSON_DETAIL_REQUEST });
        const res = await Axios.get(`${BASE_URL}/person/${id}?api_key=${API_KEY}&language=en-US`);
        dispatch({ type: PERSON_DETAIL_SUCCESS, payload: res.data })
        console.log("personDetail", res.data)
    } catch (e) {
        dispatch({ type: PERSON_DETAIL_FAIL })
    }
}

export const GetPersonCredits = (personId) => async dispatch => {
    try {
        dispatch({ type: PERSON_CREDITS_REQUEST });
        const res = await Axios.get(`${BASE_URL}/person/${personId}/movie_credits?api_key=${API_KEY}&language=en-US`)
        dispatch({ type: PERSON_CREDITS_SUCCESS, payload: res.data })
        console.log("personCredits", res.data)
    } catch (e) {
        dispatch({ type: PERSON_CREDITS_FAIL })
    }
}