import { combineReducers } from 'redux';
import {
    NowPlayingMovieReducer,
    SearchMovieReducer,
    PopularMovieReducer,
    TopRatedMovieReducer,
    LatestMovieReducer,
    DetailMovieReducer,
    MovieVideoReducer,
    MovieCastsReducer,
    SimilarMovieReducer
} from './movieReducer'

const RootReducer = combineReducers({
    NowPlayingMovie: NowPlayingMovieReducer,
    SearchMovie: SearchMovieReducer,
    PopularMovie: PopularMovieReducer,
    TopRatedMovie: TopRatedMovieReducer,
    LatestMovie: LatestMovieReducer,
    DetailMovie: DetailMovieReducer,
    MovieVideo: MovieVideoReducer,
    MovieCasts: MovieCastsReducer,
    SimilarMovie: SimilarMovieReducer

});

export default RootReducer;