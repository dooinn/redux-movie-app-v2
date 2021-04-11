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

} from '../constants/movieConstants'

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


export const PopularMovieReducer = (state = { loading: false, data: [], errorMsg: "" }, action) => {
    switch (action.type) {
        case MOVIE_POPULAR_REQUEST:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case MOVIE_POPULAR_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: "",

            };
        case MOVIE_POPULAR_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to fetch data"
            };
        default:
            return state
    }
};

export const TopRatedMovieReducer = (state = { loading: false, data: [], errorMsg: "" }, action) => {
    switch (action.type) {
        case MOVIE_TOPRATED_REQUEST:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case MOVIE_TOPRATED_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: "",

            };
        case MOVIE_TOPRATED_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to fetch data"
            };
        default:
            return state
    }
};

export const LatestMovieReducer = (state = { loading: false, data: [], errorMsg: "" }, action) => {
    switch (action.type) {
        case MOVIE_LATEST_REQUEST:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case MOVIE_LATEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: "",

            };
        case MOVIE_LATEST_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to fetch data"
            };
        default:
            return state
    }
};
