import { combineReducers } from 'redux';
import {
    NowPlayingMovieReducer,
    SearchMovieReducer,
    PopularMovieReducer,
    TopRatedMovieReducer,
    LatestMovieReducer,
    DetailMovieReducer
} from './movieReducer'

const RootReducer = combineReducers({
    NowPlayingMovie: NowPlayingMovieReducer,
    SearchMovie: SearchMovieReducer,
    PopularMovie: PopularMovieReducer,
    TopRatedMovie: TopRatedMovieReducer,
    LatestMovie: LatestMovieReducer,
    DetailMovie: DetailMovieReducer

});

export default RootReducer;