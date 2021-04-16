import Axios from 'axios';

import {
    PERSON_SEARCH_REQUEST,
    PERSON_SEARCH_SUCCESS,
    PERSON_SEARCH_FAIL,

    PERSON_DETAIL_REQUEST,
    PERSON_DETAIL_SUCCESS,
    PERSON_DETAIL_FAIL
} from '../constants/personConstants'

const API_KEY = '74af3496125e04547854e2abd22ebe6f';
const BASE_URL = 'https://api.themoviedb.org/3';