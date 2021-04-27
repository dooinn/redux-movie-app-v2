
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
    ADD_MOVIE_TO_FAVORITE,


} from '../constants/movieConstants'

export const SearchMovieReducer = (state = { loading: false, movies: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_SEARCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case MOVIE_SEARCH_SUCCESS:
            return { ...state, loading: false, movies: action.payload.results, error: "" };
        case MOVIE_SEARCH_FAIL:
            return { ...state, loading: false, error: "Unable to fetch data" };
        default:
            return state
    }
}

export const NowPlayingMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_NOWPLAYING_REQUEST:
            return { ...state, loading: true, error: "" };
        case MOVIE_NOWPLAYING_SUCCESS:
            return { ...state, loading: false, data: action.payload.results, error: "" };
        case MOVIE_NOWPLAYING_FAIL:
            return { ...state, loading: false, error: "Unable to fetch data" };
        default:
            return state
    }
};

export const PopularMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_POPULAR_REQUEST:
            return { ...state, loading: true, error: "" };
        case MOVIE_POPULAR_SUCCESS:
            return { ...state, loading: false, data: action.payload.results, error: "" };
        case MOVIE_POPULAR_FAIL:
            return { ...state, loading: false, error: "Unable to fetch data" };
        default:
            return state
    }
};

export const TopRatedMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_TOPRATED_REQUEST:
            return { ...state, loading: true, error: "" };
        case MOVIE_TOPRATED_SUCCESS:
            return { ...state, loading: false, data: action.payload.results, error: "" };
        case MOVIE_TOPRATED_FAIL:
            return { ...state, loading: false, error: "Unable to fetch data" };
        default:
            return state
    }
};

export const UpcomingMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_UPCOMING_REQUEST:
            return { ...state, loading: true, error: "" };
        case MOVIE_UPCOMING_SUCCESS:
            return { ...state, loading: false, data: action.payload.results, error: "" };
        case MOVIE_UPCOMING_FAIL:
            return { ...state, loading: false, error: "Unable to fetch data" };
        default:
            return state
    }
};

export const LatestMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_LATEST_REQUEST:
            return { ...state, loading: true, error: "" };
        case MOVIE_LATEST_SUCCESS:
            return { ...state, loading: false, data: action.payload.results, error: "" };
        case MOVIE_LATEST_FAIL:
            return { ...state, loading: false, error: "Unable to fetch Data" };
        default:
            return state
    }
};

export const DetailMovieReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case MOVIE_DETAIL_REQUEST:
            return { loading: true };
        case MOVIE_DETAIL_SUCCESS:
            return { loading: false, movie: action.payload };
        case MOVIE_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

export const MovieVideoReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case MOVIE_VIDEO_REQUEST:
            return { loading: true };
        case MOVIE_VIDEO_SUCCESS:
            return { loading: false, video: action.payload };
        case MOVIE_VIDEO_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}


export const MovieCastsReducer = (state = { loading: true, people: [] }, action) => {
    switch (action.type) {
        case MOVIE_CASTS_REQUEST:
            return { loading: true };
        case MOVIE_CASTS_SUCCESS:
            return { loading: false, people: action.payload };
        case MOVIE_CASTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

export const SimilarMovieReducer = (state = { loading: false, data: [], error: "" }, action) => {
    switch (action.type) {
        case MOVIE_SIMILAR_REQUEST:
            return { ...state, loading: true, error: "" };
        case MOVIE_SIMILAR_SUCCESS:
            return { ...state, loading: false, data: action.payload.results, error: "" };
        case MOVIE_SIMILAR_FAIL:
            return { ...state, loading: false, error: "Unable to fetch Data" };
        default:
            return state
    }
};



export const FavoriteMovieReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_MOVIE_TO_FAVORITE: {
            const flag = state.some(item => item.id === action.item.id);
            console.log(flag)
            return !flag ? state.concat(action.item) : state.filter(item => item.id !== action.item.id);
        }
        default: {

            return state;

        }
    }
};




