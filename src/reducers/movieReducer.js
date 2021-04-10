import {
    MOVIE_NOWPLAYING_REQUEST,
    MOVIE_NOWPLAYING_SUCCESS,
    MOVIE_NOWPLAYING_FAIL,

    MOVIE_SEARCH_REQUEST,
    MOVIE_SEARCH_SUCCESS,
    MOVIE_SEARCH_FAIL
} from '../constants/movieConstants'


export const NowPlayingMovieReducer = (state = { loading: false, data: [], errorMsg: "" }, action) => {
    switch (action.type) {
        case MOVIE_NOWPLAYING_REQUEST:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case MOVIE_NOWPLAYING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: "",

            };
        case MOVIE_NOWPLAYING_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to fetch data"
            };
        default:
            return state
    }
};

export const SearchMovieReducer = (state = { loading: false, data: [], errorMsg: "" }, action) => {
    switch (action.type) {
        case MOVIE_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case MOVIE_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: "",
            };
        case MOVIE_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to fetch data"
            };
        default:
            return state
    }
}

