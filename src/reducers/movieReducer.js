
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
    MOVIE_DETAIL_FAIL,

} from '../constants/movieConstants'

export const SearchMovieReducer = (state = { loading: false, movies: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case MOVIE_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.results,
                error: "",
            };
        case MOVIE_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: "Unable to fetch data"
            };
        default:
            return state
    }
}

export const NowPlayingMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_NOWPLAYING_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case MOVIE_NOWPLAYING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                error: "",

            };
        case MOVIE_NOWPLAYING_FAIL:
            return {
                ...state,
                loading: false,
                error: "Unable to fetch data"
            };
        default:
            return state
    }
};


export const PopularMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_POPULAR_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case MOVIE_POPULAR_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                error: "",

            };
        case MOVIE_POPULAR_FAIL:
            return {
                ...state,
                loading: false,
                error: "Unable to fetch data"
            };
        default:
            return state
    }
};

export const TopRatedMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_TOPRATED_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case MOVIE_TOPRATED_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                error: "",

            };
        case MOVIE_TOPRATED_FAIL:
            return {
                ...state,
                loading: false,
                error: "Unable to fetch data"
            };
        default:
            return state
    }
};

export const LatestMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_LATEST_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case MOVIE_LATEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                error: "",

            };
        case MOVIE_LATEST_FAIL:
            return {
                ...state,
                loading: false,
                error: "Unable to fetch Data"
            };
        default:
            return state
    }
};

export const DetailMovieReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case MOVIE_DETAIL_REQUEST:
            return {
                loading: true,
            };
        case MOVIE_DETAIL_SUCCESS:
            return {
                loading: false,
                movie: action.payload,
            };
        case MOVIE_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
}
